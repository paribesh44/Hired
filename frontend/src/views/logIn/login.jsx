import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import loginC from "../../assets/login_c.svg";
import Image from "../../components/Image";
import Hired from "../../assets/Hired.png";
import "./login.css";
import Button from "../../components/Buttons";
import IconButton from "@mui/material/IconButton";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Grid container direction="column" className="logIn_c">
      <Grid
        item
        container
        direction="column"
        className="left_column"
        alignItems="left"
      >
        <Grid item container direction="row" alignItems="center">
          <Grid item className="logo">
            <Link to="/">
              <Image src={Hired} />
            </Link>
            <Grid>
              <a className="login">Login</a>
            </Grid>
            <Grid item>
              <Link to="?" style={{ textDecoration: "none", color: "#495c83" }}>
                <Button name="Log in with Google" addStyles={"googleLogin"}>
                  <IconButton aria-label="google" edge="end">
                    <FcGoogle />
                  </IconButton>
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
