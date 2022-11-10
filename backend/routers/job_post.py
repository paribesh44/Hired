from fastapi import APIRouter, Depends, HTTPException, status

from schemas import job_post_schema

from models import job_post, user
from core import database, oauth2
from sqlalchemy.orm import Session


router = APIRouter(
    tags=['JobPost'],
    prefix="/jobPost"
)


@router.post("/create", status_code=status.HTTP_201_CREATED)
def createJobPostProfile(request: job_post_schema.JobPost, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    new_job_post = job_post.JobPost(
        description=request.description, job_location=request.job_location, job_level=request.job_level, job_type=request.job_type,
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

    update_job_post.update({"description": request.description, "job_location": request.job_location, "job_level": request.job_level, "job_type": request.job_type,
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
