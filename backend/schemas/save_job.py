from pydantic import BaseModel
from typing import List
from datetime import datetime
# from user_schema import ShowUserSeeker


class SaveJob(BaseModel):
    save: bool

    class config:
        orm_mode = True
