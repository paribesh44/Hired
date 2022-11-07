import React from 'react'
import { Grid, IconButton } from "@mui/material";
import Image from '../../../components/Image';
import companydummylogo from "./../../../assets/companydummylogo.jpg"
import CustomButton from '../../../components/Buttons';
import {IoLogoGithub} from 'react-icons/io';
import {IoCall} from 'react-icons/io5';
import {IoMailOpen} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ApplyConfirmation from './ApplyConfirmation';



function ApplyJobSummary() {

  const [applyconfirm, setapplyconfirm]=useState(false)

  function toggleapplyconfirm(){
    setapplyconfirm(!applyconfirm)
  }
  return (
    <div className='applysummary-main'>
        <Grid container direction="row" className='abcd'>
            <Grid item className='imagewrapper'>
                <Image src={companydummylogo} addStyles={"companylogostyle"}/>

            </Grid>

            <Grid item className='introwrapper'>
                <Grid container direction="column" className="introinfo"></Grid>
                <Grid item style={{ fontSize:23, fontWeight:500, }} > Senior Software Developer</Grid>
                <Grid item style={{ fontSize:20, fontWeight:500, }}> ABC Company </Grid>
                <Grid item className='introinfotext'> Lalitpur, Nepal </Grid>

                <Grid item className='introinfotext'> Posted 3 days ago </Grid>

                <Grid item> 
                <Grid container direction="row"   className="accepttab" >
               <Grid item className='accept-button-class'>


                 
               <CustomButton name="Apply Now" addStyles={"accept-button"} onClicked={toggleapplyconfirm} />

               {applyconfirm && <ApplyConfirmation statechanger={setapplyconfirm}/>}
               
                


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
                    <IoLogoGithub className='applyicon'/>

                    
                    </Grid>
                    <Grid item>
                        Full-Time Employer for On-Site Work
                    </Grid>
                    </Grid>

                    

                    <Grid container direction="row" className='applyeachline'>
                    <Grid item>
                    <IoLogoGithub className='applyicon'/>
                    </Grid>
                    <Grid item>
                        10-12 Employees
                    </Grid>
                    </Grid>

                    <Grid container direction="row" className='applyeachline'>
                    <Grid item>
                    <IoCall className='applyicon'/>
                    </Grid>
                    <Grid item>
                        9862532568
                    </Grid>
                    </Grid>

                    <Grid container direction="row" className='applyeachline'>
                    <Grid item>
                    <IoMailOpen className='applyicon'/>
                    </Grid>
                    <Grid item>
                        xyz@gmail.com
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
