import React from 'react'
import { useLocation } from 'react-router-dom'
import UserNavbarIn from '../../../components/UserNavbarIn'
import UserSideBar from '../../../components/UserSideBar'
import { Grid, IconButton } from "@mui/material";
import QuestionCard from './QuestionCard';

function ViewAssesment() {
  return (
    <div>
        <UserNavbarIn/>
        <Grid container direction="row">
            <Grid item>
            <UserSideBar/>


            </Grid>
            <Grid item className='assesmentquestions-main'>
                <div className='assesmentmain-heading'>
                Assesment
                </div>
                <Grid container direction="row" justifyContent="space-between">
                    <Grid item>
                    <div className='assesmentquestions-heading'> Name of the Assesment</div>
                    </Grid>
                    <Grid item className='asses-subheading'>
                        <div> Type:</div>
                        <div>TIme</div>
                    </Grid>
                </Grid>
                <QuestionCard/> 
            </Grid>
        </Grid>

        
        <div>
       

        </div>
     
    </div>
  )
}

export default ViewAssesment
