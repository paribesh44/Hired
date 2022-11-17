from pydantic import BaseModel
from typing import Optional

class CVmaker(BaseModel):
    name: str
    email: str
    mobile: str
    address: str
    linkedin: str
    dob: str
    github: str
    skills: str
    website: str

    organization: str
    position: str
    duration: int
    experience_description: str

    project_title: str
    project_link: str
    project_description: str

    university: str
    year: str
    qualification: str
    cgpa: str

    languages: str
    hobbies: str
    activity: str

    class Config:
        orm_mode = True
