from fastapi import APIRouter, Depends, HTTPException, status

from schemas import preference_schema

from models import preference, user
from core import database, oauth2
from sqlalchemy.orm import Session


router = APIRouter(
    tags=['Preference'],
    prefix="/preference"
)


@router.post("/create", status_code=status.HTTP_201_CREATED)
def createPreferenceProfile(data: preference_schema.PostPreference, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    interested_jobs_string = data.interested_jobs
    interested_jobs_string_remove_blank = interested_jobs_string.replace(" ", "")
    interested_jobs = interested_jobs_string_remove_blank.strip().split(',')

    preferred_job_skills_string = data.preferred_job_skills
    preferred_job_skills_string_remove_blank = preferred_job_skills_string.replace(" ", "")
    preferred_job_skills = preferred_job_skills_string_remove_blank.strip().split(',')

    preferred_location_string = data.preferred_location
    preferred_location_string_remove_blank = preferred_location_string.replace(" ", "")
    preferred_location = preferred_location_string_remove_blank.strip().split(',')

    new_preference = preference.Preference(
        expected_min_salary=data.expected_min_salary, expected_max_salary=data.expected_max_salary, preferred_location=preferred_location, interested_jobs=interested_jobs,
        preferred_job_skills=preferred_job_skills, job_type= data.job_type, remote_onsite=data.remote_onsite, seeker_id=current_user.seeker[0].id)
    db.add(new_preference)
    db.commit()
    db.refresh(new_preference)
    return {"msg": "success"}


@router.put('/update/{preference_id}', status_code=status.HTTP_202_ACCEPTED)
def update(preference_id: int, data: preference_schema.UpdatePreference, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):

    update_preference = db.query(preference.Preference).filter(
        preference.Preference.id == preference_id)

    update_preference.update({"expected_min_salary": data.expected_min_salary, "expected_max_salary": data.expected_max_salary, "preferred_location": data.preferred_location, "interested_jobs": data.interested_jobs,
                              "preferred_job_skills": data.preferred_job_skills,  "remote_onsite": data.remote_onsite, "job_type": data.job_type, "seeker_id": current_user.seeker[0].id})
    db.commit()
    return {"msg": "success"}


# , response_model=List[schemas.Showpreference]
@router.get('/get_all')
def all(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    preferences = db.query(preference.Preference).all()
    return preferences

@router.get("/preference_infomation/{seeker_id}")
def get_preference(seeker_id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    hired_preference = db.query(preference.Preference).filter(preference.Preference.seeker_id==seeker_id).first()

    return hired_preference


# , response_model=schemas.preference
@router.get('/get_id/{id}')
def show(id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    hired_preference = db.query(preference.Preference).filter(
        preference.Preference.id == id).first()
    if not hired_preference:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Job seeker's preference with the id {id} is not available")
    return {"preference": hired_preference, "user": hired_preference.seeker.user.email, "seeker": hired_preference.seeker.name}
