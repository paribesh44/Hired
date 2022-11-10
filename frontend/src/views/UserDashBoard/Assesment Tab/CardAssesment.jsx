import React from "react";
import { ImClipboard } from "react-icons/im";
import { IoIosTimer } from "react-icons/io";
import { Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { grid } from "@mui/system";

function CardAssesment(props) {
  return (
    <div>
      <Link
        to="/Assesment/AssesmentQuestions"
        state={{ target_field_id: props.id }}
        className="assesment-link"
      >
        <div className="cardassesment-main">
          <Grid container direction="column" justifyContent="space-evenly">
            <Grid item>
              <Grid container direction="row" justifyContent="space-between">
                <Grid item>
                  <Grid container direction="column">
                    <div className="typeofasses">{props.type} </div>
                    <div className="typeofasses">{props.difficulty}</div>
                  </Grid>
                </Grid>
                <Grid item>
                  <ImClipboard className="status-icon" />
                </Grid>
              </Grid>
            </Grid>

            <Grid container className="each_lol" direction="column">
              <Grid item className="nameofasses">
                {props.name}
              </Grid>
              <Grid item className="nameofprops">
                <Grid container direction="row">
                  {props.languages.map(function (item, index) {
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
                  <Grid item>{props.time}</Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Link>
    </div>
  );
}

export default CardAssesment;
