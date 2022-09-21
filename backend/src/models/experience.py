from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean, ARRAY, Text
from ..database import Base
from sqlalchemy.orm import relationship


# a person could have multiple experince so this is one to many. For a job seeker there could be multiple experiences.
class Experience(Base):
    __tablename__ = "experience"

    id = Column(Integer, primary_key=True, index=True)
    workPlace = Column(String(50), nullable=True)
    yearsOfExperience = Column(Integer, nullable=True)
    # may be make job title list
    jobTitle = Column(String(50), nullable=True)
    jobStartDate = Column(DateTime, nullable=True)
    jobEndDate = Column(DateTime, nullable=True)
    field = Column(ARRAY(String), nullable=True)

    seeker_id = Column(Integer,
                       ForeignKey("seekers.id", ondelete="CASCADE"),
                       nullable=True)

    seeker = relationship("Seeker", backref="experience")
