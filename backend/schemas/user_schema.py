from datetime import datetime
from pydantic import BaseModel
# from seeker_schemas import Seeker


class User(BaseModel):
    email: str
    password: str
    created_date: datetime


class ShowUser(BaseModel):
    email: str
    user_type: int

    # seeker: Seeker

    class config:
        orm_mode = True


class ShowUserSeeker(BaseModel):
    email: str
    user_type: int

    class config:
        orm_mode = True
