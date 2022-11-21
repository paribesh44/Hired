import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as  Yup from 'yup'
import { Button, ButtonGroup, Checkbox, Grid } from '@mui/material';
import RadioButtonsGroup from '../../components/RadioButton';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import CenteredTabs from '../../components/TabsForm';
import DropDown from '../../components/DropDown';
import { yearPickerClasses } from '@mui/x-date-pickers';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputSlider from '../../components/Slider';
import Jobs from '../../components/Jobs';
import { Link, Navigate } from 'react-router-dom';
import callAPI from "../../utils/callAPI";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

const initialValues = {
    interested_jobs: '',
    locations: '',
    skills: '',
    minimum_salary: '',
    maximum_salary: ''
}

const validationschema = Yup.object({
    interested_jobs: Yup.string().required('Required'),
    locations: Yup.string().required('Required')
})

function Formfour() {
    const [value, setValue] = React.useState(null);
    const [remoteOnsiteRadio, setRemoteOnsiteRadio] = React.useState(null)
    const [jobRadio, setJobRadio] = React.useState(null)
    const [minimumSalary, setMinimumSalary] = React.useState(30)
    const [maximumSalary, setMaximumSalary] = React.useState(30)
    const [showMsg, setShowMsg] = React.useState(false)
    const [changeLocation, setChangeLocation] = React.useState(false)

    const getMinimumSalary = (data) => {
        setMinimumSalary(data)
    }

    const getMaximumSalary = (data) => {
        setMaximumSalary(data)
    }

    const onSubmit = async (values) => {
        console.log('Form data', values)

        let preference = {
            expected_min_salary: minimumSalary*1000,
            expected_max_salary: maximumSalary*1000,
            preferred_location: values.locations,
            interested_jobs: values.interested_jobs,
            preferred_job_skills: values.skills,
            remote_onsite: remoteOnsiteRadio,
            job_type: jobRadio
        }
        console.log(preference)

        if (maximumSalary > minimumSalary) {
            let response_obj = await callAPI({
            endpoint: "/preference/create",
            method: "POST",
            data: preference,
            });

            if(response_obj.data.msg=="success") {
                console.log("success")
                setChangeLocation(true)
            }
        } else {
            setShowMsg(true)
        }
    }


  return (
     <Formik
            initialValues={initialValues}
            validationSchema={validationschema}
            onSubmit={onSubmit}>
            <Form>
            {changeLocation && <Navigate to= '/UserHomeTab'/>}
            <Grid
            container
            justifyContent="center"
          >
            <h1 >Enter your preferences</h1>
          </Grid>

          <Grid
                    container
                    justifyContent="center"
                >
                    <div>
                        <label htmlFor='interested_jobs'>
                           What kind of jobs are you interested in?
                        </label>

                        <Field
                            type='text'
                            id='interested_jobs'
                            name='interested_jobs'
                            placeholder='e.g.Graphic Designer, Fronend, Backend'
                        />

                        <ErrorMessage name='interested_jobs' />
                    </div>
                </Grid>

                <Grid
                    container
                    justifyContent="center"
                >
                    <div>
                        <label htmlFor='locations'>
                           What are your preferred locations?
                        </label>

                        <Field
                            type='text'
                            id='locations'
                            name='locations'
                            placeholder='e.g.Kathmandu, Banepa, Pokhara'
                        />

                        <ErrorMessage name='locations' />
                    </div>
                </Grid>

                <Grid
                    container
                    justifyContent="center"
                >
                    <div>
                        <label htmlFor='skills'>
                        What are your preferred job skills?
                        </label>

                        <Field
                            type='text'
                            id='skills'
                            name='skills'
                            placeholder='e.g. css, fastapi, django'
                        />

                        <ErrorMessage name='skills' />
                    </div>
                </Grid>


          <Grid
            container
            justifyContent="center">
            <div>
                <label htmlFor='salary'>
                    Expected Salary
                </label>
                <Grid
                    container
                    justifyContent="center">
                        <h7>Use slider to select minimum salary (in thousands)</h7>
                        </Grid>
                        <br />
                        <Grid
                    container
                    justifyContent="center">
                        <InputSlider onChange={getMinimumSalary} sliderValue={30} type="minimum" /></Grid>

                <Grid
                    container
                    justifyContent="center">
                        <h7>Use slider to select maximum salary (in thousands)</h7>
                        </Grid>
                        <br />
                        <Grid
                    container
                    justifyContent="center">
                        <InputSlider onChange={getMaximumSalary} sliderValue={30} type="maximum" /></Grid>

                        </div>
                        
                        </Grid>

                <Grid
                    container
                    justifyContent="center">
                    <div>
                        <label htmlFor='interest'>
                            What type of job are you interested in?
                        </label>
                        <Grid
                            container
                            justifyContent="center">
                            <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            row
                            onClick={(e)=> {
                            setJobRadio(e.target.value)
                            }}
                        >
                            <FormControlLabel value="Full-time" control={<Radio />} label="Full-time" />
                            <FormControlLabel value="Part-time" control={<Radio />} label="Part-time" />
                            <FormControlLabel value="Internship" control={<Radio />} label="Internship" />
                        </RadioGroup>
                        </Grid>
                        <ErrorMessage name='interest' />
                    </div>
                </Grid>

                <Grid
                    container
                    justifyContent="center">
                    <div>
                        <label htmlFor='preferences'>
                            What is your prefred job location?
                        </label>
                        <Grid
                        container
                        justifyContent="center"
                        >
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            row
                            onClick={(e)=> {
                            setRemoteOnsiteRadio(e.target.value)
                            }}
                        >
                            <FormControlLabel value="Remote" control={<Radio />} label="Remote" />
                            <FormControlLabel value="Onsite" control={<Radio />} label="Onsite" />
                        </RadioGroup>
                        </Grid>
                    </div>
                </Grid>

               
                <br />
                {showMsg && 
                <Grid justifyContent="center" >
                    <h5 style={{ color: "red", marginBottom: "10px", textAlign: "center" }}>Maximum salary should not be smaller then minimum salary.</h5>
                </Grid>}
                
                <Grid container
                    justifyContent="center">
                    {/* <Link to='/Formfive'> */}
                    <Button type='submit' variant='contained' >Save and Continue</Button>
                    {/* </Link> */}
                </Grid>



                </Form></Formik>
  )
}

export default Formfour
