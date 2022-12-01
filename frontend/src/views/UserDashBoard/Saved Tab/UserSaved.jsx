import React, { useState, useEffect } from "react";
import UserNavbarIn from "../../../components/UserNavbarIn";
import UserSideBar from "../../../components/UserSideBar";
import ApplyJob from "./ApplyJob";
import { Grid } from "@mui/material";
import DashboardLayout from "../../../components/DashhboardLayout";
import Featured_box from "../../../components/featuredBox";
import { Link } from "react-router-dom";
import callAPI from "../../../utils/callAPI";

function UserSaved() {
  const [saved_job_post, setSavedJobPost] = useState(null);
  const [dataindata, setdataindata] = useState(false);

  const message = async () => {
    let saved_job_post_response_obj = await callAPI({
      endpoint: "/jobPost/get_all_saved_job",
    });
    setSavedJobPost(saved_job_post_response_obj);
    if (saved_job_post.data.length == 0) {
      setdataindata(true);
    }
  };

  useEffect(() => {
    message();
  }, []);

  let newDate = new Date();

  if (saved_job_post != null) {
    return (
      <div>
        <DashboardLayout>
          <Grid container direction="column " className="assesmentmain-main">
            <Grid item className="assesmentmain-heading">
              Saved Jobs
            </Grid>
            <Grid className="assesmentmain-subheading">
              List of all the jobs that you have saved.
            </Grid>
            {dataindata && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100vh",
                  fontSize: "20px",
                }}
              >
                {" "}
                You haven't saved any jobs yet
              </div>
            )}

            {saved_job_post.data.map((val, key) => {
              return (
                <Grid item>
                  <Featured_box
                    job_post_id={val.id}
                    job_post={saved_job_post.data[key]}
                    company={val.employer.companyName}
                    description={val.description}
                    jobName={val.job}
                    location={val.job_location}
                    posted_date={val.posted_date}
                    state={false}
                  />
                </Grid>
              );
            })}
          </Grid>
        </DashboardLayout>
      </div>
    );
  }
}

export default UserSaved;

{
  /* <ApplyJob />  */
}
