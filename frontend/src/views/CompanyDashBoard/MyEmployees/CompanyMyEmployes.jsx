import React from 'react'
import CompanyNavbarIn from '../../../components/CompanyNavbarIn'
import { Grid } from "@mui/material";

import MyEmployeeDetailed from './MyEmployeeDetailed'
import EmployeeSidePane from './EmployeeSidePane';


function CompanyMyEmployes() {
  return (

    /* these things come*/
    <div>
        <CompanyNavbarIn/>
        <Grid container direction="row" justifyContent="space-between">
        <Grid item>
        <EmployeeSidePane/>

        </Grid>
        <Grid item>
        <MyEmployeeDetailed/>

        </Grid>

      </Grid>


      


    </div>
  )
}

export default CompanyMyEmployes
