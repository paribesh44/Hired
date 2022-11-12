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

    function submitApply(e){
        e.preventDefault()
        const cover_letter = e.target.cover_letter.files[0]
    }


    function confirmedbutton(){
        console.log(applyanswers.reasontoaccept)

        console.log(applyanswers.companyques)

    }
  return (
    <form onSubmit={submitApply}>
        <div className='modal'>
            <div className='overlay'>
                <div className="modal-content">
                <div className='applyconfirmation-main'>
                    <div className='confirmationquestion'>Let them know why they should hire you. *</div>
                   <input placeholder='Your answer' name="reasontoaccept" onChange={handlechange} value={applyanswers.reasontoaccept}/>


                   <div className='confirmationquestion'>Attach your cover letter?</div>
                   <input type="file" name="cover_letter"/>

                   <div className='confirmationquestion'>Attach your CV.</div>
                   <input type="file" name="cv"/>

                   {/* <CustomButton addStyles={"confirmationbutton"} name="Choose a File"/> */}

                   <Grid container direction="row" >
                      <div className='confirmcancelbutton'>
                        <CustomButton addStyles={"reject-button"}name="Cancel" onClicked={()=>statechanger(false)}/>
                        </div>  
                        <div className='confirmsendbutton'>
                            <CustomButton addStyles={"accept-button"}name="Send Application"  onClicked={confirmedbutton} type="submit"/>
                        </div>
                    </Grid>
                    
        
      
                </div>                    
                </div>
            </div>
        </div>
    </form>
    
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