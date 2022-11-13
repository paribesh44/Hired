import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Hired from "../assets/Hired.png";
import companydummylogo from "../assets/companydummylogo.jpg";
import Image from "./Image";
import IconButton from "@mui/material/IconButton";
import { IoIosNotifications } from "react-icons/io";
import "./InsideNavbar.css";

function CompanyNavbarIn() {
  function ExpandLogo() {}
  return (
    <div className="navbar-main">
      <Grid
        container
        direction="row"
        alignItems="center"
        // justifyContent="space-evenly"
        className="navbar-top"
      >
        <Grid item className="navbar-image">
          <Link to="/">
            <Image src={Hired} />
          </Link>
        </Grid>

        <Grid item className="options">
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
            className="options"
          >
            <Grid item>
              <Link
                to="/CompanyHome"
                style={{ textDecoration: "none", color: "#495c83" }}
              >
                <p className="navbar-texts"> Home</p>
                <div
                  className={`${
                    window.location.pathname == "/CompanyHome"
                      ? "hori-line"
                      : ""
                  }`}
                ></div>
              </Link>
            </Grid>

            <Grid item>
              <Link
                to="/AppliedEmployeesList"
                style={{ textDecoration: "none", color: "#495c83" }}
              >
                <p className="navbar-texts"> Applied</p>
                <div
                  className={`${
                    window.location.pathname == "/CompanyApplied"
                      ? "hori-line"
                      : ""
                  }`}
                ></div>
              </Link>
            </Grid>

            <Grid item>
              <Link
                to="/CompanyAddPost"
                style={{ textDecoration: "none", color: "#495c83" }}
              >
                <p className="navbar-texts"> Add a post</p>
                <div
                  className={`${
                    window.location.pathname == "/CompanyAddPost"
                      ? "hori-line"
                      : ""
                  }`}
                ></div>
              </Link>
            </Grid>

            <Grid item>
              <Link
                to="/CompanyMyEmployees"
                style={{ textDecoration: "none", color: "#495c83" }}
              >
                <p className="navbar-texts"> My Employees</p>
                <div
                  className={`${
                    window.location.pathname == "/CompanyMyEmployees"
                      ? "hori-line"
                      : ""
                  }`}
                ></div>
              </Link>
            </Grid>

            <Grid item>
              <Link
                to="/CompanyAnalytics"
                style={{ textDecoration: "none", color: "#495c83" }}
              >
                <p className="navbar-texts"> Analytics </p>
              </Link>
            </Grid>

            <IconButton aria-label="search" edge="end">
              <IoIosNotifications className="notif-icon" />
            </IconButton>

            <Grid className="company-logo">
              <Image
                onClick={ExpandLogo}
                className="border-left pl-2 ml-auto"
                src={companydummylogo}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default CompanyNavbarIn;

{
  /* <ul className='unlist'>
<li>
<Grid item>
<Link to="/" style={{ textDecoration: "none", color: "#495c83" }}>
  <p className="navbar-texts"> Home</p>
</Link>
</Grid>
</li>
<li>
<Grid item>
<Link to="/" style={{ textDecoration: "none", color: "#495c83" }}>
  <p className="navbar-texts"> Home</p>
</Link>
</Grid>
</li>
<li>
<Grid item>
<Link to="/" style={{ textDecoration: "none", color: "#495c83" }}>
  <p className="navbar-texts"> Home</p>
</Link>
</Grid>
</li>
<li className='utajane'>
<IconButton aria-label="search" edge="end">
<IoIosNotifications className='notif-icon'/>
</IconButton>
</li>
<li className='utajane'>         


<Image className="company-logo" src={companydummylogo}/>

</li>
</ul> */
}
