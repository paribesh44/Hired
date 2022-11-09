from fastapi import APIRouter, Depends, HTTPException, status

from schemas import mcq_schema

from models import mcq
from sqlalchemy.orm import Session
from core import database, oauth2


router = APIRouter(
    tags=['MCQ'],
    prefix="/mcq"
)


# , response_model=mcq_schema.MCQShow
@router.post("/create", status_code=status.HTTP_201_CREATED)
def createMCQ(schema: mcq_schema.MCQ, db: Session = Depends(database.get_db)):
    new_MCQ = mcq.MCQ(question=schema.question, answers=schema.answers, correct_answer=schema.correct_answer, target_field_id=2)
    db.add(new_MCQ)
    db.commit()
    db.refresh(new_MCQ)
    return new_MCQ


@router.put('/update/{id}', status_code=status.HTTP_202_ACCEPTED)
def update(id: int, schema: mcq_schema.MCQ, db: Session = Depends(database.get_db)):
    update_MCQ = db.query(mcq.MCQ).filter(
        mcq.MCQ.id == id)

    if not update_MCQ.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Job seeker with id {id} MCQ not found.")

    update_MCQ.update({"question":schema.question, "answers":schema.answers , "correct_answer":schema.correct_answer})
    db.commit()
    return 'updated'


@router.get('/get_all')
def all(db: Session = Depends(database.get_db)):
    MCQs = db.query(mcq.MCQ).all()
    return MCQs

# , response_model=mcq_schema.MCQShow
@router.get('/get_id/{target_field_id}')
def show(target_field_id: int, db: Session = Depends(database.get_db)):
    hired_MCQ = db.query(mcq.MCQ).filter(
        mcq.MCQ.target_field_id == target_field_id).all()
    if not hired_MCQ:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Job seeker's MCQ with the target_field_id {target_field_id} is not available")
    # return {"mcq": hired_MCQ, "target_field_name": hired_MCQ.target_field.name}
    return hired_MCQ
