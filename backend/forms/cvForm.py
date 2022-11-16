# (personal info) name, email, mobile, linkedin, github, skills(multiple)
# (experiences) organization, position, duration, description -> multiple
# (project info) title, link, description -> multiple
# (eduction info) university, year, qualification, descritption -> multiple
# languages (multiple), hobbies (multiple), activity/achievement (multiple)

from datetime import datetime
from fastapi import File, UploadFile, Form
from typing import Optional, List


class CVForm:
    def __init__(
        self,
        name: str = Form("Ishan Panta"),
        email: str = Form("ishanpanta0124@gmail.com"),
        mobile: str = Form("(+977)9861963866"),
        linkedin: str = Form("ishanpanta"),
        github: str = Form("ishanpanta0"),
        skills: str = Form("ml, dl, front-end, back-end"),

        organization: str = Form("kusewa pvt. ltd"),
        position: str = Form("manager"),
        duration: int = Form(2),
        experience_description: str = Form("I was the manager."),

        project_title: str = Form("helicopter helicopter"),
        project_link: str = Form("www.helicopter.com"),
        project_description: str = Form("It was the coolest project yet."),

        university: str = Form("Kathmandu Univeristy"),
        year: str = Form("2023"),
        qualification: str = Form("Bachlors"),
        education_description: str = Form("It was cool."),

        languages: str = Form("English, Nepali, Chinese"),
        hobbies: str = Form("cricket, codding, research"),
        achievement: str = Form("A lot of cool achievement.")
    ):
        self.name = name
        self.email = email
        self.mobile = mobile
        self.linkedin = linkedin
        self.github = github
        self.skills = skills

        self.organization = organization
        self.position = position
        self.duration = duration
        self.experience_description = experience_description
        
        self.project_title = project_title
        self.project_link = project_link
        self.project_description = project_description

        self.university = university
        self.year = year
        self.qualification = qualification
        self.education_description = education_description

        self.languages = languages
        self.hobbies = hobbies
        self.achievement = achievement



