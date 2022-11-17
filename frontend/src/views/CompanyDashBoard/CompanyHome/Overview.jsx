import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./companyhome.css";
import callAPI from "../../../utils/callAPI";


function Overview() {
  const [overview, setOverview] = useState(null);

  const message = async () => {
    let response_obj = await callAPI({ endpoint: "/employer/overview" });
    setOverview(response_obj.data);
    console.log(response_obj.data)
  };

  useEffect(() => {
    message();
  }, []);

  if(overview != null) {
  return (
    <Grid className="overviewspacing">
      <Grid container direction={"column"} className="companyoverviewmain">
        <Grid item className="overviewheading">
          Overview
        </Grid>
        <Grid item className="overviewtext">
          Job Posted: {overview.job_posted}
        </Grid>
        <Grid item className="overviewtext">
          Last posted job: {overview.last_posted_date}
        </Grid>
        <Grid item className="overviewtext">
          No. of Applicants: {overview.no_of_applicants}
        </Grid>
        <Grid item className="overviewtext">
          Matched Applicants: 40
        </Grid>
        <Grid item className="overviewtext">
          Candidates to Interview: {overview.candidates_to_interview}
        </Grid>
        <Grid item className="overviewtext">
          Hired employees: {overview.selected_employee}
        </Grid>
      </Grid>
    </Grid>
  );
  }
}

export default Overview;
