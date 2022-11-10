from fastapi import APIRouter, Depends, HTTPException, status

from schemas import mcq_schema

from models import mcq, user, user_assesment
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
@router.get('/get_mcq/{target_field_id}')
def show(target_field_id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    hired_MCQ = db.query(mcq.MCQ).filter(
        mcq.MCQ.target_field_id == target_field_id).all()
    if not hired_MCQ:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Job seeker's MCQ with the target_field_id {target_field_id} is not available")
    
    hired_user_assesment = db.query(user_assesment.UserAssesment).filter(user_assesment.UserAssesment.seeker_id==current_user.seeker[0].id, user_assesment.UserAssesment.target_field_id==target_field_id).all()
   
    # convert answer into dictionary so that we can operate in ViewAssesment    
    answer_dict = []

    for i in range(len(hired_MCQ)):
        # for j in range(len(hired_MCQ[i].answers)):
        hired_dict = {"id": i, "question": hired_MCQ[i].question,"options": []}
        for j in range(len(hired_MCQ[i].answers)):
            hired_dict["options"].append({"id": j, "text":hired_MCQ[i].answers[j], "isCorrect": True if hired_MCQ[i].correct_answer == hired_MCQ[i].answers[j] else False})

            if hired_user_assesment[0].chosen_answers[i] == hired_MCQ[i].answers[j]:
                hired_dict["chosen_answer"] = j
        
        answer_dict.append(hired_dict)
    import json
    print(json.dumps(answer_dict))

    # return {"mcq": hired_MCQ, "target_field_name": hired_MCQ.target_field.name}
    return {"mcq": hired_MCQ, "answer_dict": answer_dict}
