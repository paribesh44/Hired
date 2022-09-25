from datetime import datetime
from pydantic import BaseModel
from typing import List


class JobPost(BaseModel):
    description: str
    job_location: str
    job_level: str
    job_type: str
    job_responsibilities: List[str]
    skills: List[str]
    minimum_years_of_experience: int
    education_required: str
    no_of_vacancy: int
    work_hours: str
    min_salary = int
    max_salary = int
    job_benefits: List[str]
    job_start_date: datetime
    remote_onsite: str
    status_of_jobs: str
    posted_date: datetime
    deadline: datetime

    class config:
        orm_mode = True
