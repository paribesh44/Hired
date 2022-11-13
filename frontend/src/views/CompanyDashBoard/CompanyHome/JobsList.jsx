import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function JobsList() {
  return (
    <Grid container className="joblistmain">
      <Link to="">
        <Grid item className="joblistsubtext">
          Edit the Job Post
        </Grid>
      </Link>

      <Grid container direction="row" alignItems="center">
        <Grid item className="joblistsub">
          Post :
        </Grid>
        <Grid item className="joblisthead">
          Graphics Designer
        </Grid>
      </Grid>
      <Grid container direction={"row"} alignItems="center">
        <Grid item className="joblistsub">
          Posted Date:
        </Grid>
        <Grid item className="joblisthead">
          09-09-09
        </Grid>
        <Grid item className="joblistsub2">
          Deadline:
        </Grid>
        <Grid item className="joblisthead">
          09-09-09
        </Grid>
      </Grid>
      <Grid container direction={"row"} alignItems="center">
        <Grid item className="joblistsub">
          No. of vacancies:
        </Grid>
        <Grid item className="joblisthead">
          20
        </Grid>
        <Grid item className="joblistsub2">
          No. of applicants:
        </Grid>
        <Grid item className="joblisthead">
          9
        </Grid>
      </Grid>
    </Grid>
  );
}

export default JobsList;
