import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import callAPI from "../../../utils/callAPI";

function JobsList(props) {
  console.log("thi si props");
  console.log(props.job);

  const [no_of_applicant, setNoOfApplicant] = useState(null);

  const message = async () => {
    let response_obj = await callAPI({ endpoint: `/apply/get_apply_job_post/${props.job.id}` });
    setNoOfApplicant(response_obj.data.no_of_applicant);
  };

  useEffect(() => {
    message();
  }, []);

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
        { no_of_applicant != null &&
        <Grid item className="joblisthead">
          {no_of_applicant}
        </Grid>
      }
      </Grid>
    </Grid>
  );
}

export default JobsList;
