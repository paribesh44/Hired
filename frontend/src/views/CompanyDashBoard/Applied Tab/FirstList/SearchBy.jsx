import { Grid } from "@mui/material";
import React from "react";
import "./AppliedEmployeesList.css";

function SearchBy() {
  return (
    <Grid container className="searchbyspacing">
      <Grid container className="searchbymains" direction={"column"}>
        <Grid item className="overviewheading">
          Search By:
        </Grid>
        <Grid item className="searchbysub">
          Job Post:
        </Grid>

        <Grid container direction={"column"}>
          <Grid item className="searchbyeach">
            Graphics Designer
          </Grid>
          <Grid item className="searchbyeach">
            Software Engineer
          </Grid>
          <Grid item className="searchbyeach">
            Front-End Developer
          </Grid>
          <Grid item className="searchbyeach">
            Back-End Developer
          </Grid>
          <Grid item className="searchbyeach">
            Android Developer
          </Grid>
          <Grid item className="searchbyeach">
            Machine Learning
          </Grid>
          <Grid item className="searchbyeach">
            Data Mining
          </Grid>
          <br />
        </Grid>

        <Grid item className="searchbysub">
          Match percent:
        </Grid>
        <Grid container direction={"column"}>
          <Grid item className="searchbyeach">
            More than 75%
          </Grid>
          <Grid item className="searchbyeach">
            75% - 50%
          </Grid>
          <Grid item className="searchbyeach">
            50%-25%
          </Grid>
          <Grid item className="searchbyeach">
            Below 25%
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SearchBy;
