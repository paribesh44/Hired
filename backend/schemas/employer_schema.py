from pydantic import BaseModel
from typing import List, Optional

a = {'id': 1, 'contactNumber': '985231256', 'requiredRoles': ['ml', 'dl', 'ai'], 'targetMarket': ['ai'], 'vision': 'we lack vision', 'contactPerson': 'Undertaker', 'user_id': 3, 'companyName': 'kusewa pvt ltd', 'location': 'Kathmandu', 'description': 'We do not pay our employees.', 'website': 'kusewa@gmail.com', 'contactEmail': 'contact.kusewa@gmail.com', 'logo': None}

class Employer(BaseModel):
    id: int
    companyName: str
    location: str
    contactNumber: str
    description: str
    requiredRoles: List[str] = []
    website: str
    targetMarket: List[str] = []
    vision: str
    contactEmail: str
    contactPerson: str
    logo: Optional[str]

    class Config:
        orm_mode = True
