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
import { Link, Navigate } from "react-router-dom";
import { format } from "date-fns";
import callAPI from "../../utils/callAPI";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ProfileTab from "./ProfileTab";

const initialValues = {
  institution: "",
  geaduatingYear: "",
  cgpa: "",
};

const validationschema = Yup.object({
  //   degree: Yup.string().required('Required'),
  institution: Yup.string().required("Required"),
  //   major: Yup.string().required('Required'),
  cgpa: Yup.string().required("Required"),
});

const degreesOptions = ["Bachlors", "Masters", "Phd"];

const majorOpitions = [
  "Computer Engineering",
  "Computer Science",
  "Graphic Design",
  "Computataional Mathematics",
];

function Formtwo() {
  const [value, setValue] = React.useState(null);
  const [changeLocation, setChangeLocation] = React.useState(false);
  const [addEducation, setAddEducation] = React.useState(false);

  const [whichButton, setButton] = React.useState("");
  const [degreeDropDown, setDegree] = React.useState("");
  const [majorDropDown, setMajor] = React.useState("");
  const [fillAllFields, setFillAllFields] = React.useState(false);

  const onChange = (newValue) => {
    setValue(newValue);
  };

  const onSubmit = async (values, actions) => {
    console.log("Form data", values);

    let education = {
      qualification: degreeDropDown,
      graduating_institution: values.institution,
      graduating_year: value,
      major: majorDropDown,
      cgpa: values.cgpa,
    };

    if (degreeDropDown != "" && majorDropDown != "") {
      let response_obj = await callAPI({
        endpoint: "/education/create",
        method: "POST",
        data: education,
      });

      if (response_obj.data.msg == "success") {
        console.log("success");

        if (whichButton == "continue") {
          setChangeLocation(true);
        } else if (whichButton == "add") {
          setAddEducation(true);
          setDegree("");
          setMajor("");
          actions.resetForm({ initialValues });
          setValue(false);
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
        {changeLocation && <Navigate to="/Formthree" />}
        <Grid container justifyContent="center">
          <Grid item className="profile_inin">
            <Grid container justifyContent="center">
              <Grid item>
                <ProfileTab name="Education" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <br />

        <br />
        <Grid container justifyContent="center" a>
          <Grid item className="profile_heading">
            Enter your educational details
          </Grid>
        </Grid>
        {/* <br /> */}
        <Grid item className="education_box">
          <Grid
            container
            className=" edu_box_inner"
            direction="column"
            justifyContent="center"
            alignItems="stretch"
          >
            <Grid item>
              <Grid container justifyContent="center">
                <div>
                  <label htmlFor="degree">Highest Educational Degree</label>
                  <Grid container>
                    <Select
                      sx={{ m: 0, minWidth: 600 }}
                      value={degreeDropDown}
                      onChange={(e) => {
                        setDegree(e.target.value);
                      }}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {degreesOptions &&
                        degreesOptions.map((i) => (
                          <MenuItem value={i}>{i}</MenuItem>
                        ))}
                    </Select>
                  </Grid>
                </div>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container justifyContent="center">
                <div>
                  <label htmlFor="major">Major</label>
                  <Grid container>
                    <Select
                      sx={{ m: 0, minWidth: 600 }}
                      value={majorDropDown}
                      onChange={(e) => {
                        setMajor(e.target.value);
                      }}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em>Select</em>
                      </MenuItem>
                      {majorOpitions &&
                        majorOpitions.map((i) => (
                          <MenuItem value={i}>{i}</MenuItem>
                        ))}
                    </Select>
                  </Grid>
                  <Grid item>
                    <Grid container direction="column" justifyContent="center">
                      <label htmlFor="Institution">
                        Gradutating Institution
                      </label>
                      <Grid item>
                        <Field
                          type="text"
                          id="institution"
                          name="institution"
                          placeholder="Kathmandu University"
                        />

                        <ErrorMessage name="institution" />
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container justifyContent="center">
                <div>
                  <label htmlFor="cgpa">CGPA</label>

                  <Field type="text" id="cgpa" name="cgpa" placeholder="4.0" />

                  <ErrorMessage name="cgpa" />
                </div>
              </Grid>
            </Grid>

            <Grid item className="grad_year">
              <Grid
                container
                // direction="column"
                justifyContent="center"
                // alignItems="center"
              >
                <div>
                  <label htmlFor="graduatingYear">Graduating Year</label>
                </div>
                <Grid container justifyContent="center" />
                <Grid item>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="MM/DD/YYYY"
                      value={value}
                      name="graduatingYear"
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <br />
              <br />
              <br />
            </Grid>
            <Grid item>
              <Grid container justifyContent="center">
                {/* <Link to='/Formthree'> */}
                <Button
                  className="snc-button"
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
                  Add another education
                </Button>
                {/* </Link> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
}
export default Formtwo;
