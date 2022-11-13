import json
from utils.populatedata import (
    users,
    seekers,
    educations,
    preferences,
    experiences,
    employers,
    job_posts,
    target_fields,
    mcqs,
    user_assesments,
    applies,
    savePosts
    )
from models import (user,seeker, education, preference, experience, employer, job_post, target_field, mcq, user_assesment, apply, save_job)
from core import hashing, database

db = database.SessionLocal()

created_users = []
def populate_user():
    for user_populate in users:
        print(f"Populating user: {user_populate}")
        new_user = user.User(email=user_populate["email"], password=hashing.Hash.bcrypt(user_populate["password"]), 
        is_verified=user_populate["is_verified"], user_type=user_populate["user_type"], created_date=user_populate["created_date"],
         last_login=user_populate["last_login"])
        db.add(new_user)
        db.commit()
        db.refresh(new_user)

def populate_seeker():
    for seeker_populate in seekers:
        print(f"Populating seeker: {seeker_populate}")
        new_seeker = seeker.Seeker(name=seeker_populate["name"], age=seeker_populate["age"], address=seeker_populate["address"], contactNumber=seeker_populate["contactNumber"], write_about_you=seeker_populate["write_about_you"],
        yearsOfExperience=seeker_populate["yearsOfExperience"], student=seeker_populate["student"],  skills=seeker_populate["skills"],  linkedIn=seeker_populate["linkedIn"],
        website=seeker_populate["website"],  cv=seeker_populate["cv"],  githubProfile=seeker_populate["githubProfile"],
        profilePhoto=seeker_populate["profilePhoto"],  drivingLicenseNum=seeker_populate["drivingLicenseNum"], status=seeker_populate["status"], last_job_applied=seeker_populate["last_job_applied"], user_id=seeker_populate["user_id"])

        db.add(new_seeker)
        db.commit()
        db.refresh(new_seeker)

def populate_education():
    for education_populate in educations:
        print(f"Populating education: {education_populate}")
        new_education = education.Education(
            qualification=education_populate["qualification"], graduating_institution=education_populate["graduating_institution"], graduating_year=education_populate["graduating_year"],
            major=education_populate["major"],  cgpa=education_populate["cgpa"], seeker_id=education_populate["seeker_id"])
        db.add(new_education)
        db.commit()
        db.refresh(new_education)

def populate_preference():
    for preference_populate in preferences:
        print(f"Populating preference: {preference_populate}")
        new_preference = preference.Preference(
        expected_min_salary=preference_populate["expected_min_salary"], expected_max_salary=preference_populate["expected_max_salary"], preferred_location=preference_populate["preferred_location"], 
        interested_jobs=preference_populate["interested_jobs"], preferred_job_skills=preference_populate["preferred_job_skills"],  remote_onsite=preference_populate["remote_onsite"],  
        available_hours=preference_populate["available_hours"], seeker_id=preference_populate["seeker_id"])
        db.add(new_preference)
        db.commit()
        db.refresh(new_preference)


def populate_experience():
    for experience_populate in experiences:
        print(f"Populating experience: {experience_populate}")
        new_experience = experience.Experience(
        workPlace=experience_populate["workPlace"], yearsOfWork=experience_populate["yearsOfWork"], jobTitle=experience_populate["jobTitle"],
        jobStartDate=experience_populate["jobStartDate"],  jobEndDate=experience_populate["jobEndDate"],  field=experience_populate["field"], seeker_id=experience_populate["seeker_id"])
        db.add(new_experience)
        db.commit()
        db.refresh(new_experience)

def populate_employer():
    for employer_populate in employers:
        print(f"Populating employer: {employer_populate}")
        new_employer = employer.Employer(
        companyName=employer_populate["companyName"], location=employer_populate["location"], contactNumber=employer_populate["contactNumber"],
        description=employer_populate["description"],  requiredRoles=employer_populate["requiredRoles"],  website=employer_populate["website"],
        targetMarket=employer_populate["targetMarket"],  vision=employer_populate["vision"],  contactEmail=employer_populate["contactEmail"],
        contactPerson=employer_populate["contactPerson"],  logo=employer_populate["logo"], user_id=employer_populate["user_id"])
        db.add(new_employer)
        db.commit()
        db.refresh(new_employer)

def populate_job_post():
    for job_post_populate in job_posts:
        print(f"Populating job post: {job_post_populate}")
        new_job_post = job_post.JobPost(
        description=job_post_populate["description"], job=job_post_populate["job"], job_location=job_post_populate["job_location"], job_level=job_post_populate["job_level"], job_type=job_post_populate["job_type"],
        job_responsibilities=job_post_populate["job_responsibilities"],  skills=job_post_populate["skills"],  minimum_years_of_experience=job_post_populate["minimum_years_of_experience"],
        education_required=job_post_populate["education_required"], no_of_vacancy=job_post_populate["no_of_vacancy"], work_hours=job_post_populate["work_hours"], min_salary=job_post_populate["min_salary"],
        max_salary=job_post_populate["max_salary"], job_benefits=job_post_populate["job_benefits"],  job_start_date=job_post_populate["job_start_date"],  remote_onsite=job_post_populate["remote_onsite"],
        status_of_jobs=job_post_populate["status_of_jobs"],  posted_date=job_post_populate["posted_date"],  deadline=job_post_populate["deadline"], employer_id=job_post_populate["employer_id"])
        db.add(new_job_post)
        db.commit()
        db.refresh(new_job_post)

def populate_target_field():
    for target_field_populate in target_fields:
        print(f"Populating target field: {target_field_populate}")
        new_targetField = target_field.TargetField(name=target_field_populate["name"], languages=target_field_populate["languages"], difficulty=target_field_populate["difficulty"])
        db.add(new_targetField)
        db.commit()
        db.refresh(new_targetField)

def populate_mcq():
    for mcq_populate in mcqs:
        print(f"Populating mcq: {mcq_populate}")
        new_MCQ = mcq.MCQ(question=mcq_populate["question"], answers=mcq_populate["answers"], correct_answer=mcq_populate["correct_answer"], target_field_id=mcq_populate["target_field_id"])
        db.add(new_MCQ)
        db.commit()
        db.refresh(new_MCQ)

def populate_user_asesment():
    for user_asesment_populate in user_assesments:
        print(f"Populating user assesment: {user_asesment_populate}")
        new_UserAssesment = user_assesment.UserAssesment(score= user_asesment_populate["score"], visibility= user_asesment_populate["visibility"], chosen_answers= user_asesment_populate["chosen_answers"], accessed_date= user_asesment_populate["accessed_date"], 
        target_field_id=user_asesment_populate["target_field_id"], seeker_id=user_asesment_populate["seeker_id"])
        db.add(new_UserAssesment)
        db.commit()
        db.refresh(new_UserAssesment)

def populate_apply():
    for apply_populate in applies:
        print(f"Populating apply: {apply_populate}")
        new_apply = apply.Apply(description= apply_populate["description"], cv= apply_populate["cv"], status= apply_populate["status"], 
        coverletter=apply_populate["coverletter"], applied_date=apply_populate["applied_date"],  seeker_id=apply_populate["seeker_id"],  job_post_id=apply_populate["job_post_id"])
        db.add(new_apply)
        db.commit()
        db.refresh(new_apply)

def populate_savePost():
    for savePost in savePosts:
        print(f"Populating apply: {savePost}")
        new_save_job = save_job.SaveJob(save= savePost["save"],seeker_id=savePost["seeker_id"], job_post_id=savePost["job_post_id"])
        db.add(new_save_job)
        db.commit()
        db.refresh(new_save_job)

def populate_all():
    populate_user()
    populate_seeker()
    populate_education()
    populate_preference()
    populate_experience()
    populate_employer()
    populate_job_post()
    populate_target_field()
    populate_mcq()
    populate_user_asesment()
    populate_apply()
    populate_savePost()