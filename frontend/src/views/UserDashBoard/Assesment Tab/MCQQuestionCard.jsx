import React, { useState } from 'react'
import { questionsdummy } from './dummyfiles/questionsdummy';

import { mcqquestions } from './dummyfiles/mcqquestions';
import CustomButton from '../../../components/Buttons';
import { Link } from 'react-router-dom';

function MCQQuestionCard() {
    const myArrray=["sdss",, "ddd"]
    const [showFinalResult, setFinalResult]=useState(false);
    const [score, setScore]=useState(0);
    const [currentQuestion, setcurrentQuestion]=useState(0);
    const [selectedans, setselecredans]=useState("");
    const [targetfield, settargetfield ]=useState("");
    const [chosenn, setchosenn]=useState([])

    const [listofselected, setlistofselected]=useState({target_field_id:"", chosen_answers:[], visibility:false});

    // function retakebutton(){
    //     setFinalResult(false);
    //     setScore(0);
    //     setcurrentQuestion(0);
        
    // }

    const optionClicked=(isCorrect, id)=>{
        // console.log(isCorrect)
        setselecredans(isCorrect)
        settargetfield(id)

       
        // setselecredans(myArrray=>[...myArrray, isCorrect]

        //     prevdata=>{
        //     return{
        //         selectedans: [...prevdata.selectedans, 'isCorrect']

        //     }
        // // }
        // )

        // if (isCorrect){
        //             setScore(score+1); 
        //         }
    }

    const nextClicked=()=>{
        setchosenn([...chosenn,selectedans])
        console.log(chosenn)
        
        setlistofselected(prevState => ({...prevState,
            target_field_id: targetfield, 
            chosen_answers:chosenn,
            visibility:true}))
        console.log(listofselected)
      
        // console.log(selectedans)
        // console.log(listofselected)
        // let copyfoo=
        // setlistofselected( [selectedans,...listofselected] )
        // console.log(listofselected)
        
        if (currentQuestion+1< mcqquestions.length){
            setcurrentQuestion(currentQuestion+1);

        }
        else{
            setFinalResult(true);
        }

    }

    const FinishClicked=()=>{
        console.log(listofselected)
              

      
      
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
        onClicked={()=>FinishClicked()}
       
        />
        </Link>
        
        
        </div>

        :

         <div className='mcq-main'>
         <div>
         <div className='mcq-number'>
             Question {currentQuestion +1}/{mcqquestions.length}
         </div>
         <div className='mcq-question'> {mcqquestions[currentQuestion].question}</div>
         
         <ul className='mcq-unordered'>
             {mcqquestions[currentQuestion].answers.map((option)=>{
                 return(
                     <li 
                     onClick={()=>optionClicked(option, mcqquestions[currentQuestion].target_field_id)}
                     key={option}>
                         {option}
                     </li>
                 )
             })}
                  </ul>
         </div>
         <CustomButton addStyles={"accept-button"} name="Next" onClicked={()=>nextClicked()}/>       

         <CustomButton addStyles={"accept-button"} name="Next" onClicked={()=>FinishClicked()}/>       

         </div>

        
    }
         
   

    </div>

   
    
  )
}

export default MCQQuestionCard
