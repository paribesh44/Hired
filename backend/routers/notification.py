import shutil
from fastapi import APIRouter, Depends, HTTPException, status

from models import apply, user, seeker, job_post
from core import database, hashing, oauth2
from sqlalchemy.orm import Session
from typing import List
from forms import applyForm
from schemas import apply_schema, job_post_schema
from sqlalchemy import and_, func, or_


router = APIRouter(
    tags=['Notification'],
    prefix="/notification"
)

@router.get("/get")
def showNotification(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    hired_apply_by_current_user = db.query(apply.Apply).filter(
        apply.Apply.seeker_id==current_user.seeker[0].id).filter(or_(
            func.lower(apply.Apply.status) == "shortlisted",
            func.lower(apply.Apply.status) == "interview",
            func.lower(apply.Apply.status) == "selected",
        )).all()

    return hired_apply_by_current_user

@router.get("/show_user_notification_job_post_employer/{job_post_id}", response_model=job_post_schema.JobPostShow)
def showJobPostEmployer(job_post_id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    hired_job_post = db.query(job_post.JobPost).filter(job_post.JobPost.id == job_post_id).first()

    return hired_job_post