import shutil
from fastapi import APIRouter, Depends, HTTPException, status

from schemas import seeker_schema

from models import seeker, user, education, experience, preference
from core import database, hashing, oauth2
from sqlalchemy.orm import Session
from typing import List
from forms import jobSeekerForm


router = APIRouter(
    tags=['Seeker'],
    prefix="/seeker"
)


@router.post("/create", status_code=status.HTTP_201_CREATED)
async def createSeekerProfile(form: jobSeekerForm.JobSeekerForm = Depends(), db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    skills_string = form.skills
    skills_string_remove_blank = skills_string.replace(" ", "")
    skills = skills_string_remove_blank.strip().split(',')

    pdf_file_location = None
    profile_picture_file_location = None

    # upload pdf in local memory and save the file_location in database
    try:
        pdf_file_location = f"static/cv/{form.cv.filename}"
        with open(pdf_file_location, "wb") as buffer:
            shutil.copyfileobj(form.cv.file, buffer)
    except:
        pdf_file_location = None

    # upload profile picture
    try:
        profile_picture_file_location = f"static/profile_pictures/{form.profile_photo.filename}"
        with open(profile_picture_file_location, "wb") as buffer:
            shutil.copyfileobj(form.profile_photo.file, buffer)
    except:
        pass

    new_seeker = seeker.Seeker(
        name=form.name, age=form.age, address=form.address, contactNumber=form.contact_number, write_about_you=form.write_about_you,
        yearsOfExperience=form.years_of_experience, student=form.student,  skills=skills,  linkedIn=form.linkedIn,
        website=form.website,  cv=pdf_file_location,  githubProfile=form.github_profile,
        profilePhoto=profile_picture_file_location, status=form.status, user_id=current_user.id)

    db.add(new_seeker)
    db.commit()
    db.refresh(new_seeker)
    return {"msg": "success", "seeker": new_seeker}


@router.put('/update', status_code=status.HTTP_202_ACCEPTED)
def update(form: jobSeekerForm.UpdateJobSeekerForm = Depends(), db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    print(form)
    print(form.skills)
    update_seeker = db.query(seeker.Seeker).filter(
        seeker.Seeker.id == current_user.seeker[0].id)

    skills_string = form.skills[0]
    skills = skills_string.strip().split(',')

    pdf_file_location = update_seeker.first().cv
    profile_picture_file_location = update_seeker.first().profilePhoto

    # upload pdf in local memory and save the file_location in database
    try:
        pdf_file_location = f"static/cv/{form.update_cv.filename}"
        # if the new choosen pdf is not same as the previous upload pdf file then only upload updated pdf.
        if update_seeker.first().cv != pdf_file_location:
            with open(pdf_file_location, "wb") as buffer:
                shutil.copyfileobj(form.update_cv.file, buffer)
        # if same then the pdf remains the same.
        else:
            pdf_file_location = update_seeker.first().cv
    except:
        pdf_file_location = update_seeker.first().cv
    
    print(pdf_file_location)

    # upload profile picture
    try:
        profile_picture_file_location = f"static/profile_pictures/{form.update_profile_photo.filename}"
        # if the new choosen profile picture is not same as the previous upload profile picture then only upload updated pdf.
        if update_seeker.first().profilePhoto != profile_picture_file_location:
            with open(profile_picture_file_location, "wb") as buffer:
                shutil.copyfileobj(form.update_profile_photo.file, buffer)
        else:
            profile_picture_file_location = update_seeker.first().profilePhoto
    except:
        profile_picture_file_location = update_seeker.first().profilePhoto

    print(profile_picture_file_location)

    update_seeker.update({"name": form.name, "age": form.age, "address": form.address, "contactNumber": form.contact_number, "write_about_you": form.write_about_you,
                          "yearsOfExperience": form.years_of_experience,  "skills": skills,  "linkedIn": form.linkedIn, "student":form.student,
                          "website": form.website,  "cv": pdf_file_location,  "githubProfile": form.github_profile, "status": update_seeker.first().status,
                          "profilePhoto": profile_picture_file_location, "user_id": current_user.id})
    db.commit()
    return {"msg": "success"}


@router.put("/update_seeker_status")
def update_visibility(data: seeker_schema.ChangeSeeker, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    # # print(data.visibility)
    # return "success"
    update_seeker_status = db.query(seeker.Seeker).filter(
        seeker.Seeker.id == current_user.seeker[0].id).first()

    if not update_seeker_status:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"User Assesment with id not found")

    update_seeker_status.status = data.status
    print(data.status)
    db.commit()
    db.refresh(update_seeker_status)

    return {"msg": "success"}


# , response_model=List[schemas.ShowSeeker]
@router.get('/get_all')
def all(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    seekers = db.query(seeker.Seeker).all()
    return seekers


# , response_model=schemas.Seeker
@router.get('/get_seeker/{id}', response_model=List[seeker_schema.ShowSeeker])
def show(id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    hired_seeker = db.query(seeker.Seeker).filter(
        seeker.Seeker.id == id).all()
    if not hired_seeker:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Sekeer with the id {id} is not available")
    return hired_seeker


@router.get('/get_current_seeker')
def all(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    seekers = db.query(seeker.Seeker).filter(
        seeker.Seeker.id == current_user.seeker[0].id).all()
    return seekers


@router.get("/does_this_seeker_has_cv")
def hasCV(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    has_cv = None
    hired_seeker = db.query(seeker.Seeker).filter(
        seeker.Seeker.id == current_user.seeker[0].id).first()
    has_cv = hired_seeker.cv

    return has_cv


@router.get("/get_seeker_information")
def hasCV(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    hired_seeker = db.query(seeker.Seeker).filter(
        seeker.Seeker.id == current_user.seeker[0].id).first()

    hired_education = db.query(education.Education).filter(
        education.Education.seeker_id == current_user.seeker[0].id).all()
    hired_experience = db.query(experience.Experience).filter(
        experience.Experience.seeker_id == current_user.seeker[0].id).all()
    hired_preference = db.query(preference.Preference).filter(
        preference.Preference.seeker_id == current_user.seeker[0].id).first()

    return {"seeker": hired_seeker, "education": hired_education, "experience": hired_experience, "preference": hired_preference}
# check if the current login user has make profile or not(done in backend), if not then redirect to profile page(done in frontend)


@router.get("/current_user_has_profile")
async def check(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_current_user)):
    print(current_user.id)
    hired_seeker = db.query(seeker.Seeker).filter(
        seeker.Seeker.user_id == current_user.id).first()

    if(hired_seeker == None):
        msg = "no profile"
    else:
        msg = "has profile"

    return {"msg": msg}