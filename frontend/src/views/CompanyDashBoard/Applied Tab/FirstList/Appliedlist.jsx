import { Grid } from "@mui/material";
import React from "react";
import Image from "../../../../components/Image";
import { dummydata } from "./dummydata";
import demo from "../../../../assets/demoprofileimage.jpg";
import CustomButton from "../../../../components/Buttons";
import { Link } from "react-router-dom";
import SkillContainer from "../../../../components/SkillContainer";

function Appliedlist() {
  return (
    <Grid container direction="column" className="appliedlistmain">
      <Grid item className="overviewheading">
        Applied Employees
      </Grid>
      <Grid item>
        List of all the Employess that have applied to your job posts.
      </Grid>
      <Grid>
        {dummydata.map((val, key) => {
          return (
            <Grid
              container
              key={key}
              className="single_applicant"
              direction={"row"}
            >
              <Grid item className="imagewrapper">
                <Image addStyles={"profile-image"} src={demo} />
              </Grid>
              <Grid item>
                <Grid container direction={"column"}>
                  <Grid item>
                    <Grid container direction="row">
                      <Grid item className="appliedlisttopic">
                        Name:
                      </Grid>
                      <Grid item className="appliedlisttext">
                        {val.name}
                      </Grid>
                    </Grid>

                    <Grid container direction="row">
                      <Grid item> Position:</Grid>
                      <Grid item> {val.position}</Grid>
                    </Grid>

                    <Grid container direction="row">
                      <Grid item> Applied date:</Grid>
                      <Grid item> {val.applieddate}</Grid>
                    </Grid>

                    <Grid container direction="row">
                      <Grid item> Criterias met:</Grid>
                      <Grid container direction="column">
                        <Grid item>
                          <Grid
                            container
                            direction="row"
                            justifyContent={"space-between"}
                          >
                            <Grid item>Skills</Grid>
                            <Grid item>
                              <Grid container direction="row">
                                {val.skills.map((val, key) => {
                                  return (
                                    <Grid item>
                                      <SkillContainer name={val} />
                                    </Grid>
                                  );
                                })}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid
                            container
                            direction="row"
                            justifyContent={"space-between"}
                          >
                            <Grid item>Experience</Grid>
                            <Grid item>
                              <Grid container direction="row">
                                {val.experience.map((val, key) => {
                                  return (
                                    <Grid item>
                                      {" "}
                                      <SkillContainer name={val} />
                                    </Grid>
                                  );
                                })}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  <Link to="/CompanyApplied">
                    <Grid item> View Employee Profile</Grid>
                  </Link>
                  <Grid item>
                    <Grid container direction="row">
                      <Grid item>
                        <CustomButton name="Reject" />
                      </Grid>

                      <Grid item>
                        <CustomButton name="Accept" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default Appliedlist;
