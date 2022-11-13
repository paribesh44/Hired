import { Grid, Input } from "@mui/material";
import React from "react";
import CompanyNavbarIn from "../../components/CompanyNavbarIn";
import profileimg from "../../assets/demoprofileimage.jpg";
import "./profile.css";
import DropDown from "../../components/DropDown";
import Button from "../../components/Buttons";

export default function CompanyProfile() {
  return (
    <>
      <CompanyNavbarIn />
      <Grid container className="main_container">
        <Grid item>
          <h1 className="profile">Profile</h1>
          <p className="view">View and Edit your Profile</p>
          <div className="profileContainer1">
            <img src={profileimg} />
            <div className="name">
              <h1>ABC Company</h1>
              <p>CHANGE LOGO</p>
            </div>
          </div>
          <div className="form">
            <div className="field_container">
              <h4>Basic Info:</h4>
              <Grid container columnSpacing={4}>
                <Grid item className="field" xs={4}>
                  <label>
                    Company Name
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
                    Established Date
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
                <Grid item className="field" xs={4.1}>
                  <label>
                    Website
                    <br />
                    <Input
                      fullWidth
                      placeholder="www.xyz.com"
                      variant="filled"
                      sx={{ background: "#EBEFF550", mt: 2, p: 1 }}
                    />
                  </label>
                </Grid>
              </Grid>
            </div>
            <div className="field_container">
              <div className="role_container1">
                <div className="roles">
                  <p>What are you target markets ?</p>
                  <p>
                    <u>Add new target</u>
                  </p>
                </div>
                <div className="roles_container">
                  <div className="role">Target 1 </div>
                  <div className="role">Target 1 </div>
                  <div className="role">Target 1 </div>
                  <div className="role">Target 1 </div>
                </div>
                <div className="select_roles">
                  <DropDown
                    label="Select Market"
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
                  <p>What job skills are you looking for?</p>
                  <p>
                    <u>Add new skills</u>
                  </p>
                </div>
                <div className="roles_container">
                  <div className="role">Skill 1 </div>
                  <div className="role">Skill 1 </div>
                  <div className="role">Skill 1 </div>
                  <div className="role">Skill 1 </div>
                </div>
                <div className="select_roles">
                  <DropDown
                    label="Select skills"
                    options={[
                      { label: "option1", value: "one" },
                      { label: "option1", value: "one" },
                      { label: "option1", value: "one" },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div>
              <p>Vision</p>
              <div className="vision">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tenetur sint ducimus corrupti autem ipsa iusto minima! Et
                  doloribus laboriosam expedita alias! Sequi provident
                  architecto mollitia quae vitae vel voluptatum nisi.
                </p>
              </div>
            </div>
            <div>
              <p>Description</p>
              <div className="vision">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore possimus aspernatur reprehenderit, consequatur id
                  sequi culpa libero voluptates repellendus nihil cumque facilis
                  odio vitae dignissimos commodi voluptatum non iusto vel! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  delectus, itaque error voluptatibus corrupti eligendi natus
                  sit tempore sequi quos cupiditate excepturi illo. Minima a,
                  sed consectetur obcaecati corporis earum?
                </p>
              </div>
            </div>
            <Button name="Save Changes" addStyles={"save_changes"}></Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
