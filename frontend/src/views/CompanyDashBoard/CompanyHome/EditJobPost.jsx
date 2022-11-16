import { Grid } from "@mui/material";
import React from "react";
import Companylayout from "../../../components/Companylayout";
import { useLocation } from "react-router-dom";

function EditJobPost() {
  const location = useLocation();
  const { job } = location.state;
  console.log("edit page");
  console.log(job);

  return (
    <Grid>
      <Companylayout></Companylayout>
    </Grid>
  );
}

export default EditJobPost;
