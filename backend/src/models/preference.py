from sqlalchemy import Column, Integer, String, ForeignKey, ARRAY
from ..database import Base
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import INT4RANGE


# one to one relationships
class Preference(Base):
    __tablename__ = "preferences"

    id = Column(Integer, primary_key=True, index=True)
    expected_min_salary = Column(Integer, nullable=False)
    expected_max_salary = Column(Integer, nullable=False)
    preferred_location = Column(ARRAY(String), nullable=False)
    interested_jobs = Column(ARRAY(String), nullable=False)
    preferred_job_skills = Column(ARRAY(String), nullable=False)
    # values is either "remote" or "onsite"
    remote_onsite = Column(String, nullable=False)
    available_hours = Column(String, nullable=True)

    seeker_id = Column(Integer,
                       ForeignKey("seekers.id", ondelete="CASCADE"),
                       nullable=True)

    seeker = relationship("Seeker", backref="preference")
