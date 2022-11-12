import React from 'react'
import SkillContainer from '../../../components/SkillContainer'
import "./saved.css"
import { Grid, IconButton } from "@mui/material";


function ApplyJobDetailed({job_post}) {

  function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className='jobapplieddetailed-main'>
      <div className="jobapplieddetailedwhole">
      <div className='jobdetailedheading'>
        About Job
      </div>
      <div className='jobdetaileddesc'>
        {job_post.description}
        </div>

      </div>

      <div className="jobapplieddetailedwhole">
      <div className='jobdetailedheading'>
        About Company
      </div>
      <div className='jobdetaileddesc'>
        {job_post.employer.description}
        </div>

      </div>


      <div className="jobapplieddetailedwhole">
      <div className='jobdetailedheading'>
        Responsibilities
      </div>
      <div className='jobdetaileddesc'>
        {job_post.job_responsibilities.map((val, key) => {return (
                <div key={val}>{"->"} {val}.</div>
              );})}
      </div>

      </div>

      <div className="jobapplieddetailedwhole">
      <div className='jobdetailedheading'>
        Job Benefits
      </div>
      <div className='jobdetaileddesc'>
        {job_post.job_benefits.map((val, key) => {return (
                <div key={val}>{"->"} {val}.</div>
              );})} 
      </div>

      </div>

      <div className="jobapplieddetailedwhole">
      <div className='jobdetailedheading'>
        Preferred Job Skills:
      </div>
      <div className='jobdetailedpoints'>
      <Grid container  direction="row" className="profiletab-desc">
        {job_post.skills.map((val, key) => {return (
                <Grid item key={val}><SkillContainer name={capitalize(val)}/></Grid>
              );})} 
          
      </Grid>
      </div>
      </div>

      <div className="jobapplieddetailedwhole">
      <div className='jobdetailedheading'>
        Minimum Educational Requirement
      </div>
      <div className='jobdetaileddesc'>
        {capitalize(job_post.education_required)} in Computer Science.
      </div>

      </div>


      <div className="jobapplieddetailedwhole">
      <div className='jobdetailedheading'>
        Minimum year of experience
      </div>
      <div className='jobdetaileddesc'>
        {job_post.minimum_years_of_experience}
        </div>

      </div> 

      <div className="jobapplieddetailedwhole">
      <div className='jobdetailedheading'>
        Salary
      </div>
      {/* {job_post.remote_onsite === "remote" ? } */}
      <div className='jobdetaileddesc'>
          {job_post.max_salary} - {job_post.min_salary}
      </div>

      </div>
      

      <div className="jobapplieddetailedwhole">
     
      <Grid container  direction="row" className="profiletab-desc">
          <Grid item className='jobheadingspacing'>
            <Grid container direction="column" >
              <Grid item>
              <div className='jobdetailedheading'> Apply By:</div> 
              </Grid>

              <Grid item >
              <div className='jobdetaileddesc'> {job_post.deadline}</div> 
                </Grid> 

            </Grid>
                </Grid> 

                <Grid item >
            <Grid container direction="column">
              <Grid item>
              <div className='jobdetailedheading'> Job Start Date:</div> 
              </Grid>

              <Grid item >
              <div className='jobdetaileddesc'> {job_post.job_start_date}</div> 
                </Grid> 

            </Grid>
                </Grid> 
                </Grid>            
      </div>


      <div className="jobapplieddetailedwhole">
          <div className='jobdetailedheading'>
            Work Hours:
          </div>
          <div className='jobdetaileddesc'>
              {job_post.work_hours} daily for 5 days per week        
          </div>

      </div>


      <div className="jobapplieddetailedwhole">
          <div className='jobdetailedheading'>
            Apply Procedure:
          </div>
          <div className='jobdetaileddesc'>
              After Submission the company will contact you for further processing.        
          </div>

      </div>


      
    </div>
  )
}

export default ApplyJobDetailed
