import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Hired from "../assets/Hired.png";
import Image from "./Image";
import "./navbar.css";
import CustomButton from "./Buttons";

const Navbar = () => {
  return (
    <div className="navbar_root">
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        className="navbar_top"
      >
        <Grid item className="navbar_image">
          <Link to="/">
            <Image src={Hired} />
          </Link>
        </Grid>

        <Grid item className="navbar_login">
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Grid item>
              <Link
                to="CompanyLanding"
                style={{ textDecoration: "none", color: "#495c83" }}
              >
                <p className="navbar_for"> For Companies</p>
              </Link>
            </Grid>
            <Grid item style={{ margin: "10px" }}>
              <Link
                to="Login"
                state={{ user_type:1 }}
                style={{ textDecoration: "none", color: "#495c83" }}
              >
                <CustomButton name="Log in" addStyles={"navbar_button"} />
              </Link>
            </Grid>
            <Grid item style={{ margin: "10px" }}>
              <Link
                to="Signup"
                state={{ user_type:1 }}
                style={{ textDecoration: "none", color: "#495c83" }}
              >
                <CustomButton name="Sign up" addStyles={"navbar_button"} />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
