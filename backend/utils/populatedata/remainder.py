from typing import List
from pydantic import Json
from datetime import datetime, date

remainders: List[Json] = [
    {
        "name": "Meeting with Seeker 1",
        "note": "Talk about his projects",
        "meet_link": "https://meet.google.com/abp-ndyy-ysd",
        "meeting_date": date(2022, 11, 26),
        "meeting_time": "10 pm",
        "publish_remainder": True,
        "seeker_name": "Job Seeker",
        "job_post_name": "ML engineer",
        "seeker_id": 1,
        "job_post_id": 1,
        "employer_id": 1
    },
    {
        "name": "Meeting with Seeker 2",
        "note": "Talk about his educations",
        "meeting_date": date(2022, 12, 26),
        "meeting_time": "9 am",
        "meet_link": "https://meet.google.com/egc-psum-vjy",
        "publish_remainder": True,
        "seeker_name": "Job Seeker2",
        "job_post_name": "Web developer",
        "seeker_id": 2,
        "job_post_id": 2,
        "employer_id": 2
    }
]