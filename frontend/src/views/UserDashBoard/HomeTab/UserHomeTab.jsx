import { Grid, Switch } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../../components/Buttons";
import DashboardLayout from "../../../components/DashhboardLayout";
import Featured_box from "../../../components/featuredBox";
import UserNavbarIn from "../../../components/UserNavbarIn";
import UserSideBar from "../../../components/UserSideBar";
import "./Hometab.css";
import callAPI from "../../../utils/callAPI";

function UserHomeTab() {
  const [recommendedJobs, setRecommendedJobs] = useState(null);

  const message = async () => {
    let response_obj = await callAPI({
      endpoint: "/recommendation_jobs/recommend_jobs",
    });
    setRecommendedJobs(response_obj);
    console.log("motherfucker");
    console.log(response_obj.data);
  };

  useEffect(() => {
    message();
  }, []);

  if (recommendedJobs != null) {
    console.log(recommendedJobs.data);
    return (
      <DashboardLayout>
        <Grid container direction="column" className="assesmentmain-main">
          <Grid item className="userhomemtitle">
            Recommended Jobs
          </Grid>
          <Grid item>
            {recommendedJobs.data.map((job, val) => {
              return (
                <Grid item>
                  <Featured_box
                    job_post_id={job.id}
                    job_post={job}
                    company={job.employer.companyName}
                    description={job.description}
                    location={job.job_location}
                    jobName={job.job}
                    timeElapsed={"3 days ago"}
                    state={false}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </DashboardLayout>
      //     <div>
      //         <UserNavbarIn/>
      //         <UserSideBar />
      //         <Switch >
      //         <Link to="/aaa">
      // <CustomButton name="ssd"></CustomButton>

      // </Link>

      //         </Switch>

      //     </div>
    );
  }
}

export default UserHomeTab;
