from fastapi import APIRouter, Depends, HTTPException, status

from schemas import education_schema

from models import education, user
from core import database, oauth2
from sqlalchemy.orm import Session


router = APIRouter(
    tags=['Education'],
    prefix="/education"
)


@router.post("/create", status_code=status.HTTP_201_CREATED)
def createEducationProfile(schema: education_schema.Education, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    new_education = education.Education(
        qualification=schema.qualification, graduating_institution=schema.graduating_institution, graduating_year=schema.graduating_year,
        major=schema.major,  cgpa=schema.cgpa, seeker_id=current_user.seeker[0].id)
    db.add(new_education)
    db.commit()
    db.refresh(new_education)
    return new_education


@router.put('/update/{id}', status_code=status.HTTP_202_ACCEPTED)
def update(id: int, schema: education_schema.Education, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    update_education = db.query(education.Education).filter(
        education.Education.id == id)

    if not update_education.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Job seeker with id {id} education not found.")

    update_education.update({"qualification": schema.qualification, "graduating_institution": schema.graduating_institution,
                             "graduating_year": schema.graduating_year,  "major": schema.major,  "cgpa": schema.cgpa, "seeker_id": current_user.seeker[0].id})
    db.commit()
    return 'updated'


# , response_model=List[schemas.ShowExperience]
@router.get('/get_all')
def all(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    educations = db.query(education.Education).all()
    return educations


# , response_model=schemas.Education
@router.get('/get_id/{id}')
def show(id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    hired_education = db.query(education.Education).filter(
        education.Education.id == id).first()
    if not hired_education:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Job seeker's education with the id {id} is not available")
    return {"name": hired_education.qualification, "user": hired_education.seeker.user.email, "seeker": hired_education.seeker.name}
