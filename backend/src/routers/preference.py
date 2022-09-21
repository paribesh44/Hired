from fastapi import APIRouter, Depends, HTTPException, status

from ..schemas import preference_schema

from ..models import preference, user
from .. import database, oauth2
from sqlalchemy.orm import Session


router = APIRouter(
    tags=['Preference'],
    prefix="/preference"
)


@router.post("/create", status_code=status.HTTP_201_CREATED)
def createPreferenceProfile(request: preference_schema.Preference, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    new_preference = preference.Preference(
        expected_min_salary=request.expected_min_salary, expected_max_salary=request.expected_max_salary, preferred_location=request.preferred_location, interested_jobs=request.interested_jobs,
        preferred_job_skills=request.preferred_job_skills,  remote_onsite=request.remote_onsite,  available_hours=request.available_hours, seeker_id=current_user.seeker[0].id)
    db.add(new_preference)
    db.commit()
    db.refresh(new_preference)
    return new_preference


@router.put('/update/{id}', status_code=status.HTTP_202_ACCEPTED)
def update(id: int, request: preference_schema.Preference, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    update_preference = db.query(preference.Preference).filter(
        preference.Preference.id == id)

    if not update_preference.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Job seeker with id {id} expeience not found.")

    update_preference.update({"expected_min_salary": request.expected_min_salary, "expected_max_salary": request.expected_max_salary, "preferred_location": request.preferred_location, "interested_jobs": request.interested_jobs,
                              "preferred_job_skills": request.preferred_job_skills,  "remote_onsite": request.remote_onsite,  "available_hours": request.available_hours, "seeker_id": current_user.seeker[0].id})
    db.commit()
    return 'updated'


# , response_model=List[schemas.Showpreference]
@router.get('/get_all')
def all(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    preferences = db.query(preference.Preference).all()
    return preferences


# , response_model=schemas.preference
@router.get('/get_id/{id}')
def show(id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    hired_preference = db.query(preference.Preference).filter(
        preference.Preference.id == id).first()
    if not hired_preference:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Job seeker's preference with the id {id} is not available")
    return {"preference": hired_preference, "user": hired_preference.seeker.user.email, "seeker": hired_preference.seeker.name}
