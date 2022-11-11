import { Grid, Input } from "@mui/material";
import React from "react";
import UserNavbarIn from "../../components/UserNavbarIn";
import UserSideBar from "../../components/UserSideBar";
import profileimg from "../../assets/demoprofileimage.jpg";
import "./profile.css";
import { grey } from "@mui/material/colors";
import DropDown from "../../components/DropDown";
import Button from "../../components/Buttons";

export default function EmployeeProfile() {
  return (
    <>
      <UserNavbarIn />

      <Grid container>
        <UserSideBar />
        <Grid item>
          <h1 className="profile">Profile</h1>
          <p className="view">View and Edit your Profile</p>
          <div className="profileContainer1">
            <img src={profileimg} />
            <div className="name">
              <h1>Jane Doe</h1>
              <p>CHANGE PROFILE PHOTO</p>
            </div>
          </div>
          <div className="form">
            <div className="field_container">
              <h4>Basic Info:</h4>
              <Grid container columnSpacing={4}>
                <Grid item className="field" xs={4}>
                  <label>
                    Full Name
                    <br />
                    <Input
                      fullWidth
                      placeholder="Jane Doe"
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
                      placeholder="28th Street , Avenue Road, Texas, USA"
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
                    Date of Birth
                    <br />
                    <Input
                      fullWidth
                      placeholder="02/02/2000"
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
                      placeholder="9856214586"
                      variant="filled"
                      sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                    />
                  </label>
                </Grid>
              </Grid>
            </div>
            <div className="field_container">
              <h4>Education</h4>
              <Grid container columnSpacing={4}>
                <Grid item className="field" xs={4}>
                  <label>
                    Highest Education Degree
                    <br />
                    <Input
                      fullWidth
                      placeholder="Bachelors"
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
                      placeholder="Kathmandu University, Dhulikhel, Nepal"
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
                      placeholder="02/02/2000"
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
                      placeholder="Computer Science"
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
                      placeholder="4"
                      variant="filled"
                      sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                    />
                  </label>
                </Grid>
              </Grid>
            </div>
            <div className="field_container">
              <h4>Preference</h4>
              <div className="role_container1">
                <div className="roles">
                  <p>What role are you looking for?</p>
                  <p>
                    <u>Add new roles</u>
                  </p>
                </div>
                <div className="roles_container">
                  <div className="role">Role 1 </div>
                  <div className="role">Role 1 </div>
                  <div className="role">Role 1 </div>
                  <div className="role">Role 1 </div>
                </div>
                <div className="select_roles">
                  <DropDown
                    label="Select Roles"
                    options={[
                      { label: "option1", value: "one" },
                      { label: "option1", value: "one" },
                      { label: "option1", value: "one" },
                    ]}
                  />
                </div>
              </div>
              <div className="role_container1">
                <div className="roles">
                  <p>What job skill are you looking for?</p>
                  <p>
                    <u>Add new roles</u>
                  </p>
                </div>
                <div className="roles_container">
                  <div className="role">Role 1 </div>
                  <div className="role">Role 1 </div>
                  <div className="role">Role 1 </div>
                  <div className="role">Role 1 </div>
                </div>
                <div className="select_roles">
                  <DropDown
                    label="Select Roles"
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
    </>
  );
}
