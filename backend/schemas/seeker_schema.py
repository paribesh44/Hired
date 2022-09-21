from pydantic import BaseModel
from typing import List
from datetime import datetime
# from user_schema import ShowUserSeeker


class Seeker(BaseModel):
    name: str
    age: int
    address: str
    contactNumber: str
    write_about_you: str
    yearsOfExperience: int
    skills: List[str] = []
    linkedIn: str
    website: str
    githubProfile: str
    profilePhoto: str
    drivingLicenseNum: str
    last_job_applied: datetime

    class config():
        orm_mode = True


class ShowSeeker(Seeker):
    # user: ShowUserSeeker

    class config():
        orm_mode = True
