from pydantic import BaseModel
from typing import List, Any


class TargetField(BaseModel):
    name: str
    languages: List[str] = []


class TargetFieldShow(BaseModel):
    id: int
    name: str

    class config():
        orm_mode = True