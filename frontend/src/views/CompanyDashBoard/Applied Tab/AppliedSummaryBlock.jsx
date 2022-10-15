import React, { useState } from 'react';
import companydummylogo from "../../../assets/companydummylogo.jpg";
import CustomButton from '../../../components/Buttons';
import {IoLogoLinkedin} from 'react-icons/io';
import { Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import demo from "../../../assets/demoprofileimage.jpg"
import Image from '../../../components/Image';
import "./companyapplied.css";



import {IoLogoGithub} from 'react-icons/io';

import {IoIosGlobe} from 'react-icons/io';
import AppliedProfiletab from './AppliedProfiletab.jsx';
import PopUp from '../../../components/PopUp';
import AppliedPopupMsg from './AppliedPopupMsg';

export default function AppliedSummaryBlock(props) {

  const [ButtonPopUp, setButtonPopUp]=useState(false)
  return (
    <div className='info-box'>

        <Grid /*top row ko grid*/
        container
        direction="row"
        // alignItems="center"
        
        className="applied-toprow">
          <Grid /*image item grid*/
            item className='imagewrapper'>
            
            <Image  addStyles={"profile-image"} src={demo} />
          
          </Grid>

          <Grid /*second colum ko grid*/
          item className='introwrapper'>
            <Grid 
              container
              direction="column"
              className="appliedinfo">
              <Grid item style={{ fontSize:25, fontWeight:500, }} > {props.name}</Grid>
              <Grid item className='appliedinfotext'> {props.post} </Grid>
              <Grid item className='appliedinfotext'> Applied Date: {props.applieddate}</Grid>

            {props.type &&
             <Grid item> 
             <Grid container direction="row"   className="accepttab" >
               <Grid item className='accept-button-class'>

               <PopUp trigger={ButtonPopUp} setTrigger={setButtonPopUp}>

                <AppliedPopupMsg name="Jane Doe" post="Senior Graphics Designer" setTrigger={setButtonPopUp}/>
                </PopUp>
                 
               <CustomButton name="Accept" addStyles={"accept-button"} onClicked={()=> setButtonPopUp(true)} >
               
                </CustomButton>

               </Grid>
               <Grid item>
               <CustomButton name="Reject" addStyles={"reject-button"}/>

               </Grid>
             </Grid>
           </Grid> 
            }

            {!props.type && <div className='appliedinfotext'> Hired Date:{props.hireddate} </div>}
              
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
                {props.type 
                &&           
                <Grid item  className='appliedinfotext'> Availability: {props.availability}</Grid>

                
 }

          {!props.type && <div> Working Days: 1000 </div>}
              <Grid item className='appliedinfotext'> Experience: {props.experience}</Grid>
              <Grid item className='appliedinfotext'> Age: {props.age}</Grid>

              <Grid item className='appliedinfotext'> Contact Number: {props.contact}</Grid>

              <Grid item> 
                <Grid container direction="row"  className="icontab" >
                  <Grid item className='icons-class'>
                    <IconButton aria-label='linkedin' >
                      <IoLogoLinkedin className='appliedicons'/>
                    </IconButton>

                  </Grid>
                  <Grid item>
                    <IconButton aria-label='github'>
                    <IoLogoGithub className='appliedicons'/>

                    </IconButton>

                    <IconButton aria-label='github'>
                    <IoIosGlobe className='appliedicons'/>

                    </IconButton>      
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
  )
}
