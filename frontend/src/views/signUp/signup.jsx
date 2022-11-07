import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Signin_c from "../../assets/signup_c.svg";
import Image from "../../components/Image";
import Hired from "../../assets/Hired.png";
import "./signup.css";
import Button from "../../components/Buttons";
import { FcGoogle } from "react-icons/fc";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const Signup = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Grid container className="signUp">
      <Grid item className="left_c" xs>
        <Grid item className="loginImage">
          <Image src={Signin_c}></Image>
        </Grid>
      </Grid>

      <Grid item className="Right_c" xs>
        <Grid item className="logo_h">
          <Link to="/">
            <Image src={Hired} />
          </Link>
        </Grid>
        <Grid item className="create">
          <p>Create Account</p>
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
        <Grid item className="email">
          <p>Full Name</p>
        </Grid>
        <Grid item className="box">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "19em", height: "10em" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" variant="outlined" />
          </Box>
        </Grid>
        <Grid item className="password">
          <p>Email id</p>
        </Grid>
        <Grid item className="box">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "19em", height: "10em" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" variant="outlined" />
          </Box>
        </Grid>
        <Grid item className="password">
          <p>Password</p>
        </Grid>
        <Grid item className="box">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "19em", height: "10em" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" variant="outlined" />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Signup;
