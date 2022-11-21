from fastapi import APIRouter, Depends, HTTPException, status, Request

from schemas import remainder_schema, job_post_schema, apply_schema

from models import user, remainder, job_post, apply
from core import database, oauth2
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from sqlalchemy import desc
from typing import List
from datetime import timedelta


router = APIRouter(
    tags=['Remainder'],
    prefix="/remainder"
)

@router.post("/create_remainder", status_code=status.HTTP_201_CREATED)
def createRemainder(data: remainder_schema.PostRemainder, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    meeting_date = data.meeting_date.date() + timedelta(days=1)
    
    new_remainder = remainder.Remainder(name=data.name, note=data.note, meet_link=data.meet_link, meeting_date=meeting_date,
    meeting_time=data.meeting_time,seeker_name= data.seeker_name, job_post_name=data.job_post_name, job_post_id=data.job_post_id, 
    seeker_id=data.seeker_id, employer_id=current_user.employer[0].id)
    db.add(new_remainder)
    db.commit()
    db.refresh(new_remainder)

    return {"msg": "success"}

@router.put("/update_publish_status_remainder/{remainder_id}")
def updatePublish(remainder_id: int, data: remainder_schema.ChangePublishRemainder, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    # # print(data.visibility)
    update_publish_status = db.query(remainder.Remainder).filter(
        remainder.Remainder.id == remainder_id).first()

    if not update_publish_status:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"User Assesment with id not found")

    update_publish_status.publish_remainder = data.publish
    print(data.publish)
    db.commit()
    db.refresh(update_publish_status)

    return {"msg": "success"}

@router.get("/get_remainder/{job_post_id}")
def getRemainder(job_post_id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    print(job_post_id)
    hired_remainder = db.query(remainder.Remainder).filter(remainder.Remainder.job_post_id==job_post_id, remainder.Remainder.seeker_id==current_user.seeker[0].id,
     remainder.Remainder.publish_remainder==True).first()

    return hired_remainder

@router.get("/show_all_job_post_company")
def showall(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    print(current_user.employer[0].id)
    hired_job_post = db.query(job_post.JobPost).filter(
        job_post.JobPost.employer_id == current_user.employer[0].id).all()

    return hired_job_post

@router.get("/get_seeker_applied_job/{job_post_id}", response_model=List[apply_schema.RemainderApplySeeker])
def showSeekerAppliedJob(job_post_id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    hired_apply = db.query(apply.Apply).filter(
        apply.Apply.job_post_id == job_post_id).all()

    return hired_apply

@router.get("/get_remainder_company")
def getRemainderCompany(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    hired_remainder = db.query(remainder.Remainder).filter(remainder.Remainder.employer_id==current_user.employer[0].id).order_by(remainder.Remainder.id.desc()).all()

    return hired_remainder

@router.delete("/delete_remainder/{remainder_id}")
def deleteRemdainder(remainder_id: int, db:Session = Depends(database.get_db), current_use: user.User = Depends(oauth2.get_user_companies)):
    db.query(remainder.Remainder).filter(remainder.Remainder.id==remainder_id).delete(synchronize_session=False)

    db.commit()
    return {"msg": "success"}

@router.get("/get_number_of_remainder")
def getNumberOfRemainder(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    hired_remainder = db.query(remainder.Remainder).filter(remainder.Remainder.employer_id==current_user.employer[0].id).all()

    no_of_remainder = len(hired_remainder)

    return no_of_remainder