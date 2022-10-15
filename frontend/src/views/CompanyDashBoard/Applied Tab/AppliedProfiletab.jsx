import React from 'react';
import { Grid, IconButton } from "@mui/material";
import SkillContainer from '../../../components/SkillContainer';
import "./companyapplied.css";


function AppliedProfiletab() {
  return (
    <div className='applied-profile-tab'>
        <Grid 
            container
            direction="column"
            justifyContent="space-evenly"
            className="applied-profile-grid">
                <Grid item className="profiletab-heading">
                    About:
                    <br/>
                    <div className='profiletab-desc'>
                    Lorem ipsum  met consectetur adipisicing elit. Quisquam, accusantium! Blanditiis aliquam vero, tempore fugiat fuga enim pariatur commodi consequatur est facere incidunt corrupti dolore quae voluptas cum dolorum! Accusamus.

                        </div>
                </Grid>

                <Grid
                 item >
                    <div className="profiletab-heading">Preferred Roles:</div>
                    <Grid container  direction="row" className="profiletab-desc">
                        <Grid item >
                            <SkillContainer name="Role One"/>  
                             </Grid> 
                        <Grid item> <SkillContainer name="Role Two"></SkillContainer></Grid> 
                    </Grid>
                </Grid>

                <Grid
                 item >
                    <div className="profiletab-heading">Preferred Job Skills:</div>
                    <Grid container  direction="row" className="profiletab-desc">
                        <Grid item >
                            <SkillContainer name="Skill One" addStyles={"skillspacing"}/>  
                             </Grid> 
                        <Grid item> <SkillContainer name="Skill Two"></SkillContainer></Grid> 
                    </Grid>
                </Grid>

                <Grid
                 item >
                    <div className="profiletab-heading">Education:</div>
                    <Grid container justifyContent="space-between" direction="row" className="profiletab-desc">
                        <Grid item >
                            Undergraduate from Kathmandu University
                             </Grid> 
                        <Grid item> CGPA:3.4</Grid> 
                        <Grid item> Graduating year:2000/02/05</Grid> 
                    </Grid>

                </Grid>

                <Grid
                 item >
                    <div className="profiletab-heading">Experience:</div>
                    <Grid container justifyContent="space-between" direction="row" className="profiletab-desc">
                        <Grid item >
                            Senior Software Developer at Google
                             </Grid> 
                        <Grid item> End Date:2020/03/05</Grid> 
                    </Grid>

                </Grid>

                <Grid
                item>
                    <div className="profiletab-heading">Expected Salary:</div>
                    <div className="profiletab-desc">Min: Rs 50000 </div>
                    <div className="profiletab-desc">Max: Rs 50000 </div>
                </Grid>

                <Grid
                item>
                    <div className="profiletab-heading">Address:</div>
                    <div className="profiletab-desc">Min: Rs 50000 </div>
                </Grid>

               

                <Grid
                item>
                    <div className="profiletab-heading">Why does the applicant want to apply for this job?</div>
                    <div className='profiletab-desc'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, accusantium! Blanditiis aliquam vero, tempore fugiat fuga enim pariatur commodi consequatur est facere incidunt corrupti dolore quae voluptas cum dolorum! Accusamus.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, accusantium! Blanditiis aliquam vero, tempore fugiat fuga enim pariatur commodi consequatur est facere incidunt corrupti dolore quae voluptas cum dolorum! Accusamus.

                        </div>
                </Grid>

                <Grid
                item>
                    <div className="profiletab-heading">Company Specific Question?</div>
                    <div className='profiletab-desc'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, accusantium! Blanditiis aliquam vero, tempore fugiat fuga enim pariatur commodi consequatur est facere incidunt corrupti dolore quae voluptas cum dolorum! Accusamus.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, accusantium! Blanditiis aliquam vero, tempore fugiat fuga enim pariatur commodi consequatur est facere incidunt corrupti dolore quae voluptas cum dolorum! Accusamus.

                        </div>
                </Grid>

                <Grid
                item>
                    <div className="profiletab-heading">Cover Letter:</div>
                    
                </Grid>


                

        </Grid>

      
    </div>
  )
}

export default AppliedProfiletab
