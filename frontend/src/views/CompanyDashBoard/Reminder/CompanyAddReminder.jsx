import { Grid } from "@mui/material";
import React from "react";
import Companylayout from "../../../components/Companylayout";

function CompanyAddReminder() {
  return (
    <Grid>
      <Companylayout></Companylayout>
      <Grid container direction="column">
        <Grid item>Set Reminder Name:</Grid>
        <Grid item>
          <input type="text"></input>
        </Grid>
        <Grid item>
          <Grid container direction="row">
            <Grid item>
              <Grid container direction="column">
                <Grid item>Set Day:</Grid>
                <Grid>Calender pop up hune thau</Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>Set Time:</Grid>
                <Grid>Time set garne thau</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>Meeting link:</Grid>
        <Grid item>Meet link rakhne thau</Grid>

        <Grid item>Name of Job Post:</Grid>
        <Grid>XYZ job</Grid>
        <Grid item>Name of the applicant</Grid>
        <Grid>ABC NAme</Grid>
      </Grid>
    </Grid>
  );
}

export default CompanyAddReminder;
