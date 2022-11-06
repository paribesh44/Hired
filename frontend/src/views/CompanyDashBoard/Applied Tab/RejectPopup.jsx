import { Grid } from '@mui/material';
import React, {useState} from 'react'
import CustomButton from '../../../components/Buttons'

function RejectPopup({statechanger, ...props}) {
  const [reasondata, setreasondata]=useState({reason:""})

    const [rejectModal, setrejectModal]=useState(false);
    const [showButtons, setshowButtons]=useState(true);

    const togglerejectModal2=()=>{
      setrejectModal(!rejectModal)
      setshowButtons(!showButtons)
    }

    function handlereasonchange(event){
      setreasondata(prevdata=>{
        return {
          ...prevdata,
          [event.target.name]:event.target.value
        }
      })
    }

    function rejectedbutton()
    {
      console.log(reasondata.reason)
    }
      return (
    <div>
     <div className="modal">
                <div className="overlay" >
                  <div className="modal-content">
                        Are you sure you want to reject {props.name} for the post of {props.post} ?
                        {rejectModal && 
                        <div> 
                            <div className='rejectreason'>
                                Do you want to tell them why they couldn't get hired?
                                </div>
                                <br/>
                                <input 
                                  type={"text"}
                                  placeholder="Enter your reasons here"
                                    value={reasondata.reason} 
                                    name="reason" 
                                    onChange={handlereasonchange}/>
                         </div>}
                      { showButtons &&
                       <Grid container justifyContent={"space-around"} className=" reject-popupbuttons"direction="row">
                        <Grid item>
                          <CustomButton name="Reject" addStyles={"accept-button"} onClick={togglerejectModal2}/>
                        </Grid>
                        <Grid item>
                          <CustomButton name="Cancel" onClicked={() => statechanger(false)} addStyles="reject-button"/>
                          
                        </Grid>

                      </Grid>}

                      { !showButtons && 
                      <Grid container justifyContent={"space-around"} className=" reject-popupbuttons"direction="row">
                        <Grid item>
                          <CustomButton name="Reject" addStyles={"accept-button"} onClicked={rejectedbutton}/>
                        </Grid>
                        <Grid item>
                          <CustomButton name="Cancel" onClicked={() => statechanger(false)} addStyles="reject-button"/>
                          
                        </Grid>

                      </Grid>}


                       
                  </div>
                </div>
               </div> 
      
    </div>
  )
}

export default RejectPopup
