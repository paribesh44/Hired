from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Float, Text, ARRAY
from core.database import Base
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import INT4RANGE
import datetime


# one to many
# for this one create a predefined format for the things like description, job_responsibilities, job_benefits. (In frontend)
class JobPost(Base):
    __tablename__ = "jobposts"

    id = Column(Integer, primary_key=True, index=True)
    job = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    job_location = Column(String, nullable=False)
    # Senior, junior, etc.
    job_level = Column(String, nullable=False)
    # permanent, temporary, contact, intership
    job_type = Column(String, nullable=False)
    # responsiblities and roles are the same
    job_responsibilities = Column(ARRAY(Text), nullable=False)
    skills = Column(ARRAY(String), nullable=False)
    minimum_years_of_experience = Column(Integer, nullable=False)
    education_required = Column(String, nullable=False)
    no_of_vacancy = Column(Integer, nullable=False)
    work_hours = Column(String, nullable=False)
    min_salary = Column(Integer, nullable=False)
    max_salary = Column(Integer, nullable=False)
    job_benefits = Column(ARRAY(String), nullable=False)
    job_start_date = Column(DateTime, nullable=True)
    deadline = Column(DateTime, nullable=False)
    remote_onsite = Column(String, nullable=False)
    # (draft, pending, published) -> controlled by admin

    status_of_jobs = Column(String, nullable=False)
    posted_date = Column(DateTime, default=datetime.datetime.utcnow)
    employer_id = Column(Integer,
                         ForeignKey("employers.id", ondelete="CASCADE"),
                         nullable=True)

    employer = relationship("Employer", backref="jobpost")
