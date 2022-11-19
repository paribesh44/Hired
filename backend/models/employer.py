from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Date, Boolean, ARRAY, Text
from core.database import Base
from sqlalchemy.orm import relationship


class Employer(Base):
    __tablename__ = "employers"

    id = Column(Integer, primary_key=True, index=True)
    companyName = Column(String, nullable=False)
    location = Column(String, nullable=False)
    contactNumber = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    website = Column(String)
    targetMarket = Column(ARRAY(String))
    vision = Column(Text, nullable=False)
    contactEmail = Column(String)
    contactPerson = Column(String)
    logo = Column(String, nullable=True)
    established_date = Column(Date, nullable=True)

    user_id = Column(Integer,
                     ForeignKey("users.id", ondelete="CASCADE"),
                     nullable=True)

    user = relationship("User", backref="employer")
