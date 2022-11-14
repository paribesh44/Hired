from datetime import date
from pydantic import BaseModel


class Login(BaseModel):
    email: str
    password: str

    class Config:
        orm_mode = True

class SignUp(BaseModel):
    email: str
    password: str
    user_type: int

    class Config:
        orm_mode = True