import shutil
from fastapi import APIRouter, Depends, HTTPException, status

from ..schemas import seeker_schema

from ..models import seeker, user
from .. import database, hashing, oauth2
from sqlalchemy.orm import Session
from typing import List
from ..forms import jobSeekerForm


router = APIRouter(
    tags=['Seeker'],
    prefix="/seeker"
)


@router.post("/create", status_code=status.HTTP_201_CREATED)
async def createSeekerProfile(form: jobSeekerForm.JobSeekerForm = Depends(), db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    pdf_file_location = None
    profile_picture_file_location = None

    # upload pdf in local memory and save the file_location in database
    try:
        pdf_file_location = f"src/static/cv/{form.cv.filename}"
        with open(pdf_file_location, "wb") as buffer:
            shutil.copyfileobj(form.cv.file, buffer)
    except:
        pdf_file_location = None

    # upload profile picture
    try:
        profile_picture_file_location = f"src/static/profile_pictures/{form.profile_photo.filename}"
        with open(profile_picture_file_location, "wb") as buffer:
            shutil.copyfileobj(form.profile_photo.file, buffer)
    except:
        pass

    new_seeker = seeker.Seeker(
        name=form.name, age=form.age, address=form.address, contactNumber=form.contact_number, write_about_you=form.write_about_you,
        yearsOfExperience=form.years_of_experience,  skills=form.skills,  linkedIn=form.linkedIn,
        website=form.website,  cv=pdf_file_location,  githubProfile=form.github_profile,
        profilePhoto=profile_picture_file_location,  drivingLicenseNum=form.driving_license_num, last_job_applied=form.last_job_applied, user_id=current_user.id)

    db.add(new_seeker)
    db.commit()
    db.refresh(new_seeker)
    return new_seeker


@router.put('/update/{id}', status_code=status.HTTP_202_ACCEPTED)
def update(id: int, form: jobSeekerForm.JobSeekerForm = Depends(), db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    update_seeker = db.query(seeker.Seeker).filter(
        seeker.Seeker.id == id)

    if not update_seeker.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Seeker with id {id} not found")

    pdf_file_location = update_seeker.first().cv
    profile_picture_file_location = update_seeker.first().profilePhoto

    # upload pdf in local memory and save the file_location in database
    try:
        pdf_file_location = f"src/static/cv/{form.cv.filename}"
        # if the new choosen pdf is not same as the previous upload pdf file then only upload updated pdf.
        if update_seeker.first().cv != pdf_file_location:
            with open(pdf_file_location, "wb") as buffer:
                shutil.copyfileobj(form.cv.file, buffer)
        # if same then the pdf remains the same.
        else:
            pdf_file_location = update_seeker.first().cv
    except:
        pdf_file_location = update_seeker.first().cv

    # upload profile picture
    try:
        profile_picture_file_location = f"src/static/profile_pictures/{form.profile_photo.filename}"
        # if the new choosen profile picture is not same as the previous upload profile picture then only upload updated pdf.
        if update_seeker.first().profilePhoto != profile_picture_file_location:
            with open(profile_picture_file_location, "wb") as buffer:
                shutil.copyfileobj(form.profile_photo.file, buffer)
        else:
            profile_picture_file_location = update_seeker.first().profilePhoto
    except:
        profile_picture_file_location = update_seeker.first().profilePhoto

    update_seeker.update({"name": form.name, "age": form.age, "address": form.address, "contactNumber": form.contact_number, "write_about_you": form.write_about_you,
                          "yearsOfExperience": form.years_of_experience,  "skills": form.skills,  "linkedIn": form.linkedIn,
                          "website": form.website,  "cv": pdf_file_location,  "githubProfile": form.github_profile,
                          "profilePhoto": profile_picture_file_location,  "drivingLicenseNum": form.driving_license_num, "last_job_applied": form.last_job_applied, "user_id": current_user.id})
    db.commit()
    return {"msg": "success"}


# , response_model=List[schemas.ShowSeeker]
@router.get('/get_all')
def all(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    seekers = db.query(seeker.Seeker).all()
    return seekers


# , response_model=schemas.Seeker
@router.get('/get_id/{id}')
def show(id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    hired_seeker = db.query(seeker.Seeker).filter(
        seeker.Seeker.id == id).first()
    if not hired_seeker:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Sekeer with the id {id} is not available")
    # , "experience": hired_seeker.experience[0].workPlace
    return {"name": hired_seeker.name, "cv": hired_seeker.cv, "user": hired_seeker.user}
    # return seeker
