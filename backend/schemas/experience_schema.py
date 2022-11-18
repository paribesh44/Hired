from datetime import datetime, date
from pydantic import BaseModel
from typing import List


# multiple experience for a job seeker
class Experience(BaseModel):
    workPlace: str
    yearsOfWork: int
    jobTitle: str
    jobStartDate: date
    jobEndDate: date
    field: List[str] = []

    class Config:
        orm_mode = True

class PostExperience(BaseModel):
    workPlace: str
    yearsOfWork: str
    jobTitle: str
    jobStartDate: datetime
    jobEndDate: datetime
    field: str

    class Config:
        orm_mode = True