from fastapi import FastAPI

from routers import (
    recommendation_jobs, user, authentication, google_authentication, email_verification, seeker, 
    employer, experience, preference, mcq, target_field, user_assesment, job_post,
    cvmaker, recommendation_seeker
    )
from core import database
from starlette.middleware.sessions import SessionMiddleware
from starlette.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

# uvicorn main:app --reload
app = FastAPI()

database.Base.metadata.create_all(database.engine)

SECRET_KEY = "KWn54X_xI9xAOc1c6AWDAwD-JMURBTutRDt3aNbA"

origins = [
    "http://localhost:3000"
]

# middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
    )

# exposes our static folder to our users
# http://127.0.0.1:8000/static/cv/cv-professional.pdf
app.mount("/static", StaticFiles(directory="static"), name="static")


app.include_router(authentication.router)
app.include_router(google_authentication.router)
app.include_router(user.router)
app.include_router(email_verification.router)
app.include_router(seeker.router)
app.include_router(employer.router)
app.include_router(job_post.router)
app.include_router(experience.router)
app.include_router(preference.router)
app.include_router(mcq.router)
app.include_router(target_field.router)
app.include_router(user_assesment.router)
app.include_router(cvmaker.router)
app.include_router(recommendation_jobs.router)
app.include_router(recommendation_seeker.router)