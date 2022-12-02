from typing import List
from pydantic import Json


seekers: List[Json] = [
    {
        "name": "Mahesh Shrestha",
        "age": 20,
        "address": "Banepa",
        "contactNumber": "9841234567",
        "write_about_you": "I am recent CS undergraduate with speciality in UI/UX Design and Python",
        "yearsOfExperience": 2,
        "student": False,
        "skills": ["css", "django"],
        "linkedIn": None,
        "website": None,
        "cv": "static/cv/Ch11.pdf",
        "githubProfile": None,
        "profilePhoto": None,
        "user_id": 1,
        "status": "Ready to interview"
    },
    {
        "name": "Sharmila Paudel",
        "age": 22,
        "address": "Kathmandu",
        "contactNumber": "9841234567",
        "write_about_you": "I am undergraduate student currently looking for internship or part- time job. I have a little experience in front end designing and development",
        "yearsOfExperience": 1,
        "student": True,
        "skills": ["ml", "dl"],
        "linkedIn": None,
        "website": None,
        "cv": "static/cv/cv_IshanPanta.pdf",
        "githubProfile": None,
        "profilePhoto": "static/profile_pictures/61cnxkyXH-L._AC_SS450_.jpg",
        "user_id": 2,
        "status": "Open to offer"
    },
    {
        "name": "Jack Lama",
        "age": 30,
        "address": "Kathmandu",
        "contactNumber": "9865425855",
        "write_about_you": "I have been working as a backend developer for 2 years before that I had worked as software developer for about 6 month",
        "yearsOfExperience": 7,
        "student": False,
        "skills": ["fastapi", "dl"],
        "linkedIn": None,
        "website": None,
        "cv": "static/cv/cv_IshanPanta.pdf",
        "githubProfile": None,
        "profilePhoto": None,
        "user_id": 3,
        "status": "Open to offer"
    }
]
