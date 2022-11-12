import React from "react";
import { Grid, IconButton } from "@mui/material";
import { ImClipboard } from "react-icons/im";
import { IoIosTimer } from "react-icons/io";

function TargetFieldComponent(props) {
  var name = "";
  if (props.data.difficulty === "Easy") {
    name = "easyasses";
  } else if (props.data.difficulty === "Medium") {
    name = "mediumasses";
  } else {
    name = "hardasses";
  }
  return (
    <div
      className={
        props.already_solved ? "already-not-done" : "cardassesment-main"
      }
    >
      <Grid container direction="column" justifyContent="space-evenly">
        <Grid item>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <Grid container direction="column">
                <div className="typeofasses">{props.data.type} </div>
                <div className={name}>{props.data.difficulty}</div>
              </Grid>
            </Grid>
            <Grid item>
              <ImClipboard className="status-icon" />
            </Grid>
          </Grid>
        </Grid>

        <Grid container className="each_lol" direction="column">
          <Grid item className="nameofasses">
            {props.data.name}
          </Grid>
          <Grid item className="nameofprops">
            <Grid container direction="row">
              {props.data.languages.map(function (item, index) {
                return (
                  <Grid item>
                    <span key={`demo_snap_${index}`}>
                      {(index ? ", " : "") + item}
                    </span>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item className="card-buttom">
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <IoIosTimer className="card-buttomicon" />
              </Grid>
              <Grid item>{props.data.time}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default TargetFieldComponent;
