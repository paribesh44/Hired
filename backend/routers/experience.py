from fastapi import APIRouter, Depends, HTTPException, status

from schemas import experience_schema

from models import experience, user
from core import database, oauth2
from sqlalchemy.orm import Session


router = APIRouter(
    tags=['Experience'],
    prefix="/experience"
)


@router.post("/create", status_code=status.HTTP_201_CREATED)
def createExperienceProfile(request: experience_schema.Experience, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    new_experience = experience.Experience(
        workPlace=request.workPlace, yearsOfExperience=request.yearsOfExperience, jobTitle=request.jobTitle,
        jobStartDate=request.jobStartDate,  jobEndDate=request.jobEndDate,  field=request.field, seeker_id=current_user.seeker[0].id)
    db.add(new_experience)
    db.commit()
    db.refresh(new_experience)
    return new_experience


@router.put('/update/{id}', status_code=status.HTTP_202_ACCEPTED)
def update(id: int, request: experience_schema.Experience, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    update_experience = db.query(experience.Experience).filter(
        experience.Experience.id == id)

    if not update_experience.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Job seeker with id {id} expeience not found.")

    update_experience.update({"workPlace": request.workPlace, "yearsOfExperience": request.yearsOfExperience, "jobTitle": request.jobTitle,
                              "jobStartDate": request.jobStartDate,  "jobEndDate": request.jobEndDate,  "field": request.field, "seeker_id": current_user.seeker[0].id})
    db.commit()
    return 'updated'


# , response_model=List[schemas.ShowExperience]
@router.get('/get_all')
def all(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    experiences = db.query(experience.Experience).all()
    return experiences


# , response_model=schemas.Experience
@router.get('/get_id/{id}')
def show(id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    hired_experience = db.query(experience.Experience).filter(
        experience.Experience.id == id).first()
    if not hired_experience:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Job seeker's experience with the id {id} is not available")
    return {"name": hired_experience.workPlace, "user": hired_experience.seeker.user.email, "seeker": hired_experience.seeker.name}
