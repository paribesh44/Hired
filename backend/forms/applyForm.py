from datetime import datetime
from fastapi import File, UploadFile, Form
from typing import Optional


class ApplyForm:
    def __init__(
        self,
        description: str = Form(...),
        cv: Optional[UploadFile] = File(None),
        coverletter: Optional[UploadFile] = File(None),
        job_post_id: int = Form(...)
    ):
        self.description = description
        self.cv = cv
        self.coverletter = coverletter
        self.job_post_id = job_post_id
