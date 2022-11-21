from datetime import date, datetime
from pydantic import BaseModel
from typing import List, Optional
from schemas.seeker_schema import ShowSeeker


class Apply(BaseModel):
    id: Optional[int]
    description: Optional[str]
    cv: Optional[str]
    status: Optional[str]
    coverletter: Optional[str]
    applied_date: Optional[date]

    class Config:
        orm_mode = True

class RemainderApplySeeker(Apply):
    seeker: ShowSeeker

    class Config:
        orm_mode = True

class ApplySeeker(Apply):
    seeker: ShowSeeker

    from schemas.job_post_schema import JobPostShow
    job_post: JobPostShow

    class Config:
        orm_mode = True


class ApplyJobPost(BaseModel):
    id: Optional[int]
    description: Optional[str]
    cv: Optional[str]
    status: Optional[str]
    coverletter: Optional[str]
    applied_date: Optional[date]

    from schemas.job_post_schema import JobPostShow
    job_post: JobPostShow

    class Config:
        orm_mode = True

class UpdateStatus(BaseModel):
    status: str

    class Config:
        orm_mode = True