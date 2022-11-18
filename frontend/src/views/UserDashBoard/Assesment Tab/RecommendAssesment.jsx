import React from "react";
import { Grid } from "@mui/material";
import CustomButton from "../../../components/Buttons";
import CardAssesment from "./CardAssesment";
import { recommendedfile } from "./dummyfiles/recommendedfile";

function RecommendAssesment(props) {
  return (
    <div>
      <Grid container direction="row" justifyContent="space-between">
        <Grid item>
          <Grid container direction="column">
            <div className="assesmentmain-heading"> Recommended Assesment</div>
            <div className="recommended-texts">
              Get scores that features you to recruiters.
            </div>
            <div className="recommended-texts">
              Highlight your knowledge against others in your field.
            </div>
            <div className="assesmentstartbutton">
              <CustomButton
                name="Start the Assesment"
                className="accept-button"
              />
            </div>
          </Grid>
        </Grid>
        <Grid item>
          <div>
            <CardAssesment
              id={props.recommended_target_field.id}
              name={props.recommended_target_field.name}
              type="MCQ"
              time="20 min"
              languages={props.recommended_target_field.languages}
              difficulty={props.recommended_target_field.difficulty}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default RecommendAssesment;
