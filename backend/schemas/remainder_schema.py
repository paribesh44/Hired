from pydantic import BaseModel
from typing import List, Optional
from datetime import date, datetime

class Remainder(BaseModel):
    name: Optional[str]
    note: Optional[str]
    meet_link: Optional[str]
    meeting_date: Optional[date]
    meeting_time: Optional[str]
    publish_remainder: bool
    seeker_name: str
    job_post_name: str

    class Config:
        orm_mode = True

class PostRemainder(BaseModel):
    name: Optional[str]
    note: Optional[str]
    meet_link: Optional[str]
    meeting_date: Optional[datetime]
    meeting_time: Optional[str]
    seeker_name: str
    job_post_name: str
    seeker_id: int
    job_post_id: int

    class Config:
        orm_mode = True

class ChangePublishRemainder(BaseModel):
    publish: bool

    class Config:
        orm_mode = True