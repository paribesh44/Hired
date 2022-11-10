import React, { useState, useEffect } from 'react';
import { questionsdummy } from './dummyfiles/questionsdummy';
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import callAPI from "../../../utils/callAPI";

// View the previous assesment

function QuestionCard(props) {

  const [hired_mcq, setMCQ] = useState(null);

    const message = async() => {
        let mcq_response_obj = await callAPI({endpoint: `/mcq/get_mcq/${props.target_field_id}`})
        setMCQ(mcq_response_obj);
    }

    useEffect(() => {
        message()
    }, [])

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

  if(hired_mcq != null) {
  return (
    <div >
      {hired_mcq.data.answer_dict.map((val,key)=>{
        return(
          <div key={key} className='questioncardmain'>

      <div className='questionnumber'>
              Question {val.id}/20
            </div>
            <div className='question'>
        Q. {val.question}?

      </div>

      <div className='questionsoptions'>
        <div>
          {val.options.map((val1,key2)=>{return(
            <div key={key2}>

              {/* {val1.options.map((val2, key)=>{return(
                {val2.text}
              )})} */}

              {/* {(()=>{
                 if (val.chosen==val1.id )
                 if(val1.chosen){
                   <TiTick/>
 
                 }
                 <ImCross/>

              })
              
             } */}
              
              {val.chosen_answer != val1.id  ? "" : [val1.isCorrect ? <TiTick/> : <ImCross/>]}
            {val.chosen_answer != val1.id ? val1.isCorrect? <TiTick/> :null : null}

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
}

export default QuestionCard
