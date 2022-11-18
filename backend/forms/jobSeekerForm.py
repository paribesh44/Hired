from datetime import datetime
from fastapi import File, UploadFile, Form
from typing import List, Optional


class JobSeekerForm:
    def __init__(
        self,
        name: str = Form(...),
        age: str = Form(...),
        address: str = Form(...),
        contact_number: str = Form(...),
        write_about_you: str = Form(...),
        years_of_experience: str = Form(...),
        student: bool = Form(...),
        skills: str = Form(...),
        linkedIn: Optional[str] = Form(None),
        website: Optional[str] = Form(None),
        cv: Optional[UploadFile] = File(None),
        status: str = Form(...),
        github_profile: Optional[str] = Form(None),
        profile_photo: Optional[UploadFile] = File(None)
    ):
        self.name = name
        self.age = age
        self.address = address
        self.contact_number = contact_number
        self.write_about_you = write_about_you
        self.years_of_experience = years_of_experience
        self.student = student
        self.skills = skills
        self.linkedIn = linkedIn
        self.website = website
        self.cv = cv
        self.status = status
        self.github_profile = github_profile
        self.profile_photo = profile_photo
