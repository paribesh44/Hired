import React from 'react'
import { useLocation } from 'react-router-dom'
import UserNavbarIn from '../../../components/UserNavbarIn'
import UserSideBar from '../../../components/UserSideBar'
import { Grid, IconButton } from "@mui/material";
import ViewQuestionsCard from './ViewQuestionsCard';

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
                        <div> Marks Obtained: 5/10</div>
                        </Grid>
                        <Grid item className='asses-subheading'>
                            <div> Type: Multiple CHoice</div>
                            <div>Difficulty : Easy</div>
                            <div>Finished in: 20 mins</div>
                            <div> Status: Hidden</div>

                        </Grid>
                    </Grid>
                    <ViewQuestionsCard/> 
                </Grid>
            </Grid>

        
        <div>
       

        </div>
     
    </div>
  )
}

export default ViewAssesment
