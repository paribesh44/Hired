import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import Image from "./Image";
import Hired from "../assets/Hired.png";
import CustomButton from "./Buttons";
import companydummylogo from "../assets/companydummylogo.jpg";
import "./InsideNavbar.css";
import IconButton from "@mui/material/IconButton";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

import CompanyNavbarIn from "./CompanyNavbarIn";
import callAPI from "../utils/callAPI";
import useAPI from "../utils/useAPI";
import { Profiledata } from "./profiledata";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { IoSearch } from "react-icons/io5";

export default function UserNavbarIn() {
  const [changeStatusState, setChangeStatusState] = useState(null);
  const [clicked, onClicked] = useState(false);
  const message = async () => {
    let response_obj = await callAPI({
      endpoint: "/seeker/get_current_seeker",
    });
    setChangeStatusState(response_obj.data[0].status);
  };
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
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
          <Link to="/">
            <Image src={Hired} />
          </Link>
        </Grid>

        <Grid item>
          <Grid container direction="row">
            <Grid item className="navbarrem">
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item className="nav_searchBox">
                  <FormControl style={{ width: "100%" }} variant="outlined">
                    <InputLabel
                      htmlFor="searchBox"
                      style={{
                        backgroundColor: "white",
                        padding: "0 5px 0 5px",
                      }}
                    >
                      Search jobs
                    </InputLabel>
                    <OutlinedInput
                      id="searchBox"
                      value={value}
                      onChange={handleChange}
                      style={{ width: "100%" }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton aria-label="search" edge="end">
                            <IoSearch />
                          </IconButton>
                        </InputAdornment>
                      }
                      label="search"
                    />
                  </FormControl>
                </Grid>
                {/* <Grid item>
                  <IoSearchOutline className="user-iconsnavbar" size={30} />
                </Grid> */}
              </Grid>
            </Grid>
            <Grid item>
              <IoNotificationsOutline className="user-iconsnavbar" size={30} />
            </Grid>
            <Grid item>
              {changeStatusState != null && (
                <select
                  components={{ DropdownIndicator: () => null }}
                  className="status-button"
                  onClick={changeStatus}
                  defaultValue={changeStatusState}
                >
                  <option value="Ready to interview">
                    {" "}
                    Ready to interview
                  </option>
                  <option value="Open to offers"> Open to Offers</option>
                  <option value="Close to interview">
                    {" "}
                    Close to interview
                  </option>
                </select>
              )}
            </Grid>

            <Grid item className="userdp">
              <Grid container direction="column">
                <Grid item>
                  <Image
                    className="border-left pl-2 ml-auto"
                    src={companydummylogo}
                    // onClick={onClicked(!clicked)}
                  />
                </Grid>
                <Grid item className="profile_box_label">
                  {Profiledata.map((options) => (
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
                  ))}
                </Grid>
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
