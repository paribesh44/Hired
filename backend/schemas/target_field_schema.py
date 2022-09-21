from pydantic import BaseModel
from typing import List, Any, Optional


class TargetField(BaseModel):
    name: str
    languages: List[str] = []


class TargetFieldShow(BaseModel):
    id: int
    name: str

    class Config:
        orm_mode = True