import * as React from "react";
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
import FeaturedBox from "../../components/featuredBox";

const EmployeeLanding = () => {
  const jobs = [
    {
      company: "Twitter Inc",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      jobName: "Software Developer",
      timeElapsed: "5 sec ago",
      location: "Pokhara, Nepal",
    },
    {
      company: "Twitter Inc",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      jobName: "Software Developer",
      timeElapsed: "5 sec ago",
      location: "Pokhara, Nepal",
    },
  ];
  const [value, setValue] = React.useState("");

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
                  {jobs.map((job) => (
                    <FeaturedBox
                      company={job.company}
                      description={job.description}
                      jobName={job.jobName}
                      timeElapsed={job.timeElapsed}
                      location={job.location}
                      state={true}
                    ></FeaturedBox>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EmployeeLanding;
