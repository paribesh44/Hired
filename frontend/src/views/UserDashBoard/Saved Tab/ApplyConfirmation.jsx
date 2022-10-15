import React from 'react'
import { Grid, IconButton } from "@mui/material";
import CustomButton from '../../../components/Buttons';


function ApplyConfirmation() {
  return (
    <div className='applyconfirmation-main'>
        <Grid 
            container
            direction="row"
            className="applyconfirmation-grid">

            <Grid item className='confirmationrow1'>
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


                </Grid>
            </Grid>

            <Grid item >
            <div className='confirmationvertical-line'></div>
          </Grid>

            <Grid item className='confirmationrow2'> 
                <Grid container direction="column">
                    <Grid item className="confirmationquestion"> Let them know why they should hire you. *</Grid>
                    <Grid item className="blankcontainer">Text goes here</Grid>
                    <Grid item className='confirmationquestion'> COmpany related question goes here</Grid>
                    <Grid item className="blankcontainer">Text goes here</Grid>
                    <Grid item className='confirmationquestion'> Want to attach a cover letter?</Grid>
                    <CustomButton addStyles={"confirmationbutton"} name="Choose a File"/>
                    <Grid item className='confirmbutton-row'>
                        <Grid container direction="row">
                      <div className='confirmcancelbutton'><CustomButton addStyles={"reject-button"}name="Cancel"/>
                        </div>  
                        <div className='confirmsendbutton'>
                        <CustomButton addStyles={"accept-button"}name="Send Application"/>


                        </div>



    </Grid>
</Grid>




                </Grid>


            
            
            </Grid>

        </Grid>
      
    </div>
  )
}

export default ApplyConfirmation
