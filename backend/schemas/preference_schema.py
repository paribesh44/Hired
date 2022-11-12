from datetime import datetime
from pydantic import BaseModel
from typing import List, Optional


class Preference(BaseModel):
    expected_min_salary: Optional[int]
    expected_max_salary: Optional[int]
    preferred_location: Optional[List[str]]
    interested_jobs: Optional[List[str]]
    preferred_job_skills: Optional[List[str]]
    remote_onsite: Optional[str]
    available_hours: Optional[List[str]]

    class Config:
        orm_mode = True
