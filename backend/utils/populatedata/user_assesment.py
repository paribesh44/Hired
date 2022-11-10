from typing import List
from pydantic import Json
from datetime import datetime

user_assesments: List[Json] = [
    {
        "score": 18,
        "visibility": True,
        "accessed_date": datetime.utcnow(),
        "target_field_id": 1, 
        "seeker_id": 1,
        "chosen_answers": ["html", "js", "js"]
    },
    {
        "score": 20,
        "visibility": False,
        "accessed_date": datetime.utcnow(),
        "target_field_id": 2, 
        "seeker_id": 1,
        "chosen_answers": ["css", "jsx", "html"]
    },
    {
        "score": 10,
        "visibility": True,
        "accessed_date": datetime.utcnow(),
        "target_field_id": 1, 
        "seeker_id": 2,
        "chosen_answers": ["html", "js", "css"]
    },
    {
        "score": 14,
        "visibility": True,
        "accessed_date": datetime.utcnow(),
        "target_field_id": 2, 
        "seeker_id": 2,
        "chosen_answers": ["ml", "dl", "ai"]
    }
]