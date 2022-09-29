from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean, ARRAY
from core.database import Base
from sqlalchemy.orm import relationship
import datetime


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    user_type = Column(Integer, nullable=False)
    email = Column(String(40), nullable=False)
    password = Column(String, nullable=True)
    is_verified = Column(Boolean, default=False)
    created_date = Column(DateTime, default=datetime.datetime.utcnow)
    last_login = Column(DateTime, nullable=True)

    # seeker = relationship("Seeker", back_populates="user")
    # employer = relationship("Employer", back_populates="user")
