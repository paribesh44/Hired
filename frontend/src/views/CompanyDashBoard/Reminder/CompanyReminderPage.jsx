import { Grid } from "@mui/material";
import React from "react";
import Companylayout from "../../../components/Companylayout";

function CompanyReminderPage() {
  return (
    <Grid container>
      <Companylayout>
        <Grid className="title">Your Reminders</Grid>
      </Companylayout>
    </Grid>
  );
}

export default CompanyReminderPage;
