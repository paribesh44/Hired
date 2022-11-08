import { Grid } from '@mui/material'
import React from 'react'
import CustomButton from './Buttons'
import Image from './Image'
import companydummylogo from "./../assets/companydummylogo.jpg"
import "./AppliedComponentUser.css"


function AppliedComponentUser() {
  return (
    <div className='savedcomponent'>
    <Grid container direction="row" className='abcd'>
        <Grid item className='imagewrapperapplied'>
            <Image src={companydummylogo} addStyles={"savedcompimage"}/>

        </Grid>

        <Grid item className='introwrapper'>
          

            
        </Grid>

       

      <Grid /*last colum ko grid*/
      item className='introwrapper'>
        
            


     
        </Grid>
   

    </Grid>

  
</div>
  )
}

export default AppliedComponentUser
