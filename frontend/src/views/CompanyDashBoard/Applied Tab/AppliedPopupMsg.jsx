import React from 'react'
import CustomButton from '../../../components/Buttons'
import { Grid, IconButton } from "@mui/material";


function AppliedPopupMsg(props) {
  return (
    <div>
        <div> Do you want to accept {props.name} for the post of {props.post}?</div> 

        <Grid className="row-main" container direction="row" justifyContent="space-around">
            <Grid item >
            <CustomButton name="Yes" addStyles="accept-button">

</CustomButton>

            </Grid>
            <Grid item>
            <CustomButton name="Cancel" addStyles="reject-button"  onClicked={()=> props.setTrigger(false)}>
            
            </CustomButton>
    

            </Grid>


            



        </Grid>
        

       

      
            

        
      
    </div>
  )
}

export default AppliedPopupMsg
