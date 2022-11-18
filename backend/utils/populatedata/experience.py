from typing import List
from pydantic import Json
from datetime import date


experiences: List[Json] = [
    {
        "workPlace": "yomari",
        "yearsOfWork": 2,
        "jobTitle": "website developer",
        "jobStartDate": date(2019, 2, 10),
        "jobEndDate": date(2021, 1, 30),
        "field": ["React", "Django"],
        "seeker_id": 1
    },
    {
        "workPlace": "esewa",
        "yearsOfWork": 1,
        "jobTitle": "website developer",
        "jobStartDate": date(2021, 3, 10),
        "jobEndDate": date(2022, 5, 20),
        "field": ["React", "FastAPI", "Angular"],
        "seeker_id": 1
    },
    {
        "workPlace": "fusemachine",
        "yearsOfWork": 2,
        "jobTitle": "ml engineer",
        "jobStartDate": date(2018, 4, 12),
        "jobEndDate": date(2020, 1, 30),
        "field": ["ml", "MLOps"],
        "seeker_id": 2
    },
    {
        "workPlace": "google",
        "yearsOfWork": 1,
        "jobTitle": "website developer",
        "jobStartDate": date(2020, 3, 5),
        "jobEndDate": date(2021, 6, 30),
        "field": ["ml", "dl"],
        "seeker_id": 2
    }
]