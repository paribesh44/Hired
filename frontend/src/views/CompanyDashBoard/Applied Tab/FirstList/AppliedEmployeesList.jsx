import { Grid } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import Companylayout from "../../../../components/Companylayout";
import MypostedJob from "../../CompanyHome/MypostedJob";
import Appliedlist from "./Appliedlist";
import SearchBy from "./SearchBy";

function AppliedEmployeesList() {
  const location = useLocation();
  const { job_post_id } = location.state;
  const { job_position } = location.state;
  console.log("aaaaaaaaaaaa");
  console.log(job_post_id);

  return (
    <Companylayout>
      <Grid container direction="row" className="appliedhomemain">
        <Grid item>
          <SearchBy />
        </Grid>
        <Grid sm={9} item>
          <Appliedlist job_post_id={job_post_id} job_position={job_position} />
        </Grid>
      </Grid>
    </Companylayout>
  );
}

export default AppliedEmployeesList;
