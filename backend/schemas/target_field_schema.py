from pydantic import BaseModel
from typing import List, Any


class TargetField(BaseModel):
    name: str
    languages: List[str] = []


class TargetFieldShow(BaseModel):
    name: Any

    class config():
        orm_mode = True