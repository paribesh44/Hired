from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Float, ARRAY
from core.database import Base
from sqlalchemy.orm import relationship


class MCQ(Base):
    __tablename__ = "mcqs"

    id = Column(Integer, primary_key=True, index=True)
    question = Column(String, nullable=False)
    answers = Column(ARRAY(String), nullable=False)
    correct_answer = Column(String, nullable=False)

    target_field_id = Column(Integer,
                     ForeignKey("target_fields.id", ondelete="CASCADE"),
                     nullable=True)

    target_field = relationship("TargetField", backref="mcq")
