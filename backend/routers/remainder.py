from fastapi import APIRouter, Depends, HTTPException, status, Request

from schemas import remainder_schema

from models import user, remainder
from core import database, oauth2
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from sqlalchemy import desc
from typing import List


router = APIRouter(
    tags=['Remainder'],
    prefix="/remainder"
)

@router.post("/create_remainder", status_code=status.HTTP_201_CREATED)
def createRemainder(data: remainder_schema.Remainder, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):

    new_remainder = remainder.Remainder(name=data.name, note=data.note, meet_link=data.meet_link, 
    meeting_date=data.meeting_date, meeting_time=data.meeting_time, job_post_id=1, seeker_id=current_user.seeker[0].id)
    db.add(new_remainder)
    db.commit()
    db.refresh(new_remainder)

    return {"msg": "success", "remainder": new_remainder}