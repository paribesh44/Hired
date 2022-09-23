from fastapi import APIRouter, Depends, HTTPException, status

from schemas import user_assesment_schema

from models import user_assesment, user
from core import database, oauth2
from sqlalchemy.orm import Session


router = APIRouter(
    tags=['UserAssesment'],
    prefix="/userAssesment"
)


@router.post("/create", status_code=status.HTTP_201_CREATED)
def createUserAssesmentProfile(schema:user_assesment_schema.UserAssesment, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    new_UserAssesment = user_assesment.UserAssesment(score= schema.score, visibility= schema.visibility, accessed_date= schema.accessed_date, target_field_id=1, seeker_id=current_user.seeker[0].id)
    db.add(new_UserAssesment)
    db.commit()
    db.refresh(new_UserAssesment)
    return new_UserAssesment


@router.put('/update/{id}', status_code=status.HTTP_202_ACCEPTED)
def update(id: int, schema:user_assesment_schema.UserAssesment, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    update_UserAssesment = db.query(user_assesment.UserAssesment).filter(
        user_assesment.UserAssesment.id == id)

    if not update_UserAssesment.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Company with id {id} not found")

    update_UserAssesment.update({"score": schema.score, "visibility": schema.visibility, "accessed_date": schema.accessed_date, "target_field_id": 1, "seeker_id":current_user.seeker[0].id})
    db.commit()
    return 'updated'


# , response_model=List[schemas.ShowUserAssesment]
@router.get('/get_all')
def all(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    UserAssesments = db.query(user_assesment.UserAssesment).all()
    return UserAssesments


# , response_model=schemas.UserAssesment
@router.get('/get_id/{id}')
def show(id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    hired_UserAssesment = db.query(user_assesment.UserAssesment).filter(
        user_assesment.UserAssesment.id == id).first()
    if not hired_UserAssesment:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Company with the id {id} is not available")
    return {"name": hired_UserAssesment, "user": hired_UserAssesment}
    # return hired_UserAssesment
