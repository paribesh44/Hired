import shutil
from fastapi import Depends, HTTPException, status, Response, UploadFile, File
from sqlalchemy.orm import Session
from typing import List

from schemas.user_schema import User, ShowUser
from models import user
from schemas import authentication_schema

from core import JWTtokens
from core import database, hashing, oauth2

from fastapi import APIRouter
from utils import utils

router = APIRouter(
    tags=['User']
)


# Create a new user
@router.post("/signup/{user_type}", status_code=status.HTTP_201_CREATED)
async def Signup(user_type: int, data: authentication_schema.SignUp, response: Response, db: Session = Depends(database.get_db)):
    login_process = None
    # check if the user with that email previously exits or not
    user_exists = db.query(user.User).filter(
        user.User.email == data.email).first()

    # save the user to the database only if the user priously donot exists.
    if not user_exists:
        new_user = user.User(user_type=data.user_type, email=data.email,
                             password=hashing.Hash.bcrypt(data.password))
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        login_process = "success"
    else:
        raise HTTPException(status_code=status.HTTP_417_EXPECTATION_FAILED,
                            detail=f"Already exist")

    if (login_process == "success"):
        # after the user has been created get the token and save it in the cookies
        access_token = JWTtokens.create_access_token(
            data={"sub": new_user.email})
        response.set_cookie("hiredToken", access_token)

        await utils.send_verification_email(new_user)

    return {"user": new_user, "msg": "Success"}


# show user with certain user id; only job seeker can view this
@router.get("/show_user/{id}", status_code=status.HTTP_200_OK)
# , current_user: models.User = Depends(oauth2.get_user_job_seeker)
def show(id: int, db: Session = Depends(database.get_db)):
    hired_user = db.query(user.User).filter(user.User.id == id).first()

    if not hired_user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"User with the id {id} is not avaiable.")
    return {"email": hired_user.email, "seeker": hired_user.seeker}
    # return hired_user


# Only companies can view this
@router.get("/companies", status_code=status.HTTP_200_OK)
async def show(current_user: user.User = Depends(oauth2.get_user_companies)):
    return {"msg": "Welcome Companies"}



@router.post("/cv")
async def post_cv(file: UploadFile = File(...)):
    file_location = f"static/cv/{file.filename}"
    with open(file_location, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {"info": f"file '{file.filename}' saved at '{file_location}'"}


# upload mutiple files
@router.post("/multiple-images")
async def post_cv(files: List[UploadFile] = File(...)):
    for img in files:
        file_location = f"static/profile_pictures/{img.filename}"
        with open(file_location, "wb") as buffer:
            shutil.copyfileobj(img.file, buffer)

    return {"info": "success"}
