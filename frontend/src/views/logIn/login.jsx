import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import loginC from "../../assets/login_c.svg";
import Image from "../../components/Image";
import Hired from "../../assets/Hired.png";
import "./login.css";
import Button from "../../components/Buttons";
import { FcGoogle } from "react-icons/fc";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const Login = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Grid container className="logIn_c">
      <Grid item className="left_column" xs>
        <Grid item className="logo">
          <Link to="/">
            <Image src={Hired} />
          </Link>
        </Grid>
        <Grid>
          <a className="login">Log In</a>
        </Grid>
        <Grid item>
          <Link to="?" style={{ textDecoration: "none", color: "#495c83" }}>
            <Button
              name="Log in with Google"
              addStyles={"googleLogin"}
              Icon={FcGoogle}
            ></Button>
          </Link>
        </Grid>
        <Grid container className="emailbox" direction="column">
          <Grid item className="email">
            <p>Email</p>
          </Grid>
          <Grid item className="box">
            <Box component="form" noValidate autoComplete="off">
              <TextField id="outlined-basic" variant="outlined" />
            </Box>
          </Grid>
        </Grid>
        <Grid container className="emailbox" direction="column">
          <Grid item className="email">
            <p>Password</p>
          </Grid>
          <Grid item className="box">
            <Box component="form" noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                hiddenLabel="Password"
                type="password"
                autoComplete="current-password"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid item>
          <Link to="?" style={{ textDecoration: "none", color: "#495c83" }}>
            <Button name="Log In" addStyles="logIn"></Button>
          </Link>
        </Grid>
        <Grid item className="register">
          <p>
            Not registered?{" "}
            <Link
              to="/Signup"
              style={{ textDecoration: "none", color: "#495c83" }}
            >
              <b>Create an Account</b>
            </Link>
          </p>
        </Grid>
      </Grid>

      <Grid item className="Right_column" xs>
        <Grid item className="loginImage">
          <Image src={loginC}></Image>
        </Grid>
      </Grid>
      <Grid item>
        <Link
          to="/EmployeeProfile"
          style={{ textDecoration: "none", color: "#495c83" }}
        >
          <p>Employee Profile</p>
        </Link>
      </Grid>
      <Grid item>
        <Link
          to="/CompanyProfile"
          style={{ textDecoration: "none", color: "#495c83" }}
        >
          <p>Company Profile</p>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Login;
