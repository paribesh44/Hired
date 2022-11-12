from typing import List
from pydantic import Json

savePosts: List[Json] = [
    {
        "save": True,
        "seeker_id": 1,
        "job_post_id": 1
    },
    {
        "save": False,
        "seeker_id": 1,
        "job_post_id": 2
    },
    {
        "save": True,
        "seeker_id": 2,
        "job_post_id": 2
    },
    {
        "save": True,
        "seeker_id": 2,
        "job_post_id": 1
    },
]