import { Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import CustomButton from './Buttons'
import Image from './Image'
import companydummylogo from "./../assets/companydummylogo.jpg"
import "./AppliedComponentUser.css"
import { IoFastFood } from 'react-icons/io5'
import DashboardLayout from '../components/DashhboardLayout'
import { useLocation, Navigate } from "react-router-dom";
import callAPI from "../utils/callAPI";

function NotificationJobPost() {
    const location = useLocation();
    const { job_post_id } = location.state;
    console.log(job_post_id)

    const [notifiedJobPost, setNotifiedJobPost] = useState("");
    const [applyNotified, setApplyNotified] = useState("");
    const [remainderInfo, setRemainderInfo] = useState(null);

    const message = async () => {
        let response_obj = await callAPI({ endpoint: `/notification/show_user_notification_job_post_employer/${job_post_id}` });
        let response_obj2 = await callAPI({ endpoint: `/apply/get_apply_notification/${job_post_id}` });
        let response_obj3 = await callAPI({ endpoint: `/remainder/get_remainder/${job_post_id}` });
        setNotifiedJobPost(response_obj.data);
        setApplyNotified(response_obj2.data);
        setRemainderInfo(response_obj3.data);
        console.log(response_obj.data)
        console.log(response_obj2.data)
        console.log(response_obj3.data)
    };

    useEffect(() => {
        message();
    }, []);

    // function capitalize(str){
    //     return str.charAt(0).toUpperCase() + str.slice(1);
    // }

    return (
    <DashboardLayout>
        <Grid container direction="column" className='assesmentmain-micro' >
          <Grid className='assesmentmain-heading'>
            Applied Job information
          </Grid>
        <div className='appliedcomponent'>
    <Grid container direction="row" className='abcd'>
        <Grid item className='imagewrapperapplied'>
            <Image src={companydummylogo} addStyles={"appliedcompimage"}/>

        </Grid>

        <Grid item className='appliedmidtext'>
            <Grid container  direction={"column"}>

                <Grid item  className='appliedcompcompany'>  JOB ID: #{notifiedJobPost.id} </Grid>
                {/* <Grid item  className='appliedcompcompany'>  {notifiedJobPost.employer.companyName} </Grid> */}
                <Grid item  className='appliedcompjob'>  {notifiedJobPost.job} </Grid>
                <Grid container>
                <Grid item className='appliedtexts'> Location:  </Grid>
                <Grid item> {notifiedJobPost.job_location}</Grid>
                </Grid>

                <Grid container>
                <Grid item className='appliedtexts'> Estimated Salary: </Grid>
                <Grid item> {notifiedJobPost.max_salary}</Grid>
                </Grid>
                <Grid container>
                <Grid item className='appliedtexts'> Posted Date: </Grid>
                <Grid item> {notifiedJobPost.posted_date}</Grid>
                </Grid>
                <Grid container>
                <Grid item className='appliedtexts'> Applied Date: </Grid>
                <Grid item> {applyNotified.applied_date}</Grid>
                </Grid>
                <Grid container>
                <Grid item className='appliedtexts'> Deadline: </Grid>
                <Grid item> {notifiedJobPost.deadline}</Grid>
                </Grid>
                <Grid container>
                <Grid item className='appliedtexts'>   Status: </Grid>
                <Grid item > {applyNotified.status}</Grid>
                </Grid>
                </Grid>
                </Grid>
            </Grid>
        </div>
        </Grid>

        {remainderInfo!=null &&
        <Grid container direction="column" className='assesmentmain-mini' >
          <Grid className='assesmentmain-heading'>
            Interview with company
          </Grid>
        <div className='appliedcomponent'>
        <Grid container direction="row" className='abcd'>

        <Grid item className='appliedmidtext'>
            <Grid container  direction={"column"}>

                <Grid item  className='appliedcompcompany'>  # {remainderInfo.name} </Grid>
                <Grid container>
                <Grid item className='appliedtexts'> Meet link:  </Grid>
                <Grid item> <a href={remainderInfo.meet_link} target="_blank" style={{textDecoration: "None"}}>{remainderInfo.meet_link}</a></Grid>
                </Grid>

                <Grid container>
                <Grid item className='appliedtexts'> Meeting Date: </Grid>
                <Grid item> {remainderInfo.meeting_date}</Grid>
                </Grid>
                <Grid container>
                <Grid item className='appliedtexts'> Meeting Time: </Grid>
                <Grid item> {remainderInfo.meeting_time}</Grid>
                </Grid>
                </Grid>
                </Grid>
            </Grid>
        </div>
        </Grid>
}
        </DashboardLayout>
    )
}
export default NotificationJobPost