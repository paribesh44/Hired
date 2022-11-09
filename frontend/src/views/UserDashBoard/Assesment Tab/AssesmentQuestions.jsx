import { Grid } from '@mui/material'
import React from 'react'
import DashboardLayout from '../../../components/DashhboardLayout'
import UserNavbarIn from '../../../components/UserNavbarIn'
import UserSideBar from '../../../components/UserSideBar'
import MCQQuestionCard from './MCQQuestionCard'
import "./userassesment.css"
import QuestionCard from './ViewQuestionsCard'
import { useLocation } from 'react-router-dom';



function AssesmentQuestions() {
    const location = useLocation()
    const{target_field_id}=location.state
    // const{address}=location.state
  return (
    <div>
      <DashboardLayout>

           
            <Grid item className='assesmentquestions-main'>
                <div className='assesmentmain-heading'>
                Assesment
                </div>
                <Grid container direction="row" justifyContent="space-between">
                    <Grid item>
                    <div className='assesmentquestions-heading'> Name of the Assesment</div>
                    </Grid>
                    <Grid item className='asses-subheading'>
                        <div> Type: MCQ</div>
                        <div>TIme:20 mins</div>
                    </Grid>
                </Grid>
                <MCQQuestionCard target_field_id={target_field_id}/>
            </Grid>
      
      </DashboardLayout>
      


    </div>
  )
}

export default AssesmentQuestions
