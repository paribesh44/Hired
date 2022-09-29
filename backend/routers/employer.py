import shutil
from fastapi import APIRouter, Depends, HTTPException, status

from schemas import employer_schema

from models import employer, user
from core import database, oauth2
from forms import employerForm
from sqlalchemy.orm import Session


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
