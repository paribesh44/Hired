import shutil
from fastapi import APIRouter, Depends, HTTPException, status

from schemas import employer_schema

from models import employer, user, job_post, apply
from core import database, oauth2
from forms import employerForm
from sqlalchemy.orm import Session
from sqlalchemy import and_, or_


router = APIRouter(
    tags=['Employer'],
    prefix="/employer"
)


@router.post("/create", status_code=status.HTTP_201_CREATED)
def createEmployerProfile(form: employerForm.PostEmployerForm = Depends(), db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    target_market_string = form.target_market
    target_market_string_remove_blank = target_market_string.replace(" ", "")
    target_market = target_market_string_remove_blank.strip().split(',')

    logo_location = None

    # upload logo
    try:
        logo_location = f"static/logos/{form.logo.filename}"
        with open(logo_location, "wb") as buffer:
            shutil.copyfileobj(form.logo.file, buffer)
    except:
        pass

    new_employer = employer.Employer(
        companyName=form.company_name, location=form.location, contactNumber=form.contact_number,
        description=form.description,  website=form.website, established_date=form.established_date,
        targetMarket=target_market,  vision=form.vision,  contactEmail=form.contact_email,
        contactPerson=form.contact_person,  logo=logo_location, user_id=current_user.id)
    db.add(new_employer)
    db.commit()
    db.refresh(new_employer)
    return {"msg": "success"}


@router.put('/update', status_code=status.HTTP_202_ACCEPTED)
def update(form: employerForm.UpdateEmployerForm = Depends(), db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):

    update_employer = db.query(employer.Employer).filter(
        employer.Employer.id == current_user.employer[0].id)

    logo_location = None

    # if logo is updated
    if(form.logo == None):
        # if any error then the logo will be same.
        # upload logo
        try:
            logo_location = f"static/logos/{form.logo_update.filename}"
            # if new logo and old logo are not same then only new logo will be upload.
            if update_employer.first().logo != logo_location:
                with open(logo_location, "wb") as buffer:
                    shutil.copyfileobj(form.logo_update.file, buffer)
            # if new logo and old logo are same then old logo will remain as it iss
            else:
                logo_location = update_employer.first().logo
        except:
            logo_location = update_employer.first().logo
    # if logo is not updated
    else:
        logo_location = form.logo

    print(logo_location)

    # target market comes as an common list. e.g. ["ai,web development,mobile development"]
    # so we need to change it to list like ["ai", "web development", "mobile development"]
    target_market_string = form.target_market[0]
    target_market = target_market_string.strip().split(',')

    update_employer.update({"companyName": form.company_name, "location": form.location, "contactNumber": form.contact_number,
                           "description": form.description, "website": form.website, "targetMarket": target_market,
                            "vision": form.vision,  "contactEmail": form.contact_email, "contactPerson": form.contact_person,
                             "logo": logo_location, "established_date": form.established_date, "user_id": current_user.id})
    db.commit()
    return {"msg": "success"}



# , response_model=List[schemas.ShowEmployer]
@router.get('/get_all')
def all(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    employers = db.query(employer.Employer).all()
    return employers


# , response_model=schemas.Employer
@router.get('/get_id/{id}')
def show(id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    hired_employer = db.query(employer.Employer).filter(
        employer.Employer.id == id).first()
    if not hired_employer:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Company with the id {id} is not available")
    return {"name": hired_employer.companyName, "user": hired_employer.user}
    # return hired_employer


@router.get("/overview")
def overView(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    # total no of job posted by current employer/company
    hired_job_posted_by_current_user = db.query(job_post.JobPost).filter(job_post.JobPost.employer_id==current_user.employer[0].id).all()
    job_posted = len(hired_job_posted_by_current_user)

    # date where current employer posted jobs.
    hired_last_posted_date = db.query(job_post.JobPost).filter(job_post.JobPost.employer_id==current_user.employer[0].id).order_by(job_post.JobPost.id.desc()).all()
    last_posted_date = hired_last_posted_date[0].posted_date.date()

    # total no of applicants in the job posts posted by this current employer
    job_post_ids = []
    for i in range(len(hired_job_posted_by_current_user)):
        job_post_ids.append(hired_job_posted_by_current_user[i].id)

    hired_no_of_applicants = db.query(apply.Apply).filter(or_(
        *[apply.Apply.job_post_id == job_post_id for job_post_id in job_post_ids]
    )).all()
    no_of_applicants = len(hired_no_of_applicants)

    if(job_post_ids == []):
        no_of_applicants = 0

    # hired employee
    # this means those employee who have been selected
    hired_selected_employee = db.query(apply.Apply).filter(apply.Apply.status=="selected").filter(or_(
        *[apply.Apply.job_post_id == job_post_id for job_post_id in job_post_ids]
    )).all()
    selected_employee = len(hired_selected_employee)
    
    if(job_post_ids == []):
        selected_employee = 0

    # candidates to interview
    hired_candidates_to_interview = db.query(apply.Apply).filter(apply.Apply.status=="interview").filter(or_(
        *[apply.Apply.job_post_id == job_post_id for job_post_id in job_post_ids]
    )).all()
    candidates_to_interview = len(hired_candidates_to_interview)
    
    if(job_post_ids == []):
        candidates_to_interview = 0


    return {"job_posted":job_posted, "last_posted_date":last_posted_date, "no_of_applicants":no_of_applicants, 
    "selected_employee":selected_employee, "candidates_to_interview":candidates_to_interview}

@router.get("/current_user_has_profile")
async def check(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_current_user)):
    print(current_user.id)
    hired_seeker = db.query(employer.Employer).filter(
        employer.Employer.user_id == current_user.id).first()

    if(hired_seeker == None):
        msg = "no profile"
    else:
        msg = "has profile"

    return {"msg": msg}

@router.get("/get_employer")
async def getEmployee(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    hired_employer = db.query(employer.Employer).filter(employer.Employer.id==current_user.employer[0].id).first()

    return hired_employer