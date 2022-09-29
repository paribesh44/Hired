from pydantic import BaseModel
from typing import List


class MCQ(BaseModel):
    question: str
    answers: List[str] = []
    correct_answer: str

    class config():
        orm_mode = True