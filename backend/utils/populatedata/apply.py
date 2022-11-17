from typing import List
from pydantic import Json
from datetime import datetime

applies: List[Json] = [
    {
        "description": "Hello honey",
        "cv": "static/cv/cv_IshanPanta.pdf",
        "status": "applied",
        "coverletter": "static/cover_letter/Ch11.pdf",
        "applied_date": datetime.utcnow(),
        "seeker_id": 1,
        "job_post_id": 1
    },
    {
        "description": "Hello bro",
        "cv": "static/cv/cv_IshanPanta.pdf",
        "status": "shortlisted",
        "coverletter": "static/cover_letter/Ch12.pdf",
        "applied_date": datetime.utcnow(),
        "seeker_id": 1,
        "job_post_id": 2
    },
    {
        "description": "second user bro",
        "cv": "static/cv/cv_Ishansharma.pdf",
        "status": "interview",
        "coverletter": "static/cover_letter/FDE.pdf",
        "applied_date": datetime.utcnow(),
        "seeker_id": 2,
        "job_post_id": 1
    },
    {
        "description": "second second",
        "cv": "static/cv/cv-professional.pdf",
        "status": "interviewed",
        "coverletter": "static/cover_letter/ch8.pdf",
        "applied_date": datetime.utcnow(),
        "seeker_id": 2,
        "job_post_id": 2
    }
]