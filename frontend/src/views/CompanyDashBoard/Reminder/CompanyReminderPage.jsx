import { Grid } from "@mui/material";
import React from "react";
import Companylayout from "../../../components/Companylayout";
import "./companyreminder.css";
import Hired from "../../../assets/demoprofileimage.jpg";
import Image from "../../../components/Image";
import { dummydatareminder } from "./dummydatareminder";
import CustomButton from "../../../components/Buttons";
import { Link } from "react-router-dom";
import { useState } from "react";

function CompanyReminderPage() {
  const [markedasdone, setmarkedasdone] = useState(false);

  function markclicked() {
    setmarkedasdone(!markedasdone);
  }
  return (
    <Grid container>
      <Companylayout>
        <Grid container direction="column" className="reminder_page">
          <Grid item>
            <Grid container direction="row" justifyContent={"space-between"}>
              <Grid item className="title_reminder">
                Your Reminders
              </Grid>
              <Link
                to="/CompanyAddReminder"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Grid item className="sub_reminder">
                  Add New Reminder
                </Grid>
              </Link>
            </Grid>
            <Grid item>
              {dummydatareminder.map((val, key) => (
                <Grid container direction={"row"} className="single_reminder">
                  <Grid item>
                    <Grid
                      container
                      direction={"row"}
                      justifyContent="space-between"
                    >
                      <Grid item>
                        <Grid container direction="row">
                          <Grid item>
                            <Image
                              src={Hired}
                              addStyles={"reminderpage_image"}
                            />
                          </Grid>
                          <Grid item>
                            <Grid container direction="column">
                              <Grid item>{val.reminder_name}</Grid>
                              <Grid item>On: {val.date}</Grid>
                              <Grid item>To: Mr. {val.person} </Grid>
                              <Grid item>For Post: {val.reminder_post} </Grid>
                              <Grid item>
                                {" "}
                                Responsible Person: {val.responsible_person}
                              </Grid>
                              <Grid item> Required Link: {val.meet_link}</Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item className="reminderpage_button">
                        <Grid container direction={"column"}>
                          <Grid item classname="reminderpage_singlebutton">
                            <CustomButton
                              name="Mark as Done"
                              onClicked={() => markclicked()}
                              addStyles={"reminderpage_singlebutton"}
                            ></CustomButton>
                          </Grid>
                          <Grid item>
                            <CustomButton name="Delete" />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Companylayout>
    </Grid>
  );
}

export default CompanyReminderPage;
