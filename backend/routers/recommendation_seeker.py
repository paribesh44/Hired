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

# we have four field to define the percentage: (maximum percentage division)
# Skills -> 25
# YOE -> 25
# RequiredEducation -> 25 
# job_level -> 25

# Penalty system.

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
           
        
        ########### Percentage Division: ###########
        ### NOTE According to years of experience
        seekerExperience_minus_jobRequiredExperience = hired_seeker_who_applied_for_job[no_of_seeker].yearsOfExperience - hired_job_post.minimum_years_of_experience
        jobRequiredExperience_minus_seekerExperience = hired_job_post.minimum_years_of_experience - hired_seeker_who_applied_for_job[no_of_seeker].yearsOfExperience

        if seekerExperience_minus_jobRequiredExperience == 0 or seekerExperience_minus_jobRequiredExperience == 1:
            percentage +=  15
        elif seekerExperience_minus_jobRequiredExperience == 2:
            percentage +=  20
        elif seekerExperience_minus_jobRequiredExperience >= 3:
            percentage +=  25
        # penalty. if seekerEx is 2 and required is 3 then seeker will be penalized.
        elif seekerExperience_minus_jobRequiredExperience < 0:
            percentage -= 10


        ### NOTE According to education
        seekerEducation = hired_seeker_who_applied_for_job[no_of_seeker].education[0].qualification.lower()
        jobRequiredEducation = hired_job_post.education_required.lower()

        # IF required is "phd"
        if jobRequiredEducation == "phd":
            if seekerEducation == "phd":
                percentage += 25
            # penalized
            else:
                percentage -= 10

        # If required is "masters"
        if jobRequiredEducation == "masters":
            if seekerEducation == "masters":
                percentage += 20
            elif seekerEducation == "phd":
                percentage += 25
            else:
                percentage -= 10 

        # If required is "bachlors"
        if jobRequiredEducation == "bachlors":
            if seekerEducation == "bachlors":
                percentage += 15
            elif seekerEducation == "masters":
                percentage += 20
            elif seekerEducation == "phd":
                percentage += 25
            else:
                percentage -= 10 


        ### NOTE: According to job_level (senior, midlevel , junior, internship)
        jobRequiredLevel = hired_job_post.job_level.lower()
        seeker_experience=hired_seeker_who_applied_for_job[no_of_seeker].yearsOfExperience
        seeker_job_level = ""

        # determine seeker's job_level by seeing seeker_experience
        if seeker_experience == 0 or seeker_experience == 1.0:
            seeker_job_level = "junior"
        elif seeker_experience == 2:
            seeker_job_level = "midlevel"
        elif seeker_experience > 2:
            seeker_job_level = "senior"

        # if required job_level is internship then directly give 25 percentage.
        if jobRequiredLevel == "internship":
            percentage += 25
        
        # IF required is "senior"
        if jobRequiredLevel == "senior":
            if seeker_job_level == "senior":
                percentage += 25
            # penalized
            else:
                percentage -= 10

        # If required is "midlevel"
        if jobRequiredLevel == "midlevel":
            if seeker_job_level == "midlevel":
                percentage += 20
            elif seeker_job_level == "senior":
                percentage += 25
            else:
                percentage -= 10 

        # If required is "junior"
        if jobRequiredLevel == "junior":
            if seeker_job_level == "junior":
                percentage += 15
            elif seeker_job_level == "midlevel":
                percentage += 20
            elif seeker_job_level == "senior":
                percentage += 25
        

        ### NOTE According to skills
        # Find out the total number of elements in the skills requried in the job.
        # Assignmnet the weight by fiding (weight = 25 / number_of_elements_in_skills_required_array)
        # Jati wota skills match hunxa job required ra seeker ko skills sanga due wota array compare garera. Tete number lai weight le multiply garne.
        # For eg: number_of_elements_in_skills_required_array 4, weight=25/4=6.25, compare the elements in array of jobRequiredSkills and UserSkills,
        # if 2 elements matched then 2 * 6.25 = 12.5 will be given to the user.
        
        # convert every elements of list to lowercase
        jobRequiredSkills = list(map(str.lower, hired_job_post.skills))
        seekerSkills = list(map(str.lower, hired_seeker_who_applied_for_job[no_of_seeker].skills))
        maximum_marks_from_skills = 25
        weight = maximum_marks_from_skills / len(jobRequiredSkills)

        # compare two arrays/lists and find out how many of the elements in both lists matches and multiply by weight to find the total marks obtained.
        common_elements = set(jobRequiredSkills)&set(seekerSkills)
        number_of_matched_elements = len(common_elements)
        total_marks = weight * number_of_matched_elements
        # update percentage
        percentage += total_marks

        # NOTE NOTE NOTE (ASK) If the seeker_skills and jobRequiredSkills dont match. Then penalize or put percentage to 0.
        if number_of_matched_elements == 0:
            percentage *= 0
        
        dictionary[no_of_seeker+1]["percentage"] = percentage

    # return hired_job_post
    # return hired_seeker_who_applied_for_job
    return dictionary