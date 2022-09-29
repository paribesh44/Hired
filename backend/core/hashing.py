from urllib import request
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


class Hash():
    def bcrypt(password: str):
        return pwd_context.hash(password)

    def verify_password(plain_password: str, hased_password: str):
        return pwd_context.verify(plain_password, hased_password)
