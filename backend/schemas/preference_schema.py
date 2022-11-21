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
    job_type: Optional[str]

    class Config:
        orm_mode = True

class PostPreference(BaseModel):
    expected_min_salary: int
    expected_max_salary: int
    preferred_location: str
    interested_jobs: str
    preferred_job_skills: str
    remote_onsite: str
    job_type: str

    class Config:
        orm_mode = True


class UpdatePreference(BaseModel):
    expected_min_salary: int
    expected_max_salary: int
    preferred_location: List[str]
    interested_jobs: List[str]
    preferred_job_skills: list[str]
    remote_onsite: str
    job_type: str

    class Config:
        orm_mode = True