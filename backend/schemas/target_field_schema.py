from pydantic import BaseModel
from typing import List


class TargetField(BaseModel):
    name: str
    languages: List[str] = []
    difficulty: str

    class Config:
        orm_mode = True


class TargetFieldShow(TargetField):
    from schemas.mcq_schema import MCQShow
    mcq: List[MCQShow] = []

    class Config:
        orm_mode = True