from sqlalchemy import Column, Integer, ForeignKey, Boolean
from core.database import Base
from sqlalchemy.orm import relationship


class SaveJob(Base):
    __tablename__ = "save_job"

    id = Column(Integer, primary_key=True, index=True)
    save = Column(Boolean, default= False)

    seeker_id = Column(Integer,
                       ForeignKey("seekers.id", ondelete="CASCADE"))
    job_post_id = Column(Integer, ForeignKey(
        "jobposts.id", ondelete="CASCADE"))

    seeker = relationship("Seeker", backref="save_job")
    job_post = relationship("JobPost", backref="save_job")
