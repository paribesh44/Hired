from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean, ARRAY
from core.database import Base
from sqlalchemy.orm import relationship
import datetime


class UserAssesment(Base):
    __tablename__ = "user_assesment"

    id = Column(Integer, primary_key=True, index=True)
    score = Column(Integer, nullable=True)
    visibility = Column(Boolean, default=True)
    accessed_date = Column(DateTime, default=datetime.datetime.utcnow)

    target_field_id = Column(Integer,
                     ForeignKey("target_fields.id", ondelete="CASCADE"),
                     nullable=True)

    seeker_id = Column(Integer,
                       ForeignKey("seekers.id", ondelete="CASCADE"),
                       nullable=True)

    seeker = relationship("Seeker", backref="userAssesment")

    target_field = relationship("TargetField", backref="userAssesment")
