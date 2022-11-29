import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import Hired from "../assets/Hired.png";
import companydummylogo from "../assets/companydummylogo.jpg";
import Image from "./Image";
import IconButton from "@mui/material/IconButton";
import { IoIosNotifications } from "react-icons/io";
import "./InsideNavbar.css";
import { CompanyNavbarData } from "./CompanyNavbarData";
import callAPI from "../utils/callAPI";
import { FiEdit3 } from "react-icons/fi";
import { BiLogOutCircle } from "react-icons/bi";

function CompanyNavbarIn() {
  const [notifclick, setnotifclick] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [changeLocation, setChangeLocation] = useState(false);
  const [employer, setEmployer] = useState(null);

  function handleNotifClicked() {
    setnotifclick(!notifclick);
  }
  
  async function handleImageClick() {
    console.log("imageclicked");
    setClicked(!clicked);
    let response_obj = await callAPI({ endpoint: "/employer/get_employer" });
    setEmployer(response_obj);
  }

  const logoutseeker = async () => {
    console.log("logoutclicked");
    let response_obj = await callAPI({
      endpoint: `/user-logout`,
    });
    console.log(response_obj.data);

    if (response_obj.data.msg == "success") {
      setChangeLocation(true);
      console.log("success");
    }
  };
  console.log("employer", employer)
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
          <Link to="/CompanyHome">
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
            {CompanyNavbarData.map((val, key) => (
              <Grid
                item
                key={key}
                className={`${
                  val.link.includes(window.location.pathname)
                    ? "navbar_wholeicon"
                    : "navbar_noneicon"
                }`}
              >
                <Link
                  to={val.link[0]}
                  style={{ textDecoration: "none", color: "#495c83" }}
                >
                  <p
                    className={`${
                      val.link.includes(window.location.pathname)
                        ? "chosen_navbar-texts"
                        : "navbar-texts"
                    }`}
                  >
                    {" "}
                    {val.title}
                  </p>
                  <div
                    className={`${
                      val.link.includes(window.location.pathname)
                        ? "hori-line"
                        : ""
                    }`}
                  ></div>
                </Link>
              </Grid>
            ))}
            <Grid item className="notif-icon">
              <Grid
                container
                direction={"column"}
                alignItems={"center"}
                justifyContent="center"
              >
                <Grid item onClick={() => handleNotifClicked()}>
                  <IoIosNotifications
                    className="company_iconsnavbar"
                    size={29}
                  />
                </Grid>
                {notifclick && (
                  <Grid item className="notif_box_label_company">
                    <Grid item>
                      <Grid item className="notif_box_label_each">
                        Notification Number One
                      </Grid>
                      <Grid item className="notif_box_label_each">
                        Notification Number two very long notification and long
                        and long
                      </Grid>
                    </Grid>
                  </Grid>
                )}
              </Grid>
              {/* <IconButton aria-label="search" edge="end">
                <IoIosNotifications className="" />
              </IconButton> */}
            </Grid>

            <Grid item className="company-logo">
              <Grid
                container
                direction="column"
                alignItems={"center"}
                justifyContent="center"
              >
                <Grid item onClick={() => handleImageClick()}>
                  <Image
                    className="border-left pl-2 ml-auto"
                    src={companydummylogo}
                  />
                </Grid>
                {clicked && (
                  <Grid item className="profile_box_label_company">
                    <Grid item>
                        {employer !=null &&
                      <Link
                        to="/CompanyProfile"
                        style={{ textDecoration: "none" }}
                        employer= {employer.data}
                      >
                        <Grid
                          container
                          direction="row-reverse"
                          // alignItems="start"
                          justifyContent="space-between"
                          className="profile_box_label_each"
                        >
                          <Grid item className="profile_box_label_texts">
                            <FiEdit3 size={20} />{" "}
                          </Grid>
                          <Grid item className="profile_box_label_texts">
                            Edit Profile
                          </Grid>
                        </Grid>
                      </Link>
                      }

                      <Grid
                        container
                        direction="row-reverse"
                        // alignItems="start"
                        justifyContent="space-between"
                        className="profile_box_label_end"
                        // onClick={() => handleLogout()}
                      >
                        <Grid item className="profile_box_label_texts">
                          <BiLogOutCircle size={20} />
                        </Grid>
                        {changeLocation && <Navigate to="/CompanyLanding" />}
                        <Grid
                          item
                          onClick={() => logoutseeker()}
                          className="profile_box_label_texts"
                        >
                          LogOut
                        </Grid>
                      </Grid>
                    </Grid>
                    {/* {Profiledata.map((options) => (
                      <Grid item className="profile_box_label_each">
                        <Grid
                          container
                          direction="row-reverse"
                          // alignItems="start"
                          justifyContent="space-between"
                        >
                          <Grid item className="profile_box_label_texts">
                            {options.icon}
                          </Grid>
                          <Grid item className="profile_box_label_texts">
                            {options.title}
                          </Grid>
                        </Grid>
                      </Grid>
                    ))} */}
                  </Grid>
                )}
              </Grid>
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
