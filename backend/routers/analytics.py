from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import any_, or_, and_, func

from models import job_post, user, experience, apply, seeker
from core import database, oauth2
from sqlalchemy.orm import Session
from datetime import datetime
from sqlalchemy.sql import text
import json

router = APIRouter(
    tags=['Analytics'],
    prefix="/analytics"
)

@router.get("/get_analytics")
def analytics(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    job_posts = db.query(job_post.JobPost).filter(job_post.JobPost.employer_id==current_user.employer[0].id).all()
    total_no_of_posts = len(job_posts)
    # total_no_of_vacancies
    # total_no_applicants
    # total_active_users -- calculate percentage
    # total_profile_vist
    
    job_posts_ids = []

    # Total no of vacancies
    total_no_of_vacancies = 0
    for i in range(len(job_posts)):
        total_no_of_vacancies += job_posts[i].no_of_vacancy
        job_posts_ids.append(job_posts[i].id)
    
    # Total no of applicants
    total_no_of_applicants = 0
    apply_on_this_job_post = db.query(apply.Apply).filter(or_(
        *[apply.Apply.job_post_id==jobPostId for jobPostId in job_posts_ids]
    )).all()

    total_no_of_applicants = len(apply_on_this_job_post)

    # Total active users
    active_users = db.query(seeker.Seeker).all()
    total_active_users = len(active_users)
    # percentage according to people who signup this month compared to the people who signup last month

    all_the_created_date = []
    # get date when created account
    for i in range(len(active_users)):
        hired_user = db.query(user.User).filter(user.User.id==active_users[i].user_id).first()
        created_date_user = hired_user.created_date
        all_the_created_date.append(created_date_user.month)

    # todays month
    current_month = datetime.utcnow().month

    current_month_users = 0
    last_month_users = 0

    for i in range(len(all_the_created_date)):
        if (current_month==1):
            if(all_the_created_date[i] == 1):
                current_month_users += 1
            if(all_the_created_date[i] == 12):
                last_month_users += 1

        else:
            if(all_the_created_date[i]==current_month):
                current_month_users += 1
            if(all_the_created_date[i]==(current_month-1)):
                last_month_users += 1
    
    percentage_of_increase_user_this_month = 0
    if (last_month_users==0):
        percentage_of_increase_user_this_month = ((current_month_users-0)/1)*100
    else:
        percentage_of_increase_user_this_month = ((current_month_users-last_month_users)/last_month_users)*100

    # Total profile visit
    total_post_visit = 0
    for i in range(len(job_posts)):
        total_post_visit += job_posts[i].post_view

    

    # applied no of candidates
    # shortlisted
    # interviewed
    # to be interview
    # hired candidates
    # conversion rate = (hired_candidates/total_vacany)*100

    # total_applied_of_applicants ---> above ---> total_no_of_applicants
    total_shortlisted_candidates = 0
    shoredlisted_candidates = db.query(apply.Apply).filter(or_(
        *[apply.Apply.id==apply_id.id for apply_id in apply_on_this_job_post]
    )).filter(func.lower(apply.Apply.status) == "shortlisted").all()

    total_shortlisted_candidates = len(shoredlisted_candidates)

    total_interview_candidates = 0
    interview_candidates = db.query(apply.Apply).filter(func.lower(apply.Apply.status) == "interview").all()
    total_interview_candidates = len(interview_candidates)

    total_interviewed_candidates = 0
    interviewed_candidates = db.query(apply.Apply).filter(func.lower(apply.Apply.status) == "interviewed").all()
    total_interviewed_candidates = len(interviewed_candidates)

    hired_candidates = 0
    selected_candidates = db.query(apply.Apply).filter(func.lower(apply.Apply.status) == "selected").all()
    hired_candidates = len(selected_candidates)

    if(hired_candidates==0):
        conversion_rate = 0
    else:
        conversion_rate = (hired_candidates/total_no_of_vacancies)*100
 

    # bar chart parts
    # Job diversity
    # Location
    # Age Groups

    # Job diversity
    # job_diversity =  []
    
    job_diversity = {}

    for i in range(len(job_posts)):
        job_title = job_posts[i].job
        # job_diversity[i] = {}
        job_diversity[i] = {
            "title": job_title,
        }

        total_job_apply = len(db.query(apply.Apply).filter(apply.Apply.job_post_id==job_posts[i].id).all())

        job_diversity[i]["total"] = total_job_apply
        print("fdkjsfbhsd", job_diversity)
        # job_diversity.append(abc)



    # Location
    location = {}
    

    hired_seeker = db.query(seeker.Seeker).filter(or_(
        *[seeker.Seeker.id==apply.seeker_id for apply in apply_on_this_job_post]
    )).all()

    list_seeker_location = []

    for i in range(len(hired_seeker)):
        seeker_location = hired_seeker[i].address

        list_seeker_location.append(seeker_location)
        
        # add seeker's location to the dictionary
        location[seeker_location] = {
            "location": seeker_location,
            "total": 0,
        }

    print(list_seeker_location)
    list_seeker_location = [*set(list_seeker_location)]

    for i in range(len(list_seeker_location)):
        for j in range(len(apply_on_this_job_post)):
            total_seeker_from_that_location = len(db.query(seeker.Seeker).filter(
                seeker.Seeker.id==apply_on_this_job_post[j].seeker_id, seeker.Seeker.address==list_seeker_location[i]).all())
            
            location[list_seeker_location[i]]["total"] += total_seeker_from_that_location

    print(location)

    # Age Groups
    initial_age_group = {
        "20-less": 0,
        "21-25": 0,
        "26-30": 0,
        "31-35": 0,
        "36-more": 0,
    }

    for i in range(len(hired_seeker)):
        seeker_age = hired_seeker[i].age
        print(seeker_age)
        if seeker_age <= 20:
            initial_age_group["20-less"] += 1
        elif 20 <  seeker_age <= 25:
            initial_age_group["21-25"] += 1
        elif 25 <  seeker_age <= 30:
            initial_age_group["26-30"] += 1
        elif 30 <  seeker_age <= 35:
            initial_age_group["31-35"] += 1
        elif 35 <  seeker_age:
            initial_age_group["36-more"] += 1

    age_group = {}

    for key, value in initial_age_group.items():
        if value != 0:
            age_group[key] = value

    if (total_no_of_posts == 0):
        total_no_of_posts = 0
        total_no_of_vacancies = 0
        total_no_of_applicants = 0
        total_active_users = 0
        percentage_of_increase_user_this_month = 0
        total_post_visit = 0

        total_shortlisted_candidates = 0
        total_interview_candidates = 0
        total_interviewed_candidates = 0
        hired_candidates = 0
        conversion_rate = 0

        job_diversity = {}
        age_group = {}
        location =  {}



    return {"total_no_of_posts": total_no_of_posts, "total_no_of_vacancies": total_no_of_vacancies, "total_no_of_applicants": total_no_of_applicants, 
    "total_active_users": total_active_users, "percentage_increase": percentage_of_increase_user_this_month, "total_post_visit":  total_post_visit, 
    "total_shortlisted_candidates": total_shortlisted_candidates, "total_interview_candidates":total_interview_candidates, "total_interviewed_candidates":total_interviewed_candidates, 
    "hired_candidates":hired_candidates, "conversion_rate": conversion_rate, "job_diversity": [job_diversity], "age_group": age_group, "location": location}