import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Link, } from "react-router-dom";
import loginC from "../../assets/login_c.svg";
import loginCds from "../../assets/login_cccc.svg";
import Image from "../../components/Image";
import Hired from "../../assets/Hired.png";
import "./login.css";
import Button from "../../components/Buttons";
import { FcGoogle } from "react-icons/fc";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import callAPI from "../../utils/callAPI";
import { useLocation, Navigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const { user_type } = location.state;
  console.log(user_type)

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [invalidEmail, setInvalid] = React.useState(false);
  const [invalidPassword, setInvalidPassword] = React.useState(false);
  const [incorrectEmail, setIncorrectEmail] = React.useState(false);
  const [incorrectPassword, setIncorrectPassword] = React.useState(false);
  const [fillEmailPassword, setEmailPassword] = React.useState(false);
  const [changeLocation, setChangeLocation] = React.useState(false);
  const [hasProfile, setHasProfile] = React.useState(null);

  const [userOnePath, setUserOnePath] = React.useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setInvalid(false);
    setIncorrectEmail(false);
    setEmailPassword(false);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setInvalidPassword(false);
    setIncorrectPassword(false);
    setEmailPassword(false);
  };

  const loginWithGoogle = async () => {
    window.location = `http://localhost:8000/google-login`;
  };

  const loginSeeker = async () => {
    if ((email != "") & (password != "")) {
      // email and password are correct add this to the database
      if (email.includes("@") && email.includes(".") && password.length >= 8) {
        var user_data = {
          email: email,
          password: password,
        };

        let response_obj = await callAPI({
          endpoint: `/user-login/${user_type}`,
          method: "POST",
          data: user_data,
        });

        console.log(response_obj);

        if (response_obj.data.msg == "Success") {
          setChangeLocation(true)
        }
        if (
          response_obj.data.detail == "Incorrect Password" &&
          response_obj.status == 404
        ) {
          setIncorrectPassword(true);
        }
        if (
          response_obj.data.detail == "Invalid Credentials" &&
          response_obj.status == 404
        ) {
          setIncorrectEmail(true);
        }
      }
    } else {
      setEmailPassword(true);
    }
  };

  return (
    <Grid container className="logIn_c">
      <Grid item className="left_column" xs>
        <Grid item className="logo">
          {/* login according to the user_type */}
          {changeLocation && <Navigate to={user_type==1 ? "/hasProfileSeeker" : "/hasProfileEmployer" }/>}
          <Link to="/">
            <Image src={Hired} />
          </Link>
        </Grid>
        <Grid>
          <a className="login">Log In</a>
        </Grid>
        {user_type == 1? 
        <Grid item>
          <Link to="?" style={{ textDecoration: "none", color: "#495c83" }}>
            <Button
              name="Login with Google"
              addStyles={"logIn"}
              Icon={FcGoogle}
              onClicked={loginWithGoogle}
            ></Button>
          </Link>
        </Grid>
        : null }
        <Grid container className="emailbox" direction="column">
          <Grid item className="email">
            <p>Email</p>
          </Grid>
          <Grid item className="box">
            <Box component="form" noValidate autoComplete="off">
              <TextField
                required
                id="outlined-basic"
                variant="outlined"
                type="email"
                placeholder="Enter your email"
                error={invalidEmail || incorrectEmail}
                onChange={handleChangeEmail}
              />
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
                error={invalidPassword || incorrectPassword}
                placeholder="Enter your password"
                autoComplete="current-password"
                onChange={handleChangePassword}
              />
            </Box>
          </Grid>
        </Grid>

        {/* check from backend */}
        {/* <Grid>
          <h5 style={{color: "red"}}>Incorrect Email & Password</h5>
        </Grid> */}

        {incorrectEmail ? (
          <Grid>
            <h5 style={{ color: "red" }}>Incorrect Email</h5>
          </Grid>
        ) : (
          ""
        )}

        {incorrectPassword ? (
          <Grid>
            <h5 style={{ color: "red" }}>Incorrect Password</h5>
          </Grid>
        ) : (
          ""
        )}

        {fillEmailPassword ? (
          <Grid>
            <h5 style={{ color: "red" }}>Fill all the fields</h5>
          </Grid>
        ) : (
          ""
        )}

        <Grid item>
          {/* <Link
            to="/CompanyHome"
            style={{ textDecoration: "none", color: "#495c83" }}
          > */}
            <Button
              name="Log In"
              addStyles="logIn"
              onClicked={loginSeeker}
            ></Button>
          {/* </Link> */}
        </Grid>
        <Grid item className="register">
          <p>
            Not registered?{" "}
            <Link
              to="/Signup"
              state={{ user_type: user_type }}
              style={{ textDecoration: "none", color: "#495c83" }}
            >
              <b>Create an Account</b>
            </Link>
          </p>
        </Grid>
      </Grid>

      <Grid item className="Right_column" xs>
        <Grid item className="loginImage">
          <Image src={user_type == 1 ? loginC : loginCds}></Image>
        </Grid>
      </Grid>
      {/* <Grid item>
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
      </Grid> */}
    </Grid>
  );
};

export default Login;
