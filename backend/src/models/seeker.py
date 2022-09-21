from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, Boolean, ARRAY, Text
from ..database import Base
from sqlalchemy.orm import relationship


class Seeker(Base):
    __tablename__ = "seekers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    age = Column(Integer, nullable=False)
    address = Column(String, nullable=False)
    contactNumber = Column(String, nullable=False)
    write_about_you = Column(Text, nullable=True)
    yearsOfExperience = Column(Integer, nullable=True)
    # student or graduated
    student = Column(Boolean, nullable=False, default=True)
    skills = Column(ARRAY(String), nullable=False)
    linkedIn = Column(String, nullable=True)
    website = Column(String, nullable=True)
    cv = Column(String, nullable=True)
    githubProfile = Column(String, nullable=True)
    profilePhoto = Column(String, nullable=True)
    drivingLicenseNum = Column(String, nullable=True)
    last_job_applied = Column(DateTime, nullable=True)
    # if parent(User) is deleted then this seeker will also be deleted.
    user_id = Column(Integer,
                     ForeignKey("users.id", ondelete="CASCADE"),
                     nullable=True)

    # user = relationship("User", back_populates="seeker")
    user = relationship("User", backref="seeker")
    # experience = relationship("Experience", back_populates="seeker")
