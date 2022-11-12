from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Float, null
from core.database import Base
from sqlalchemy.orm import relationship
import datetime


class Apply(Base):
    __tablename__ = "apply"

    id = Column(Integer, primary_key=True, index=True)
    # why should we hire you?
    description = Column(String, nullable=False)
    cv = Column(String, nullable=True)
    # applied, shortlisted, interviewed, selected, etc.
    status = Column(String, nullable=False)
    coverletter = Column(String, nullable=True)
    applied_date = Column(DateTime, default=datetime.datetime.utcnow)

    seeker_id = Column(Integer,
                       ForeignKey("seekers.id", ondelete="CASCADE"))
    job_post_id = Column(Integer, ForeignKey(
        "jobposts.id", ondelete="CASCADE"))

    seeker = relationship("Seeker", backref="apply")
    job_post = relationship("JobPost", backref="apply")
