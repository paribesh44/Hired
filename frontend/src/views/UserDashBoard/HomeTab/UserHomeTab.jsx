import { Grid, Switch } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../../../components/Buttons'
import DashboardLayout from '../../../components/DashhboardLayout'
import Featured_box from '../../../components/featuredBox'
import UserNavbarIn from '../../../components/UserNavbarIn'
import UserSideBar from '../../../components/UserSideBar'
import "./Hometab.css";

function UserHomeTab() {
  const jobs = [
    {
      company: "Twitter Inc",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      jobName: "Software Developer",
      timeElapsed: "5 sec ago",
      location: "Pokhara, Nepal",
    },
    {
      company: "Twitter Inc",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      jobName: "Software Developer",
      timeElapsed: "5 sec ago",
      location: "Pokhara, Nepal",
    },
  ];
  return (
    <DashboardLayout>
      <Grid container  direction="column"  className='assesmentmain-main'>
        <Grid item className='userhomemtitle'>
          Recommended Jobs
        </Grid>
        <Grid item>
        {jobs.map((job) => (
          <Link to='/ApplyJob'  style={{ textDecoration: "none", color: "black" }}>
            <Featured_box
                      company={job.company}
                      description={job.description}
                      jobName={job.jobName}
                      timeElapsed={job.timeElapsed}
                      location={job.location}
                      
                    ></Featured_box>
          </Link>
                  
                  ))}
       

        </Grid>
        
      </Grid>
    </DashboardLayout>
//     <div>
//         <UserNavbarIn/>
//         <UserSideBar />
//         <Switch >
//         <Link to="/aaa">
// <CustomButton name="ssd"></CustomButton>

// </Link>

//         </Switch>

        
        
//     </div>
  )
}

export default UserHomeTab
