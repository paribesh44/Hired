from typing import List
from pydantic import Json
from datetime import datetime

educations: List[Json] = [
    {
        "qualification": "Bachlors",
        "graduating_institution": "Kathmandu University",
        "graduating_year": datetime(2023, 1, 1, 0, 00, 00),
        "major": "Computer Science",
        "cgpa": 3.94,
        "seeker_id": 1
    },
    {
        "qualification": "Bachlors",
        "graduating_institution": "Pokhara University",
        "graduating_year": datetime(2023, 1, 1, 0, 00, 00),
        "major": "Computer Engineering",
        "cgpa": 3.25,
        "seeker_id": 2
    }
]