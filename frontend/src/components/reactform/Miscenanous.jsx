import { React, useState } from 'react'
import { FormCard, FormHeader, FormHeader2, FormHolder, FormTitle, FormWrapper, LowerHalf, UpperHalf } from './formElements'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useLocation, Link, Navigate } from 'react-router-dom';
import callAPI from "../../utils/callAPI";

function MiscenanousForm() {
    const location = useLocation();
    const { cv_info } = location.state;

    const [hobbies, sethobbies] = useState("")
    const [languages, setlanguages] = useState("")
    const [activity, setactivity] = useState("")
    const [changeLocation, setChangeLocation] = useState(false)

    const handlehobbies = (e) => {
        sethobbies(e.target.value)
    }
    const handlelanguages = (e) => {
        setlanguages(e.target.value)
    }
    const handleactivity = (e) => {
        setactivity(e.target.value)
    }

    cv_info["hobbies"] = hobbies
    cv_info["languages"] = languages
    cv_info["activity"] = activity

    async function downloadCV() {
        console.log(cv_info)
        let response_obj = await callAPI({
        endpoint: "/cvmaker/create",
        method: "POST",
        data: cv_info,
        });
        console.log(response_obj)

        if(response_obj.data.msg == "success") {
            setChangeLocation(true)
        }
    }

    return (

        <FormWrapper>
            {changeLocation && <Navigate to="/cvMaker/formComplete"/>}
            <FormHeader>Lets Generate your Resume</FormHeader>
            <FormHeader2>Please provide accurate and clear description whenever necessary</FormHeader2>
            <FormCard>
                <UpperHalf>
                    <FormHeader2>Miscenanous</FormHeader2>
                </UpperHalf>
                <Divider sx={{ marginLeft: '5%', marginRight: '5%' }} />
                <LowerHalf>
                    
                        <FormHolder>
                        <FormTitle>Hobbies</FormTitle>
                        <TextField onChange={handlehobbies} sx={{input: {color: "black",background: "#ebeff5"}}} style={{marginRight:'100px', width:'500px'}}  id="outlined-basic" label="" variant="outlined" />
                        </FormHolder>
                        
                        <FormHolder>
                        <FormTitle>Languages</FormTitle>
                        <TextField onChange={handlelanguages}  sx={{input: {color: "black",background: "#ebeff5"}}} style={{marginRight:'100px', width:'500px'}}  id="outlined-basic" label="" variant="outlined" />
                        </FormHolder>
                        
                        <FormHolder>
                        <FormTitle>Activity/Achievement</FormTitle>
                        <TextField onChange={handleactivity} sx={{input: {color: "black",background: "#ebeff5"}}} style={{ width:'500px'}}  id="outlined-basic" variant="outlined" />
                        </FormHolder>
                    

                    
                </LowerHalf>
                
            </FormCard>
            <Stack spacing={2} direction="row">
      <Button onClick={downloadCV} style={{'backgroundColor':"#495C83", 'marginTop':'2rem', 'borderRadius' :"20px", maxWidth: '255px', maxHeight: '4.79rem', minWidth: '10rem', minHeight: '4rem'}} variant="contained">Download CV</Button>
    </Stack>
        </FormWrapper>
    )
}

export default MiscenanousForm