from datetime import datetime
from pydantic import BaseModel
from typing import List


class Preference(BaseModel):
    expected_min_salary: int
    expected_max_salary: int
    preferred_location: List[str] = []
    interested_jobs: List[str] = []
    preferred_job_skills: List[str] = []
    remote_onsite: str
    available_hours: List[str] = []

    class config():
        orm_mode = True
