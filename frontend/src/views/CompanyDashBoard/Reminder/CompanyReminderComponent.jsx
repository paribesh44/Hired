import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import CustomButton from "../../../components/Buttons";
import "./companyreminder.css";
import Hired from "../../../assets/demoprofileimage.jpg";
import Image from "../../../components/Image";
import callAPI from "../../../utils/callAPI";

function CRemainderComponent(props) {
  const [publishButton, setPublishButton] = useState(
    props.val.publish_remainder
  );

  async function handlePublish(remainder_id, publish_status) {
    setPublishButton(!publish_status);

    let response_obj = await callAPI({
      endpoint: `/remainder/update_publish_status_remainder/${remainder_id}`,
      method: "PUT",
      data: { publish: publish_status ? false : true },
    });

    if (response_obj.data.msg == "success") {
      console.log("success");
    }
  }

  async function handleDelete(remainder_id) {
    let response_obj2 = await callAPI({
      endpoint: `/remainder/delete_remainder/${remainder_id}`,
      method: "DELETE",
    });

    if (response_obj2.data.msg == "success") {
      console.log("success");
    }
  }

  return (
    <Grid container direction={"row"} className="single_reminder">
      <Grid item>
        <Grid container direction={"row"} justifyContent="space-between">
          <Grid item className="reminder_boxx">
            <Grid container direction="row">
              <Grid item>
                <Grid container direction="column">
                  <Grid item className="remain_topic">
                    {props.val.name}
                  </Grid>
                  <Grid item className="normal_remain_text">
                    {props.val.note}
                  </Grid>
                  <br />
                  <Grid item className="normal_remain">
                    On: {props.val.meeting_date}, {props.val.meeting_time}
                  </Grid>
                  <Grid item className="normal_remain">
                    With: Mr. {props.val.seeker_name}{" "}
                  </Grid>
                  <Grid item className="normal_remain">
                    For Post: {props.val.job_post_name}{" "}
                  </Grid>
                  <Grid item className="normal_remain">
                    {" "}
                    Meet Link:{" "}
                    <a
                      href={props.val.meet_link}
                      target="_blank"
                      style={{ textDecoration: "none", color: "#495c83" }}
                    >
                      {props.val.meet_link}
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className="reminderpage_button">
            <Grid container direction={"column"}>
              <Grid item classname="reminderpage_singlebutton">
                <CustomButton
                  addStyles="accept-button"
                  name={publishButton ? "Published" : "Publish"}
                  onClicked={() =>
                    handlePublish(props.val.id, props.val.publish_remainder)
                  }
                  //   addStyles="reminderpage_singlebutton"
                ></CustomButton>
              </Grid>
              <br />
              <Grid item>
                <CustomButton
                  onClicked={() => handleDelete(props.val.id)}
                  name="Delete"
                  addStyles={"reject-button"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default CRemainderComponent;
