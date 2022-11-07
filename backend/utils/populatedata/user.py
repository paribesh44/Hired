from typing import List
from pydantic import Json
import datetime

users: List[Json] = [
    {
        "email": "jobseeker@gmail.com",
        "password": "password",
        "is_verified": True,
        "user_type": 1,
        "created_date": datetime.datetime.utcnow(),
        "last_login": None,
    },
    {
        "email": "jobseeker2@gmail.com",
        "password": "password",
        "is_verified": True,
        "user_type": 1,
        "created_date": datetime.datetime.utcnow(),
        "last_login": None,
    },
    {
        "email": "companies@gmail.com",
        "password": "password",
        "is_verified": True,
        "user_type": 2,
        "created_date": datetime.datetime.utcnow(),
        "last_login": None,
    },
    {
        "email": "companies2@gmail.com",
        "password": "password",
        "is_verified": True,
        "user_type": 2,
        "created_date": datetime.datetime.utcnow(),
        "last_login": None,
    }
]