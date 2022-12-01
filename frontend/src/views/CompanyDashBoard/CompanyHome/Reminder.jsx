import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import callAPI from "../../../utils/callAPI";
import { Link, Navigate } from "react-router-dom";

function CompanyReminder() {
  const [numberOfRemainder, setNumberOfRemainder] = useState(0);

  const message = async () => {
    let response_obj = await callAPI({
      endpoint: "/remainder/get_number_of_remainder",
    });
    setNumberOfRemainder(response_obj.data);
  };

  useEffect(() => {
    message();
  }, []);

  console.log(numberOfRemainder);

  return (
    <Grid container className="reviwebox_top" direction="column">
      <Grid item className="overviewheading">
        Schedules{" "}
      </Grid>

      <Grid item className="reminderbox">
        {numberOfRemainder == 0
          ? "You have no new schedule"
          : "You have " + `${numberOfRemainder}` + " schedules."}
        {/* You have {numberOfRemainder==0 ? "no" : 
          <Link to="/CompanyReminderPage">numberOfRemainder<Link/>} new reminders */}
      </Grid>
    </Grid>
  );
}

export default CompanyReminder;
