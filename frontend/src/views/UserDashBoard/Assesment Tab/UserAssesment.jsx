import React from 'react'
import UserNavbarIn from '../../../components/UserNavbarIn'
import UserSideBar from '../../../components/UserSideBar'
import Assesmentmain from './Assesmentmain'
import {Grid} from "@mui/material";
import ListDoneAssesment from './ListDoneAssesment';
import DashboardLayout from '../../../components/DashhboardLayout';

function UserAssesment() {
  return (
    <div>
      <DashboardLayout>
      <Grid item>
                <div className='userassesment-main'>
                <Assesmentmain/>
                {/* <ListDoneAssesment/> */}
                    

                </div>
                
            </Grid>

      </DashboardLayout>
   
     

            
       
       
        
      
    </div>
  )
}

export default UserAssesment
