from fastapi import APIRouter, Depends, HTTPException, status

from schemas import job_post_schema, apply_schema

from models import job_post, user, save_job, apply
from core import database, oauth2
from sqlalchemy.orm import Session
from sqlalchemy import or_, and_
from typing import List


router = APIRouter(
    tags=['JobPost'],
    prefix="/jobPost"
)


@router.post("/create", status_code=status.HTTP_201_CREATED)
def createJobPostProfile(request: job_post_schema.JobPost, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    new_job_post = job_post.JobPost(
        description=request.description, job=request.job, job_location=request.job_location, job_level=request.job_level, job_type=request.job_type,
        job_responsibilities=request.job_responsibilities,  skills=request.skills,  minimum_years_of_experience=request.minimum_years_of_experience,
        education_required=request.education_required, no_of_vacancy=request.no_of_vacancy, work_hours=request.work_hours, min_salary=request.min_salary,
        max_salary=request.max_salary, job_benefits=request.job_benefits,  job_start_date=request.job_start_date,  remote_onsite=request.remote_onsite,
        status_of_jobs=request.status_of_jobs,  posted_date=request.posted_date,  deadline=request.deadline, employer_id=current_user.employer[0].id)
    db.add(new_job_post)
    db.commit()
    db.refresh(new_job_post)
    return new_job_post


@router.put('/update/{id}', status_code=status.HTTP_202_ACCEPTED)
def update(id: int, request: job_post_schema.JobPost, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    update_job_post = db.query(job_post.JobPost).filter(
        job_post.JobPost.id == id)

    if not update_job_post.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Job seeker with id {id} expeience not found.")

    update_job_post.update({"description": request.description, "job":request.job, "job_location": request.job_location, "job_level": request.job_level, "job_type": request.job_type,
                            "job_responsibilities": request.job_responsibilities,  "skills": request.skills,  "minimum_years_of_experience": request.minimum_years_of_experience,
                            "education_required": request.education_required, "no_of_vacancy": request.no_of_vacancy, "work_hours": request.work_hours, "min_salary": request.min_salary,
                            "max_salary": request.max_salary, "job_benefits": request.job_benefits,  "job_start_date": request.job_start_date,  "remote_onsite": request.remote_onsite,
                            "status_of_jobs": request.status_of_jobs,  "posted_date": request.posted_date,  "deadline": request.deadline, "employer_id": current_user.employer[0].id})
    db.commit()
    return 'updated'


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
    hired_save_jobs = db.query(save_job.SaveJob).filter(save_job.SaveJob.save==True, save_job.SaveJob.seeker_id==current_user.seeker[0].id).all()

    if hired_save_jobs != []:
        # get the job_posts which are saved by the current_user
        hired_job_posts = db.query(job_post.JobPost).filter(or_(*[job_post.JobPost.id == hired_save_jobs[i].job_post_id  for i in range(len(hired_save_jobs))])).all()
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
    hired_job_post = db.query(job_post.JobPost).filter(job_post.JobPost.employer_id == current_user.employer[0].id).all()

    return hired_job_post

@router.get("/seeker_applied_job/{job_post_id}", response_model=List[apply_schema.ApplySeeker])
def showSeekerAppliedJob(job_post_id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    hired_apply = db.query(apply.Apply).filter(apply.Apply.job_post_id == job_post_id).all()

    return hired_apply