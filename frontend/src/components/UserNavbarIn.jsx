import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import Image from "./Image";
import Hired from "../assets/Hired.png";
import CustomButton from "./Buttons";
import companydummylogo from "../assets/companydummylogo.jpg";
import "./InsideNavbar.css";
import IconButton from "@mui/material/IconButton";
import { IoIosNotifications } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

import CompanyNavbarIn from "./CompanyNavbarIn";
import callAPI from "../utils/callAPI";
import useAPI from "../utils/useAPI";

export default function UserNavbarIn() {
  const [changeStatusState, setChangeStatusState] = useState(null)

  const message = async () => {
    let response_obj = await callAPI({ endpoint: "/seeker/get_current_seeker" });
    setChangeStatusState(response_obj.data[0].status);
  };

  useEffect(() => {
    message();
  }, []);
  

  async function changeStatus(e) {
    console.log(e.target.value)

    let response_obj = await callAPI({
            endpoint: `/seeker/update_seeker_status`,
            method: "PUT",
            data: {status: e.target.value},
            });
  
    if (response_obj.data.msg == "success") {
      setChangeStatusState(e.target.value)
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
          <Link to="/">
            <Image src={Hired} />
          </Link>
        </Grid>

        <Grid item>
          <Grid container className="navbarrem">
            <Grid item>
              <IconButton aria-label="search" edge="end">
                <IoSearch className="user-iconsnavbar" />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton aria-label="search" edge="end">
                <IoIosNotifications className="user-iconsnavbar" />
              </IconButton>
            </Grid>

            <Grid item>
              { changeStatusState != null &&
              <select
                components={{ DropdownIndicator: () => null }}
                className="status-button"
                onClick={changeStatus}
                defaultValue={changeStatusState}
              >
                <option value="Ready to interview"> Ready to interview</option>
                <option value="Open to offers"> Open to Offers</option>
                <option value="Close to interview"> Close to interview</option>
              </select>
              }
            </Grid>

            <Grid className="userdp">
              <Image
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
