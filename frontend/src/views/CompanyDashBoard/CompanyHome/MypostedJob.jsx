import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import callAPI from "../../../utils/callAPI";
import JobsList from "./JobsList";

function MypostedJob() {
  const [mypostedjob, setmypostedjob] = useState(null);

  const message = async () => {
    let response_obj = await callAPI({
      endpoint: "/jobPost/show_all_job_post",
    });
    setmypostedjob(response_obj);
  };

  useEffect(() => {
    message();
  }, []);

  if (mypostedjob != null) {
    console.log(mypostedjob.data);
    return (
      <Grid container direction={"column"} className="mypostedjobmain">
        <Grid item className="overviewheading">
          My Posted Job
        </Grid>
        <Grid item>All the jobs you have posted so far.</Grid>
        <Grid item>
          {mypostedjob.data.map((job, key) => (
            <Link
              to="/AppliedEmployeesList"
              style={{ textDecoration: "none", color: "black" }}
              state={{ job_post_id: job.id, job_position: job.job }}
            >
              <JobsList
                job={job}
                jobname={job.job}
                posted_date={job.posted_date}
                deadline={job.deadline}
                no_of_vacancy={job.no_of_vacancy}
              />
            </Link>
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default MypostedJob;
