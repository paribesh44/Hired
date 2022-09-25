from typing import List
from pydantic import Json
from datetime import datetime

job_posts: List[Json] = [
    {
        "description": "we are looking for ml engineer.",
        "job_location": "Kathmandu",
        "job_level": "senior",
        "job_type": "permanent",
        "job_responsibilities": ["must be able to create ml models", "should be able to data prepration", "MLops"],
        "skills": ["ml", "dl", "ai", "fastapi"],
        "minimum_years_of_experience": 3,
        "education_required": "bachlors",
        "no_of_vacancy": 1,
        "work_hours": "10 am to 5 pm",
        "min_salary": 100000,
        "max_salary": 300000,
        "job_benefits": ["Insurance", "Handsome bonus"],
        "job_start_date": datetime(2022, 10, 15, 14, 00, 00),
        "remote_onsite": "onsite",
        "status_of_jobs": "published",
        "posted_date": datetime.utcnow(),
        "deadline": datetime(2022, 10, 1, 14, 00, 00),
        "employer_id": 1,
    },
    {
        "description": "we are looking for full stack intern.",
        "job_location": "Banepa",
        "job_level": "internship",
        "job_type": "internship",
        "job_responsibilities": ["api creation", "ui development", "database management"],
        "skills": ["js", "html", "react", "flutter"],
        "minimum_years_of_experience": 0,
        "education_required": "bachlors",
        "no_of_vacancy": 5,
        "work_hours": "10 am to 5 pm",
        "min_salary": 10000,
        "max_salary": 30000,
        "job_benefits": ["petrol", "lunch"],
        "job_start_date": datetime(2022, 11, 15, 14, 00, 00),
        "remote_onsite": "remote",
        "status_of_jobs": "published",
        "posted_date": datetime.utcnow(),
        "deadline": datetime(2022, 10, 25, 14, 00, 00),
        "employer_id": 2,
    }
]