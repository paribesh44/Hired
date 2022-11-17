import { React, useState } from 'react'
import { BottomHalf, FormCard, FormHeader, FormHeader2, FormHolder, FormTitle, FormWrapper, LowerHalf, TextButton, UpperHalf } from './formElements'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useLocation, Link } from 'react-router-dom';

function ExperienceForm() {
    const location = useLocation();
    const { cv_info } = location.state;

    const [organization, setOrganization] = useState("")
    const [position, setPosition] = useState("")
    const [duration, setDuration] = useState("")
    const [description, setDescription] = useState("")

    const handleOrganization = (e) => {
        setOrganization(e.target.value)
    }
    const handlePosition = (e) => {
        setPosition(e.target.value)
    }
    const handleDuration = (e) => {
        setDuration(e.target.value)
    }
    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    cv_info["organization"] = organization
    cv_info["position"] = position
    cv_info["duration"] = duration
    cv_info["experience_description"] = description

    function handleClick() {
        console.log(cv_info)
    }

    return (
        <FormWrapper>
            
            <FormHeader>Lets Generate your Resume</FormHeader>
            <FormHeader2>Please provide accurate and clear description whenever necessary</FormHeader2>
            <FormCard>
        
                <UpperHalf>
                    <FormHeader2>Experience</FormHeader2>
                </UpperHalf>
                <Divider sx={{ marginLeft: '5%', marginRight: '5%' }} />
        
                <LowerHalf>

                    <FormHolder>
                        <FormTitle>Organization *</FormTitle>
                        <TextField onChange={handleOrganization} sx={{ input: { color: "black", background: "#ebeff5" } }} id="outlined-basic" label="" variant="outlined" />
                    </FormHolder>
                    <FormHolder>
                        <FormTitle>Position *</FormTitle>
                        <TextField onChange={handlePosition} sx={{ input: { color: "black", background: "#ebeff5" } }} id="outlined-basic" label="" variant="outlined" />
                    </FormHolder>
                    <FormHolder>
                        <FormTitle>Duration *</FormTitle>
                        <TextField onChange={handleDuration} sx={{ input: { color: "black", background: "#ebeff5" } }} id="outlined-basic" label="" variant="outlined" />
                    </FormHolder>
                    <FormHolder>
                        <FormTitle>Description</FormTitle>
                        <TextField onChange={handleDescription} fullWidth={true} sx={{ width: '100ch',  input: { color: "black", background: "#ebeff5" } }} id="outlined-basic" label="" variant="outlined" />
                       
                    </FormHolder>
                 

                </LowerHalf>
                <BottomHalf>
                {/* <TextButton>Add another experience</TextButton> */}
                </BottomHalf>
           
                

            </FormCard>
            <Stack spacing={2} direction="row">

            <Link to="/cvMaker/miscenanous" state={{cv_info: cv_info}}>
                <Button onClick={handleClick} style={{ 'backgroundColor': "#495C83", 'marginTop': '2rem', 'borderRadius': "20px", maxWidth: '255px', maxHeight: '4.79rem', minWidth: '10rem', minHeight: '4rem' }} variant="contained">Save And Continue</Button>
            </Link>
            </Stack>
        </FormWrapper>
    )
}

export default ExperienceForm