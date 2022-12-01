from typing import List
from pydantic import Json
from datetime import date

employers: List[Json] = [
    {
        "companyName": "KUSewa PVT LTD. ",
        "location": "Kathmandu",
        "contactNumber": "985231256",
        "description": "We are a digital company that is dedicated to provide easy and efficient digital services to our customers. We also consider our collegues our family and have a homely environment at work",
        "website": "kusewa@gmail.com",
        "targetMarket": ["ai", "ml", "digital"],
        "vision": "Digital approach for daily life",
        "contactEmail": "contact.kusewa@gmail.com",
        "contactPerson": "Mukesh Yadav",
        "logo": "static/logos/logo.png",
        "established_date": date(2019, 2, 10),
        "user_id": 3
    },
    {
        "companyName": "TechNepal PVT LTD.",
        "location": "Banepa",
        "contactNumber": "98523467",
        "description": "We are online IT based company established in 2018 A.D. ",
        "website": "technepal@gmail.com",
        "targetMarket": ["website", "mobile"],
        "vision": "Provide effective and affordable digital service to all",
        "contactEmail": "contact.technepal@gmail.com",
        "contactPerson": "Ms. Reema Basnet",
        "established_date": date(2018, 4, 10),
        "logo": "static/logos/logo.png",
        "user_id": 4
    },
    # {
    #     "companyName": "TechnoLab Nepal",
    #     "location": "Banepa",
    #     "contactNumber": "98523467",
    #     "description": "We are online IT based company established in 2018 A.D. ",
    #     "website": "technepal@gmail.com",
    #     "targetMarket": ["website", "mobile"],
    #     "vision": "Provide effective and affordable digital service to all",
    #     "contactEmail": "contact.technepal@gmail.com",
    #     "contactPerson": "Ms. Reema Basnet",
    #     "established_date": date(2018, 4, 10),
    #     "logo": "static/logos/logo.png",
    #     "user_id": 5
    # }
]
