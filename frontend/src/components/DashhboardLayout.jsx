import { Grid } from '@mui/material';
import React from 'react'
import UserNavbarIn from './UserNavbarIn';
import UserSideBar from './UserSideBar';

const DashboardLayout = ({ children, mode = 4, leftbar = <UserSideBar /> , topbar=<UserNavbarIn/>}) => {
    return (
      <Grid container direction="row" className="dashboardLayout_mainRoot">
        <Grid sm={12} item className="dashboardLayout_sideBar">
          {topbar}
        </Grid>
        
        <Grid  item className="dashboardLayout_sideBar">
          {leftbar}
        </Grid>
        
        <Grid sm={8} item className="dashboardLayout_mainArea">
          {children}
        </Grid>
        {/* <Grid sm={3} item className="dashboardLayout_profileBar">
          <ProfileBar mode={mode} />
        </Grid> */}
      </Grid>
    );
  };
  
  export default DashboardLayout;