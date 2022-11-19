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

    class Config:
        orm_mode = True