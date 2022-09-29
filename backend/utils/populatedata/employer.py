from typing import List
from pydantic import Json

employers: List[Json] = [
    {
        "companyName": "kusewa pvt ltd",
        "location": "Kathmandu",
        "contactNumber": "985231256",
        "description": "We do not pay our employees.",
        "requiredRoles": ["ml", "dl", "ai"],
        "website": "kusewa@gmail.com",
        "targetMarket": ["ai"],
        "vision": "we lack vision",
        "contactEmail": "contact.kusewa@gmail.com",
        "contactPerson": "Undertaker",
        "logo": None,
        "user_id": 3
    },
    {
        "companyName": "technepal pvt ltd",
        "location": "banepa",
        "contactNumber": "98523467",
        "description": "We are the best",
        "requiredRoles": ["website developer", "mobile developer"],
        "website": "technepal@gmail.com",
        "targetMarket": ["website", "mobile"],
        "vision": "No vision",
        "contactEmail": "contact.technepal@gmail.com",
        "contactPerson": "John Cena",
        "logo": None,
        "user_id": 4
    }
]