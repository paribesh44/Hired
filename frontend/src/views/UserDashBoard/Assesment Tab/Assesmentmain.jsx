import { Grid } from '@mui/material'
import React from 'react'
import { assesmentsfile } from './dummyfiles/assesmentsfile'
import CardAssesment from './CardAssesment'
import RecommendAssesment from './RecommendAssesment'
import "./userassesment.css"
import CustomButton from '../../../components/Buttons'
import { Link } from 'react-router-dom'

function Assesmentmain() {
  return (
    <div className='assesmentmain-main'>
        <div className='assesmentmain-heading'>
            Assesments
        </div>
        <div className="assesmentmain-subheading">
        List of relatable assesments that might help you in interview prep and submit marks to companies.
        </div>
        <Link to="/ListDoneAssesment">

          <CustomButton name="View My Assesments" addStyles={"reject-button"}>
            
          
          </CustomButton>
          </Link>
      
        <div className='assesment-recommendbox'>
            <RecommendAssesment/>
        </div>

        <div className='assesment-available'>
          
        <Grid container direction="row" >
        {assesmentsfile.map((val,key)=>{
            return(
              <Grid item className='eachbox' key={key}>
              <CardAssesment name={val.name} type={val.type} time={val.time} languages={val.languages} difficulty={val.difficulty}/>
              </Grid>            
             
            )
          })}
              </Grid>       

        </div>



      
    </div>
  )
}

export default Assesmentmain
