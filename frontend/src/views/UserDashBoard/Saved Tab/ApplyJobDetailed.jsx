import React from 'react'
import SkillContainer from '../../../components/SkillContainer'
import "./saved.css"
import { Grid, IconButton } from "@mui/material";


function ApplyJobDetailed() {
  return (
    <div className='jobapplieddetailed-main'>
      <div className="jobapplieddetailedwhole">
      <div className='jobdetailedheading'>
        About Company
      </div>
      <div className='jobdetaileddesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repudiandae amet temporibus repellendus nisi itaque ad. Accusamus voluptate nisi explicabo nostrum asperiores nemo, nam consequatur libero consequuntur sunt temporibus voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, consequatur! Consectetur veniam quae qui labore sapiente vitae reprehenderit laboriosam consequatur fugiat necessitatibus officiis odio, aperiam voluptatibus id eveniet sequi error!
      </div>

      </div>


      <div className="jobapplieddetailedwhole">
      <div className='jobdetailedheading'>
        Responsibilities
      </div>
      <div className='jobdetaileddesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repudiandae amet temporibus repellendus nisi itaque ad. Accusamus voluptate nisi explicabo nostrum asperiores nemo, nam consequatur libero consequuntur sunt temporibus voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, consequatur! Consectetur veniam quae qui labore sapiente vitae reprehenderit laboriosam consequatur fugiat necessitatibus officiis odio, aperiam voluptatibus id eveniet sequi error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, obcaecati quidem mollitia iusto nam qui voluptatibus culpa exercitationem repellat saepe iure dolorem quia inventore incidunt atque possimus ipsam optio ea?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, repellat! Impedit amet vitae sit esse ipsam, perferendis earum necessitatibus voluptatem maiores repudiandae expedita. Hic deserunt, est provident ipsam maiores laboriosam?

      </div>

      </div>

      <div className="jobapplieddetailedwhole">
      <div className='jobdetailedheading'>
        Job Benefits
      </div>
      <div className='jobdetaileddesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repudiandae amet temporibus repellendus nisi itaque ad. Accusamus voluptate nisi explicabo nostrum asperiores nemo, nam consequatur libero consequuntur sunt temporibus voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, consequatur! Consectetur veniam quae qui labore sapiente vitae reprehenderit laboriosam consequatur fugiat necessitatibus officiis odio, aperiam voluptatibus id eveniet sequi error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, obcaecati quidem mollitia iusto nam qui voluptatibus culpa exercitationem repellat saepe iure dolorem quia inventore incidunt atque possimus ipsam optio ea?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, repellat! Impedit amet vitae sit esse ipsam, perferendis earum necessitatibus voluptatem maiores repudiandae expedita. Hic deserunt, est provident ipsam maiores laboriosam?
        
      </div>

      </div>

      <div className="jobapplieddetailedwhole">
      <div className='jobdetailedheading'>
        Preferred Job Skills:
      </div>
      <div className='jobdetailedpoints'>
      <Grid container  direction="row" className="profiletab-desc">
                        <Grid item >
                            <SkillContainer name="Role One"/>  
                             </Grid> 
                        <Grid item> <SkillContainer name="Role Two"></SkillContainer></Grid> 
                    </Grid>        
      </div>
      </div>

      <div className="jobapplieddetailedwhole">
      <div className='jobdetailedheading'>
        Minimum Educational Requirement
      </div>
      <div className='jobdetaileddesc'>
        Undergraduate in thisthisthis
      </div>

      </div>


      <div className="jobapplieddetailedwhole">
      <div className='jobdetailedheading'>
        Minimum Experience
      </div>
      <div className='jobdetaileddesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repudiandae amet temporibus repellendus nisi itaque ad. Accusamus voluptate nisi explicabo nostrum asperiores nemo, nam consequatur libero consequuntur sunt temporibus voluptatum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, consequatur! Consectetur veniam quae qui labore sapiente vitae reprehenderit laboriosam consequatur fugiat necessitatibus officiis odio, aperiam voluptatibus id eveniet sequi error!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, obcaecati quidem mollitia iusto nam qui voluptatibus culpa exercitationem repellat saepe iure dolorem quia inventore incidunt atque possimus ipsam optio ea?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, repellat! Impedit amet vitae sit esse ipsam, perferendis earum necessitatibus voluptatem maiores repudiandae expedita. Hic deserunt, est provident ipsam maiores laboriosam?
        
      </div>

      </div> 

      <div className="jobapplieddetailedwhole">
      <div className='jobdetailedheading'>
        Salary
      </div>
      <div className='jobdetaileddesc'>
          Negotiable        
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
              <div className='jobdetaileddesc'> 0202020202:</div> 
                </Grid> 

            </Grid>
                </Grid> 

                <Grid item >
            <Grid container direction="column">
              <Grid item>
              <div className='jobdetailedheading'> Earliest Job Start Date:</div> 
              </Grid>

              <Grid item >
              <div className='jobdetaileddesc'> 0202020202:</div> 
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
              10-5 daily for 5 days per week        
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
