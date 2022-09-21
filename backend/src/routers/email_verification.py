from fastapi import APIRouter, status, HTTPException, Request, Depends
from fastapi.responses import HTMLResponse
from starlette.responses import RedirectResponse

from ..models import user

from src import oauth2
from .. import database
from ..core import keys
from jose import jwt
from fastapi.templating import Jinja2Templates
from sqlalchemy.orm import Session


router = APIRouter()


# template for email verification
templates = Jinja2Templates(directory="src/templates")


@router.get("/verify",  response_class=HTMLResponse)
async def email_verification(request: Request, token: str, db: Session = Depends(database.get_db)):
    hired_user = await oauth2.verify_token(token, db=db)
    if hired_user and not hired_user.is_verified:
        await update_verification_status(hired_user.id, db=db)
        return templates.TemplateResponse("after-verification.html",
                                          {"request": request,
                                           "email": hired_user.email}
                                          )
        # response = RedirectResponse(url="localhost:8000/verified/{user.id}")
        # return response
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid or expired token",
        headers={"WWW-Authenticate": "Bearer"},
    )


# update the blog post
# @router.put("/verified/{id}", status_code=status.HTTP_202_ACCEPTED)
async def update_verification_status(id: int, db):
    hired_user = db.query(user.User).filter(user.User.id == id)
    if not hired_user.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Blog with the id {id} is not avaiable.")
    hired_user.update({"is_verified": True})
    db.commit()

    return "successfully updated."
