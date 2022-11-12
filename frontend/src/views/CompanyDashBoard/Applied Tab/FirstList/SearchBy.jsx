import { Grid } from "@mui/material";
import React, { useState } from "react";
import "./AppliedEmployeesList.css";
import { searchbydata } from "./searchbydata";

import { percentagedata } from "./percentagedata";

function SearchBy() {
  const [formdata, setformdata] = useState({ field: "" });

  const [formdata2, setformdata2] = useState({ percent: "" });

  function handlecheckbox(event) {
    const { name, value, type, checked } = event.target;
    setformdata((prevdata) => {
      return {
        ...prevdata,
        field: value,
      };
    });
  }

  function handlecheckbox2(event) {
    const { name, value, type, checked } = event.target;
    setformdata2((prevdata) => {
      return {
        ...prevdata,
        percent: value,
      };
    });
  }
  console.log(formdata);
  console.log(formdata2);
  return (
    <Grid container className="searchbyspacing">
      <Grid container className="searchbymains" direction={"column"}>
        <Grid item className="overviewheading">
          Search By:
        </Grid>
        <Grid item className="searchbysub">
          Job Post:
        </Grid>

        <Grid container direction={"column"} alignContent="center">
          <Grid item className="searchbyeach">
            <input
              type="radio"
              name="searchbyfield"
              onChange={handlecheckbox}
              id="Graphics Designer"
              value="Graphics Designer"
              className="checkbox-css"
            />
            Graphics Designer
          </Grid>
          <Grid item className="searchbyeach">
            <input
              type="radio"
              name="searchbyfield"
              onChange={handlecheckbox}
              id="Software Engineer"
              value="Software Engineer"
              className="checkbox-css"
            />
            Software Engineer
          </Grid>
          <Grid item className="searchbyeach">
            <input
              type="radio"
              name="searchbyfield"
              onChange={handlecheckbox}
              id="Front-End Developer"
              value="Front-End Developer"
              className="checkbox-css"
            />
            Front-End Developer
          </Grid>
          <Grid item className="searchbyeach">
            <input
              type="radio"
              name="searchbyfield"
              onChange={handlecheckbox}
              id="Back-End Developer"
              value="Back-End Developer"
              className="checkbox-css"
            />
            Back-End Developer
          </Grid>
          <Grid item className="searchbyeach">
            <input
              type="radio"
              name="searchbyfield"
              onChange={handlecheckbox}
              id="Android Developer"
              value="Android Developer"
              className="checkbox-css"
            />
            Android Developer
          </Grid>
          <Grid item className="searchbyeach">
            <input
              type="radio"
              name="searchbyfield"
              onChange={handlecheckbox}
              id="Machine Learning"
              value="Machine Learning"
              className="checkbox-css"
            />
            Machine Learning
          </Grid>
          <Grid item className="searchbyeach">
            <input
              type="radio"
              name="searchbyfield"
              onChange={handlecheckbox}
              id="Data Mining"
              value="Data Mining"
              className="checkbox-css"
            />
            Data Mining
          </Grid>

          <br />
        </Grid>

        <Grid item className="searchbysub">
          Match percent:
        </Grid>
        <Grid container direction={"column"}>
          <Grid item className="searchbyeach">
            <input
              type="radio"
              name="searchbyp"
              onChange={handlecheckbox2}
              id="More than 75%"
              value="More than 75%"
              className="checkbox-css"
            />
            More than 75%
          </Grid>
          <Grid item className="searchbyeach">
            <input
              type="radio"
              name="searchbyp"
              onChange={handlecheckbox2}
              id="75% - 50%"
              value="75% - 50%"
              className="checkbox-css"
            />
            75% - 50%
          </Grid>
          <Grid item className="searchbyeach">
            <input
              type="radio"
              name="searchbyp"
              onChange={handlecheckbox2}
              id="50%-25%"
              value="50%-25%"
              className="checkbox-css"
            />
            50%-25%
          </Grid>
          <Grid item className="searchbyeach">
            <input
              type="radio"
              name="searchbyp"
              onChange={handlecheckbox2}
              id="Below 25%"
              value="Below 25%"
              className="checkbox-css"
            />
            Below 25%
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SearchBy;

// {searchbydata.map((val, key, index) => {
//   return (
//     <Grid item className="searchbyeach" key={index}>
//       <Grid container className="searchbox">
//         <Grid item className="checkboxspacing">
//           <input
//             type="radio"
//             name="searchbyfield"
//             onChange={handlecheckbox}
//             id={`${val}`}
//             value={`${val}`}
//             className="checkbox-css"
//           />
//         </Grid>

//         <Grid item>{val}</Grid>
//       </Grid>
//     </Grid>
//   );
// })}

// {percentagedata.map((val, key) => {
//   return (
//     <Grid item className="searchbyeach" key={key}>
//       {val}
//     </Grid>
//   );
// })}
