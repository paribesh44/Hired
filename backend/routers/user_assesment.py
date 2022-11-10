from fastapi import APIRouter, Depends, HTTPException, status

from schemas import user_assesment_schema

from models import user_assesment, user, mcq, seeker
from core import database, oauth2
from sqlalchemy.orm import Session
from forms import userAssesmentForm


router = APIRouter(
    tags=['UserAssesment'],
    prefix="/userAssesment"
)

# jaba frontend ma mcq sakinxa tya bata chai target_field_id ra chosen_answer aauxa.
# ani score pani yaha nai check garne
@router.post("/create", status_code=status.HTTP_201_CREATED)
def createUserAssesmentProfile(form: userAssesmentForm.UserAssignmentForm = Depends(), db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    
    # global variable
    correct_answer_array = []
    secured_score = 0
    # suppose. userAssesmentForm ko list ma rakna milena tesle yesari gareko. yo list front end bata aauxa.
    chosen_answer = ["html", "html", "js"]

    # get the all the mcqs of the given target_field_id
    hired_MCQ = db.query(mcq.MCQ).filter(
        mcq.MCQ.target_field_id == form.target_field_id).all()

    # now take all the correct "correct_answer" from each of the mcqs and apend in the "correct_answer_array".
    for no_of_mcq in range(len(hired_MCQ)):
        correct_answer_array.append(hired_MCQ[no_of_mcq].correct_answer)
    
    # Now we have correct_answer_array and chosen_array we can compare both the list and give score according to the correct answer.
    for i in range(len(correct_answer_array)):
        for j in range(len(chosen_answer)):
            # check only for the corresponding elements of list. for eg index-1 of correct_anser_list and index-1 of chosen_answer.
            if i == j:
                # if both the corresponsing elements of the two list are same then score will be incremented by 1.
                if correct_answer_array[i] == chosen_answer[j]:
                    secured_score += 1
    print(correct_answer_array)
    print(chosen_answer)
    print(secured_score)

    # by default set the visibility to false. "score" will be calculated here only. "chosen_answers" and "target_field_id" will come from front-end.
    new_UserAssesment = user_assesment.UserAssesment(score= secured_score, visibility= form.visibility, chosen_answers= chosen_answer, target_field_id= form.target_field_id, seeker_id=current_user.seeker[0].id)
    db.add(new_UserAssesment)
    db.commit()
    db.refresh(new_UserAssesment)
    return form


@router.put('/update/{id}', status_code=status.HTTP_202_ACCEPTED)
def update(id: int, schema:user_assesment_schema.UserAssesment, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    update_UserAssesment = db.query(user_assesment.UserAssesment).filter(
        user_assesment.UserAssesment.id == id)

    if not update_UserAssesment.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"User Assesment with id {id} not found")

    update_UserAssesment.update({"score": schema.score, "visibility": schema.visibility, "accessed_date": schema.accessed_date, "target_field_id": 1, "seeker_id":current_user.seeker[0].id})
    db.commit()
    return 'updated'

# change visibility of the assesment
@router.put("update_visibility/{user_assesment_id}")
def update_visibility(id:int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    update_UserAssesment = db.query(user_assesment.UserAssesment).filter(
        user_assesment.UserAssesment.id == id)

    if not update_UserAssesment.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"User Assesment with id {id} not found")

    update_UserAssesment.update({"visibility": False})
    db.commit()
    return update_UserAssesment


# , response_model=List[schemas.ShowUserAssesment]
@router.get('/get_all')
def all(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    UserAssesments = db.query(user_assesment.UserAssesment).all()
    return UserAssesments


# , response_model=schemas.UserAssesment
@router.get('/get_id/{id}')
def show(id: int, db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    hired_UserAssesment = db.query(user_assesment.UserAssesment).filter(
        user_assesment.UserAssesment.id == id).first()
    if not hired_UserAssesment:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"User Assesment with the id {id} is not available")
    return {"user_assesment": hired_UserAssesment, "target_field": hired_UserAssesment.target_field, "seeker": hired_UserAssesment.seeker, "mcq": hired_UserAssesment.target_field.mcq}
    # return hired_UserAssesment

# get user assesment of the current login user
@router.get("/get_user_assesment_current_user")
def user_assesment_current_user(db: Session = Depends(database.get_db), current_user: user.User = Depends(oauth2.get_user_job_seeker)):
    hired_UserAssesment = db.query(user_assesment.UserAssesment).filter(
        user_assesment.UserAssesment.seeker_id == current_user.seeker[0].id).all()

    return hired_UserAssesment