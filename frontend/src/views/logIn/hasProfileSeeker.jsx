import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { useLocation, Navigate } from "react-router-dom";
import callAPI from "../../utils/callAPI";

function SeekerhasProfile() {

    const [hasProfile, setHasProfile] = useState(null)

    const message = async () => {
    let response_obj = await callAPI({
        endpoint: "/seeker/current_user_has_profile",
    });

        if (response_obj.data.msg == "has profile") {
            setHasProfile(true)
        } else {
            setHasProfile(false)
        }
    };

    useEffect(() => {
        message();
    }, []);

    if (hasProfile != null) {

    return (
    
        <Grid>
            <Navigate to= { hasProfile==true ? "/UserHomeTab" : "/forms" }/>
        </Grid>
    )
    }
}
export default SeekerhasProfile;