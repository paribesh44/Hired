from datetime import date, datetime
from pydantic import BaseModel
from typing import List, Optional


class Apply(BaseModel):
    id: Optional[int]
    description: Optional[str]
    cv: Optional[str]
    status: Optional[str]
    coverletter: Optional[str]
    applied_date: Optional[date]

    class Config:
        orm_mode = True