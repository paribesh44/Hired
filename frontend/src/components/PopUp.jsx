import React from 'react';
import CustomButton from './Buttons';
import "./PopUp.css";


function PopUp(props) {
 
  return (props.trigger) ?(
    <div className='popup-main'>
        <div className="popup-inner">
            {/* <CustomButton addStyles="close-btn" name="X" onClick={()=>props.setTrigger(false)}>  */}
                
            {/* </CustomButton> */}
            
            {props.children} 
        </div>
      
    </div>
  ) : "";
}

export default (PopUp)
