import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import Companylayout from "../../../components/Companylayout";
import DropDown from "../../../components/DropDown";

function CompanyAddReminder() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Grid container>
      <Companylayout></Companylayout>
      <Grid container direction="column" className="reminder_page">
        <Grid item className="title_reminder">
          Add New Reminder
        </Grid>
        <Grid item>
          <Grid container direction={"column"} className="add_a_new_reminder">
            <Grid item className="reminder_topic">
              Set Reminder Name:
            </Grid>
            <Grid item>
              <input type="text"></input>
            </Grid>
            <Grid item>
              <Grid container direction="row">
                <Grid item className="date_picker_item">
                  <Grid container direction="column">
                    <Grid item className="reminder_topic">
                      Set Day:
                    </Grid>
                    <Grid item>Date picking thing</Grid>
                  </Grid>
                </Grid>
                <Grid item className="date_picker_item">
                  <Grid container direction="column">
                    <Grid item className="reminder_topic">
                      Set Time:
                    </Grid>
                    <Grid>Time set garne thau</Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className="reminder_topic">
              Meeting link:
            </Grid>
            <Grid item>
              <input type="text" style={{ height: "40px" }} />
            </Grid>

            <Grid item className="reminder_topic">
              Name of Job Post:
            </Grid>
            <Grid item className="reminder_dropdown">
              <DropDown />
            </Grid>
            <Grid item className="reminder_topic">
              Name of the applicant
            </Grid>
            <Grid>
              <DropDown />
            </Grid>

            <Grid item className="reminder_topic">
              Responsible Person:
            </Grid>
            <Grid item>
              {" "}
              <input type="text" style={{ height: "40px" }}></input>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CompanyAddReminder;
