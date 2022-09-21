from fastapi import Depends, HTTPException, status, Cookie
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError

from .models import user
from .schemas import token_schema
from sqlalchemy.orm import Session
from . import database
from .core import keys

SECRET_KEY = keys.Settings.JWTtokenKeys.SECRET_KEY
ALGORITHM = keys.Settings.JWTtokenKeys.ALGORITHM


# "login" is the url from where the fastapi will fetch the token.
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")


def get_user(email: str, db):
    hired_user = db.query(user.User).filter(user.User.email == email).first()

    return hired_user


def get_current_user(hiredToken: str = Cookie(None), db: Session = Depends(database.get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    if not hiredToken:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="User is not logged in!")
    try:
        payload = jwt.decode(hiredToken, SECRET_KEY, algorithms=[ALGORITHM])
        # if decoding is successfull
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
        token_data = token_schema.TokenData(email=email)
    except JWTError:
        raise credentials_exception
    hired_user = get_user(email=token_data.email, db=db)
    if hired_user is None:
        raise credentials_exception
    return hired_user


# function which return the current_user if the user is job seeker
def get_user_job_seeker(current_user: user.User = Depends(get_current_user)):
    if current_user.user_type == keys.Settings.UserType.JOBSEEKER.value:
        return current_user
    else:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Companies not allowed.")


# function which return the current_user if the user is companies
def get_user_companies(current_user: user.User = Depends(get_current_user)):
    if current_user.user_type == keys.Settings.UserType.COMPANIES.value:
        return current_user
    else:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Job Seeker not allowed.")


async def verify_token(token: str, db):
    hired_user = None
    if token:
        try:
            payload = jwt.decode(
                token, SECRET_KEY, algorithms=[ALGORITHM])
            # if decoding is successfull
            email: str = payload.get("sub")
            token_data = token_schema.TokenData(email=email)
            hired_user = db.query(user.User).filter(
                user.User.email == token_data.email).first()
        except:
            hired_user = None
    return hired_user
