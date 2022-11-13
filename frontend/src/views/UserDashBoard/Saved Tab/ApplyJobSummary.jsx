import React from 'react'
import { Grid, IconButton } from "@mui/material";
import Image from '../../../components/Image';
import companydummylogo from "./../../../assets/companydummylogo.jpg"
import CustomButton from '../../../components/Buttons';
import {IoLogoGithub, IoIosPerson, IoIosPersonAdd } from 'react-icons/io';
import {IoCall} from 'react-icons/io5';
import {IoMailOpen} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ApplyConfirmation from './ApplyConfirmation';



function ApplyJobSummary(props) {

  const [applyconfirm, setapplyconfirm]=useState(false)

  function toggleapplyconfirm(){
    setapplyconfirm(!applyconfirm)
  };

  function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className='applysummary-main'>
        <Grid container direction="row" className='abcd'>
            <Grid item className='imagewrapper'>
                <Image src={companydummylogo} addStyles={"companylogostyle"}/>

            </Grid>

            <Grid item className='introwrapper'>
                <Grid container direction="column" className="introinfo"></Grid>
                <Grid item style={{ fontSize:23, fontWeight:500, }} > {props.job_post.job}</Grid>
                <Grid item style={{ fontSize:20, fontWeight:500, }}> {props.job_post.employer.companyName} </Grid>
                <Grid item className='introinfotext'> {props.job_post.employer.location}, Nepal </Grid>

                <Grid item className='introinfotext'> Posted 3 days ago </Grid>

                <Grid item> 
                <Grid container direction="row"   className="accepttab" >
               <Grid item className='accept-button-class'>


                 
               <CustomButton name="Apply Now" addStyles={"accept-button"} onClicked={toggleapplyconfirm} />

               {applyconfirm && <ApplyConfirmation job_post_id={props.job_post.id} statechanger={setapplyconfirm}/>}
               
                


               </Grid>
               <Grid item>
               <CustomButton name="Not Interested" addStyles={"reject-button"}/>

               </Grid>
             </Grid>
           </Grid> 

                
            </Grid>
            <Grid item >
            <div className='vertical-line'></div>
          </Grid>

          <Grid /*last colum ko grid*/
          item className='introwrapper'>
            <Grid 
              container
              direction="column"
              className="appliedinfo2">
                
                        
                <Grid item  className=''>
                  <Grid container direction="row" className='applyeachline'>
                    <Grid item>
                    <IoIosPersonAdd className='applyicon'/>

                    
                    </Grid>
                    <Grid item>
                        Vacancy: {props.job_post.no_of_vacancy}
                    </Grid>
                    </Grid>

                    <Grid container direction="row" className='applyeachline'>
                    <Grid item>
                    <IoLogoGithub className='applyicon'/>

                    
                    </Grid>
                    <Grid item>
                        {capitalize(props.job_post.job_level)} {capitalize(props.job_post.job_type)} Employer for {props.job_post.remote_onsite} Work
                    </Grid>
                    </Grid>

                    

                    <Grid container direction="row" className='applyeachline'>
                    <Grid item>
                    <IoIosPerson className='applyicon'/>
                    </Grid>
                    <Grid item>
                        {props.job_post.employer.contactPerson}
                    </Grid>
                    </Grid>

                    <Grid container direction="row" className='applyeachline'>
                    <Grid item>
                    <IoCall className='applyicon'/>
                    </Grid>
                    <Grid item>
                        {props.job_post.employer.contactNumber}
                    </Grid>
                    </Grid>

                    <Grid container direction="row" className='applyeachline'>
                    <Grid item>
                    <IoMailOpen className='applyicon'/>
                    </Grid>
                    <Grid item>
                        {props.job_post.employer.contactEmail}
                    </Grid>
                    </Grid>
                   

                    
                </Grid>
                


         
            </Grid>
          </Grid>

        </Grid>

      
    </div>
  )
}

export default ApplyJobSummary
