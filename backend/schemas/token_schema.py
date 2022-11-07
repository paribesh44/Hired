from pydantic import BaseModel
from typing import Union, List

# This Pydantic Model will be used in the token endpoint for the response.


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: Union[str, None] = None


class EmailTokenData(BaseModel):
    user_id: Union[int, None] = None
