from datetime import datetime
from pydantic import BaseModel


class UserAssesment(BaseModel):
    score: int
    visibility: bool
    accessed_date: datetime