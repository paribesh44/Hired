from datetime import datetime
from fastapi import File, UploadFile, Form
from typing import Optional


class ApplyForm:
    def __init__(
        self,
        description: str = Form(...),
        status: str = Form(...),
        cv: Optional[UploadFile] = File(None),
        coverletter: Optional[UploadFile] = File(None),
        applied_date: Optional[datetime] = Form(None)
    ):
        self.description = description
        self.status = status
        self.cv = cv
        self.coverletter = coverletter
        self.applied_date = applied_date
