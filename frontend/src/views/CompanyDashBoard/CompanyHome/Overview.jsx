import { Grid } from "@mui/material";
import React from "react";
import "./companyhome.css";

function Overview() {
  return (
    <Grid className="overviewspacing">
      <Grid container direction={"column"} className="companyoverviewmain">
        <Grid item className="overviewheading">
          Overview
        </Grid>
        <Grid item className="overviewtext">
          Job Posted:10
        </Grid>
        <Grid item className="overviewtext">
          No. of Applicants:100
        </Grid>
        <Grid item className="overviewtext">
          Matched Applicants: 40
        </Grid>
        <Grid item className="overviewtext">
          Candidates to Interview:2
        </Grid>
        <Grid item className="overviewtext">
          Hired employees:2
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Overview;
