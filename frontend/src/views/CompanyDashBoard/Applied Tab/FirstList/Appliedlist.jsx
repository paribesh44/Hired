import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "../../../../components/Image";
import { dummydata } from "./dummydata";
import demo from "../../../../assets/demoprofileimage.jpg";
import CustomButton from "../../../../components/Buttons";
import { Link } from "react-router-dom";
import SkillContainer from "../../../../components/SkillContainer";
import callAPI from "../../../../utils/callAPI";
import AppliedPopupMsg from "../AppliedPopupMsg";
import RejectPopup from "../RejectPopup";

function Appliedlist(props) {
  var jobid = 0;
  const [appliedEmplist, setappliedEmplist] = useState(null);

  const message = async () => {
    let response_obj = await callAPI({
      endpoint: `/jobPost/seeker_applied_job/${props.job_post_id}`,
    });
    setappliedEmplist(response_obj);
    console.log("this is this");
    console.log(response_obj.data);
  };

  useEffect(() => {
    message();
  }, []);

  if (appliedEmplist != null) {
    return (
      <Grid container direction="column" className="appliedlistmain">
        <Grid item className="overviewheading">
          Applied Employees
        </Grid>
        <Grid item>
          List of all the Employess that have applied to your job posts.
        </Grid>
        <Grid>
          {appliedEmplist.data.map((val, key) => (
            // <Grid>
            //   {val.data.map((value, key) => {
            <Link
              to="/CompanyApplied"
              state={{
                job_post_id: props.job_post_id,
                seeker_id: val.seeker.id,
                job_position: props.job_position
              }}
              style={{ textDecoration: "none", color: "#000000" }}
            >
            <Grid
              container
              className="single_applicant"
              direction={"row"}
              key={key}
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
                        {val.seeker.name}
                      </Grid>
                    </Grid>

                    <Grid container direction="row">
                      <Grid item className="appliedlisttopic">
                        Position:
                      </Grid>
                      <Grid item className="appliedlisttext">
                        {val.job_post.job}
                      </Grid>
                    </Grid>

                    <Grid container direction="row">
                      <Grid item className="appliedlisttopic">
                        Job Post date:
                      </Grid>
                      <Grid item className="appliedlisttext">
                        {val.job_post.posted_date}
                      </Grid>
                    </Grid>

                    <Grid container direction="row">
                      <Grid item className="appliedlisttopic">
                        Applied date:
                      </Grid>
                      <Grid item className="appliedlisttext">
                        {val.applied_date}
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
                                {val.seeker.skills.map((val, key) => {
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
                                {val.seeker.experience.map((val, key) => {
                                  return (
                                    <Grid item className="appliedlisttext">
                                      <SkillContainer name={val.workPlace + "," + " " + val.yearsOfWork + " year experience"} />
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
              {/* <Grid item>
                <Grid container direction="column">
                  <Link
                    to="/CompanyApplied"
                    state={{
                      job_post_id: props.job_post_id,
                      user_id: val.id,
                      job_position: props.job_position,
                    }}
                  >
                    <Grid item> View Employee Profile</Grid>
                  </Link>
                  <Grid item className="appliedbuttons">
                    <Grid container direction="row">
                      <Grid item>
                        <CustomButton
                          addStyles={"reject-button"}
                          name="Reject"
                          onClicked={togglerejectModal}
                        />
                        {rejectModal && (
                          <RejectPopup
                            statechanger={setrejectModal}
                            name={val.seeker.name}
                            post={props.job_position}
                          />
                        )}
                      </Grid>

                      <Grid item className="between-button">
                        <CustomButton
                          addStyles={"accept-button"}
                          name="Accept"
                          onClicked={toggleacceptModal}
                        />
                        {acceptModal && (
                          <AppliedPopupMsg
                            statechanger={toggleacceptModal}
                            name={val.seeker.name}
                            post={props.job_position}
                          />
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid> */}
            </Grid>
            </Link>
            //   })}
            // </Grid>;
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default Appliedlist;
