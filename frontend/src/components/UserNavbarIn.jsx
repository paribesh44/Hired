import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import Image from "./Image";
import Hired from "../assets/Hired.png";
import CustomButton from "./Buttons";
import companydummylogo from "../assets/companydummylogo.jpg";
import "./InsideNavbar.css";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { FiEdit3 } from "react-icons/fi";
import { BiLogOutCircle } from "react-icons/bi";

import CompanyNavbarIn from "./CompanyNavbarIn";
import callAPI from "../utils/callAPI";
import useAPI from "../utils/useAPI";
import { Profiledata } from "./profiledata";

export default function UserNavbarIn() {
  const [changeStatusState, setChangeStatusState] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [notifclick, setnotifclick] = useState(false);

  function handleImageClick() {
    console.log("imageclicked");
    setClicked(!clicked);
  }
  function handleLogout() {}

  function handleNotifClicked() {
    setnotifclick(!notifclick);
  }

  const message = async () => {
    let response_obj = await callAPI({
      endpoint: "/seeker/get_current_seeker",
    });
    setChangeStatusState(response_obj.data[0].status);
  };

  useEffect(() => {
    message();
  }, []);

  async function changeStatus(e) {
    console.log(e.target.value);

    let response_obj = await callAPI({
      endpoint: `/seeker/update_seeker_status`,
      method: "PUT",
      data: { status: e.target.value },
    });

    if (response_obj.data.msg == "success") {
      setChangeStatusState(e.target.value);
    }
  }

  return (
    <div className="navbar-main">
      {/* <CompanyNavbarIn/> */}
      <Grid
        container
        direction="row"
        alignItems="center"
        className="navbar-top"
        justifyContent="space-between"
      >
        <Grid item className="navbar-image">
          <Link to="/UserHomeTab">
            <Image src={Hired} />
          </Link>
        </Grid>

        <Grid item>
          <Grid container direction="row">
            <Grid item className="notif_box_icon">
              <Grid
                container
                direction="column"
                alignItems={"center"}
                justifyContent="center"
              >
                <Grid item onClick={() => handleNotifClicked()}>
                  <IoNotificationsOutline
                    className="user-iconsnavbar"
                    size={29}
                  />
                </Grid>
                {notifclick && (
                  <Grid item className="notif_box_label">
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
            </Grid>
            <Grid item>
              {changeStatusState != null && (
                <select
                  components={{ DropdownIndicator: () => null }}
                  className="status-button"
                  onClick={changeStatus}
                  defaultValue={changeStatusState}
                >
                  <option value="Ready to interview">Ready to interview</option>
                  <option value="Open to offers"> Open to Offers</option>
                  <option value="Close to interview">Close to interview</option>
                </select>
              )}
            </Grid>

            <Grid item className="userdp">
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
                  <Grid item className="profile_box_label">
                    <Grid item>
                      <Link
                        to="/employeeProfile"
                        style={{ textDecoration: "none" }}
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

                      <Grid
                        container
                        direction="row-reverse"
                        // alignItems="start"
                        justifyContent="space-between"
                        className="profile_box_label_end"
                        onClick={() => handleLogout()}
                      >
                        <Grid item className="profile_box_label_texts">
                          <BiLogOutCircle size={20} />
                        </Grid>
                        <Grid item className="profile_box_label_texts">
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

{
  /* <ul className='navbarunordered'>
        <li className='navbarlistitems'>
        <Link to="/">
            <Image src={Hired} addStyles="usernavbarimage"/>
          </Link>
        </li>
        <li className='navbarlistitems'>
          <CustomButton name="Open to Offers" addStyles={"usernavbarbutton"}/>            

        </li>
        <li className='navbarlistitems'>
        <Image  className="border-left pl-2 ml-auto" src={companydummylogo}/>

        </li>
      </ul> */
}

{
  /* <Grid item className="navbarrem">
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
  {/* <Grid item>
    <IoSearchOutline className="user-iconsnavbar" size={30} />
  </Grid> 
  
</Grid>
</Grid> */
}
