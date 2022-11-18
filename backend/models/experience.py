from sqlalchemy import Column, Integer, String, ForeignKey, Date, Boolean, ARRAY, Text
from core.database import Base
from sqlalchemy.orm import relationship


# a person could have multiple experince so this is one to many. For a job seeker there could be multiple experiences.
class Experience(Base):
    __tablename__ = "experience"

    id = Column(Integer, primary_key=True, index=True)
    workPlace = Column(String(50), nullable=True)
    yearsOfWork = Column(Integer, nullable=True)
    # may be make job title list
    jobTitle = Column(String(50), nullable=True)
    jobStartDate = Column(Date, nullable=True)
    jobEndDate = Column(Date, nullable=True)
    field = Column(ARRAY(String), nullable=True)

    seeker_id = Column(Integer,
                       ForeignKey("seekers.id", ondelete="CASCADE"),
                       nullable=True)

    seeker = relationship("Seeker", backref="experience")
