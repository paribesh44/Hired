from fastapi import APIRouter, FastAPI, Depends, Response, Cookie
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from jose import jwt

from starlette.config import Config
from authlib.integrations.starlette_client import OAuth
from starlette.middleware.sessions import SessionMiddleware
# from fastapi import Request
from starlette.requests import Request
from starlette.responses import RedirectResponse, HTMLResponse
from authlib.integrations.starlette_client import OAuthError

from models import user

from core import JWTtokens
from core import database, hashing, oauth2
from core import keys
from utils import utils

router = APIRouter(
    tags=["Google Authentication"]
)

# OAuth settings
GOOGLE_CLIENT_ID = keys.Settings.GoogleAuthKeys.GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET = keys.Settings.GoogleAuthKeys.GOOGLE_CLIENT_SECRET
if GOOGLE_CLIENT_ID is None or GOOGLE_CLIENT_SECRET is None:
    raise BaseException('Missing env variables')

# jwt token keys
SECRET_KEY = keys.Settings.JWTtokenKeys.SECRET_KEY
ALGORITHM = keys.Settings.JWTtokenKeys.ALGORITHM

# SECRET_KEY = "KWn54X_xI9xAOc1c6AWDAwD-JMURBTutRDt3aNbA"

# # middleware
# # router.add_middleware(SessionMiddleware, secret_key=SECRET_KEY)

# Set up oauth
config_data = {'GOOGLE_CLIENT_ID': GOOGLE_CLIENT_ID,
               'GOOGLE_CLIENT_SECRET': GOOGLE_CLIENT_SECRET}
starlette_config = Config(environ=config_data)
oauth = OAuth(starlette_config)
oauth.register(
    name='google',
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={'scope': 'openid email profile'},
)


@router.get('/')
async def homepage(hiredToken: str = Cookie(None), db: Session = Depends(database.get_db)):
    # check if the there is token in cookies or not.
    # if cookies exits: then check if the email in the token is present in the database.
    # else cookies not exits: then check display login only
    hired_user = await oauth2.verify_token(hiredToken, db=db)
    # print(keys.Settings.UserType.COMPANIES.value)
    # user = oauth2.get_current_user(session, db)

    if hired_user:
        # email verification only send if the user is not verified. (i.e. is_verified:false)
        if not hired_user.is_verified:
            pass
            await utils.send_verification_email(hired_user)
        return HTMLResponse(f'<p>Hello {hired_user.id} {hired_user.email}!</p><a href=/logout>logout</a>')
    return HTMLResponse('<a href=/google-login>Google Login</a>')


# Tag it as "authentication" for our docs
@router.get('/google-login')
async def login(request: Request):
    # Redirect Google OAuth back to our application
    redirect_uri = request.url_for('auth')

    return await oauth.google.authorize_redirect(request, redirect_uri)


@router.get('/auth')
async def auth(request: Request, db: Session = Depends(database.get_db)):
    response = RedirectResponse(url="/")
    try:
        # Perform Google OAuth
        token = await oauth.google.authorize_access_token(request)
        # print(token)
    except OAuthError:
        return response

    # check if this user exits previously or not.
    hired_user = db.query(user.User).filter(
        user.User.email == token["userinfo"]["email"]).first()

    # if the user doesnot exists then create a new user
    if hired_user == None:
        new_google_user = user.User(
            user_type=1, email=token["userinfo"]["email"])
        print(jsonable_encoder(new_google_user))
        db.add(new_google_user)
        db.commit()
        db.refresh(new_google_user)

    access_token = JWTtokens.create_access_token(
        data={"sub": token["userinfo"]["email"]})
    response.set_cookie("hiredToken", access_token)

    return response


@router.get('/logout')
async def googleLogout():
    response = RedirectResponse(url="/")
    # Remove the user
    response.delete_cookie("hiredToken")

    return response
