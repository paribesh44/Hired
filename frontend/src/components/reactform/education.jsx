import { React, useState } from 'react'
import { BottomHalf, FormCard, FormHeader, FormHeader2, FormHolder, FormTitle, FormWrapper, LowerHalf, TextButton, UpperHalf } from './formElements'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useLocation, Link } from 'react-router-dom';

function EducationForm() {
    const location = useLocation();
    const { cv_info } = location.state;

    console.log(cv_info)

    const [university, setUniversity] = useState("")
    const [qualification, setQualification] = useState("")
    const [year, setYear] = useState("")
    const [cgpa, setCGPA] = useState("")

    const handleUniversity = (e) => {
        setUniversity(e.target.value)
    }
    const handleQualification = (e) => {
        setQualification(e.target.value)
    }
    const handleYear = (e) => {
        setYear(e.target.value)
    }
    const handleCGPA = (e) => {
        setCGPA(e.target.value)
    }

    cv_info["university"] = university
    cv_info["qualification"] = qualification
    cv_info["year"] = year
    cv_info["cgpa"] = cgpa

    function handleClick() {
        console.log(cv_info)
    }
    

    return (
        <FormWrapper>
            
            <FormHeader>Lets Generate your Resume</FormHeader>
            <FormHeader2>Please provide accurate and clear description whenever necessary</FormHeader2>
            <FormCard>
        
                <UpperHalf>
                    <FormHeader2>Educational Info</FormHeader2>
                </UpperHalf>
                <Divider sx={{ marginLeft: '5%', marginRight: '5%' }} />
        
                <LowerHalf>

                    <FormHolder>
                        <FormTitle>Instution *</FormTitle>
                        <TextField onChange={handleUniversity} fullWidth={true} sx={{ width: '34ch',marginRight: '100px',  input: { color: "black", background: "#ebeff5" } }} id="outlined-basic" label="" variant="outlined" />
                    </FormHolder>
                    <FormHolder>
                        <FormTitle>Degree *</FormTitle>
                        <TextField onChange={handleQualification} fullWidth={true} sx={{ width: '34ch' , input: { color: "black", background: "#ebeff5" } }} id="outlined-basic" label="" variant="outlined" />
                    </FormHolder>

                    <FormHolder>
                        <FormTitle>CGPA *</FormTitle>
                        <TextField onChange={handleCGPA} sx={{ input: { color: "black", background: "#ebeff5" } }} id="outlined-basic" label="" variant="outlined" />
                    </FormHolder>

                    <FormHolder>
                        <FormTitle>Graduating Year *</FormTitle>
                        <TextField onChange={handleYear} sx={{ input: { color: "black", background: "#ebeff5" } }} id="outlined-basic" label="" variant="outlined" />
                    </FormHolder>
                   
                    
                 

                </LowerHalf>
                
                <BottomHalf>
                {/* <TextButton>Add another education</TextButton> */}
                </BottomHalf>
           
                

            </FormCard>
            <Stack spacing={2} direction="row">

            <Link to="/cvMaker/project" state={{cv_info: cv_info}}>
                <Button onClick={handleClick} style={{ 'backgroundColor': "#495C83", 'marginTop': '2rem', 'borderRadius': "20px", maxWidth: '255px', maxHeight: '4.79rem', minWidth: '10rem', minHeight: '4rem' }} variant="contained">Save And Continue</Button>
            </Link>
            </Stack>
        </FormWrapper>
    )
}

export default EducationForm