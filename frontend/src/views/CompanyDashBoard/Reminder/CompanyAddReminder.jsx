import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Companylayout from "../../../components/Companylayout";
import DropDown from "../../../components/DropDown";
import callAPI from "../../../utils/callAPI";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useLocation, Navigate } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import CustomButton from "../../../components/Buttons";

function CompanyAddReminder() {
  const [time, setTime] = useState(null);

  const [jobPostDropDown, setJobPostDropDown] = useState("");

  const [applicantDropDown, setApplicantDropDown] = useState("");

  const [remainderName, setRemainderName] = useState(null);
  const [remainderNote, setRemainderNote] = useState(null);
  const [meetingLink, setMeetingLink] = useState(null);
  const [meetingDate, setMeetingDate] = useState(null);

  const [appicant, setApplicant] = useState(null);

  const [jobPostOfCurrentCompany, setJobPostOfCurrentCompany] = useState(null);

  const [changeLocation, setChangeLocation] = useState(false);

  const message = async () => {
    let response_obj = await callAPI({
      endpoint: "/remainder/show_all_job_post_company",
    });
    setJobPostOfCurrentCompany(response_obj.data);
  };

  useEffect(() => {
    message();
  }, []);

  async function handleChangeJobPost(e) {
    setJobPostDropDown(e.target.value);
    if (e.target.value != "") {
      let response_obj = await callAPI({
        endpoint: `/remainder/get_seeker_applied_job/${e.target.value}`,
      });
      setApplicant(response_obj.data);
      console.log(response_obj.data);
    }
  }

  async function markclicked() {
    var jobPostName = "";
    jobPostOfCurrentCompany.map((jobPost) => {
      if (jobPost.id == jobPostDropDown) {
        jobPostName = jobPost.job;
      }
    });

    var applicatName = "";
    appicant.map((app) => {
      if (app.seeker.id == applicantDropDown) {
        applicatName = app.seeker.name;
      }
    });

    var meeting_time = 0;
    if (time.$H > 12) {
      meeting_time = time.$H.toString() + ":" + time.$m.toString() + " PM";
    } else if (time.$H < 12) {
      meeting_time = time.$H.toString() + ":" + time.$m.toString() + " AM";
    }

    const remainderData = {
      name: remainderName,
      note: remainderNote,
      meet_link: meetingLink,
      seeker_name: applicatName,
      job_post_name: jobPostName,
      seeker_id: applicantDropDown,
      job_post_id: jobPostDropDown,
      meeting_date: meetingDate,
      meeting_time: meeting_time,
    };

    let response_obj = await callAPI({
      endpoint: `/remainder/create_remainder`,
      method: "POST",
      data: remainderData,
    });

    if (response_obj.data.msg == "success") {
      console.log("success");
      setChangeLocation(true);
    }
  }

  return (
    <Grid container>
      {changeLocation && <Navigate to="/CompanyReminderPage" />}
      <Companylayout></Companylayout>
      <Grid container direction="column" className="reminder_page">
        <Grid item className="title_reminder">
          Add New Schedule
        </Grid>
        <Grid item>
          <Grid container direction={"column"} className="add_a_new_reminder">
            <Grid
              item
              className="reminder_topic"
              style={{ marginBottom: "5px" }}
            >
              Set Schedule Name:
            </Grid>
            <Grid item style={{ marginBottom: "10px" }}>
              <input
                type="text"
                onChange={(e) => {
                  setRemainderName(e.target.value);
                }}
                placeholder={"e.g. Virtual Interview"}
              ></input>
            </Grid>

            <Grid
              item
              className="reminder_topic"
              style={{ marginBottom: "5px" }}
            >
              Set Note:
            </Grid>
            <Grid item style={{ marginBottom: "10px" }}>
              <input
                type="text"
                onChange={(e) => {
                  setRemainderNote(e.target.value);
                }}
                placeholder={"e.g. Talk about his/her projects"}
              ></input>
            </Grid>

            <Grid item className="reminder_topic">
              Job Post:
            </Grid>
            <Grid container style={{ marginBottom: "10px" }}>
              <Select
                sx={{ m: 1, minWidth: 380 }}
                value={jobPostDropDown}
                onChange={handleChangeJobPost}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                {jobPostOfCurrentCompany != null &&
                  jobPostOfCurrentCompany.map((i) => (
                    <MenuItem value={i.id}>
                      {i.job} #{i.id}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>

            <Grid item className="reminder_topic">
              Name of the applicant
            </Grid>
            <Grid container style={{ marginBottom: "10px" }}>
              <Select
                sx={{ m: 1, minWidth: 380 }}
                value={applicantDropDown}
                onChange={(e) => {
                  setApplicantDropDown(e.target.value);
                }}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Select</em>
                </MenuItem>
                {appicant != null &&
                  appicant.map((i) => (
                    <MenuItem value={i.seeker.id}>
                      {i.seeker.name} #{i.seeker.id}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>

            <Grid
              item
              className="reminder_topic"
              style={{ marginBottom: "5px" }}
            >
              Meeting link:
            </Grid>
            <Grid item>
              <input
                type="text"
                style={{ height: "40px" }}
                onChange={(e) => {
                  setMeetingLink(e.target.value);
                }}
                placeholder={"e.g. https://meet.google.com/xxxx"}
              />
            </Grid>

            <Grid item>
              <Grid container direction="row">
                <Grid item className="date_picker_item">
                  <Grid container direction="column">
                    <Grid
                      item
                      className="reminder_topic"
                      style={{ marginBottom: "8px" }}
                    >
                      Set Day:
                    </Grid>

                    <Grid container />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="MM/DD/YYYY"
                        value={meetingDate}
                        onChange={(newValue) => {
                          setMeetingDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
                <Grid
                  item
                  className="date_picker_item"
                  style={{ marginLeft: "40px" }}
                >
                  <Grid container direction="column">
                    <Grid
                      item
                      className="reminder_topic"
                      style={{ marginBottom: "8px" }}
                    >
                      Set Time:
                    </Grid>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopTimePicker
                        label="HH:MM"
                        value={time}
                        onChange={(newValue) => {
                          setTime(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container justifyContent={"center"}>
                <CustomButton
                  name="Set Schedule"
                  onClicked={() => markclicked()}
                  addStyles="accept-buttonn"
                ></CustomButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CompanyAddReminder;
