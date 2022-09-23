from pydantic import BaseModel
from typing import List


class Employer(BaseModel):
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
    logo: str

    class config:
        orm_mode = True
