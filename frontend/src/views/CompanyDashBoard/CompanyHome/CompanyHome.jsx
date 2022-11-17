import { Grid } from "@mui/material";
import React, { useState } from "react";
import CompanyNavbarIn from "../../../components/CompanyNavbarIn";
import RejectPopup from "../Applied Tab/RejectPopup";
import Overview from "./Overview";
import "./companyhome.css";
import CompanyReminder from "./Reminder";
import MypostedJob from "./MypostedJob";
import Companylayout from "../../../components/Companylayout";
function CompanyHome() {
  const [modal, setmodal] = useState(false);

  const toggleModle = () => {
    setmodal(!modal);
  };
  return (
    <Companylayout>
      <Grid container direction="row" className="companyhomemain">
        <Grid item>
          <Overview />
        </Grid>
        <Grid item>
          <Grid container direction={"column"}>
            <Grid item>
              <CompanyReminder />
            </Grid>
            <Grid>
              <MypostedJob />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Companylayout>
  );
}

export default CompanyHome;
