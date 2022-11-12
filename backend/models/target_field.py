from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Float, ARRAY
from core.database import Base
from sqlalchemy.orm import relationship


class TargetField(Base):
    __tablename__ = "target_fields"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    languages = Column(ARRAY(String), nullable=False)
    difficulty = Column(String, nullable=False)

    # mcq = relationship("MCQ", back_populates="target_field")

