import React from "react";
import { Grid, IconButton } from "@mui/material";
import CustomButton from "../../../components/Buttons";
import { useState, useEffect } from "react";
import callAPI from "../../../utils/callAPI";
import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io";
import { ImCross } from "react-icons/im";

function ApplyConfirmation({ job_post_id, statechanger, ...props }) {
  const [has_cv, setHasCV] = useState("");
  const [fillAllTheFields, setFillFields] = useState(false);

  const message = async () => {
    let response_obj = await callAPI({
      endpoint: "/seeker/does_this_seeker_has_cv",
    });
    setHasCV(response_obj.data);
    console.log(response_obj.data);
  };

  useEffect(() => {
    message();
  }, []);

  const [applyanswers, setapplyanswers] = useState({ reasontoaccept: "" });
  function handlechange(event) {
    setapplyanswers((prevdata) => {
      return {
        ...prevdata,
        [event.target.name]: event.target.value,
      };
    });
    setFillFields(false);
  }

  async function submitApply(e) {
    e.preventDefault();
    const cover_letter = e.target.cover_letter.files[0];
    const reasonToAccept = e.target.reasontoaccept.value;
    var cv = "";

    if (has_cv != null) {
      cv = "";
    } else {
      cv = e.target.cv.files[0];
    }
    console.log(cv);
    console.log(cover_letter === undefined);
    console.log(reasonToAccept === "");
    console.log(cv === undefined);

    // check if the user has selected all the fields or not
    if (has_cv != null) {
      if (
        cover_letter === undefined &&
        reasonToAccept === "" &&
        cv === undefined
      ) {
        setFillFields(true);
      }
    } else {
      if (cover_letter === undefined && reasonToAccept === "") {
        setFillFields(true);
      }
    }
    if (cv != null) {
      if (cover_letter === undefined && reasonToAccept === "") {
        setFillFields(true);
      }
    }

    let dataForm = new FormData();
    dataForm.append("description", reasonToAccept);
    dataForm.append("cv", cv);
    dataForm.append("coverletter", cover_letter);
    dataForm.append("job_post_id", job_post_id);

    if (fillAllTheFields === false) {
      console.log("hello");
      // update visibility in the database
      let response_obj = await callAPI({
        endpoint: "/apply/create",
        method: "POST",
        data: dataForm,
      });

      if (response_obj.data.msg == "success") {
        statechanger(false);
      }
    }
  }

  function confirmedbutton() {
    console.log(applyanswers.reasontoaccept);
  }

  function redirect() {
    window.location = "http://localhost:8000/static/cv/" + { has_cv };
  }

  function changeCV() {
    setHasCV(null);
  }

  const pathLink = `http://localhost:8000/${has_cv}`;

  function changePath() {
    window.location = `http://localhost:8000/${has_cv}`;
  }

  return (
    <form onSubmit={submitApply}>
      <div className="modal">
        <div className="overlay">
          <div className="modal-content">
            <div className="applyconfirmation-main">
              <div className="confirmationquestion">
                Let them know why they should hire you. *
              </div>
              <input
                placeholder="Your answer"
                name="reasontoaccept"
                onChange={handlechange}
                value={applyanswers.reasontoaccept}
              />

              <div className="confirmationquestion">
                Attach your cover letter? *
              </div>
              <input type="file" name="cover_letter" />

              <div className="confirmationquestion">Attach your CV. *</div>
              {has_cv == null ? (
                <input type="file" name="cv" />
              ) : (
                <Grid
                  container
                  direction="row"
                  //   justifyContent={"center"}
                  alignItems="center"
                >
                  <Grid item>
                    <a target="_blank" href={pathLink}>
                      <div>{has_cv}</div>
                    </a>
                  </Grid>
                  <Grid item className="appliedicon_grid">
                    <ImCross className="appliedicons" onClick={changeCV} />
                  </Grid>
                </Grid>
              )}

              {fillAllTheFields && (
                <Grid>
                  <h4 style={{ color: "rgb(181, 60, 60)", marginTop: 10 }}>
                    Fill all the compulsory(*) fields.
                  </h4>
                </Grid>
              )}

              {/* <CustomButton addStyles={"confirmationbutton"} name="Choose a File"/> */}

              <Grid container direction="row">
                <div className="confirmcancelbutton">
                  <CustomButton
                    addStyles={"reject-button"}
                    name="Cancel"
                    onClicked={() => statechanger(false)}
                  />
                </div>
                <div className="confirmsendbutton">
                  <CustomButton
                    addStyles={"accept-button"}
                    name="Send Application"
                    onClicked={confirmedbutton}
                    type="submit"
                  />
                </div>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ApplyConfirmation;

{
  /* <Grid item className='confirmationrow1'>
                <Grid container direction="column">
                    <Grid item className='confirmation-heading'>
                        Applying to:
                    </Grid>
                    <Grid item className='confirmation-texts'>
                        Abc Company
                    </Grid>
                    <Grid item className='confirmation-heading'>
                        Post:
                    </Grid>
                    <Grid> 
                        Graphics Designer
                    </Grid>
                    <Grid item className='confirmation-heading'>
                        Salary:
                    </Grid>
                    <Grid> 
                        Graphics Designer
                    </Grid>

                    <Grid item className='confirmation-heading'>
                        Job Start Date:
                    </Grid>
                    <Grid> 
                        Graphics Designer
                    </Grid>

                    <Grid item className='confirmation-heading'>
                        Work HOur:
                    </Grid>
                    <Grid> 
                        Graphics Designer
                    </Grid>

                </Grid>
            </Grid> */
}
