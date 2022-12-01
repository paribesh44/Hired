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

const initialValues = {
  years: "",
  companyName: "",
  fields: "",
  jobRole: "",
  startDate: "",
  endDate: "",
};

const validationschema = Yup.object({});

function EmployeeExperienceProfile() {
  const [value, setValue] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [changeLocation, setChangeLocation] = React.useState(false);

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

    let response_obj = await callAPI({
      endpoint: "/experience/create",
      method: "POST",
      data: experience,
    });

    if (response_obj.data.msg == "success") {
      console.log("success");
      setChangeLocation(true);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationschema}
      onSubmit={onSubmit}
    >
      <Form>
        {changeLocation && <Navigate to="/Formfour" />}
        {/* {addExperience && <Navigate to= '/Formthree'/>} */}
        <br />

        <Grid container>
          <div>
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
            <br></br>

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
          </div>
        </Grid>
        <br></br>

        <Grid container>
          <div>
            {/* <label htmlFor='degree' justifyContent="center">
                            How long did you work there for?
                        </label> */}
            <Grid container>
              <h4>How long did you work there for?</h4>
            </Grid>

            <Grid item container direction="row" alignItems="center" />

            <Field type="text" id="years" name="years" placeholder="e.g. 2" />

            <ErrorMessage name="years" />
          </div>
        </Grid>
        <br />

        <Grid container>
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

        <Grid container>
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

        <Grid container>
          <div>
            <label htmlFor="workingDate">Your last day in the company? </label>
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

        <Grid container justifyContent="center">
          {/* <Link to='/Formfour'> */}
          <Button
            type="submit"
            variant="contained"
            addStyles={"save_changes"}
            style={{ marginRight: "30px" }}
          >
            Add Experience
          </Button>
          {/* </Link> */}
        </Grid>
      </Form>
    </Formik>
  );
}

export default EmployeeExperienceProfile;
