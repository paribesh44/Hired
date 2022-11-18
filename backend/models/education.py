from sqlalchemy import Column, Integer, String, ForeignKey, Date, Float
from core.database import Base
from sqlalchemy.orm import relationship


class Education(Base):
    __tablename__ = "educations"

    id = Column(Integer, primary_key=True, index=True)
    qualification = Column(String, nullable=True)
    graduating_institution = Column(String, nullable=True)
    graduating_year = Column(Date, nullable=True)
    major = Column(String, nullable=True)
    cgpa = Column(Float, nullable=True)

    seeker_id = Column(Integer,
                       ForeignKey("seekers.id", ondelete="CASCADE"),
                       nullable=True)

    seeker = relationship("Seeker", backref="education")
