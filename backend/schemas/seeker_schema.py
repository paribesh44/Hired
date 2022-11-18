from pydantic import BaseModel
from typing import List
from datetime import datetime
# from user_schema import ShowUserSeeker
from schemas.education_schema import Education
from schemas.experience_schema import Experience
from schemas.preference_schema import Preference
from typing import Optional
from fastapi import UploadFile, File

class PostSeeker(BaseModel):
    name: str
    age: str
    address: str
    contact_number: str
    write_about_you: str
    years_of_experience: str
    student: bool
    skills: str
    linkedIn: Optional[str]
    website: Optional[str]
    cv: Optional[UploadFile]
    status: str
    github_profile: Optional[str]
    profile_photo: Optional[UploadFile]

    class Config:
        orm_mode = True

class Seeker(BaseModel):
    id: int
    name: Optional[str]
    age: Optional[int]
    address: Optional[str]
    contactNumber: Optional[str]
    write_about_you: Optional[str]
    yearsOfExperience: Optional[int]
    student: Optional[bool]
    skills: List[str] = []
    linkedIn: Optional[str]
    website: Optional[str]
    githubProfile: Optional[str]
    profilePhoto: Optional[str]

    class Config:
        orm_mode = True


class ShowSeeker(Seeker):
    experience: Optional[List[Experience]]
    education: Optional[List[Education]]
    preference: Optional[Preference]

    class Config:
        orm_mode = True

class ChangeSeeker(BaseModel):
    status: str

    class Config:
        orm_mode = True