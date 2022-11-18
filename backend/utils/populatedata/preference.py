from typing import List
from pydantic import Json

preferences: List[Json] = [
    {
        "expected_min_salary": 50000,
        "expected_max_salary": 100000,
        "preferred_location": ["Kathmandu", "Banepa", "Pokhara"],
        "interested_jobs": ["frontend", "mobile development"],
        "preferred_job_skills": ["css", "django"],
        "remote_onsite": "onsite",
        "job_type": "Full-time",
        "seeker_id" : 1
    },
    {
        "expected_min_salary": 30000,
        "expected_max_salary": 120000,
        "preferred_location": ["Kathmandu", "Banepa", "Pokhara"],
        "interested_jobs": ["ml engineer"],
        "preferred_job_skills": ["ml", "dl"],
        "remote_onsite": "onsite",
        "job_type": "intership",
        "available_hours": "10 am to 5 pm",
        "seeker_id" : 2
    }
]