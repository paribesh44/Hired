from fastapi import APIRouter, Depends, HTTPException, status

from schemas import target_field_schema

from models import target_field, user
from core import database, oauth2
from sqlalchemy.orm import Session


router = APIRouter(
    tags=['TargetField'],
    prefix="/targetfield"
)


@router.post("/create", status_code=status.HTTP_201_CREATED)
def createTargetField(schema: target_field_schema.TargetField, db: Session = Depends(database.get_db)):
    new_targetField = target_field.TargetField(name=schema.name, languages=schema.languages)
    db.add(new_targetField)
    db.commit()
    db.refresh(new_targetField)
    return new_targetField


@router.put('/update/{id}', status_code=status.HTTP_202_ACCEPTED)
def update(id: int, schema: target_field_schema.TargetField, db: Session = Depends(database.get_db)):
    update_TargetField = db.query(target_field.TargetField).filter(
        target_field.TargetField.id == id)

    if not update_TargetField.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Job seeker with id {id} TargetField not found.")

    update_TargetField.update({"name":schema.name, "languages":schema.languages})
    db.commit()
    return 'updated'


@router.get('/get_all')
def all(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    TargetFields = db.query(target_field.TargetField).all()
    return TargetFields

# 
@router.get('/get_id/{id}', response_model=target_field_schema.TargetFieldShow)
def show(id: int, db: Session = Depends(database.get_db)):
    hired_TargetField = db.query(target_field.TargetField).filter(
        target_field.TargetField.id == id).first()

    if not hired_TargetField:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Job seeker's TargetField with the id {id} is not available")
    # return {"Target Field": hired_TargetField}
    # print(hired_TargetField.id)
    return hired_TargetField

# frontend
# backend
# Mobile development
# ml engineer
# dl engineer
# data scientist

@router.get("/recommend_target_field")
def recommend_target_field(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    target_field_id = 1
    # get all the element in the list to lowercase
    seeker_interested_jobs = list(map(str.lower, current_user.seeker[0].preference[0].interested_jobs))

    if "frontend" in seeker_interested_jobs:
        target_field_id = 1
    elif "backend" in seeker_interested_jobs:
        target_field_id = 2
    elif "mobile development" in seeker_interested_jobs:
        target_field_id = 3
    elif "ml engineer" in seeker_interested_jobs:
        target_field_id = 4
    elif "dl engineer" in seeker_interested_jobs:
        target_field_id = 5
    elif "data scientist" in seeker_interested_jobs:
        target_field_id = 6

    hired_TargetField = db.query(target_field.TargetField).filter(
        target_field.TargetField.id == target_field_id).first()
    
    return hired_TargetField
