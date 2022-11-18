import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Signin_c from "../../assets/signup_c.svg";
import SignUpGG from "../../assets/Company-amico.svg";
import Image from "../../components/Image";
import Hired from "../../assets/Hired.png";
import "./signup.css";
import Button from "../../components/Buttons";
import { FcGoogle } from "react-icons/fc";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import callAPI from "../../utils/callAPI";
import { useLocation, Navigate } from 'react-router-dom';


const Signup = () => {
  const location = useLocation()
  const{user_type}=location.state
  console.log(user_type)

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [invalidEmail, setInvalid] = React.useState(false);
  const [invalidPassword, setInvalidPassword] = React.useState(false);
  const [fillEmailPassword, setEmailPassword] = React.useState(false);
  const [userAlreadyExist, setUserAlreadyExist] = React.useState(false);
  const [changeLocation, setChangeLocation] = React.useState(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setInvalid(false)
    setEmailPassword(false)
    setUserAlreadyExist(false)
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setInvalidPassword(false)
    setEmailPassword(false)
    setUserAlreadyExist(false)
  }

  const signUpWithGoogle = async() => {
    window.location = `http://localhost:8000/google-login`
  }

  const signUpSeeker = async()=>{
    if (email != "" & password != ""){
      if(password.length < 8) {
        setInvalidPassword(true)
      }
      if(!email.includes("@") && !email.includes(".")) {
        setInvalid(true)
      }
      // email and password are correct add this to the database
      if(email.includes("@") && email.includes(".") && password.length >= 8) {

        var user_data = {
          email: email,
          password: password,
          user_type: user_type
        }

        let response_obj = await callAPI({
            endpoint: `/signup/${user_type}`,
            method: "POST",
            data: user_data,
            });
          
        console.log(response_obj)

        if (response_obj.data.msg == "Success") {
          console.log("signup vayo re")
          // redirect to another page
          setChangeLocation(true)

        }
        if (response_obj.data.detail == "Already exist" && response_obj.status == 417) {
          setUserAlreadyExist(true)
        }
      } 
    } else {
      setEmailPassword(true)
    }
  }

  return (
    <Grid container className="signUp">
      <Grid item className="left_c" xs>
        <Grid item className="signupImage">
          <Image src={user_type == 1 ? Signin_c : SignUpGG }></Image>
        </Grid>
      </Grid>
      {changeLocation && <Navigate to={user_type==1 ? "/forms" : "/CompanyHome" }/>}
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
              name="SignUp with Google"
              addStyles={"googleLogin"}
              Icon={FcGoogle}
              onClicked={signUpWithGoogle}
            ></Button>
          </Link>
        </Grid>
        <Grid container className="fullnamebox" direction="column">
          <Grid item className="full_n">
            <p>Email</p>
          </Grid>
          <Grid item className="box">
            <Box component="form" noValidate autoComplete="off">
              <TextField 
              id="outlined-basic" 
              variant="outlined"
              placeholder="Enter email"
              error={invalidEmail || fillEmailPassword} 
              onChange={handleChangeEmail}  />
            </Box>
          </Grid>
        </Grid>
        <Grid container className="fullnamebox" direction="column">
          <Grid item className="full_n">
            <p>Password</p>
          </Grid>
          <Grid item className="box">
            <Box component="form" noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                type="password"
                autoComplete="current-password"
                placeholder="Enter password"
                error={invalidPassword || fillEmailPassword}
                onChange={handleChangePassword}
              />
            </Box>
          </Grid>
        </Grid>

        {invalidPassword ? 
        <Grid>
          <h5 style={{color: "red"}}>Password less than 8 characters.</h5>
        </Grid> : "" }
        
        {invalidEmail ? 
        <Grid>
          <h5 style={{color: "red"}}>Invalid Email</h5>
        </Grid> : "" }

        {fillEmailPassword ?
        <Grid>
          <h5 style={{color: "red"}}>Fill all the fields</h5>
        </Grid> : "" }

        {userAlreadyExist ?
        <Grid>
          <h5 style={{color: "red"}}>User already exists</h5>
        </Grid> : "" }

        <Grid item>
            <Button name="Sign Up" addStyles="logIn" onClicked={signUpSeeker}></Button>
        </Grid>
        <Grid item className="register">
          <p>
            Already have an account?{" "}
            <Link
              to="/Login"
              state={{ user_type: user_type }}
              style={{ textDecoration: "none", color: "#495c83" }}
            >
              <b>Login</b>
            </Link>
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Signup;
