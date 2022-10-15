import React from 'react'
import UserNavbarIn from '../../../components/UserNavbarIn'
import UserSideBar from '../../../components/UserSideBar'
import Assesmentmain from './Assesmentmain'
import {Grid} from "@mui/material";
import ListDoneAssesment from './ListDoneAssesment';

function UserAssesment() {
  return (
    <div>
      <UserNavbarIn/>
      <Grid container direction="row">
            <Grid item>
            <UserSideBar/>
            </Grid>

            <Grid item>
                <div className='userassesment-main'>
                {/* <Assesmentmain/> */}
                <ListDoneAssesment/>
                    

                </div>
                
            </Grid>
        </Grid>
       
        
      
    </div>
  )
}

export default UserAssesment
