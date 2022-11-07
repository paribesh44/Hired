import React from 'react'
import CompanyNavbarIn from '../../../components/CompanyNavbarIn'
import DetailedCompanyApplied from './DetailedCompanyApply';
import "./companyapplied.css";
import AppliedSidePane from './AppliedSidePane';
import { Grid } from "@mui/material";
import DummyFile from './dummyFile';



function CompanyApplied() {
  return (
    <div>
      <CompanyNavbarIn/>
      {/* <DummyFile/> */}
      <Grid container direction="row" justifyContent="space-between">
        <Grid item>
        <AppliedSidePane/>


        </Grid>
        <Grid item>
        <DetailedCompanyApplied/>

        </Grid>

      </Grid>

     

      
    </div>
  )
}

export default CompanyApplied
