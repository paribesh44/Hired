import React, { useEffect, useState } from "react";
import { Grid, IconButton } from "@mui/material";
import SkillContainer from "../../../components/SkillContainer";
import "./companyapplied.css";
import callAPI from "../../../utils/callAPI";

function AppliedProfiletab(props) {

  const [getcvdata, setgetcvdata] = useState(null);
  const [getUserAssesment, setGetUserAssesment] = useState("");

  const message = async () => {
    let response_obj = await callAPI({
      endpoint: `/apply/get_apply_of_user/${props.job_post_id}/${props.user_id}`,
    });
    let response_obj2 = await callAPI({
      endpoint: `/userAssesment/show_assesment_company/${props.user_id}`
    })
    setgetcvdata(response_obj);
    setGetUserAssesment(response_obj2);
    console.log("this is this");
    console.log(response_obj2.data);
  };

  useEffect(() => {
    message();
  }, []);

  const cvlocation = `http://localhost:8000/${props.cv}`;
  const coverlocation = `http://localhost:8000/${props.coverletter}`;

  if (getcvdata != null) {
    return (
      <div className="applied-profile-tab">
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          className="applied-profile-grid"
        >
          {getUserAssesment.data.target_field_name != "no" &&
          <Grid item className="profiletab-heading">
            User's Assesment:
            <br />
              <div className="profiletab-desc">Target Field: {getUserAssesment.data.target_field_name}</div>
              <div className="profiletab-desc">Score: {getUserAssesment.data.score}</div>
            <br />
          </Grid>
          }

          <Grid item className="profiletab-heading">
            About:
            <br />
            <div className="profiletab-desc">{props.about}</div>
          </Grid>

          <Grid item>
            <div className="profiletab-heading">Preferred Roles:</div>
            <Grid container direction="row" className="profiletab-desc">
              {props.prole.map((val, key) => (
                <Grid item>
                  <SkillContainer name={val} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item>
            <div className="profiletab-heading">Job Skills:</div>
            <Grid container direction="row" className="profiletab-desc">
              {props.pskills.map((val, key) => (
                <Grid item>
                  <SkillContainer name={val} addStyles={"skillspacing"} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item>
            <div className="profiletab-heading">Education:</div>
            <Grid
              container
              justifyContent="space-between"
              direction="row"
              className="profiletab-desc"
            >
              {props.education.map((val, key) => (
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      {val.qualification} in {val.major} from{" "}
                      {val.graduating_institution}
                    </Grid>
                    <Grid item className="spacingindetailed">
                      CGPA:{val.cgpa}
                    </Grid>
                    <Grid item className="spacingindetailed">
                      Graduating year:{val.graduating_year}
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item>
            <div className="profiletab-heading">Experience:</div>
            {props.experience.map((val, key) => (
              <Grid
                container
                justifyContent="space-between"
                direction="row"
                className="profiletab-desc"
              >
                <Grid item>
                  {val.jobTitle} at {val.workPlace}
                </Grid>
                <Grid item>
                  <Grid container direction="row">
                    <Grid item>Expertise:</Grid>
                    <Grid item>
                      {val.field.map((value, key) => (
                        <Grid container direction="row">
                          <Grid item>{value}</Grid>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item> Start Date: {val.jobStartDate.split("T")[0]}</Grid>

                <Grid item> End Date: {val.jobEndDate.split("T")[0]}</Grid>
              </Grid>
            ))}
          </Grid>

          <Grid item>
            <div className="profiletab-heading">Expected Salary:</div>
            <div className="profiletab-desc">
              Min:Rs. {props.expected_min_salary}{" "}
            </div>
            <div className="profiletab-desc">
              Max: Rs {props.expected_max_salary}{" "}
            </div>
          </Grid>

          <Grid item>
            <div className="profiletab-heading">Address:</div>
            <div className="profiletab-desc">{props.address}</div>
          </Grid>

          <Grid item>
            <div className="profiletab-heading">
              Why does the applicant want to apply for this job?
            </div>
            <div className="profiletab-desc">{getcvdata.data.description}</div>
          </Grid>

          <Grid item>
            <div className="profiletab-heading">Cover Letter:</div>
            <a href={coverlocation} target="_blank">{props.coverletter}</a>
          </Grid>

          <Grid item>
            <div className="profiletab-heading">CV:</div>
            <a href={cvlocation} target="_blank">{props.cv}</a>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AppliedProfiletab;
