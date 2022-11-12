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
              <Grid item className="appliedimagewrapper">
                <Image addStyles={"applied-image"} src={demo} />
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
                      <Grid item className="appliedlisttopic">
                        Position:
                      </Grid>
                      <Grid item className="appliedlisttext">
                        {val.position}
                      </Grid>
                    </Grid>

                    <Grid container direction="row">
                      <Grid item className="appliedlisttopic">
                        Applied date:
                      </Grid>
                      <Grid item className="appliedlisttext">
                        {val.applieddate}
                      </Grid>
                    </Grid>

                    <Grid container direction="row">
                      <Grid item className="appliedlisttopic">
                        Criterias met:
                      </Grid>
                      <Grid container direction="column">
                        <Grid item>
                          <Grid
                            container
                            direction="row"
                            className="skillpadding"
                          >
                            <Grid item className="appliedlisttopic">
                              Skills
                            </Grid>
                            <Grid item className="skillleftpadding">
                              <Grid container direction="row">
                                {val.skills.map((val, key) => {
                                  return (
                                    <Grid item className="appliedlisttext">
                                      <SkillContainer name={val} />
                                    </Grid>
                                  );
                                })}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Grid container direction="row">
                            <Grid item className="appliedlisttopic">
                              Experience
                            </Grid>
                            <Grid item>
                              <Grid
                                container
                                direction="row"
                                className="experiencepadding"
                              >
                                {val.experience.map((val, key) => {
                                  return (
                                    <Grid item className="appliedlisttext">
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
                  <Grid item className="appliedbuttons">
                    <Grid container direction="row">
                      <Grid item>
                        <CustomButton
                          addStyles={"reject-button"}
                          name="Reject"
                        />
                      </Grid>

                      <Grid item className="between-button">
                        <CustomButton
                          addStyles={"accept-button"}
                          name="Accept"
                        />
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
