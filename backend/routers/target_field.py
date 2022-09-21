from fastapi import APIRouter, Depends, HTTPException, status

from schemas import target_field_schema

from models import target_field
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
def all(db: Session = Depends(database.get_db)):
    TargetFields = db.query(target_field.TargetField).all()
    return TargetFields


@router.get('/get_id/{id}')
def show(id: int, db: Session = Depends(database.get_db)):
    hired_TargetField = db.query(target_field.TargetField).filter(
        target_field.TargetField.id == id).first()
    if not hired_TargetField:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Job seeker's TargetField with the id {id} is not available")
    return {"name": hired_TargetField.qualification, "user": hired_TargetField.seeker.user.email, "seeker": hired_TargetField.seeker.name}
