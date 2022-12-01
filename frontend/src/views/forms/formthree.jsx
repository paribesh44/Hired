import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, ButtonGroup, Checkbox, Grid } from "@mui/material";
import RadioButtonsGroup from "../../components/RadioButton";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import CenteredTabs from "../../components/TabsForm";
import DropDown from "../../components/DropDown";
import { yearPickerClasses } from "@mui/x-date-pickers";
import { Link, Navigate } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { format } from "date-fns";
import callAPI from "../../utils/callAPI";
import ProfileTab from "./ProfileTab";

const initialValues = {
  years: "",
  companyName: "",
  fields: "",
  jobRole: "",
  startDate: "",
  endDate: "",
};

const validationschema = Yup.object({});

function Formthree() {
  const [value, setValue] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [changeLocation, setChangeLocation] = React.useState(false);
  const [addExperience, setAddExperience] = React.useState(false);

  const [whichButton, setButton] = React.useState("");

  const onSubmit = async (values, actions) => {
    console.log("Form data", values);

    let experience = {
      workPlace: values.companyName,
      yearsOfWork: values.years,
      jobTitle: values.jobRole,
      field: values.fields,
      jobStartDate: value,
      jobEndDate: endDate,
    };

    console.log(whichButton);

    if (whichButton != "") {
      let response_obj = await callAPI({
        endpoint: "/experience/create",
        method: "POST",
        data: experience,
      });

      if (response_obj.data.msg == "success") {
        console.log("success");

        if (whichButton == "continue") {
          setChangeLocation(true);
        } else if (whichButton == "add") {
          setAddExperience(true);
          actions.resetForm({ initialValues });
          setValue(false);
          setEndDate(false);
          setButton("");
        }
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationschema}
      onSubmit={onSubmit}
    >
      <Form className="form_main_color">
        {changeLocation && <Navigate to="/Formfour" />}
        {/* {addExperience && <Navigate to= '/Formthree'/>} */}
        <Grid container justifyContent="center">
          <Grid item className="profile_inin">
            <Grid container justifyContent="center">
              <Grid item>
                <ProfileTab name="Experience" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <br />

        <br />
        <Grid container justifyContent="center">
          <Grid item className="profile_heading">
            Enter your experience
          </Grid>
        </Grid>
        <br />
        <br />

        <Grid item className="profile_box">
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
          >
            <Grid>
              <Grid container>
                <h4>Company name</h4>
              </Grid>

              <Grid item container direction="row" alignItems="center" />

              <Field
                type="text"
                id="companyName"
                name="companyName"
                placeholder="e.g. Leapfrog"
              />

              <ErrorMessage name="Company Name" />

              <Grid container>
                <h4>Job Role</h4>
              </Grid>

              <Grid item container direction="row" alignItems="center" />

              <Field
                type="text"
                id="jobRole"
                name="jobRole"
                placeholder="e.g. Designer"
              />

              <ErrorMessage name="jobRole" />
            </Grid>
            <Grid container justifyContent="center">
              <div>
                {/* <label htmlFor='degree' justifyContent="center">
                            How long did you work there for?
                        </label> */}
                <Grid container>
                  <h4>How long did you work there for?</h4>
                </Grid>

                <Grid item container direction="row" alignItems="center" />

                <Field
                  type="text"
                  id="years"
                  name="years"
                  placeholder="e.g. 2"
                />

                <ErrorMessage name="years" />
              </div>
            </Grid>
            <Grid container justifyContent="center">
              <div>
                <Grid container>
                  <h4>What fields did you worked on?</h4>
                </Grid>

                <Field
                  type="text"
                  id="fields"
                  name="fields"
                  placeholder="e.g. css, html, java, ml"
                />

                <ErrorMessage name="fields" />
              </div>
            </Grid>
            <Grid container className="start_workdata">
              <div>
                <label htmlFor="workingDate">
                  When did you start working there?{" "}
                </label>
              </div>
              <Grid container justifyContent="center" />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="MM/DD/YYYY"
                  value={value}
                  name="startDate"
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid container className="start_workdata">
              <div>
                <label htmlFor="workingDate">
                  Your last day in the company?{" "}
                </label>
              </div>
              <Grid container justifyContent="center" />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="MM/DD/YYYY"
                  value={endDate}
                  name="endDate"
                  onChange={(newValue) => {
                    setEndDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <br />

            <br />

            <br />
            <Grid container justifyContent="center">
              {/* <Link to='/Formfour'> */}
              <Button
                onClick={() => setButton("continue")}
                type="submit"
                variant="contained"
                style={{ marginRight: "30px" }}
              >
                Save and Continue
              </Button>

              <Button
                onClick={() => setButton("add")}
                type="submit"
                variant="contained"
              >
                Add another experience
              </Button>
              {/* </Link> */}
            </Grid>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
}

export default Formthree;
