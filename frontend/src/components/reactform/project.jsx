import { React, useState } from 'react'
import { BottomHalf, FormCard, FormHeader, FormHeader2, FormHolder, FormTitle, FormWrapper, LowerHalf, TextButton, UpperHalf } from './formElements'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useLocation, Link } from 'react-router-dom';

function ProjectForm() {
    const location = useLocation();
    const { cv_info } = location.state;

    console.log(cv_info)

    const [title, settitle] = useState("")
    const [link, setlink] = useState("")
    const [description, setdescription] = useState("")

    const handleTitle = (e) => {
        settitle(e.target.value)
    }
    const handleLink = (e) => {
        setlink(e.target.value)
    }
    const handleDescription = (e) => {
        setdescription(e.target.value)
    }

    cv_info["project_title"] = title
    cv_info["project_link"] = link
    cv_info["project_description"] = description

    function handleClick() {
        console.log(cv_info)
    }
    

    return (
        <FormWrapper>
            
            <FormHeader>Lets Generate your Resume</FormHeader>
            <FormHeader2>Please provide accurate and clear description whenever necessary</FormHeader2>
            <FormCard>
        
                <UpperHalf>
                    <FormHeader2>Porject Info</FormHeader2>
                </UpperHalf>
                <Divider sx={{ marginLeft: '5%', marginRight: '5%' }} />
        
                <LowerHalf>

                    <FormHolder>
                        <FormTitle>Project Title *</FormTitle>
                        <TextField onChange={handleTitle} fullWidth={true} sx={{ width: '34ch',marginRight: '100px',  input: { color: "black", background: "#ebeff5" } }} id="outlined-basic" label="" variant="outlined" />
                    </FormHolder>
                    <FormHolder>
                        <FormTitle>Project Link *</FormTitle>
                        <TextField onChange={handleLink} fullWidth={true} sx={{ width: '34ch' , input: { color: "black", background: "#ebeff5" } }} id="outlined-basic" label="" variant="outlined" />
                    </FormHolder>

                    <FormHolder>
                        <FormTitle>Project Description *</FormTitle>
                        <TextField onChange={handleDescription} sx={{ input: { color: "black", background: "#ebeff5" } }} id="outlined-basic" label="" variant="outlined" />
                    </FormHolder>
                   
                    
                 

                </LowerHalf>
                
                <BottomHalf>
                {/* <TextButton>Add another education</TextButton> */}
                </BottomHalf>
           
                

            </FormCard>
            <Stack spacing={2} direction="row">

            <Link to="/cvMaker/experience" state={{cv_info: cv_info}}>
                <Button onClick={handleClick} style={{ 'backgroundColor': "#495C83", 'marginTop': '2rem', 'borderRadius': "20px", maxWidth: '255px', maxHeight: '4.79rem', minWidth: '10rem', minHeight: '4rem' }} variant="contained">Save And Continue</Button>
            </Link>
            </Stack>
        </FormWrapper>
    )
}

export default ProjectForm