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
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { IoSearch } from "react-icons/io5";
import IconButton from "@mui/material/IconButton";

function UserHomeTab() {
  const [value, setValue] = useState("");
  const [searchJob, setsearchJob] = useState(true);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handlesearchclick = () => {
    setsearchJob(!searchJob);
  };
  const [recommendedJobs, setRecommendedJobs] = useState(null);

  const message = async () => {
    let response_obj = await callAPI({
      endpoint: "/recommendation_jobs/recommend_jobs",
    });
    setRecommendedJobs(response_obj);
    // console.log(response_obj.data);
  };

  useEffect(() => {
    message();
  }, []);

  const [allJobs, setallJobs] = useState(null);

  const message2 = async () => {
    let response_obj = await callAPI({
      endpoint: "/jobPost/show_all_jobs",
    });
    setallJobs(response_obj);
    console.log(response_obj.data);
  };

  useEffect(() => {
    message2();
  }, []);

  if (recommendedJobs != null && allJobs != null) {
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
                    posted_date={job.posted_date}
                    state={false}
                  />
                </Grid>
              );
            })}
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item className="userhomemtitle">
                Jobs you might like:
              </Grid>
              <Grid item className="searchbox-right">
                <Grid item className="userhome_searchbox">
                  <FormControl style={{ width: "50%" }} variant="outlined">
                    <InputLabel
                      htmlFor="searchBox"
                      style={{
                        backgroundColor: "white",
                        padding: "0 5px 0 5px",
                      }}
                    >
                      Search jobs
                    </InputLabel>
                    <OutlinedInput
                      id="searchBox"
                      value={value}
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="search"
                            edge="end"
                            onClick={() => handlesearchclick()}
                          >
                            <IoSearch />
                          </IconButton>
                        </InputAdornment>
                      }
                      label="search"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              {searchJob && (
                <Grid item>
                  {allJobs.data.map((job, val) => {
                    return (
                      <Grid item>
                        <Featured_box
                          job_post_id={job.id}
                          job_post={job}
                          company={job.employer.companyName}
                          description={job.description}
                          location={job.job_location}
                          jobName={job.job}
                          posted_date={job.posted_date}
                          state={false}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              )}
            </Grid>
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
