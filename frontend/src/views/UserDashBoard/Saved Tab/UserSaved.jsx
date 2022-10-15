import React from 'react'
import UserNavbarIn from '../../../components/UserNavbarIn'
import UserSideBar from '../../../components/UserSideBar'
import ApplyJob from './ApplyJob'
import { Grid } from "@mui/material";



function UserSaved() {
  return (
    <div>
       <UserNavbarIn/>
       <Grid container direction="column" alignItems="center">

        <Grid item>
        <UserSideBar />
        </Grid>

        <Grid item>
        <ApplyJob />          
        </Grid>

       </Grid>
      
    </div>
  )
}

export default UserSaved
