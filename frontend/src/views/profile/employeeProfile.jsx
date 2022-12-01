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
import EmployeeEducationProfile from "./employeeEducationProfile";
import EmployeeExperienceProfile from "./employeeExperienceProfile";
import EmployeePreference from "./employeePreference";
import SkillContainer from "../../components/SkillContainer";

export default function EmployeeProfile() {
  const location = useLocation();
  const { getuserdata } = location.state;
  console.log(getuserdata);

  const [name, setName] = useState(getuserdata.seeker.name);
  const [address, setAddress] = useState(getuserdata.seeker.address);
  const [age, setAge] = useState(getuserdata.seeker.age);
  const [contactNumber, setContactNumber] = useState(
    getuserdata.seeker.contactNumber
  );
  const [experience, setExperience] = useState(
    getuserdata.seeker.yearsOfExperience
  );
  const [githubProfile, setGithubProfile] = useState(
    getuserdata.seeker.githubProfile
  );
  const [linkedIn, setLinkedIn] = useState(getuserdata.seeker.linkedIn);
  const [write_about_you, setWriteAboutYou] = useState(
    getuserdata.seeker.write_about_you
  );
  const [website, setWebsite] = useState(getuserdata.seeker.website);
  const [studentOrNotRadio, setStudentOrNotRadio] = useState(
    getuserdata.seeker.student
  );
  var [cv, setCV] = useState(getuserdata.seeker.cv);
  const [skills, setSkills] = useState(getuserdata.seeker.skills);
  var [profilePhoto, setProfilePhoto] = useState(
    getuserdata.seeker.profilePhoto
  );

  var [cvUpdate, setcvUpdate] = useState("");
  var [ppUpdate, setppUpdate] = useState("");

  const [changePP, setChangePP] = useState(false);

  const [skillsDropdown, setSkillsDropdown] = useState("");

  const [addEducation, setAddEducation] = useState(false);
  const [addExperience, setAddExperience] = useState(false);
  const [changeLocation, setChangeLocation] = useState(false);

  let radio_options = [true, false];

  let skillsOptions = [
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

  function handleChangePP() {
    setChangePP(!changePP);
    setppUpdate("");
  }

  function handleChangeSkills(e) {
    setSkillsDropdown(e.target.value);
    setSkills([...skills, e.target.value]);
    console.log(skills);
  }

  function changeCV() {
    setCV(null);
  }

  function backOriginalCV() {
    setCV(getuserdata.seeker.cv);
    setcvUpdate("");
  }

  const cvLink = `http://localhost:8000/${cv}`;

  async function handleSaveChangeProfile() {
    if (cvUpdate == "") {
      cvUpdate = "";
    } else {
      cv = "";
    }
    console.log(cv);
    console.log(cvUpdate);

    if (ppUpdate != "") {
      profilePhoto = "";
    } else if (ppUpdate == "") {
      ppUpdate = "";
    }
    console.log(profilePhoto);
    console.log(ppUpdate);

    let dataForm = new FormData();
    dataForm.append("name", name);
    dataForm.append("age", age);
    dataForm.append("address", address);
    dataForm.append("contact_number", contactNumber);
    dataForm.append("write_about_you", write_about_you);
    dataForm.append("years_of_experience", experience);
    dataForm.append("skills", skills);
    dataForm.append("linkedIn", linkedIn);
    dataForm.append("website", website);
    dataForm.append("github_profile", githubProfile);
    dataForm.append("student", studentOrNotRadio);
    dataForm.append("cv", cv);
    dataForm.append("profile_photo", profilePhoto);
    dataForm.append("update_profile_photo", ppUpdate);
    dataForm.append("update_cv", cvUpdate);

    let response_obj = await callAPI({
      endpoint: "/seeker/update",
      method: "PUT",
      data: dataForm,
    });

    if (response_obj.data.msg == "success") {
      console.log("success");
      setChangeLocation(true);
    }
  }

  return (
    <>
      <DashboardLayout>
        {changeLocation && <Navigate to="/UserHomeTab" />}

        <Grid container className="assesmentmain-main">
          <Grid item>
            <h1 className="profile"> Personal Profile</h1>
            <p className="view">View and Edit your Profile</p>

            {!changePP ? (
              <div className="profileContainer1">
                <img src={profileimg} />
                <div className="name">
                  <h1>{getuserdata.seeker.name}</h1>
                  <p
                    style={{ color: "blueviolet", cursor: "pointer" }}
                    onClick={handleChangePP}
                  >
                    CHANGE PROFILE PHOTO
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <Grid container>
                  <div>
                    <label>Upload Profile Picture</label>
                  </div>
                </Grid>

                <Grid container>
                  <input
                    id="file"
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      setppUpdate(event.currentTarget.files[0]);
                    }}
                  />
                </Grid>
                <Grid item className="appliedicon_grid">
                  <Grid container direction="row" alignItems={"center"}>
                    <Grid item>
                      <ImCross
                        className="appliedicons"
                        onClick={handleChangePP}
                      />
                    </Grid>
                    <Grid item>Cancel</Grid>
                  </Grid>
                </Grid>
              </div>
            )}

            <div className="form">
              <div className="field_container">
                <Grid container columnSpacing={4} className="edit_user_general">
                  <Grid item xs={12} className="general_info">
                    General Information
                  </Grid>
                  <Grid item className="field" xs={4}>
                    <label>
                      Full Name
                      <br />
                      <Input
                        fullWidth
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        placeholder="e.g. John xxxx"
                        variant="filled"
                        sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                      />
                    </label>
                  </Grid>
                  <Grid item className="field" xs={4}>
                    <label>
                      Address
                      <br />
                      <Input
                        fullWidth
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                        placeholder="e.g. Kathmandu"
                        variant="filled"
                        sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                      />
                    </label>
                  </Grid>
                  <Grid item className="field" xs={4}>
                    <label>
                      Age
                      <br />
                      <Input
                        value={age}
                        onChange={(e) => {
                          setAge(e.target.value);
                        }}
                        fullWidth
                        placeholder="e.g. 26"
                        variant="filled"
                        sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                      />
                    </label>
                  </Grid>
                  <Grid item className="field" xs={4}>
                    <label>
                      Contact Number
                      <br />
                      <Input
                        value={contactNumber}
                        onChange={(e) => {
                          setContactNumber(e.target.value);
                        }}
                        fullWidth
                        placeholder="e.g. 9841xxxxxx"
                        variant="filled"
                        sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                      />
                    </label>
                  </Grid>
                  <Grid item className="field" xs={4}>
                    <label>
                      Experience
                      <br />
                      <Input
                        value={experience}
                        onChange={(e) => {
                          setExperience(e.target.value);
                        }}
                        fullWidth
                        placeholder="e.g. 2"
                        variant="filled"
                        sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                      />
                    </label>
                  </Grid>
                  <Grid item className="field" xs={4}>
                    <label>
                      Website
                      <br />
                      <Input
                        value={website}
                        onChange={(e) => {
                          setWebsite(e.target.value);
                        }}
                        fullWidth
                        placeholder="e.g. www.ishanpanta.com"
                        variant="filled"
                        sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                      />
                    </label>
                  </Grid>
                  <Grid item className="field" xs={4}>
                    <label>
                      Github Profile
                      <br />
                      <Input
                        value={githubProfile}
                        onChange={(e) => {
                          setGithubProfile(e.target.value);
                        }}
                        fullWidth
                        placeholder="e.g. github.com/ishanpanta"
                        variant="filled"
                        sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                      />
                    </label>
                  </Grid>
                  <Grid item className="field" xs={4}>
                    <label>
                      LinkedIn
                      <br />
                      <Input
                        value={linkedIn}
                        onChange={(e) => {
                          setLinkedIn(e.target.value);
                        }}
                        fullWidth
                        placeholder="e.g. linkedln.com/ishanpanta"
                        variant="filled"
                        sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                      />
                    </label>
                  </Grid>
                  <Grid item className="field" xs={4}>
                    <label>
                      Write about you
                      <br />
                      <Input
                        value={write_about_you}
                        onChange={(e) => {
                          setWriteAboutYou(e.target.value);
                        }}
                        fullWidth
                        placeholder="e.g. I am the best human being."
                        variant="filled"
                        sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                      />
                    </label>
                  </Grid>

                  <Grid container item className="field" xs={4}>
                    <div>
                      <label>Are you a student?</label>
                      <Grid container>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                          row
                          value={studentOrNotRadio}
                          onClick={(e) => {
                            setStudentOrNotRadio(e.target.value);
                          }}
                        >
                          {radio_options.map((i) => (
                            <FormControlLabel
                              value={i}
                              control={<Radio />}
                              label={String(i)}
                            />
                          ))}
                        </RadioGroup>
                      </Grid>
                    </div>
                  </Grid>

                  <Grid container item className="field" xs={4}>
                    <div>
                      <label>Your CV</label>
                      <Grid container style={{ marginTop: "10px" }}>
                        {cv == null ? (
                          <Grid
                            container
                            direction="row"
                            //   justifyContent={"center"}
                            alignItems="center"
                          >
                            <Grid item>
                              <input
                                type="file"
                                name="cv"
                                onChange={(event) => {
                                  setcvUpdate(event.currentTarget.files[0]);
                                }}
                              />
                            </Grid>
                            <Grid item className="appliedicon_grid">
                              <ImCross
                                className="appliedicons"
                                onClick={backOriginalCV}
                              />
                            </Grid>
                          </Grid>
                        ) : (
                          <Grid
                            container
                            direction="row"
                            //   justifyContent={"center"}
                            alignItems="center"
                          >
                            <Grid item>
                              <a
                                target="_blank"
                                href={cvLink}
                                style={{ fontSize: "20px" }}
                              >
                                <div>{cv}</div>
                              </a>
                            </Grid>
                            <Grid item className="appliedicon_grid">
                              <ImCross
                                className="appliedicons"
                                onClick={changeCV}
                              />
                            </Grid>
                          </Grid>
                        )}
                      </Grid>
                    </div>
                  </Grid>

                  <Grid container item className="field">
                    <div className="role_container1">
                      <div className="roles">
                        <h4>Skills</h4>
                      </div>
                      <div className="roles_container">
                        {skills.map((val) => {
                          return <SkillContainer name={val} />;
                        })}
                      </div>
                      <div className="select_roles">
                        <Select
                          sx={{ m: 1, minWidth: 380 }}
                          value={skillsDropdown}
                          onChange={handleChangeSkills}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                          className="select_role"
                        >
                          <MenuItem value="">
                            <em>Add new Skill</em>
                          </MenuItem>
                          {skillsOptions.map((i) => (
                            <MenuItem value={i}>{i}</MenuItem>
                          ))}
                        </Select>
                      </div>
                    </div>
                  </Grid>
                  <Button
                    name="Save Changes Profile"
                    addStyles={"save_changes"}
                    onClick={handleSaveChangeProfile}
                    style={{ marginTop: "1em", marginBottom: "5px" }}
                  ></Button>
                </Grid>
              </div>

              <div className="field_container">
                <Grid item>
                  <Grid
                    container
                    columnSpacing={4}
                    direction="column"
                    className="edit_user_general"
                  >
                    <Grid item xs={12} className="general_info">
                      Education and Experience
                    </Grid>
                    {/* Education */}
                    <div className="field_container2">
                      <div className="editprofile_heading">Education</div>
                      <h4
                        style={{ color: "blueviolet", cursor: "pointer" }}
                        onClick={() => {
                          setAddEducation(!addEducation);
                        }}
                      >
                        {addEducation ? "Close Education" : "Add education"}
                      </h4>
                      {addEducation && <EmployeeEducationProfile />}
                    </div>

                    {/* Experience */}
                    <div className="field_container2">
                      <div className="editprofile_heading">Experience</div>
                      <h4
                        style={{ color: "blueviolet", cursor: "pointer" }}
                        onClick={() => {
                          setAddExperience(!addExperience);
                        }}
                      >
                        {addExperience ? "Close Experience" : "Add Experience"}
                      </h4>
                      {addExperience && <EmployeeExperienceProfile />}
                    </div>
                  </Grid>
                </Grid>
              </div>

              {/* Preference */}
              <div className="field_container">
                <Grid item>
                  <Grid
                    container
                    className="edit_user_general"
                    columnSpacing={4}
                  >
                    <Grid item xs={12} className="general_info">
                      Preferences
                    </Grid>
                    <Grid item>
                      <EmployeePreference
                        userPreference={getuserdata.preference}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              {/* <Button name="Save Changes" addStyles={"save_changes"}></Button> */}
            </div>
          </Grid>
        </Grid>
      </DashboardLayout>
    </>
  );
}
