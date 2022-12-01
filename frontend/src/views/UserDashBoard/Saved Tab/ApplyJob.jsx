import React from 'react'
import UserNavbarIn from '../../../components/UserNavbarIn'
import UserSideBar from '../../../components/UserSideBar'
import AppliedSummaryBlock from '../../CompanyDashBoard/Applied Tab/AppliedSummaryBlock'
import "./saved.css"
import { Grid, IconButton } from "@mui/material";
import ApplyJobSummary from './ApplyJobSummary'
import ApplyJobDetailed from './ApplyJobDetailed'
import ApplyConfirmation from './ApplyConfirmation'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import callAPI from "../../../utils/callAPI";



function ApplyJob() {
  const location = useLocation()
  const{job_post}=location.state
  const{save}=location.state
  const{posted_days_ago}=location.state
  console.log(job_post)

  // every time the user comes to the job post the view will incerase by one
  const message = async () => {
    let response_obj = await callAPI({
      endpoint: `/jobPost/update_post_view/${job_post.id}`,
      method: "PUT",
    });
  };

  useEffect(() => {
    message();
  }, []);

  return (
    <div className='applyjob-main'>
        <UserNavbarIn/>
        <Grid container direction="row">
            <Grid item>
            <UserSideBar/>
            </Grid>

            <Grid item>
                <div className='jobdescription-main'>
                    <ApplyJobSummary job_post={job_post} save={save} posted_days_ago={posted_days_ago}/>
                    <ApplyJobDetailed job_post={job_post} save={save}/>

                </div>
                
            </Grid>
        </Grid>

        {/* <ApplyConfirmation/> */}



    </div>
  )
}

export default ApplyJob
