from pydantic import BaseModel
from typing import List


class MCQ(BaseModel):
    # from schemas.target_field_schema import TargetField

    question: str
    answers: List[str] = []
    correct_answer: str
    # target_field: TargetField

    class Config:
        orm_mode = True


class MCQShow(BaseModel):
    question: str
    answers: List[str] = []

    class Config:
        orm_mode = True