import { Grid } from '@mui/material'
import React from 'react'
import ContainerBox from '../../../components/ContainerBox'
import UserNavbarIn from '../../../components/UserNavbarIn'
import UserSideBar from '../../../components/UserSideBar'

function ListDoneAssesment() {
  return (
    <div>

      <UserNavbarIn/>
      <Grid container direction="row">
            <Grid item>
            <UserSideBar/>
            </Grid>

            <Grid item className='assesmentquestions-main'>
            <div className='assesmentmain-heading'>
            My Assesments
        </div>
        <div className='assesmentmain-subheading'>
            List of all the assesments that you have attempted.
        </div>
        
        <ContainerBox/>


            </Grid>
           

           
            
        </Grid>
        

      
    </div>

    
  )
}

export default ListDoneAssesment
