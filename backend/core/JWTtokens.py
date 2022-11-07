# JWT -> JSON Web Tokens
# It's a standard to codify a JSON object in a long dense string without spaces.
from datetime import datetime, timedelta
from typing import Union
from jose import jwt

# to get a string like this run:
# openssl rand -hex 32
SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_HOURS = 24


# NOTE: we need to generate token to protect some of the route behind the token.
# Meaning we want logined user to access the profile page if not logned in then the user is not authorized.
# to access the page.

# NOTE: we have used this function in '/login'.
# to generate access token
def create_access_token(data: dict, expires_delta: Union[timedelta, None] = None):
    # getting the email from the '/login'
    to_encode = data.copy()
    # set the expiry time
    # if expiry time is provided.
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    # if expiry time is not provided then set it to 15 min.
    else:
        expire = datetime.utcnow() + timedelta(hours=ACCESS_TOKEN_EXPIRE_HOURS)
    # we are adding the expiration to the data (i.e. email) we are getting
    to_encode.update({"exp": expire, "iat": datetime.utcnow()})
    # finally encoding
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt
