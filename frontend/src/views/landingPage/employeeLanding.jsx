import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Navbar from "../../components/NavbarEmployee";
import landing from "../../assets/landing.svg";
import Image from "../../components/Image";
import "./landingPage.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import { IoSearch } from "react-icons/io5";
import HomePageJobs from "../../components/HomePageJobs";
import callAPI from "../../utils/callAPI";

const EmployeeLanding = () => {
  const [value, setValue] = React.useState("");

  const [featuredJobs, setFeaturedJobs] = useState(null);

  async function message() {
    let response_obj = await callAPI({
      endpoint: "/jobPost/show_all_featured_jobs",
    });
    setFeaturedJobs(response_obj.data);
  }

  useEffect(() => {
    message();
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Grid container direction="column" className="landing_root">
      <Navbar />
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        style={{ height: "600px" }}
      >
        <Grid container justifyContent="center">
          <Grid item className="landing_center">
            <Image src={landing}></Image>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              className="landing_textBox"
            >
              <Grid item className="landing_textInnerBox">
                <p className="landing_finding">Finding job made easier.</p>
              </Grid>
              <Grid item>
                <p className="landing_text2">
                  Get hired with just a tap. Hired helps you to jump start your
                  new carrier.
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item className="landing_searchBox">
          <FormControl style={{ width: "100%" }} variant="outlined">
            <InputLabel
              htmlFor="searchBox"
              style={{ backgroundColor: "white", padding: "0 5px 0 5px" }}
            >
              Job title/ company name/ keywords
            </InputLabel>
            <OutlinedInput
              id="searchBox"
              value={value}
              onChange={handleChange}
              style={{ width: "100%" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="search" edge="end">
                    <IoSearch />
                  </IconButton>
                </InputAdornment>
              }
              label="search"
            />
          </FormControl>
        </Grid>
        {featuredJobs != null && (
          <Grid>
            <Grid item>
              <Grid
                container
                direction="column"
                alignItems="flex-start"
                justifyContent="flex-start"
              >
                <Grid item className="Featured_jobs">
                  <p>Featured Jobs</p>
                </Grid>
                <Grid
                  container
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <Grid item className="Featured_jobsbox">
                    {featuredJobs.map((job) => (
                      <HomePageJobs
                        job_post_id={job.id}
                        job_post={job}
                        company={job.employer.companyName}
                        description={job.description}
                        location={job.job_location}
                        jobName={job.job}
                        timeElapsed={"3 days ago"}
                        state={false}
                      ></HomePageJobs>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default EmployeeLanding;
