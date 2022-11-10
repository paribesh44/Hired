import React from 'react'
import UserNavbarIn from '../../../components/UserNavbarIn'
import UserSideBar from '../../../components/UserSideBar'
import ApplyJob from './ApplyJob'
import { Grid } from "@mui/material";
import DashboardLayout from '../../../components/DashhboardLayout';
import Featured_box from '../../../components/featuredBox';
import { Link } from 'react-router-dom';



function UserSaved() {
  return (
    <div>
       <DashboardLayout>
        <Grid container direction="column "   className='assesmentmain-main'>
          <Grid item className='assesmentmain-heading'>
            Saved Jobs
          </Grid>
          <Grid className="assesmentmain-subheading">
            List of all the jobs that you have saved.
          </Grid>
          <Grid item>
            <Link to="/ApplyJob" style={{ textDecoration: "none", color: "black" }}>
            <Featured_box 
            company="Facebook"
             description={"Lorem Ipsum"} 
             jobName="Digital Marketing" 
              location={"Kathmandu"} 
              timeElapsed={"3 days ago"}
              state={false}
              
          />
              
            </Link>
         
          </Grid>
        </Grid>

        

       </DashboardLayout>
      
    </div>
  )
}

export default UserSaved

{/* <ApplyJob />  */}