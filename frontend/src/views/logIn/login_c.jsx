import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import tablet from "../assets/login_c.svg";
import Hired from "../assets/Hired.png";
import Image from "./Image";
import CustomButton from "./Buttons";

const Login_c = () => {
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
        alignItems="left"
        style={{ height: "600px" }}
      >
        <Grid item className="logo">
          <Link to="/">
            <Image src={Hired} />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login_c;
