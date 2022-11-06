import React from 'react'
import Image from '../../components/Image'
import "./ConfirmProfile.css"
import tick from "../../assets/tick.png";
import { Grid } from "@mui/material";
import CustomButton from '../../components/Buttons';
import { Link } from "react-router-dom";


function ConfirmProfile() {
    
  return (
    
    <div className='confirmation-root '>
        <div className='confirm-text'>
            Profile Setup Complete!
        </div>
        <div className='textbox'>          
            <Image src={tick} className="image"/>
            <div className='texts'>
            You have finished setting up your profile.
            <br/>
            You can always add on or edit profile from settings.
            </div>  
        </div>
        <Grid item style={{ margin: " 100px 850px 10px 850px" }}>
              <Link
                to=""
                style={{ textDecoration: "none", color: "#495c83" }}
              >
                <CustomButton name="Continue" addStyles={"continue_button"}/>
              </Link>
            </Grid>
       


    </div>
  )
}

export default ConfirmProfile
