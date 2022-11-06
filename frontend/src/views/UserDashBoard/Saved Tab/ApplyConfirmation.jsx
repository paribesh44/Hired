import React from 'react'
import { Grid, IconButton } from "@mui/material";
import CustomButton from '../../../components/Buttons';
import { useState } from 'react';


function ApplyConfirmation({statechanger, ...props}) {
    const [applyanswers, setapplyanswers]=useState({reasontoaccept:"", companyques:""})
    function handlechange(event){
        setapplyanswers(prevdata=>{
            return{
                ...prevdata,
                [event.target.name]:event.target.value,
            }
            
        })
    }


    function confirmedbutton(){
        console.log(applyanswers.reasontoaccept)

        console.log(applyanswers.companyques)

    }
  return (
    <div>
        <div className='modal'>
            <div className='overlay'>
                <div className="modal-content">
                <div className='applyconfirmation-main'>
                    <div className='confirmationquestion'>Let them know why they should hire you. *</div>
                   <input placeholder='Your answer' name="reasontoaccept" onChange={handlechange} value={applyanswers.reasontoaccept}/>
                   <div className='confirmationquestion'>COmpany related question goes here</div>
                   <input placeholder='Your answer' name="companyques" onChange={handlechange} value={applyanswers.companyques}/>


                   <div className='confirmationquestion'>Want to attach a cover letter?</div>

                   <CustomButton addStyles={"confirmationbutton"} name="Choose a File"/>

                   <Grid container direction="row" >
                      <div className='confirmcancelbutton'>
                        <CustomButton addStyles={"reject-button"}name="Cancel" onClicked={()=>statechanger(false)}/>
                        </div>  
                        <div className='confirmsendbutton'>
                            <CustomButton addStyles={"accept-button"}name="Send Application"  onClicked={confirmedbutton}/>
                        </div>
                    </Grid>
                    
        
      
                </div>                    
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default ApplyConfirmation


   {/* <Grid item className='confirmationrow1'>
                <Grid container direction="column">
                    <Grid item className='confirmation-heading'>
                        Applying to:
                    </Grid>
                    <Grid item className='confirmation-texts'>
                        Abc Company
                    </Grid>
                    <Grid item className='confirmation-heading'>
                        Post:
                    </Grid>
                    <Grid> 
                        Graphics Designer
                    </Grid>
                    <Grid item className='confirmation-heading'>
                        Salary:
                    </Grid>
                    <Grid> 
                        Graphics Designer
                    </Grid>

                    <Grid item className='confirmation-heading'>
                        Job Start Date:
                    </Grid>
                    <Grid> 
                        Graphics Designer
                    </Grid>

                    <Grid item className='confirmation-heading'>
                        Work HOur:
                    </Grid>
                    <Grid> 
                        Graphics Designer
                    </Grid>

                </Grid>
            </Grid> */}