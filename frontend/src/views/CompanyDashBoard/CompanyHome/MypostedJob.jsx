import { Grid } from "@mui/material";
import React from "react";
import JobsList from "./JobsList";

function MypostedJob() {
  return (
    <Grid container direction={"column"} className="mypostedjobmain">
      <Grid item className="overviewheading">
        My Posted Job
      </Grid>
      <Grid item>All the jobs you have posted so far.</Grid>
      <Grid>
        <JobsList />
      </Grid>
    </Grid>
  );
}

export default MypostedJob;
