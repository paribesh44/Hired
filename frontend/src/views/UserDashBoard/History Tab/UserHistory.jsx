import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import AppliedComponentUser from "../../../components/AppliedComponentUser";
import DashboardLayout from "../../../components/DashhboardLayout";
import UserNavbarIn from "../../../components/UserNavbarIn";
import UserSideBar from "../../../components/UserSideBar";
import callAPI from "../../../utils/callAPI";

function UserHistory() {
  const [applyHistories, setApplyHistories] = useState(null);
  const [dataindata, setdataindata] = useState(false);

  const message = async () => {
    let response_obj = await callAPI({ endpoint: "/apply/get_apply_user" });
    setApplyHistories(response_obj);
    console.log("his");
    console.log(applyHistories.data.length);
    if (applyHistories.data.length == 0) {
      setdataindata(true);
    }
  };

  useEffect(() => {
    message();
  }, []);

  if (applyHistories != null) {
    return (
      <div>
        <DashboardLayout>
          <Grid container direction="column" className="assesmentmain-main">
            <Grid className="assesmentmain-heading">Applied Jobs</Grid>

            <Grid className="assesmentmain-subheading">
              List of all the jobs that you have applied to.
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
                You haven't applied to any jobs yet
              </div>
            )}
            <Grid item>
              {applyHistories.data.map((job, key) => (
                <AppliedComponentUser
                  key={job.id}
                  job_post_id={job.job_post.id}
                  company={job.job_post.employer.companyName}
                  applieedate={job.applied_date}
                  location={job.job_post.job_location}
                  status={job.status}
                  jobname={job.job_post.job}
                  estdsalary={job.job_post.max_salary}
                />
              ))}
            </Grid>
          </Grid>
        </DashboardLayout>
      </div>
    );
  }
}

export default UserHistory;
