from typing import List
from pydantic import Json
from datetime import datetime

applies: List[Json] = [
    {
        "description": "Hello honey",
        "cv": None,
        "status": "applied",
        "coverletter": None,
        "applied_date": datetime.utcnow(),
        "seeker_id": 1,
        "job_post_id": 1
    },
    {
        "description": "Hello bro",
        "cv": None,
        "status": "shortlisted",
        "coverletter": None,
        "applied_date": datetime.utcnow(),
        "seeker_id": 1,
        "job_post_id": 2
    },
    {
        "description": "second user bro",
        "cv": None,
        "status": "applied",
        "coverletter": None,
        "applied_date": datetime.utcnow(),
        "seeker_id": 2,
        "job_post_id": 1
    },
    {
        "description": "second second",
        "cv": None,
        "status": "interviewed",
        "coverletter": None,
        "applied_date": datetime.utcnow(),
        "seeker_id": 2,
        "job_post_id": 2
    }
]