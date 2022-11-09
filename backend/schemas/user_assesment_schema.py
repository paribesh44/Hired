from datetime import datetime
from pydantic import BaseModel
from typing import List


class UserAssesment(BaseModel):
    score: int
    visibility: bool
    accessed_date: datetime
    chosen_answers: List[str] = []