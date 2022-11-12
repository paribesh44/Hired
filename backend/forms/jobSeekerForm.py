from datetime import datetime
from fastapi import File, UploadFile, Form
from typing import List, Optional


class JobSeekerForm:
    def __init__(
        self,
        name: str = Form(...),
        age: int = Form(...),
        address: str = Form(...),
        contact_number: str = Form(...),
        write_about_you: str = Form(...),
        years_of_experience: int = Form(...),
        skills: List[str] = Form(...),
        linkedIn: Optional[str] = Form(None),
        website: Optional[str] = Form(None),
        cv: Optional[UploadFile] = File(None),
        status: str = Form(...),
        github_profile: Optional[str] = Form(None),
        profile_photo: Optional[UploadFile] = File(None),
        driving_license_num: Optional[str] = Form(None),
        last_job_applied: Optional[datetime] = Form(None)
    ):
        self.name = name
        self.age = age
        self.address = address
        self.contact_number = contact_number
        self.write_about_you = write_about_you
        self.years_of_experience = years_of_experience
        self.skills = skills
        self.linkedIn = linkedIn
        self.website = website
        self.cv = cv
        self.status = status
        self.github_profile = github_profile
        self.profile_photo = profile_photo
        self.driving_license_num = driving_license_num
        self.last_job_applied = last_job_applied
