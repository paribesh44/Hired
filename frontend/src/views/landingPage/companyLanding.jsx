import * as React from "react";
import { Grid } from "@mui/material";
import Navbar from "../../components/NavbarCompany";
import company from "../../assets/companyLanding.jpg";
import Image from "../../components/Image";
import "./landingPage.css";
import Button from "../../components/Buttons";
import { Link } from "react-router-dom";

const CompanyLanding = () => {
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
            <Image src={company}></Image>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              className="landing_textBox"
            >
              <Grid item className="landing_textInnerBox">
                <p className="landing_finding">
                  Finding candidates made easier.
                </p>
              </Grid>
              <Grid item>
                <p className="landing_text2">
                  Get the recruits that you are looking for from pool of
                  candidates with unique vision and skill.
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
        <Grid item>
          <Grid
            container
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Grid item className="landing_text3">
              <p>All the tools you need to hire people,in one place.</p>
            </Grid>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item className="landing_text4">
                <p>Get everthing set up instantly.</p>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <Link
                  to="/Signup"
                  state={{ user_type: 2 }}
                  style={{ textDecoration: "none", color: "#495c83" }}
                >
                  <Button name="Sign Up Now" addStyles="signUpNow"></Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CompanyLanding;
