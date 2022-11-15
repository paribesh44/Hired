import shutil
from fastapi import APIRouter, Depends, HTTPException, status

from models import apply, user, seeker
from core import database, hashing, oauth2
from sqlalchemy.orm import Session
from typing import List
from forms import applyForm
from schemas import apply_schema


router = APIRouter(
    tags=['Apply'],
    prefix="/apply"
)


@router.post("/create", status_code=status.HTTP_201_CREATED)
async def createApplyProfile(data: applyForm.ApplyForm = Depends(), db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    
    cv_file_location = None
    cover_letter_file_location = None

    # check if the current seeker has already uploaded cv or not.
    hired_seeker = db.query(seeker.Seeker).filter(seeker.Seeker.id == current_user.seeker[0].id).first()

    # run this if this seeker has already uploaded cv while creating its profile. And if it wants to send as cv
    if(data.cv == None and hired_seeker.cv != None):
        cv_file_location = hired_seeker.cv
    

    # this does not run when user has chooose cv added while creating profile.
    if (data.cv != None):
        # upload cv in local memory and save the file_location in database
        try:
            cv_file_location = f"static/cv/{data.cv.filename}"
            with open(cv_file_location, "wb") as buffer:
                shutil.copyfileobj(data.cv.file, buffer)
        except:
            cv_file_location = None

    print(cv_file_location)


    # upload cover letter
    try:
        cover_letter_file_location = f"static/cover_letters/{data.coverletter.filename}"
        with open(cover_letter_file_location, "wb") as buffer:
            shutil.copyfileobj(data.coverletter.file, buffer)
    except Exception as e :
        cover_letter_file_location = None

    print(cover_letter_file_location)

    return {"msg": "success"}

    # new_apply = apply.Apply(
    #     description=data.description, cv=cv_file_location,  status="applied",
    #     coverletter=cover_letter_file_location, seeker_id=current_user.seeker[0].id, job_post_id=data.job_post_id)

    # db.add(new_apply)
    # db.commit()
    # db.refresh(new_apply)
    # return new_apply


@router.put('/update/{id}', status_code=status.HTTP_202_ACCEPTED)
def update(id: int, form: applyForm.ApplyForm = Depends(), db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    update_apply = db.query(apply.Apply).filter(
        apply.Apply.id == id)

    if not update_apply.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Apply with id {id} not found")

    cv_file_location = update_apply.first().cv
    cover_letter_file_location = update_apply.first().profilePhoto

    # upload cv
    try:
        cv_file_location = f"static/cv/{form.cv.filename}"
        # if the new choosen pdf is not same as the previous upload pdf file then only upload updated pdf.
        if update_apply.first().cv != cv_file_location:
            with open(cv_file_location, "wb") as buffer:
                shutil.copyfileobj(form.cv.file, buffer)
        # if same then the pdf remains the same.
        else:
            cv_file_location = update_apply.first().cv
    except:
        cv_file_location = update_apply.first().cv

    # upload cover letter
    try:
        cover_letter_file_location = f"static/profile_pictures/{form.profile_photo.filename}"
        # if the new choosen cover letter is not same as the previous upload cover letter then only upload updated pdf.
        if update_apply.first().profilePhoto != cover_letter_file_location:
            with open(cover_letter_file_location, "wb") as buffer:
                shutil.copyfileobj(form.profile_photo.file, buffer)
        else:
            cover_letter_file_location = update_apply.first().profilePhoto
    except:
        cover_letter_file_location = update_apply.first().profilePhoto

    update_apply.update({"description": form.description, "cv": cv_file_location,  "status": form.status,
        "coverletter": cover_letter_file_location,  "applied_date": form.applied_date, "seeker_id": current_user.seeker[0].id, "job_post_id": 1})
    db.commit()
    return {"msg": "success"}


# , response_model=List[schemas.Showapply]
@router.get('/get_all_apply')
def all(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    applys = db.query(apply.Apply).all()
    return applys


@router.get("/get_apply_user", response_model=List[apply_schema.ApplyJobPost])
def showApplyBySeeker(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    hired_apply = db.query(apply.Apply).filter(
        apply.Apply.seeker_id == current_user.seeker[0].id).all()

    return hired_apply


# , response_model=schemas.apply
@router.get('/get_id/{id}')
def show(id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    hired_apply = db.query(apply.Apply).filter(
        apply.Apply.id == id).first()
    if not hired_apply:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Sekeer with the id {id} is not available")
    # , "experience": hired_apply.experience[0].workPlace
    # return {"name": hired_apply.name, "cv": hired_apply.cv, "user": hired_apply.user, "user_assesment": hired_apply.userAssesment}
    return hired_apply

@router.get("/get_apply_of_user/{job_post_id}/{seeker_id}")
def showApply(job_post_id: int, seeker_id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_companies)):
    hired_apply = db.query(apply.Apply).filter(
        apply.Apply.job_post_id == job_post_id and apply.Apply.seeker_id == seeker_id).first()

    if not hired_apply:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Sekeer with the id {id} is not available")
    
    return hired_apply