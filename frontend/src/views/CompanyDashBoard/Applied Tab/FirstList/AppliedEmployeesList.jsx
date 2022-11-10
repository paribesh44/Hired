import { Grid } from "@mui/material";
import React from "react";
import Companylayout from "../../../../components/Companylayout";
import MypostedJob from "../../CompanyHome/MypostedJob";
import Appliedlist from "./Appliedlist";
import SearchBy from "./SearchBy";

function AppliedEmployeesList() {
  return (
    <Companylayout>
      <Grid container direction="row" className="appliedhomemain">
        <Grid item>
          <SearchBy />
        </Grid>
        <Grid sm={9} item>
          <Appliedlist />
        </Grid>
      </Grid>
    </Companylayout>
  );
}

export default AppliedEmployeesList;
