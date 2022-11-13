from datetime import datetime
from pydantic import BaseModel
from typing import List


# multiple experience for a job seeker
class Experience(BaseModel):
    workPlace: str
    yearsOfWork: int
    jobTitle: str
    jobStartDate: datetime
    jobEndDate: datetime
    field: List[str] = []

    class Config:
        orm_mode = True
