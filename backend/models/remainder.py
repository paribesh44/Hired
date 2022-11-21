from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Float, null, Text, Date, Boolean
from core.database import Base
from sqlalchemy.orm import relationship
import datetime


class Remainder(Base):
    __tablename__ = "remainders"

    id = Column(Integer, primary_key=True, index=True)
    # name of remainder
    name = Column(String, nullable=True)
    note = Column(Text, nullable=True)
    meet_link = Column(String(50), nullable=True)
    meeting_date = Column(Date, nullable=True)
    meeting_time = Column(String, nullable=True)
    # whether to show the remainder to seeker or not.
    publish_remainder = Column(Boolean, default=False)
    seeker_name = Column(String, nullable=True)
    job_post_name = Column(String, nullable=True)

    seeker_id = Column(Integer,
                       ForeignKey("seekers.id", ondelete="CASCADE"))
    job_post_id = Column(Integer, ForeignKey(
        "jobposts.id", ondelete="CASCADE"))

    employer_id = Column(Integer,
                         ForeignKey("employers.id", ondelete="CASCADE"),
                         nullable=True)

    employer = relationship("Employer", backref="remainder")

    seeker = relationship("Seeker", backref="remainder")
    job_post = relationship("JobPost", backref="remainder")
