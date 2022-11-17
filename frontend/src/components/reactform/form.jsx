import React, { useState } from 'react'
import { FormCard, FormHeader, FormHeader2, FormHolder, FormTitle, FormWrapper, LowerHalf, UpperHalf } from './formElements'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link, Navigate } from 'react-router-dom';
import { Grid } from "@mui/material";



function CVForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [dob, setDOB] = useState("")
    const [address, setAddress] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [github, setGithub] = useState("")
    const [website, setWebsite] = useState("")
    const [skills, setSkills] = useState("")

    const [fillAllFields, setFillAllFields] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleMobile = (e) => {
        setMobile(e.target.value)
    }
    const handleDOB = (e) => {
        setDOB(e.target.value)
    }
    const handleAddress = (e) => {
        setAddress(e.target.value)
    }
    const handleLinkedin = (e) => {
        setLinkedin(e.target.value)
    }
    const handleGithub = (e) => {
        setGithub(e.target.value)
    }
    const handleSkills = (e) => {
        setSkills(e.target.value)
    }
    const handleWebsite = (e) => {
        setWebsite(e.target.value)
    }

    var cv_info = {
        name: name,
        email: email,
        mobile: mobile,
        dob: dob,
        skills: skills,
        address: address,
        linkedin: linkedin,
        github: github,
        website: website
    }

    function checkAllTheFields() {
        console.log("hello")
        if (email != null && name != null && mobile != null && address != null) {
            setFillAllFields(false)
        } else {
            setFillAllFields(true)
        }
    }
    

    return (
        <FormWrapper>
            <FormHeader>Lets Generate your Resume</FormHeader>
            <FormHeader2>Please provide accurate and clear description whenever necessary</FormHeader2>
            <FormCard>
                <UpperHalf>
                    <FormHeader2>Personal Info</FormHeader2>
                </UpperHalf>
                <Divider sx={{ marginLeft: '5%', marginRight: '5%' }} />
                <LowerHalf>
                    
                        <FormHolder>
                        <FormTitle>Full Name *</FormTitle>
                        <TextField sx={{input: {color: "black",background: "#ebeff5"}}} id="outlined-basic" label="" variant="outlined" onChange={handleName} />
                        </FormHolder>
                        <FormHolder>
                        <FormTitle>Email *</FormTitle>
                        <TextField sx={{input: {color: "black",background: "#ebeff5"}}}   id="outlined-basic" label="" variant="outlined" onChange={handleEmail} />
                        </FormHolder>
                        <FormHolder>
                        <FormTitle>Contact Number *</FormTitle>
                        <TextField sx={{input: {color: "black",background: "#ebeff5"}}} id="outlined-basic" label="" variant="outlined" onChange={handleMobile} />
                        </FormHolder>
                        <FormHolder>
                        <FormTitle>Date of Birth</FormTitle>
                        <TextField  sx={{input: {color: "black",background: "#ebeff5"}}}  id="outlined-basic" label="" variant="outlined" onChange={handleDOB} />
                        </FormHolder>
                        <FormHolder>
                        <FormTitle>Current Address *</FormTitle>
                        <TextField  sx={{input: {color: "black",background: "#ebeff5"}}}  id="outlined-basic" label="" variant="outlined" onChange={handleAddress} />
                        </FormHolder>
                        <FormHolder>
                        <FormTitle>Linkedin Profile</FormTitle>
                        <TextField  sx={{input: {color: "black",background: "#ebeff5"}}}  id="outlined-basic" label="https://linkedin.com/abc" variant="outlined" onChange={handleLinkedin} />
                        </FormHolder>
                        <FormHolder>
                        <FormTitle>Github Profile</FormTitle>
                        <TextField sx={{input: {color: "black",background: "#ebeff5"}}} id="outlined-basic" label="https://github.com/abc" variant="outlined" onChange={handleGithub} />
                        </FormHolder>
                        <FormHolder>
                        <FormTitle>Skills *</FormTitle>
                        <TextField sx={{input: {color: "black",background: "#ebeff5"}}} id="outlined-basic" variant="outlined" onChange={handleSkills} />
                        </FormHolder>

                        <FormHolder>
                            {/* add skills */}
                        <FormTitle>Website(if any)</FormTitle>
                        <TextField sx={{input: {color: "black",background: "#ebeff5"}}} id="outlined-basic" label="https://websitename.com" variant="outlined" onChange={handleWebsite} />
                        </FormHolder>    
                </LowerHalf>
                
            </FormCard>
            <Stack spacing={2} direction="row">
    
    { fillAllFields ? 
    <Grid>
        <h5 style={{ color: "red" }}>Fill all the fields</h5>
    </Grid>
     : "" }
    {/* <Navigate to="/cvMaker/education" state={{cv_info: cv_info}} / > } */}
    
    <Link to="/cvMaker/education" state={{cv_info: cv_info}}>
    <Button onClick={checkAllTheFields} style={{'backgroundColor':"#495C83", 'marginTop':'2rem', 'borderRadius' :"20px", maxWidth: '255px', maxHeight: '4.79rem', minWidth: '10rem', minHeight: '4rem'}} variant="contained">Save And Continue</Button>
    </Link>

    </Stack>
        </FormWrapper>
    )
}

export default CVForm