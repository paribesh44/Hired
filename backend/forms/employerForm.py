from fastapi import File, UploadFile, Form
from typing import List, Optional
from datetime import date, datetime


class EmployerForm:
    def __init__(
        self,
        company_name: str = Form(...),
        location: str = Form(...),
        description: str = Form(...),
        website: str = Form(...),
        target_market: List[str] = Form(...),
        vision: str = Form(...),
        contact_number: str = Form(...),
        contact_email: str = Form(...),
        contact_person: str = Form(...),
        logo: Optional[UploadFile] = File(None),
        established_date: date = Form(...)
    ):
        self.company_name = company_name
        self.location = location
        self.description = description
        self.website = website
        self.target_market = target_market
        self.vision = vision
        self.contact_number = contact_number
        self.contact_email = contact_email
        self.contact_person = contact_person
        self.logo = logo
        self.established_date = established_date


class PostEmployerForm:
    def __init__(
        self,
        company_name: str = Form(...),
        location: str = Form(...),
        description: str = Form(...),
        website: str = Form(...),
        target_market: str = Form(...),
        vision: str = Form(...),
        contact_number: str = Form(...),
        contact_email: str = Form(...),
        contact_person: str = Form(...),
        logo: Optional[UploadFile] = File(None),
        established_date: Optional[str] = Form(None)
    ):
        self.company_name = company_name
        self.location = location
        self.description = description
        self.website = website
        self.target_market = target_market
        self.vision = vision
        self.contact_number = contact_number
        self.contact_email = contact_email
        self.contact_person = contact_person
        self.logo = logo
        self.established_date = established_date
