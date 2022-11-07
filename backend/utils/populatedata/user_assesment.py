from typing import List
from pydantic import Json
from datetime import datetime

user_assesments: List[Json] = [
    {
        # "choosen_answer": [],
        "score": 18,
        "visibility": True,
        "accessed_date": datetime.utcnow(),
        "target_field_id": 1, 
        "seeker_id": 1
    },
    {
        "score": 20,
        "visibility": False,
        "accessed_date": datetime.utcnow(),
        "target_field_id": 2, 
        "seeker_id": 1
    },
    {
        "score": 10,
        "visibility": True,
        "accessed_date": datetime.utcnow(),
        "target_field_id": 1, 
        "seeker_id": 2
    },
    {
        "score": 14,
        "visibility": True,
        "accessed_date": datetime.utcnow(),
        "target_field_id": 2, 
        "seeker_id": 2
    }
]