import { Grid, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserNavbarIn from "../../components/UserNavbarIn";
import UserSideBar from "../../components/UserSideBar";
import profileimg from "../../assets/demoprofileimage.jpg";
import "./profile.css";
import { grey } from "@mui/material/colors";
import DropDown from "../../components/DropDown";
import Button from "../../components/Buttons";
import DashboardLayout from "../../components/DashhboardLayout";
import callAPI from "../../utils/callAPI";
import { useLocation, Navigate } from "react-router-dom";
import CustomButton from "../../components/Buttons";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { ImCross } from "react-icons/im";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputSlider from "../../components/Slider";
import SkillContainer from "../../components/SkillContainer";

function EmployeePreference(props) {
  // const location = useLocation();
  // const { userPreference } = location.state;
  console.log(props.userPreference);

  const [interested_jobs, setInterestedJobs] = useState(
    props.userPreference.interested_jobs
  );
  const [job_type, setJobType] = useState(props.userPreference.job_type);
  const [preferred_job_skills, setPreferredJobSkills] = useState(
    props.userPreference.preferred_job_skills
  );
  const [preferred_location, setPreferredLocation] = useState(
    props.userPreference.preferred_location
  );
  const [remote_onsite, setRemoteOnsite] = useState(
    props.userPreference.remote_onsite
  );
  const [minimumSalary, setMinimumSalary] = React.useState(
    props.userPreference.expected_min_salary / 1000
  );
  const [maximumSalary, setMaximumSalary] = React.useState(
    props.userPreference.expected_max_salary / 1000
  );

  const [jobsDropdown, setJobsDropdown] = useState("");
  const [locationDropdown, setLocationDropdown] = useState("");
  const [skillsDropdown, setSkillsDropdown] = useState("");

  const [changeLocation, setChangeLocation] = useState(false);

  const getMinimumSalary = (data) => {
    setMinimumSalary(data);
  };

  const getMaximumSalary = (data) => {
    setMaximumSalary(data);
  };

  // function capitalize(str) {
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // }

  var interested_jobs_options = [
    "frontend",
    "backend",
    "fullstack",
    "mobile development",
    "ml",
    "data science",
    "robotics",
  ];

  var preferred_location_options = [
    "Pokhara",
    "Banepa",
    "Kathmandu",
    "Birtnagar",
    "Mustang",
  ];
  var preferred_skills_options = [
    "css",
    "html",
    "fastapi",
    "ml",
    "dl",
    "data science",
    "react",
    "flutter",
    "c++",
    "c#",
    "java",
  ];

  var job_type_options = ["Full-time", "Part-time", "Internship"];

  var radio_options = ["Remote", "Onsite"];

  function handleChangeJobs(e) {
    setJobsDropdown(e.target.value);
    setInterestedJobs([...interested_jobs, e.target.value]);
  }

  function handleChangeLocation(e) {
    setLocationDropdown(e.target.value);
    setPreferredLocation([...preferred_location, e.target.value]);
  }

  function handleChangeSkills(e) {
    setSkillsDropdown(e.target.value);
    setPreferredJobSkills([...preferred_job_skills, e.target.value]);
  }

  async function handleSaveChangePreference() {
    console.log(props.userPreference.id);
    console.log(interested_jobs);
    console.log(job_type);
    console.log(preferred_job_skills);
    console.log(preferred_location);
    console.log(remote_onsite);
    console.log(minimumSalary * 1000);
    console.log(maximumSalary * 1000);

    let preference = {
      expected_min_salary: minimumSalary * 1000,
      expected_max_salary: maximumSalary * 1000,
      preferred_location: preferred_location,
      interested_jobs: interested_jobs,
      preferred_job_skills: preferred_job_skills,
      remote_onsite: remote_onsite,
      job_type: job_type,
    };

    let response_obj = await callAPI({
      endpoint: `/preference/update/${props.userPreference.id}`,
      method: "PUT",
      data: preference,
    });

    if (response_obj.data.msg == "success") {
      console.log("success");
      setChangeLocation(true);
    }
  }

  return (
    <div className="field_container">
      <Grid container direction="column" justifyContent={"center"}>
        <Grid item xs={12}>
          {changeLocation && <Navigate to="/UserHomeTab" />}
          {/* <div className="editprofile_heading">Preference</div> */}
          <div className="role_container1">
            <div className="roles">
              <h4>Interested Jobs</h4>
            </div>
            <Grid container direction="row" className="roles_container">
              {interested_jobs.map((val) => (
                <SkillContainer name={val} />
              ))}
            </Grid>

            <div className="select_roles">
              <Select
                sx={{ m: 1, minWidth: 380 }}
                value={jobsDropdown}
                onChange={handleChangeJobs}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Add new Jobs</em>
                </MenuItem>
                {interested_jobs_options.map((i) => (
                  <MenuItem value={i}>{i}</MenuItem>
                ))}
              </Select>
            </div>
          </div>

          <div className="role_container1">
            <div className="roles">
              <h4>Preferred Location</h4>
            </div>
            <Grid container direction="row" className="roles_container">
              {preferred_location.map((val) => (
                <SkillContainer name={val} />
              ))}
            </Grid>

            <div className="select_roles">
              <Select
                sx={{ m: 1, minWidth: 380 }}
                value={locationDropdown}
                onChange={handleChangeLocation}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Add new Preferred Location</em>
                </MenuItem>
                {preferred_location_options.map((i) => (
                  <MenuItem value={i}>{i}</MenuItem>
                ))}
              </Select>
            </div>
          </div>

          <div className="role_container1">
            <div className="roles">
              <h4>Preferred Job Skills</h4>
            </div>
            <Grid container direction="row" className="roles_container">
              {preferred_job_skills.map((val) => (
                <SkillContainer name={val} />
              ))}
            </Grid>

            <div className="select_roles">
              <Select
                sx={{ m: 1, minWidth: 380 }}
                value={skillsDropdown}
                onChange={handleChangeSkills}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Add new Preferred Skills</em>
                </MenuItem>
                {preferred_skills_options.map((i) => (
                  <MenuItem value={i}>{i}</MenuItem>
                ))}
              </Select>
            </div>
          </div>

          <Grid container>
            <Grid>
              <Grid item htmlFor="salary">
                <h4>Expected Salary</h4>
              </Grid>
              <Grid item>
                <Grid container direction="row" justifyContent="space-between">
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item justifyContent="center">
                        <h7>
                          Use slider to select minimum salary (in thousands)
                        </h7>
                      </Grid>
                      <Grid item justifyContent="center">
                        <InputSlider
                          onChange={getMinimumSalary}
                          sliderValue={
                            props.userPreference.expected_min_salary / 1000
                          }
                          type="minimum"
                        />
                      </Grid>
                      <h5> Minimum Salary</h5>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      direction="column"
                      className="container_spacing"
                    >
                      <Grid item justifyContent="center">
                        <h7>
                          Use slider to select maximum salary (in thousands)
                        </h7>
                      </Grid>
                      <Grid item justifyContent="center">
                        <InputSlider
                          onChange={getMaximumSalary}
                          sliderValue={
                            props.userPreference.expected_max_salary / 1000
                          }
                          type="maximum"
                        />
                      </Grid>
                      <Grid item>
                        {" "}
                        <h5> Maximum Salary</h5>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <br />

              <br />
            </Grid>
          </Grid>
          <br></br>

          <Grid container>
            <div>
              <label htmlFor="interest">Type of Job</label>
              <Grid container justifyContent="center">
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  row
                  value={job_type}
                  onClick={(e) => {
                    setJobType(e.target.value);
                  }}
                >
                  {job_type_options.map((i) => (
                    <FormControlLabel value={i} control={<Radio />} label={i} />
                  ))}
                </RadioGroup>
              </Grid>
            </div>
          </Grid>
          <br></br>
          <Grid container>
            <div>
              <label htmlFor="preferences">Preffered Job Type</label>
              <Grid container justifyContent="center">
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  row
                  value={remote_onsite}
                  onClick={(e) => {
                    setRemoteOnsite(e.target.value);
                  }}
                >
                  {radio_options.map((i) => (
                    <FormControlLabel value={i} control={<Radio />} label={i} />
                  ))}
                </RadioGroup>
              </Grid>
            </div>
          </Grid>
          <br></br>
          <Grid item>
            <Grid container justifyContent={"center"}>
              <Button
                name="Save Changes Preferences"
                addStyles={"save_changes"}
                onClick={handleSaveChangePreference}
                style={{ marginTop: "1em", marginBottom: "5px" }}
              ></Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default EmployeePreference;
