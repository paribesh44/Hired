from fastapi import APIRouter, Depends, HTTPException, status

from schemas import job_post_schema, apply_schema

from models import job_post, user, save_job, apply, employer
from core import database, oauth2
from sqlalchemy.orm import Session
from sqlalchemy import or_, and_, func
from typing import List
from datetime import datetime


router = APIRouter(
    tags=['JobPost'],
    prefix="/jobPost"
)


@router.post("/create", status_code=status.HTTP_201_CREATED)
def createJobPostProfile(data: job_post_schema.PostJobPost, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    # remove comma and make it a list
    skills_string = data.skills
    skills_string_remove_blank = skills_string.replace(" ", "")
    skills = skills_string_remove_blank.strip().split(',')

    job_responsibilities_string = data.job_responsibilities
    job_responsibilities = job_responsibilities_string.strip().split(',')

    job_benefits_string = data.job_benefits
    job_benefits = job_benefits_string.strip().split(',')

    final_job_responsibilities = []
    # remove first space from job_responsiblities and job_benefits
    for i in range(len(job_responsibilities)):
        if job_responsibilities[i][0] == " ":
            all_character_expect_first_space = job_responsibilities[i][1:]
            final_job_responsibilities.append(all_character_expect_first_space)
        else:
            final_job_responsibilities.append(job_responsibilities[i])

    final_job_benefits=[]

    for i in range(len(job_benefits)):
        if job_benefits[i][0] == " ":
            all_character_expect_first_space = job_benefits[i][1:]
            final_job_benefits.append(all_character_expect_first_space)
        else:
            final_job_benefits.append(job_benefits[i])

    new_job_post = job_post.JobPost(
        description=data.description, job=data.job, job_location=data.job_location, job_level=data.job_level, job_type=data.job_type,
        job_responsibilities=final_job_responsibilities,  skills=skills,  minimum_years_of_experience=int(data.minimum_years_of_experience),
        education_required=data.education_required, no_of_vacancy=int(data.no_of_vacancy), work_hours=data.work_hours, min_salary=data.min_salary,
        max_salary=data.max_salary, job_benefits=final_job_benefits,  job_start_date=data.job_start_date,  remote_onsite=data.remote_onsite,
        status_of_jobs="published",  posted_date=datetime.utcnow(),  deadline=data.deadline, employer_id=current_user.employer[0].id)
    db.add(new_job_post)
    db.commit()
    db.refresh(new_job_post)

    return {"msg": "success"}


@router.put('/update/{job_post_id}', status_code=status.HTTP_202_ACCEPTED)
def update(job_post_id: int, data: job_post_schema.UpdateJobPost, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    print(data)
    update_job_post = db.query(job_post.JobPost).filter(
        job_post.JobPost.id == job_post_id)

    if not update_job_post.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Job seeker with id {id} expeience not found.")

    update_job_post.update({"description": data.description, "job": data.job, "job_location": data.job_location, "job_level": data.job_level, "job_type": data.job_type,
        "job_responsibilities": data.job_responsibilities,  "skills": data.skills,  "minimum_years_of_experience": data.minimum_years_of_experience,
        "education_required": data.education_required, "no_of_vacancy": data.no_of_vacancy, "work_hours": data.work_hours, "min_salary": data.min_salary,
        "max_salary": data.max_salary, "job_benefits": data.job_benefits,  "job_start_date": data.job_start_date,  "remote_onsite": data.remote_onsite,
        "status_of_jobs": data.status_of_jobs,  "posted_date": data.posted_date,  "deadline": data.deadline, "employer_id": current_user.employer[0].id})
    db.commit()
    return {"msg": "success"}


@router.put("/update_post_view/{job_post_id}")
def update_visibility(job_post_id:int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    update_job_post = db.query(job_post.JobPost).filter(
        job_post.JobPost.id == job_post_id).first()

    if not update_job_post:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"User Assesment with id not found")

    update_job_post.post_view += 1
    db.commit()
    db.refresh(update_job_post)

    return {"msg": "success"}


# , response_model=List[schemas.Showjob_post]
@router.get('/get_all')
def all(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    job_posts = db.query(job_post.JobPost).all()
    return job_posts

# get all the job_post with save_job = True
#


@router.get("/get_all_saved_job", response_model=List[job_post_schema.JobPostShow])
def all_saved_job(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    # get all the save_jobs with the save=True of the current loged in user.
    hired_save_jobs = db.query(save_job.SaveJob).filter(
        save_job.SaveJob.save == True, save_job.SaveJob.seeker_id == current_user.seeker[0].id).all()

    if hired_save_jobs != []:
        # get the job_posts which are saved by the current_user
        hired_job_posts = db.query(job_post.JobPost).filter(or_(
            *[job_post.JobPost.id == hired_save_jobs[i].job_post_id for i in range(len(hired_save_jobs))])).all()
    else:
        hired_job_posts = []

    # return hired_job_posts[0].employer
    return hired_job_posts


# , response_model=schemas.job_post
@router.get('/get_job_post/{job_post_id}')
def show(job_post_id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    hired_job_post = db.query(job_post.JobPost).filter(
        job_post.JobPost.id == job_post_id).first()
    if not hired_job_post:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Job seeker's job_post with the id {id} is not available")
    # return {"Job Post": hired_job_post, "user": hired_job_post.employer.user.email, "seeker": hired_job_post.employer.companyName}
    return hired_job_post


@router.get("/show_all_job_post")
def showall(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    hired_job_post = db.query(job_post.JobPost).filter(
        job_post.JobPost.employer_id == current_user.employer[0].id).all()

    return hired_job_post


@router.get("/seeker_applied_job/{job_post_id}", response_model=List[apply_schema.ApplySeeker])
def showSeekerAppliedJob(job_post_id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    hired_apply = db.query(apply.Apply).filter(
        apply.Apply.job_post_id == job_post_id).order_by(apply.Apply.id.desc()).all()

    return hired_apply


@router.get("/show_all_featured_jobs", response_model=List[job_post_schema.JobPostShow])
def showAllFeaturedJobs(db: Session = Depends(database.get_db)):
    hired_job_post = db.query(job_post.JobPost).limit(4).all()

    return hired_job_post


@router.get("/show_all_jobs", response_model=List[job_post_schema.JobPostShow])
def showAllFeaturedJobs(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    hired_job_post = db.query(job_post.JobPost).all()

    return hired_job_post


@router.get("/search_jobs/{search_parameter}", response_model=List[job_post_schema.JobPostShow])
def showSearchedJobs(search_parameter: str, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    hired_searched_job = db.query(job_post.JobPost).filter(or_(
        func.lower(job_post.JobPost.job).like("%"+ search_parameter.lower() +"%")
    )).all()

    print(hired_searched_job)

    return hired_searched_job



