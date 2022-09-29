from fastapi import APIRouter, Depends, HTTPException, status

from schemas import mcq_schema

from models import mcq
from sqlalchemy.orm import Session
from core import database, oauth2


router = APIRouter(
    tags=['MCQ'],
    prefix="/mcq"
)


@router.post("/create", status_code=status.HTTP_201_CREATED)
def createMCQ(schema: mcq_schema.MCQ, db: Session = Depends(database.get_db)):
    new_MCQ = mcq.MCQ(name=schema.name, languages=schema.languages)
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

    update_MCQ.update({"name":schema.name, "languages":schema.languages})
    db.commit()
    return 'updated'


@router.get('/get_all')
def all(db: Session = Depends(database.get_db)):
    MCQs = db.query(mcq.MCQ).all()
    return MCQs


@router.get('/get_id/{id}')
def show(id: int, db: Session = Depends(database.get_db)):
    hired_MCQ = db.query(mcq.MCQ).filter(
        mcq.MCQ.id == id).first()
    if not hired_MCQ:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Job seeker's MCQ with the id {id} is not available")
    return {"name": hired_MCQ.qualification, "user": hired_MCQ.seeker.user.email, "seeker": hired_MCQ.seeker.name}
