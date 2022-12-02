import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, ButtonGroup, Grid } from "@mui/material";
import RadioButtonsGroup from "../../components/RadioButton";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import CenteredTabs from "../../components/TabsForm";
import DropDown from "../../components/DropDown";
import { yearPickerClasses } from "@mui/x-date-pickers";
import { Link } from "react-router-dom";

import callAPI from "../../utils/callAPI";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import InputSlider from "../../components/Slider";
import "./formtwo.css";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Companylayout from "../../components/Companylayout";
import CustomButton from "../../components/Buttons";

const initialValues = {
  position: "",
  location: "",
  description: "",
  responsibilities: "",
  benefits: "",
  vacancy: "",
  skills: "",
  experience: "",
  hours: "",
  experince: "",
  vancancy: "",
};

const validationschema = Yup.object({
  location: Yup.string().required("*Required"),
  description: Yup.string().required("*Required"),
  responsibilities: Yup.string().required("*Required"),
  benefits: Yup.string().required("*Required"),
  vacancy: Yup.string().required("*Required"),
  skills: Yup.string().required("*Required"),
  experience: Yup.string().required("*Required"),
  hours: Yup.string().required("*Required"),
  // //required stuffs
});

function Cformtwo() {
  const [deadlineDatePicker, setDeadlineDatePicker] = React.useState(null);
  const [jobStartDatePicker, setJobStartDatePicker] = React.useState(null);

  const [jobTypeDropDown, setJobTypeDropDown] = React.useState("");
  const [jobLevelDropDown, setJobLevelDropDown] = React.useState("");
  const [educationRequiredDropDown, setEducationRequiredDropDown] =
    React.useState("");

  const [remoteOnsiteRadio, setRemoteOnsiteRadio] = React.useState(null);

  const [minimumSalary, setMinimumSalary] = React.useState(30);
  const [maximumSalary, setMaximumSalary] = React.useState(30);

  const getMinimumSalary = (data) => {
    setMinimumSalary(data);
  };

  const getMaximumSalary = (data) => {
    setMaximumSalary(data);
  };

  const job_type_options = ["Permanent", "Temporary", "Contract", "Internship"];

  const job_level_options = ["Senior", "Midlevel", "Junior", "Internship"];

  const education_required = ["Bachlors", "Masters", "Phd"];

  const onSubmit = async (values, actions) => {
    console.log("Form data", values);

    const job_post_information = {
      job: values.position,
      description: values.description,
      job_location: values.location,
      job_level: jobLevelDropDown,
      job_type: jobTypeDropDown,
      job_responsibilities: values.responsibilities,
      skills: values.skills,
      minimum_years_of_experience: values.experience,
      education_required: educationRequiredDropDown,
      no_of_vacancy: values.vacancy,
      work_hours: values.hours,
      min_salary: minimumSalary * 1000,
      max_salary: maximumSalary * 1000,
      job_benefits: values.benefits,
      job_start_date: jobStartDatePicker,
      deadline: deadlineDatePicker,
      remote_onsite: remoteOnsiteRadio,
    };

    let response_obj = await callAPI({
      endpoint: "/jobPost/create",
      method: "POST",
      data: job_post_information,
    });

    if (response_obj.data.msg == "success") {
      console.log("success");
      // setChangeLocation(true)
      actions.resetForm({ initialValues });
      setDeadlineDatePicker(null);
      setJobStartDatePicker(null);
      setJobTypeDropDown("");
      setJobLevelDropDown("");
      setEducationRequiredDropDown("");
      setRemoteOnsiteRadio("");
      setMinimumSalary("");
      setMaximumSalary("");
    }
  };

  return (
    <Companylayout>
      <Formik
        initialValues={initialValues}
        validationSchema={validationschema}
        onSubmit={onSubmit}
      >
        <Form>
          <Grid item>
            <Grid
              container
              direction="row"
              // justifyContent={"center"}
              className="overviewheading "
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={10}>
                <Grid
                  className=""
                  container
                  direction="column"
                  // alignItems={"center"}
                  justifyContent="flex-start"
                >
                  <Grid
                    container
                    direction="column"
                    className="post_job_heading"
                  >
                    <Grid item className="title_reminder">
                      Post a job
                    </Grid>
                    <Grid item className="post_job_sub">
                      Fill up the following fields to post a job vacancy.
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid container direction="row">
                      <Grid item>
                        <Grid container direction="column">
                          <div>
                            <Grid
                              item
                              className="post_questions"
                              htmlFor="position"
                            >
                              Job Position{" "}
                            </Grid>

                            <Field
                              type="text"
                              id="position"
                              name="position"
                              placeholder="e.g. Graphic Designer or ML engineer"
                              className="field_position_add"
                            />
                            <Grid item className="required_font">
                              <ErrorMessage name="position" />
                            </Grid>
                          </div>
                        </Grid>
                      </Grid>
                      <Grid item className="container_spacing2">
                        <Grid container>
                          <div>
                            <Grid
                              item
                              className="post_questions"
                              htmlFor="location"
                            >
                              Job Location{" "}
                            </Grid>

                            <Field
                              type="text"
                              id="location"
                              name="location"
                              placeholder="e.g. Dhulikhel"
                              className="field_position_add"
                            />
                            <Grid item className="required_font">
                              <ErrorMessage name="location" />
                            </Grid>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid container direction="row">
                    <Grid item>
                      <Grid container direction="column">
                        <Grid
                          item
                          className="post_questions"
                          htmlFor="lookingfor"
                        >
                          What type of employee are you looking for?
                        </Grid>

                        <Grid item>
                          <Select
                            className="field_position_add"
                            value={jobTypeDropDown}
                            onChange={(e) => {
                              setJobTypeDropDown(e.target.value);
                            }}
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                          >
                            <MenuItem value="">
                              <em>Select</em>
                            </MenuItem>
                            {job_type_options &&
                              job_type_options.map((i) => (
                                <MenuItem value={i}>{i}</MenuItem>
                              ))}
                          </Select>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item className="container_spacing2">
                      <Grid container direction="column">
                        <Grid
                          item
                          className="post_questions"
                          htmlFor="lookingfor"
                        >
                          Job level
                        </Grid>
                        <Grid item>
                          <Select
                            className="field_position_add"
                            value={jobLevelDropDown}
                            onChange={(e) => {
                              setJobLevelDropDown(e.target.value);
                            }}
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                          >
                            <MenuItem value="">
                              <em>Select</em>
                            </MenuItem>
                            {job_level_options &&
                              job_level_options.map((i) => (
                                <MenuItem value={i}>{i}</MenuItem>
                              ))}
                          </Select>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    {" "}
                    <Grid container>
                      <div></div>
                    </Grid>
                  </Grid>

                  <Grid item>
                    {" "}
                    <Grid container>
                      <div>
                        <Grid item className="post_questions" htmlFor="skills">
                          Skills
                        </Grid>

                        <Grid item className="normal_text">
                          Specify all the skills required for job
                        </Grid>

                        <Field
                          type="text"
                          id="skills"
                          name="skills"
                          placeholder="e.g. CSS, FastAPI,Machine Learning"
                          multiline={true}
                          className="field_position_add2"
                        />
                        <Grid item className="required_font">
                          <ErrorMessage name="skills" />
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>

                  <Grid item>
                    {" "}
                    <Grid container>
                      <div>
                        <Grid
                          item
                          className="post_questions"
                          htmlFor="responsibilities"
                        >
                          Job responsibilities
                        </Grid>

                        <Field
                          className="field_position_add2"
                          type="text"
                          id="responsibilities"
                          name="responsibilities"
                          placeholder="e.g. Should develop good models, Create APIs"
                        />

                        <Grid item className="required_font">
                          <ErrorMessage name="responsibilities" />
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid container>
                      <div>
                        <Grid
                          item
                          className="post_questions"
                          htmlFor="benefits"
                        >
                          Job Benefits
                        </Grid>

                        <Field
                          type="text"
                          id="benefits"
                          name="benefits"
                          className="field_position_add2"
                          placeholder="e.g Insurance, Handsome bonus"
                        />

                        <Grid item className="required_font">
                          <ErrorMessage name="benefits" />
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container>
                      <div>
                        <Grid
                          item
                          className="post_questions"
                          htmlFor="description"
                        >
                          Description
                        </Grid>

                        <Grid item className="normal_text">
                          Describe about the job
                        </Grid>

                        <Field
                          className="field_position_add3"
                          type="text"
                          id="description"
                          name="description"
                          placeholder="e.g. its the best job ever."
                          multiline={true}
                        />
                        <Grid item className="required_font">
                          <ErrorMessage name="description" />
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid container direction="row">
                      <Grid item>
                        <Grid container direction="column">
                          <div>
                            <Grid
                              item
                              className="post_questions"
                              htmlFor="vacancy"
                            >
                              Number of vancancies
                            </Grid>

                            <Field
                              className="field_position_add4"
                              type="text"
                              id="vacancy"
                              name="vacancy"
                              placeholder="e.g. 10"
                            />
                            <Grid item className="required_font">
                              <ErrorMessage name="vacancy" />
                            </Grid>
                          </div>
                        </Grid>
                      </Grid>

                      <Grid item className="three_spacing">
                        <Grid container>
                          <div>
                            <Grid
                              item
                              className="post_questions"
                              htmlFor="hours"
                            >
                              Work Hours
                            </Grid>

                            <Field
                              className="field_position_add4"
                              type="text"
                              id="hours"
                              name="hours"
                              placeholder="e.g. 9 pm to 5 am"
                            />

                            <Grid item className="required_font">
                              <ErrorMessage name="hours" />
                            </Grid>
                          </div>
                        </Grid>
                      </Grid>

                      <Grid item className="three_spacing">
                        {" "}
                        <Grid container>
                          <div>
                            <Grid
                              item
                              className="post_questions"
                              htmlFor="experience"
                            >
                              Minimun years of experience
                            </Grid>

                            <Field
                              className="field_position_add4"
                              type="text"
                              id="experience"
                              name="experience"
                              placeholder="2"
                            />

                            <Grid item className="required_font">
                              <ErrorMessage name="experience" />
                            </Grid>
                          </div>
                        </Grid>{" "}
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    {" "}
                    <Grid container>
                      <div>
                        <Grid item className="post_questions" htmlFor="type">
                          Job Type
                        </Grid>
                        <Grid container>
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            row
                            onClick={(e) => {
                              setRemoteOnsiteRadio(e.target.value);
                            }}
                          >
                            <FormControlLabel
                              value="Remote"
                              control={<Radio />}
                              label="Remote"
                            />
                            <FormControlLabel
                              value="Onsite"
                              control={<Radio />}
                              label="Onsite"
                            />
                          </RadioGroup>
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container>
                      <div>
                        <Grid item className="post_questions" htmlFor="salary">
                          Plausible Salary
                        </Grid>
                        <Grid container direction="row">
                          <Grid item>
                            <Grid container direction={"column"}>
                              <Grid item className="normal_text">
                                Minimum Salary
                              </Grid>
                              <Grid item className="normal_text">
                                Use slider to select minimum salary (in
                                thousands)
                              </Grid>
                              <Grid item>
                                <InputSlider
                                  onChange={getMinimumSalary}
                                  sliderValue={30}
                                  type="minimum"
                                />
                              </Grid>
                            </Grid>
                          </Grid>

                          <Grid item className="container_spacing">
                            <Grid container direction="column">
                              <Grid item className="normal_text">
                                Maximum Salary
                              </Grid>
                              <Grid item className="normal_text">
                                Use slider to select maximum salary (in
                                thousands)
                              </Grid>
                              <Grid item>
                                <InputSlider
                                  className="slider_css"
                                  onChange={getMaximumSalary}
                                  sliderValue={30}
                                  type="maximum"
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>

                        <Grid container></Grid>
                        <br />
                      </div>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container direction="column">
                      <div>
                        <Grid
                          item
                          htmlFor="startdate"
                          className="post_questions"
                        >
                          Job start date
                        </Grid>
                      </div>

                      <Grid item>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            className="field_position_add4"
                            label="MM/DD/YYYY"
                            value={jobStartDatePicker}
                            onChange={(newValue) => {
                              setJobStartDatePicker(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container>
                      <div>
                        <Grid
                          item
                          className="post_questions"
                          htmlFor="deadline"
                        >
                          Deadline
                        </Grid>
                      </div>
                      <Grid container />

                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          className="field_position_add4"
                          label="MM/DD/YYYY"
                          value={deadlineDatePicker}
                          onChange={(newValue) => {
                            setDeadlineDatePicker(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </Grid>
                  </Grid>
                  <br />
                  <Grid item className="button_padding_post">
                    <Grid container>
                      {/* <Link to= '/Formtwo'> */}
                      <CustomButton
                        type="submit"
                        variant="contained"
                        addStyles={"accept-button"}
                        name="Post"
                      ></CustomButton>
                      {/* </Link> */}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Companylayout>
  );
}

export default Cformtwo;
