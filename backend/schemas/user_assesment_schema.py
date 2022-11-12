from datetime import datetime
from pydantic import BaseModel
from typing import List, Optional
from schemas.target_field_schema import TargetField


class UserAssesment(BaseModel):
    id: int
    score: int
    visibility: bool
    accessed_date: datetime
    chosen_answers: List[str] = []
    target_field_id: int

    class Config:
        orm_mode = True

class MCQResultSchema(BaseModel):
    # target_field_id: props.target_field_id, chosen_answers: chosenn}
    target_field_id: int
    chosen_answers: List[str]

class UserAssesmentTargetField(UserAssesment):
    target_field: Optional[TargetField]

    class Config:
        orm_mode = True