from pydantic import BaseModel
from typing import List


class TargetField(BaseModel):
    name: str
    languages: List[str] = []

    class config():
        orm_mode = True