import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Image from "./Image";
import Button from "./Buttons";
import "./featureBox.css";
import dummylogo2 from "../assets/dummylogo2.png";
import { Link } from "react-router-dom";
import callAPI from "../utils/callAPI";
import UserSaved from "../views/UserDashBoard/Saved Tab/UserSaved";

function Featured_box({
  job_post_id,
  job_post,
  company,
  description,
  jobName,
  timeElapsed,
  onClicked,
  location,
  state,
}) {
  const [save_job, setSaveJob] = useState(null);

  const message = async () => {
    let response_obj = await callAPI({
      endpoint: `/saveJob/get_saved_job/${job_post_id}`,
    });
    setSaveJob(response_obj);
    // console.log(response_obj.data)
  };

  useEffect(() => {
    message();
  }, []);

  if (save_job != null) {
    async function handleClick(e) {
      console.log("yaha call vayena ki k");
      let save_or_not = true;
      // it is save so change to unsave
      if (save_job.data.save == true) {
        save_or_not = false;
        setSaveJob(false);
      } else {
        save_or_not = true;
        setSaveJob(true);
      }

      console.log(save_job.data.save);
      console.log(save_or_not);

      // update save and unsave in the database
      let response_obj = await callAPI({
        endpoint: `/saveJob/update_save_job/${job_post_id}`,
        method: "PUT",
        data: { save: save_or_not },
      });

      if (response_obj.data.msg == "success") {
        if (save_job.data.save == true) {
          <Link to="/UserSaved" />;
        } else {
          <Link to="/UserSaved" />;
        }
      }
    }

    return (
      <Grid
        container
        direction="column"
        className="featureBox_root"
        onClick={onClicked}
      >
        <Grid item>
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            justifyContent="flex-start"
            className="company_name"
          >
            <Grid item className="profileContainer">
              <Image src={dummylogo2} addStyles="profile" />
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <a className="companyname">{company}</a>
                </Grid>
                <Grid item className="description">
                  <a>{description}</a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className="featureBoxBottom">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            className="Post_name"
            alignItems="flex-start"
          >
            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Grid item>
                  <a className="jobname">{jobName}</a>
                </Grid>
                <Grid item>
                  <a className="joblocation">{location}</a>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Grid>
                  <a className="posttime">Posted: {timeElapsed}</a>
                </Grid>
                <Link
                  to="/ApplyJob"
                  state={{ job_post: job_post }}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Grid item className="buttonBox">
                    <Button name="Apply" addStyles="button_a"></Button>
                  </Grid>
                </Link>
                <Grid item>
                  <Button
                    name={save_job.data.save ? "Unsave" : "Save"}
                    addStyles="button_a"
                    onClicked={handleClick}
                  ></Button>

                  {/* {!save_job.data.save  &&  <Button name="Save" addStyles="button_a"></Button>} */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Featured_box;
