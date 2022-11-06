import React from 'react';
import { useState } from 'react';
import { questionsdummy } from './dummyfiles/questionsdummy';
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

// View the previous assesment

function QuestionCard() {

  const [answerstate, setanswerstate]=useState({answer:""} )
  console.log(answerstate.answer)
  function handleChange(event){
    const{name,value,type}=event.target
    setanswerstate(prevanswer=>{
      return{
        ...prevanswer,
        [name]:value
      }
    })

    
  }
  return (
    <div >
      {questionsdummy.map((val,key)=>{
        return(
          <div className='questioncardmain'>

      <div className='questionnumber'>
              Question {val.id+1}/20
            </div>
            <div className='question'>
        {val.ques}

      </div>

      <div className='questionsoptions'>
        <div>
          {val.options.map((val1,key)=>{return(
            <div>
              {/* {(()=>{
                 if (val.chosen==val1.id )
                 if(val1.chosen){
                   <TiTick/>
 
                 }
                 <ImCross/>

              })
              
             } */}
              
              {val.chosen!=val1.id  ? "" : [val1.isCorrect ? <TiTick/> : <ImCross/>]}
            {val1.isCorrect? <TiTick/>:null}
              {val1.text}
              {/* <input type="radio" id={val1} name="answer" value={val1} onChange={handleChange}/> {val1} */}
              </div>
          )})}
        {/* {val.answer[0]} */}
        </div>
        
      </div>


            </div>
        )
      })}

      

     
      
     
        
      
    </div>
  )
}

export default QuestionCard
