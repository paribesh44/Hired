# Recommend job seeker to the companies according to the percentage.
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import any_, or_, and_, func

from models import job_post, user, experience, apply, seeker
from core import database, oauth2
from sqlalchemy.orm import Session
from datetime import datetime
from sqlalchemy.sql import text
import json


router = APIRouter(
    tags=['Recommend Seekers'],
    prefix="/recommend-seekers"
)


# This will calculate the priority by calculating the percentage. Seeker with higesh percentage value will be highly priorize.
@router.get('/recommend-seekers{jobpost_id}')
def RecommendSeekers(jobpost_id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    # get the apply data with the id as "jobpost_id".
    hired_apply = db.query(apply.Apply).filter(apply.Apply.job_post_id == jobpost_id).all()

    # get all the job seekers who have applied for the job with id="jobpost_id". All the Job seeker who have applied for the job is stored in apply table. So apply
    # table is used to get the id's of jobseeker and get their data.
    hired_seeker_who_applied_for_job = db.query(seeker.Seeker).filter(or_(*[seeker.Seeker.id == int(apply.seeker_id) for apply in hired_apply])).all()

    # get the job_post data that we are looking for (i.e. job with id jobpost_id)
    hired_job_post = db.query(job_post.JobPost).filter(job_post.JobPost.id == jobpost_id).first()


    # now we have the job_post and all the job_seekers who have applied for the jobs.
    # We can compute the percentage based on the accurate match between the job's requirements and job_seeker avability.
    
    # This dictionary contains the seekers_id with their percentage. It is nested dictionary. {"1": {"seeker_id"=1, "seeker_name"="name", "percentage"=50}}
    # lets call this root dict.
    dictionary={}
    for no_of_seeker in range(len(hired_seeker_who_applied_for_job)):
        # this will be our another dictinary which contains seeker_id, name and percentage. Its call this semi-root dict.
        # "no_seeker" is the number of iteration. And 1 is added because iteration starts from 0 so to make semi-root dict key start from 1 we added "+1" term.
        dictionary[no_of_seeker+1] = {}

        # add seeker_id and seeker_name into semi-root dict
        dictionary[no_of_seeker+1] = {
            "seeker_id": hired_seeker_who_applied_for_job[no_of_seeker].id, 
            "seeker_name": hired_seeker_who_applied_for_job[no_of_seeker].name
            }

        # initilize percentage
        # After this percentage is also initilize to 0 value in dictionary but will be updated according to matched between job_seeker's skills and job requirements.
        percentage = 0
        dictionary[no_of_seeker+1]["percentage"] = percentage

        # Percentage Division:


    return dictionary