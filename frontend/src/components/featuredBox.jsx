import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Image from "./Image";
import Button from "./Buttons";
import "./featureBox.css";
import dummylogo2 from "../assets/dummylogo2.png";
import { Redirect, Link } from "react-router-dom";
import callAPI from "../utils/callAPI";
import UserSaved from "../views/UserDashBoard/Saved Tab/UserSaved";

function Featured_box({
  job_post_id,
  job_post,
  company,
  description,
  jobName,
  onClicked,
  location,
  posted_date,
  state,
}) {
  const [save_job, setSaveJob] = useState("");

  const message = async () => {
    let response_obj = await callAPI({
      endpoint: `/saveJob/get_saved_job/${job_post_id}`,
    });
    if(response_obj.data == null) {
      let response_obj3 = await callAPI({
        endpoint: `/saveJob/create/${job_post_id}`,
        method: "POST"
      });
      setSaveJob(response_obj3.data.save)
    } else {
      setSaveJob(response_obj.data.save);
    }    
  };

  useEffect(() => {
    message();
  }, []);

  const current = new Date();
  var today_date=20221202
  if(current.getDate()>=1 && current.getDate()<=9) {
    today_date = `${current.getFullYear()}${
      current.getMonth()+1
    }${"0"}${current.getDate()}`;
  } else {
    today_date = `${current.getFullYear()}${
      current.getMonth()+1
    }${current.getDate()}`;
  }
  
  const postedDate = posted_date.split("-").join("");
  const posted_days_ago = today_date - postedDate;


  async function handleClick(e) {
    console.log("yaha call vayena ki k");
    let save_or_not = true;
    // it is save so change to unsave
    if (save_job == true) {
      save_or_not = false;
      setSaveJob(false);
    } else {
      save_or_not = true;
      setSaveJob(true);
    }

    // update save and unsave in the database
    let response_obj2 = await callAPI({
      endpoint: `/saveJob/update_save_job/${job_post_id}`,
      method: "PUT",
      data: { save: save_or_not },
    });

    if (response_obj2.data.msg == "success") {
      if (save_job == true) {
        <Link to="/UserSaved" />;
        // redirect to UserHomeTab
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
              <Grid item className="featuredbox_companyname">
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
                <a className="posttime">
                  Posted: {posted_days_ago} {" days ago"}
                </a>
              </Grid>
              <Link
                to="/ApplyJob"
                state={{
                  job_post: job_post,
                  save: save_job,
                  posted_days_ago: posted_days_ago,
                }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Grid item className="buttonBox">
                  <Button name="Apply" addStyles="button_a"></Button>
                </Grid>
              </Link>
              <Grid item>
                <Button
                  name={save_job ? "Unsave" : "Save"}
                  addStyles="button_a"
                  onClicked={handleClick}
                ></Button>

                {/* {!save_job  &&  <Button name="Save" addStyles="button_a"></Button>} */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

}

export default Featured_box;
