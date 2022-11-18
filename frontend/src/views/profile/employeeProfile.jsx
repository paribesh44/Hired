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

export default function EmployeeProfile() {
  const [getuserdata, setgetuserdata] = useState(null);

  const message = async () => {
    let response_obj = await callAPI({
      endpoint: "/seeker/get_seeker_information",
    });
    setgetuserdata(response_obj);
    console.log(response_obj.data);
  };

  useEffect(() => {
    message();
  }, []);

  if (getuserdata != null) {
    return (
      <>
        <DashboardLayout>
          {/* {getuserdata.map((value, key)=>
          (
            
          ))} */}

          <Grid container className="assesmentmain-main">
            <Grid item>
              <h1 className="profile"> Personal Profile</h1>
              <p className="view">View and Edit your Profile</p>

              <div className="profileContainer1">
                <img src={profileimg} />
                <div className="name">
                  <div className="editprofile_name">
                    {getuserdata.data.seeker.name}
                  </div>
                  <p className="editprofile_change">CHANGE PROFILE PHOTO</p>
                </div>
              </div>

              <div className="form">
                <div className="field_container">
                  <div className="editprofile_heading">Basic Info:</div>
                  <Grid container columnSpacing={4}>
                    <Grid item className="field" xs={4}>
                      <label>
                        Full Name
                        <br />
                        <Input
                          fullWidth
                          placeholder={getuserdata.data.seeker.name}
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
                          placeholder={getuserdata.data.seeker.address}
                          variant="filled"
                          sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                        />
                      </label>
                    </Grid>
                    <Grid item className="field" xs={4}>
                      <label>
                        Work Address
                        <br />
                        <Input
                          fullWidth
                          placeholder="28th Street , Avenue Road, Texas, USA"
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
                          fullWidth
                          placeholder={getuserdata.data.seeker.age}
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
                          fullWidth
                          placeholder={getuserdata.data.seeker.contactNumber}
                          variant="filled"
                          sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                        />
                      </label>
                    </Grid>
                  </Grid>
                </div>
                <div className="field_container">
                  <div className="editprofile_heading">Education</div>
                  {getuserdata.data.education.map((value) => (
                    <Grid container columnSpacing={4}>
                      <Grid item className="field" xs={4}>
                        <label>
                          Highest Education Degree
                          <br />
                          <Input
                            fullWidth
                            placeholder={value.qualification}
                            variant="filled"
                            sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                          />
                        </label>
                      </Grid>
                      <Grid item className="field" xs={7}>
                        <label>
                          Graduating University
                          <br />
                          <Input
                            fullWidth
                            placeholder={value.graduating_institution}
                            variant="filled"
                            sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                          />
                        </label>
                      </Grid>
                      <Grid item className="field" xs={4}>
                        <label>
                          Graduating Year
                          <br />
                          <Input
                            fullWidth
                            placeholder={value.graduating_year.split("T")[0]}
                            variant="filled"
                            sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                          />
                        </label>
                      </Grid>
                      <Grid item className="field" xs={4}>
                        <label>
                          Major
                          <br />
                          <Input
                            fullWidth
                            placeholder={value.major}
                            variant="filled"
                            sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                          />
                        </label>
                      </Grid>
                      <Grid item className="field" xs={4}>
                        <label>
                          CGPA
                          <br />
                          <Input
                            fullWidth
                            placeholder={value.cgpa}
                            variant="filled"
                            sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                          />
                        </label>
                      </Grid>
                    </Grid>
                  ))}
                </div>
                <div className="field_container">
                  <div className="editprofile_heading">Preference</div>
                  <div className="role_container1">
                    <div className="roles">
                      <p>What role are you looking for?</p>
                      {/* <p>
                        <u>Add new roles</u>
                      </p> */}
                    </div>
                    <Grid container direction="row" className="roles_container">
                      {getuserdata.data.preference.interested_jobs.map(
                        (val) => (
                          <div className="role">
                            <div>{val}</div>
                          </div>
                        )
                      )}
                    </Grid>

                    <div className="select_roles">
                      <DropDown
                        label="Select New Roles"
                        options={[
                          { label: "Web developer", value: "Web developer" },
                          {
                            label: "Database administrator",
                            value: "Database administrator",
                          },
                          {
                            label: "Computer software engineer",
                            value: "Computer software engineer",
                          },
                          {
                            label: "Data security analyst",
                            value: "Data security analyst",
                          },
                          {
                            label: "Network architect",
                            value: "Network architect",
                          },
                          {
                            label: " Mobile application developer",
                            value: " Mobile application developer",
                          },
                          {
                            label: "Video Game Developer",
                            value: "Video Game Developer",
                          },
                          {
                            label: "Front End DEveloper",
                            value: "Front End DEveloper",
                          },
                          {
                            label: "Back End DEveloper",
                            value: "Back End DEveloper",
                          },
                        ]}
                      />
                    </div>
                  </div>
                  <div className="role_container1">
                    <div className="roles">
                      <p>What job skill are you looking for?</p>
                      {/* <p>
                        <u>Add new roles</u>
                      </p> */}
                    </div>
                    <Grid container direction="row" className="roles_container">
                      {getuserdata.data.preference.preferred_job_skills.map(
                        (jobskills) => (
                          <Grid item className="role">
                            {jobskills}{" "}
                          </Grid>
                        )
                      )}
                    </Grid>

                    <div className="select_roles">
                      <DropDown
                        label="Select New Job Skill"
                        options={[
                          { label: "option1", value: "one" },
                          { label: "option1", value: "one" },
                          { label: "option1", value: "one" },
                        ]}
                      />
                    </div>
                  </div>
                </div>
                <Button name="Save Changes" addStyles={"save_changes"}></Button>
              </div>
            </Grid>
          </Grid>
        </DashboardLayout>
      </>
    );
  }
}
