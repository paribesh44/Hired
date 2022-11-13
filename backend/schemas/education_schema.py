from datetime import datetime
from pydantic import BaseModel


# multiple education for a job seeker
class Education(BaseModel):
    qualification: str
    graduating_institution: str
    graduating_year: datetime
    major: str
    cgpa: float

    class Config:
        orm_mode = True
