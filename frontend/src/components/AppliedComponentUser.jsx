import { Grid } from '@mui/material'
import React from 'react'
import CustomButton from './Buttons'
import Image from './Image'
import companydummylogo from "./../assets/companydummylogo.jpg"
import "./AppliedComponentUser.css"
import { IoFastFood } from 'react-icons/io5'


function AppliedComponentUser(props) {

    function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

    const  getStatus=(status)=>{
       
        if (status==="Rejected"){
            return  "rejectedstatus"
        }

        else  if (status==="Reviewed"){
            return "  reviewedstatus"
        }

        else if (status==="Pending"){
            return "pendingstatus"
        }

    }
  return (
    <div className='appliedcomponent'>
    <Grid container direction="row" className='abcd'>
        <Grid item className='imagewrapperapplied'>
            <Image src={companydummylogo} addStyles={"appliedcompimage"}/>

        </Grid>

        <Grid item className='appliedmidtext'>
            <Grid container  direction={"column"}>
                
                <Grid item  className='appliedcompcompany'>  {props.company} </Grid>
                <Grid item  className='appliedcompjob'>  {props.jobname} </Grid>
                <Grid container>
                <Grid item className='appliedtexts'> Location:  </Grid>
                <Grid item> {capitalize(props.location)}</Grid>
                </Grid>

                <Grid container>
                <Grid item className='appliedtexts'> Estimated Salary: </Grid>
                <Grid item> {props.estdsalary}</Grid>
                </Grid>
                <Grid container>
                <Grid item className='appliedtexts'> Applied Date: </Grid>
                <Grid item> {props.applieedate}</Grid>
                </Grid>
                <Grid container>
                <Grid item className='appliedtexts'>   Status: </Grid>
                <Grid item  className={getStatus(props.status)}> {capitalize(props.status)}</Grid>
                </Grid>

              
            </Grid>
          
          

            
        </Grid>

       

      <Grid item className='appliedbutton'>
        <CustomButton name="Delete"  addStyles={"accept-button"}></CustomButton>
        
            


     
        </Grid>
   

    </Grid>

  
</div>
  )
}

export default AppliedComponentUser
