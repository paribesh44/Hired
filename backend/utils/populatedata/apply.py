from typing import List
from pydantic import Json
from datetime import datetime

applies: List[Json] = [
    {
        "description": "I think I am the perfect candidate to this post because i have 2 years experience in the field and I am someone who is always willing to learn",
        "cv": "static/cv/cv_IshanPanta.pdf",
        "status": "interview",
        "coverletter": "static/cover_letter/Ch11.pdf",
        "applied_date": datetime.utcnow(),
        "seeker_id": 1,
        "job_post_id": 1
    },
    {
        "description": "I have  a recent experience in this field.",
        "cv": "static/cv/cv_IshanPanta.pdf",
        "status": "shortlisted",
        "coverletter": "static/cover_letter/Ch12.pdf",
        "applied_date": datetime.utcnow(),
        "seeker_id": 1,
        "job_post_id": 2
    },
    {
        "description": "I think I am the perfect candidate to this post because i have 2 years experience in the field and I am someone who is always willing to learn",
        "cv": "static/cv/cv_Ishansharma.pdf",
        "status": "interviewed",
        "coverletter": "static/cover_letter/FDE.pdf",
        "applied_date": datetime.utcnow(),
        "seeker_id": 2,
        "job_post_id": 1
    },
    {
        "description": "I think I am the perfect candidate to this post because i have 2 years experience in the field and I am someone who is always willing to learn",
        "cv": "static/cv/cv-professional.pdf",
        "status": "interview",
        "coverletter": "static/cover_letter/ch8.pdf",
        "applied_date": datetime.utcnow(),
        "seeker_id": 2,
        "job_post_id": 2
    }
]
