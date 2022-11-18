from datetime import date, datetime
from pydantic import BaseModel


# multiple education for a job seeker
class Education(BaseModel):
    qualification: str
    graduating_institution: str
    graduating_year: date
    major: str
    cgpa: str

    class Config:
        orm_mode = True

class PostEducation(BaseModel):
    qualification: str
    graduating_institution: str
    graduating_year: datetime
    major: str
    cgpa: str

    class Config:
        orm_mode = True
