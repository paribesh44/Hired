from typing import List
from pydantic import Json
from datetime import date

employers: List[Json] = [
    {
        "companyName": "kusewa pvt ltd",
        "location": "Kathmandu",
        "contactNumber": "985231256",
        "description": "We do not pay our employees.",
        "website": "kusewa@gmail.com",
        "targetMarket": ["ai"],
        "vision": "we lack vision",
        "contactEmail": "contact.kusewa@gmail.com",
        "contactPerson": "Undertaker",
        "logo": "static/logos/logo.png",
        "established_date": date(2019, 2, 10),
        "user_id": 3
    },
    {
        "companyName": "technepal pvt ltd",
        "location": "banepa",
        "contactNumber": "98523467",
        "description": "We are the best",
        "website": "technepal@gmail.com",
        "targetMarket": ["website", "mobile"],
        "vision": "No vision",
        "contactEmail": "contact.technepal@gmail.com",
        "contactPerson": "John Cena",
        "established_date": date(2018, 4, 10),
        "logo": "static/logos/logo.png",
        "user_id": 4
    }
]