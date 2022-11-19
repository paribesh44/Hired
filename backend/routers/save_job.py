import shutil
from fastapi import APIRouter, Depends, HTTPException, status

from models import save_job, user
from core import database, hashing, oauth2
from sqlalchemy.orm import Session
from typing import List
from forms import applyForm
from schemas import save_job_schema


router = APIRouter(
    tags=['Save Job'],
    prefix="/saveJob"
)


@router.post("/create/{job_post_id}", status_code=status.HTTP_201_CREATED)
async def createApplyProfile(job_post_id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):

    # check if this current user has saved this post or not.
    hired_save_job = db.query(save_job.SaveJob).filter(
        save_job.SaveJob.seeker_id ==current_user.seeker[0].id, save_job.SaveJob.job_post_id==job_post_id ).first()

    # if dont exist then create one
    if hired_save_job == None:
        new_save_job = save_job.SaveJob(save= False,seeker_id=current_user.seeker[0].id, job_post_id=job_post_id)

        db.add(new_save_job)
        db.commit()
        db.refresh(new_save_job)
    else:
        new_save_job = hired_save_job

    return new_save_job

@router.put("/update_save_job/{job_post_id}")
def update_save_job(data:save_job_schema.SaveJob, job_post_id:int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    update_saveJob = db.query(save_job.SaveJob).filter(
        save_job.SaveJob.job_post_id == job_post_id, save_job.SaveJob.seeker_id==current_user.seeker[0].id).first()
   
    if not update_saveJob:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"User Assesment with id {job_post_id} not found")

    # according to user choice
    update_saveJob.save = data.save
    db.commit()
    db.refresh(update_saveJob)

    return update_saveJob

@router.get('/get_saved_job/{job_post_id}')
def all(job_post_id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    hired_saveJob = db.query(save_job.SaveJob).filter(
        save_job.SaveJob.job_post_id==job_post_id, 
        # save_job.SaveJob.save==True,
        save_job.SaveJob.seeker_id==current_user.seeker[0].id).first()
    # hired_saveJob = []
    return hired_saveJob