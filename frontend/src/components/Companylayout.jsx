import { Grid } from "@mui/material";
import React from "react";
import CompanyNavbarIn from "./CompanyNavbarIn";
import UserNavbarIn from "./UserNavbarIn";
import UserSideBar from "./UserSideBar";

const Companylayout = ({
  children,

  topbar = <CompanyNavbarIn />,
}) => {
  return (
    <Grid container direction="row" className="dashboardLayout_mainRoot">
      <Grid sm={12} item className="dashboardLayout_sideBar">
        {topbar}
      </Grid>

      <Grid sm={12} item className="dashboardLayout_mainArea">
        {children}
      </Grid>
    </Grid>
  );
};

export default Companylayout;
