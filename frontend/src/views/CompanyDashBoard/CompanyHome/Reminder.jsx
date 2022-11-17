import { Grid } from "@mui/material";
import React from "react";

function CompanyReminder() {
  return (
    <Grid container className="reviwebox_top" direction="column">
      <Grid item className="overviewheading">
        Reminders
      </Grid>

      <Grid item className="reminderbox">
        You have no new reminders
      </Grid>
    </Grid>
  );
}

export default CompanyReminder;
