import { Grid } from "@mui/material";
import React from "react";

const data = [
  {
    name: "General Info",
    selected: true,
  },
  {
    name: "Education",
    selected: false,
  },
  {
    name: "Experience",
    selected: false,
  },
  {
    name: "Preference",
    selected: false,
  },
];

function ProfileTab(props) {
  return (
    <Grid container direction="row" className="main_profile_tab">
      {data.map((val) => (
        <Grid
          item
          className={
            val.name === props.name
              ? "each_profile_tab"
              : "unselected_eachprofile"
          }
        >
          {val.name}
        </Grid>
      ))}
    </Grid>
  );
}

export default ProfileTab;
