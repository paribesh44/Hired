import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function JobsList(props) {
  console.log("thi si props");
  console.log(props.job);

  return (
    <Grid container className="joblistmain">
      <Link to="/EditJobPost" state={{ job: props.job }}>
        <Grid item className="joblistsubtext">
          Edit the Job Post
        </Grid>
      </Link>

      <Grid container direction="row" alignItems="center">
        <Grid item className="joblistsub">
          Post :
        </Grid>
        <Grid item className="joblisthead">
          {props.jobname}
        </Grid>
      </Grid>
      <Grid container direction={"row"} alignItems="center">
        <Grid item className="joblistsub">
          Posted Date:
        </Grid>
        <Grid item className="joblisthead">
          {props.posted_date.split("T")[0]}
        </Grid>
        <Grid item className="joblistsub2">
          Deadline:
        </Grid>
        <Grid item className="joblisthead">
          {props.deadline.split("T")[0]}
        </Grid>
      </Grid>
      <Grid container direction={"row"} alignItems="center">
        <Grid item className="joblistsub">
          No. of vacancies:
        </Grid>
        <Grid item className="joblisthead">
          {props.no_of_vacancy}
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
