import React from 'react'
import UserNavbarIn from '../../../components/UserNavbarIn'
import UserSideBar from '../../../components/UserSideBar'
import AppliedSummaryBlock from '../../CompanyDashBoard/Applied Tab/AppliedSummaryBlock'
import "./saved.css"
import { Grid, IconButton } from "@mui/material";
import ApplyJobSummary from './ApplyJobSummary'
import ApplyJobDetailed from './ApplyJobDetailed'
import ApplyConfirmation from './ApplyConfirmation'



function ApplyJob() {
  return (
    <div className='applyjob-main'>
        <UserNavbarIn/>
        <Grid container direction="row">
            <Grid item>
            <UserSideBar/>
            </Grid>

            <Grid item>
                <div className='jobdescription-main'>
                    <ApplyJobSummary/>
                    <ApplyJobDetailed/>

                </div>
                
            </Grid>
        </Grid>

        {/* <ApplyConfirmation/> */}



    </div>
  )
}

export default ApplyJob
