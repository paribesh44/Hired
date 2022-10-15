import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import CustomButton from './Buttons'
import "./ContainerBox.css"
import SkillContainer from './SkillContainer'


function ContainerBox() {
  return (
    <div className='containerboxmain'>
        <Grid container direction="row" justifyContent="space-between">
            <Grid item >
         <div className='containerhead'>
         Name of the Assesment


         </div>
         
            <Grid item>

            <Grid container direction="row">
                <Grid item className='containersub'>
             
                Assesed Date: 
           
                </Grid>
                <Grid item>
                    878789009
                </Grid>

            </Grid>

            <Grid container direction="row">
                <Grid item className='containersub'>
             
                Marks Obtained: 
           
                </Grid>
                <Grid item>
                    18/20
                </Grid>

            </Grid>

            <Grid container direction="row">
                <Grid item className='containersub'>
             
                Display Status: 
           
                </Grid>
                <Grid item>
                    <SkillContainer name="Hidden"/>
                </Grid>

            </Grid>

            </Grid>

            
           

            </Grid>

            <Grid item>
                <Link to="/Assesment/ViewAssesment">
                
                <CustomButton addStyles={"accept-button"} name="View Assesment"></CustomButton>
                </Link>
            </Grid>
        </Grid>
       
      
    </div>
  )
}

export default ContainerBox
