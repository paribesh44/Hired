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
def createEmployerProfile(form: employerForm.EmployerForm = Depends(), db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
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
        description=form.description,  requiredRoles=form.required_roles,  website=form.website,
        targetMarket=form.target_market,  vision=form.vision,  contactEmail=form.contact_email,
        contactPerson=form.contact_person,  logo=logo_location, user_id=current_user.id)
    db.add(new_employer)
    db.commit()
    db.refresh(new_employer)
    return new_employer


@router.put('/update/{id}', status_code=status.HTTP_202_ACCEPTED)
def update(id: int, form: employerForm.EmployerForm = Depends(), db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    update_employer = db.query(employer.Employer).filter(
        employer.Employer.id == id)

    if not update_employer.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Company with id {id} not found")

    logo_location = None

    # if any error then the logo will be same.
    # upload logo
    try:
        logo_location = f"static/logos/{form.logo.filename}"
        # if new logo and old logo are not same then only new logo will be upload.
        if update_employer.first().logo != logo_location:
            with open(logo_location, "wb") as buffer:
                shutil.copyfileobj(form.logo.file, buffer)
        # if new logo and old logo are same then old logo will remain as it iss
        else:
            logo_location = update_employer.first().logo
    except:
        logo_location = update_employer.first().logo

    update_employer.update({"companyName": form.companyName, "location": form.location, "contactNumber": form.contactNumber,
                           "description": form.description,  "requiredRoles": form.requiredRoles,  "website": form.website,
                            "targetMarket": form.targetMarket,  "vision": form.vision,  "contactEmail": form.contactEmail,
                            "contactPerson": form.contactPerson,  "logo": logo_location, "user_id": current_user.id})
    db.commit()
    return 'updated'


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
