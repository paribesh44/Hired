import React from 'react'
import {Grid} from "@mui/material";
import CustomButton from '../../../components/Buttons';
import CardAssesment from './CardAssesment';
import { recommendedfile } from './dummyfiles/recommendedfile';



function RecommendAssesment() {
  return (
    <div>
        <Grid 
            container
            direction="row"
            justifyContent="space-between">
                <Grid item>
                    <Grid container direction="column">
                        <div className='assesmentmain-heading'> Recommended Assesment</div>
                        <div  className='recommended-texts'>
                            Get scores that features you to recruiters.                            
                        </div>
                        <div className='recommended-texts'>
                            Highlight your knowledge  against others in your field.
                        </div>
                        <div className='assesmentstartbutton'>
                            <CustomButton name="Start the Assesment" className="accept-button"/>
                        </div>
                    </Grid>

                   
                </Grid>
                <Grid item>
                    {recommendedfile.map((val,key)=>{return(
                        <div key={key}>
                        <CardAssesment name={val.name} type={val.type}  time={val.time} languages={val.languages} difficulty={val.difficulty} />


                        </div>

                    )})}
                    </Grid>

            </Grid>
      
    </div>
  )
}

export default RecommendAssesment
