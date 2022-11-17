import React, { useState } from 'react';
import companydummylogo from "../../../assets/companydummylogo.jpg";
import CustomButton from '../../../components/Buttons';
import {IoLogoLinkedin} from 'react-icons/io';
import { Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import demo from "../../../assets/demoprofileimage.jpg"
import Image from '../../../components/Image';
import "./companyapplied.css";
import "./Modals.css"
import callAPI from "../../../utils/callAPI";


import {IoLogoGithub} from 'react-icons/io';

import {IoIosGlobe} from 'react-icons/io';
import AppliedProfiletab from './AppliedProfiletab.jsx';
import PopUp from '../../../components/PopUp';
import AppliedPopupMsg from './AppliedPopupMsg';
import RejectPopup from './RejectPopup';

export default function AppliedSummaryBlock(props) {
  console.log("bhjasdfbdfajsk")
  console.log(props.status)
  const [changeStatusState, setChangeStatusState] = useState(props.status)

  const [acceptModal, setacceptModal]=useState(false);
  const [rejectModal, setrejectModal]=useState(false);

  const togglerejectModal=()=>{
    setrejectModal(!rejectModal)
  }

  const toggleacceptModal=()=>{
    setacceptModal(!acceptModal)
  }

  async function changeStatus(e) {
    console.log(e.target.value)

    let response_obj = await callAPI({
            endpoint: `/apply/update_status/${props.job_post_id}/${props.seeker_id}`,
            method: "PUT",
            data: {status: e.target.value},
            });
  
    if (response_obj.data.msg == "success") {
      console.log(response_obj.data)
      setChangeStatusState(e.target.value)
    }
  }
  
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
          //    <Grid item> 
          //    <Grid container direction="row"   className="accepttab" >
          //      <Grid item className='accept-button-class'>
                 
          //      <CustomButton name="Accept" addStyles={"accept-button"} onClicked={toggleacceptModal} />
          //      {acceptModal && <AppliedPopupMsg statechanger={setacceptModal} name="aaaa" post="dddd"/>}

          //      </Grid>
               
          //      <Grid item >
              

          //      <CustomButton name="Reject" addStyles={"reject-button"} onClicked={ togglerejectModal}/>
          //      {rejectModal && <RejectPopup statechanger={setrejectModal} name="Jane Doe" post="Senior Graphics Designer"/>}
          //      </Grid>
          //    </Grid>
          //  </Grid> 
          <Grid item>
            <Grid container direction="row" className="accepttab" >
              {changeStatusState != null &&
              <select
                components={{ DropdownIndicator: () => null }}
                className="status-button-companies"
                onClick={changeStatus}
                defaultValue={changeStatusState}
              >
                <option value="shortlisted"> Shortlisted</option>
                <option value="interview"> Interview</option>
                <option value="interviewed"> Interviewed</option>
                <option value="selected"> Selected</option>
                <option value="rejected"> Rejected</option>
              </select> 
            }
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
                  <Grid item >
                    
                    
                      <IoLogoLinkedin className='appliedicons'/>  
                      <IoLogoGithub className='appliedicons'/>
                      <IoIosGlobe className='appliedicons'/>
     
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
  )
}
