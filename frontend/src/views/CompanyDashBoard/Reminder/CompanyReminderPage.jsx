import { Grid } from "@mui/material";
import React from "react";
import Companylayout from "../../../components/Companylayout";
import "./companyreminder.css";
import CRemainderComponent from "./CompanyReminderComponent";
import Hired from "../../../assets/demoprofileimage.jpg";
import Image from "../../../components/Image";
import { dummydatareminder } from "./dummydatareminder";
import CustomButton from "../../../components/Buttons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import callAPI from "../../../utils/callAPI";

function CompanyReminderPage() {
  const [markPublish, setMarkPublish] = useState(false);

  const [remainders, setRemainders] = useState(null);

  const message = async () => {
    let response_obj = await callAPI({ endpoint: "/remainder/get_remainder_company" });
    setRemainders(response_obj);
    console.log(response_obj.data);
  };

  useEffect(() => {
    message();
  }, []);

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
                // state={{jobPostOfCurrentCompany: jobPostOfCurrentCompany}}
                style={{ textDecoration: "none", color: "#495c83" }}
              >
                <Grid item className="sub_reminder">
                  Add New Reminder
                </Grid>
              </Link>
            </Grid>
            {remainders != null &&
            <Grid item>
              {remainders.data.map((val, key) => {
                return (
                  <CRemainderComponent val={val}/>
                )
                })}
            </Grid>
            }
          </Grid>
        </Grid>
      </Companylayout>
    </Grid>
  );
}

export default CompanyReminderPage;
