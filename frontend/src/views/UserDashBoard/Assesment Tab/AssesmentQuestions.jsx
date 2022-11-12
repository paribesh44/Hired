import { Grid } from '@mui/material'
import React, {useState} from 'react'
import DashboardLayout from '../../../components/DashhboardLayout'
import UserNavbarIn from '../../../components/UserNavbarIn'
import UserSideBar from '../../../components/UserSideBar'
import MCQQuestionCard from './MCQQuestionCard'
import "./userassesment.css"
import QuestionCard from './ViewQuestionsCard'
import { useLocation } from 'react-router-dom';
import CustomButton from "../../../components/Buttons";



function AssesmentQuestions() {
  const [startclicked, setstartclicked] = useState(true);
  function handleclick() {
    setstartclicked(!startclicked);
  }

    const location = useLocation()
    const{target_field_id}=location.state
    const{target_field_name}=location.state
    // const{address}=location.state
  return (
    <div>
      <DashboardLayout>

           
            {startclicked && (
          <Grid container direction={"column"}>
            <Grid item className="assesmentstart-heading">
              Assesment
            </Grid>
            <Grid item>
              <Grid container direction="row">
                <Grid item className="startasseshead">
                  Java Script
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row">
                <Grid item className="startabout">
                  This assesment targets this this this and taking this will
                  help in this this this
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row" className="startspacing">
                <Grid item className="startfield">
                  {" "}
                  Languages:
                </Grid>
                <Grid item className="starttext">
                  Java Script, react
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row" className="startspacing">
                <Grid item className="startfield">
                  {" "}
                  Type of Assesment:
                </Grid>
                <Grid item className="starttext">
                  MCQ
                </Grid>
              </Grid>
            </Grid>{" "}
            <Grid item>
              <Grid container direction="row" className="startspacing">
                <Grid item className="startfield">
                  {" "}
                  Time:
                </Grid>
                <Grid item className="starttext">
                  Java Script
                </Grid>
              </Grid>
            </Grid>{" "}
            <Grid item>
              <Grid container direction="row" className="startspacing">
                <Grid item className="startfield">
                  {" "}
                  Marks:
                </Grid>
                <Grid item className="starttext">
                  Java Script
                </Grid>
              </Grid>
            </Grid>{" "}
            <br />
            <br />
            <Grid item>
              <CustomButton
                name="Start the Assesment"
                onClicked={handleclick}
                addStyles="accept-button"
              ></CustomButton>
            </Grid>
          </Grid>
        )}
        {!startclicked && (
          <Grid item className="assesmentquestions-main">
            <div className="assesmentmain-heading">Assesment</div>
            <Grid container direction="row" justifyContent="space-between">
              <Grid item>
                <div className="assesmentquestions-heading">
                  Name of the Assesment
                </div>
              </Grid>
              <Grid item className="asses-subheading">
                <div> Type: MCQ</div>
                <div>Time:sss</div>
              </Grid>
            </Grid>
            <MCQQuestionCard target_field_id={target_field_id} target_field_name={target_field_name} />
          </Grid>
        )}
      
      </DashboardLayout>


      


    </div>
  )
}

export default AssesmentQuestions
