import React, { useState } from 'react'
import { questionsdummy } from './dummyfiles/questionsdummy';

import { mcqquestions } from './dummyfiles/mcqquestions';
import CustomButton from '../../../components/Buttons';
import { Link } from 'react-router-dom';

function MCQQuestionCard() {
    const [showFinalResult, setFinalResult]=useState(false);
    const [score, setScore]=useState(0);
    const [currentQuestion, setcurrentQuestion]=useState(0);

    function retakebutton(){
        setFinalResult(false);
        setScore(0);
        setcurrentQuestion(0);
        
    }

    const optionClicked=(isCorrect)=>{
        if (isCorrect){
            setScore(score+1);
        }

        if (currentQuestion+1< mcqquestions.length){
            setcurrentQuestion(currentQuestion+1);

        }
        else{
            setFinalResult(true);
        }


    }
  return (
    <div>
        {showFinalResult ?
        <div className='final-results'>
            <div className='mcqcompleteheading'> 
                MCQ Complete
                </div>
                <div className='mcqcompletesub'>
                    Name of the assesment
                </div>
        <div> {score}/{mcqquestions.length} correct</div>
        <Link to="/UserAssesment">
        <CustomButton addStyles={"accept-button"} name="Finish" 
        // onClicked={retakebutton}
        />
        </Link>
        
        
        </div>

        :

         <div className='mcq-main'>


         <div>
         <div className='mcq-number'>
             Question {currentQuestion +1}/{mcqquestions.length}
         </div>
         <div className='mcq-question'> {mcqquestions[currentQuestion].ques}</div>
         
         <ul className='mcq-unordered'>
             {mcqquestions[currentQuestion].options.map((option)=>{
                 return(
                     <li 
                     onClick={()=>optionClicked(option.isCorrect)}
                     key={option.id}>
                         {option.text}
                     </li>
                 )
             })}
                  </ul>
         </div>
         
         
         
         
         
         
         
             
         
         </div>

        
    }
         
   

    </div>

   
    
  )
}

export default MCQQuestionCard
