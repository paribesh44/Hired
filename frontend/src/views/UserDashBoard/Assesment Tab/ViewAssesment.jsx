import React from 'react'
import { useLocation } from 'react-router-dom'
import UserNavbarIn from '../../../components/UserNavbarIn'
import UserSideBar from '../../../components/UserSideBar'
import { Grid, IconButton } from "@mui/material";
import ViewQuestionsCard from './ViewQuestionsCard';


function ViewAssesment() {
    const location = useLocation()
    const{target_field_id}=location.state
    const{user_assesment_id}=location.state
    const{score}=location.state
    const{visibility}=location.state
    console.log(visibility)
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
                        <div> Marks Obtained: {score} / 20</div>
                        </Grid>
                        <Grid item className='asses-subheading'>
                            <div>Type: Multiple Choice</div>
                            <div>Difficulty : Easy</div>
                            <div>Finished in: 20 mins</div>
                            <div>Status: {visibility ? "Show": "Hidden"}</div>

                        </Grid>
                    </Grid>
                    <ViewQuestionsCard target_field_id={target_field_id} user_assesment_id={user_assesment_id}/> 
                </Grid>
            </Grid>

        
        <div>
       

        </div>
     
    </div>
  )
}

export default ViewAssesment
