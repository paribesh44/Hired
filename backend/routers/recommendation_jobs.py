# Recommend Companies to the Job Seeker
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import any_, or_, and_, func

from models import job_post, user, experience
from core import database, oauth2
from sqlalchemy.orm import Session
from datetime import datetime
from sqlalchemy.sql import text


router = APIRouter(
    tags=['Recommendation Jobs'],
    prefix="/recommendation_jobs"
)


@router.get('/recommend_jobs')
def RecommendJobs(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    # print(current_user.seeker[0].experience)
    # hired_experience = db.query(experience.Experience).filter(experience.Experience.seeker_id == current_user.seeker[0].id).all()
    # print(hired_experience)
    # can do for loop

    # hired_experience = db.query(experience.Experience).filter(or_(experience.Experience.id==1, experience.Experience.id==2)).all()
    
    # filter from the list
    # hired_experience = db.query(experience.Experience).filter(experience.Experience.workPlace.in_(["yo", "google"])).all()
    # hired_experience = db.query(experience.Experience).filter(or_(*[experience.Experience.workPlace.like(list) for list in ["google", "yo%"]])).all()

    hired_user = current_user.seeker[0]

    # calculate the experience of the user.
    hired_user_experience=0
    try:
        for i in range(len(hired_user.experience)):
            hired_user_experience += hired_user.experience[i].yearsOfWork
    except:
        hired_user_experience=0
    
    # determine the job level according to the experience
    # show the job level according to the year of experience
    hired_job_level = []
    try:
        for i in range(len(hired_user.experience)):
            # for user with 0 year experience show jobs with "internship" and "junior" level.
            if hired_user_experience == 0:
                hired_job_level.clear()
                hired_job_level.append("internship", "junior")
            elif hired_user_experience <= 1:
                hired_job_level.clear()
                hired_job_level.append("junior", "midlevel", "senior")
            elif hired_user_experience > 1 and hired_user_experience < 3:
                hired_job_level.clear()
                hired_job_level.append("midlevel", "senior")
            # for user with 3 or more year of experience he/she is already senoir developer so no need to see the jobs of intership nor junior nor midlevel. 
            elif hired_user_experience >= 3:
                hired_job_level.clear()
                hired_job_level.append("senior")
    except:
        hired_job_level = ["internship"]

        
    # show only those jobs which are "published" and whose deadline is not over.
    # hunai parne kura haru and vitra rakum j hos or ra and ma divide garnu parxa.
    hired_recommended_jobs = db.query(job_post.JobPost).filter(or_(
        # -> Search in the list and convert the each element of list to lowercase.
        *[func.lower(job_post.JobPost.job_location).like("%" + location.lower() + "%") for location in hired_user.preference[0].preferred_location],
        job_post.JobPost.job_location.like("%"+ hired_user.address +"%"),
        job_post.JobPost.remote_onsite == hired_user.preference[0].remote_onsite,
        func.lower(job_post.JobPost.education_required).like("%" + func.lower(hired_user.education[0].qualification) + "%"),
        # -> Their maximum salary should be higher than our expected minimum salary.
        job_post.JobPost.max_salary >= hired_user.preference[0].expected_min_salary,
        job_post.JobPost.minimum_years_of_experience <= hired_user_experience,
        # -> skills (JobPost) is an array and similary preferred_job_skills is also array. So need "any" for comparing. (maybe put this in and_)
        *[job_post.JobPost.skills.any("%" + skill + "%") for skill in hired_user.preference[0].preferred_job_skills],
        *[func.lower(job_post.JobPost.job_level).like("%" + jobLevel + "%") for jobLevel in hired_job_level]
        # NOTE: add another field in the "job_post" what they are looking for machine leraning engineer or front end developer and so on. (put this in and_)
        )).filter(and_(
            job_post.JobPost.status_of_jobs == "published",
            job_post.JobPost.deadline >= datetime.utcnow()
            )).all()

    print(hired_recommended_jobs)
    
    return hired_recommended_jobs
    # return "success"