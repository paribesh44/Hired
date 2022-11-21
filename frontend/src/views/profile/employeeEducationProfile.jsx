import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as  Yup from 'yup'
import { Button, ButtonGroup, Grid } from '@mui/material';
import RadioButtonsGroup from '../../components/RadioButton';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import CenteredTabs from '../../components/TabsForm';
import DropDown from '../../components/DropDown';
import { yearPickerClasses } from '@mui/x-date-pickers';
import { Link, Navigate } from 'react-router-dom';
import { format } from "date-fns";
import callAPI from "../../utils/callAPI";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const initialValues = {
    institution: '',
    geaduatingYear: '',
    cgpa: ''
}

const validationschema = Yup.object({
//   degree: Yup.string().required('Required'),
  institution: Yup.string().required('Required'),
//   major: Yup.string().required('Required'),  
  cgpa: Yup.string().required('Required'),  
})

const degreesOptions = [
    'Bachlors',
    'Masters',
    'Phd'
]

const majorOpitions = [
    'Computer Engineering',
    'Computer Science',
    'Graphic Design',
    'Computataional Mathematics'
]

function EmployeeEducationProfile() {
  const [value, setValue] = React.useState(null);
  const [changeLocation, setChangeLocation] = React.useState(false)
  const [addEducation, setAddEducation] = React.useState(false);

  const [whichButton, setButton] = React.useState("");
  const [degreeDropDown, setDegree] = React.useState('');
  const [majorDropDown, setMajor] = React.useState('');
  const [fillAllFields, setFillAllFields] = React.useState(false);


  const onSubmit = async (values, actions) => {
    console.log('Form data', values)

    let education = {
      qualification: degreeDropDown,
      graduating_institution: values.institution,
      graduating_year: value,
      major: majorDropDown,
      cgpa: values.cgpa
    }

    console.log(education)

    if (degreeDropDown != "" && majorDropDown != "") {
        let response_obj = await callAPI({
        endpoint: "/education/create",
        method: "POST",
        data: education,
        });

        if(response_obj.data.msg=="success") {
            console.log("success")
            setChangeLocation(true)
        }
    }
    
  }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationschema}
            onSubmit={onSubmit}>

            <Form>
            {/* {changeLocation && <Navigate to= '/Formthree'/>} */}
            <br />
            <Grid
            container
            justifyContent="center"
          >
          </Grid>
                <div className="field_container">
                    <Grid container columnSpacing={4}>
                        <Grid  item className="field" xs={4}>
                        <div>
                            <label htmlFor='degree'>
                                Highest Educational Degree
                            </label>
                            <Grid
                                container
                                justifyContent="center">
                                <Select
                                sx={{ m: 1, minWidth: 380}}
                                value={degreeDropDown}
                                onChange={(e)=>{setDegree(e.target.value)}}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>Select</em>
                                    </MenuItem>
                                    {degreesOptions&&degreesOptions.map((i)=>( <MenuItem value={i}>{i}</MenuItem>))}
                                </Select>
                            </Grid>
                        </div>
                    </Grid> 

                    <Grid item className="field" xs={4}>
                        <div>
                            <label htmlFor='major'>
                                Major
                            </label>
                            <Grid
                                container
                                justifyContent="center">
                                <Select
                                sx={{ m: 1, minWidth: 380}}
                                value={majorDropDown}
                                onChange={(e)=>{setMajor(e.target.value)}}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>Select</em>
                                    </MenuItem>
                                    {majorOpitions&&majorOpitions.map((i)=>( <MenuItem value={i}>{i}</MenuItem>))}
                                </Select>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item className="field" xs={4}>
                        <div>
                            <label htmlFor='Institution'>
                                Gradutating Institution
                            </label>

                            <Field
                                type='text'
                                id='institution'
                                name='institution'
                                placeholder='e.g. Kathmandu University'
                                style={{minWidth: "2 em"}}
                            />

                            <ErrorMessage name='institution' />
                        </div>
                    </Grid>

                    <Grid item className="field" xs={4}>
                        <div>
                            <label htmlFor='cgpa'>
                                CGPA
                            </label>

                            <Field
                                type='text'
                                id='cgpa'
                                name='cgpa'
                                placeholder='e.g. 4.0'
                            />

                            <ErrorMessage name='cgpa' />
                        </div>
                    </Grid>

                    <Grid item className="field" xs={4}>
                        <div>
                            <label htmlFor='graduatingYear'>Graduating Year</label></div>
                        <Grid
                            container
                            justifyContent="center" />

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="MM/DD/YYYY"
                                value={value}
                                name="geaduatingYear"
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    </Grid>
                </div>
                
                 <br/>

                <Grid container
                    justifyContent="center">
                     {/* <Button name="Save Education" type="submit" style={{marginTop: "1em", marginBottom: "5px"}}></Button> */}
                    <Button type='submit' variant='contained' style={{marginRight: "30px"}} >Add Education</Button>
                </Grid>

            </Form>
        </Formik>
    )
}
export default EmployeeEducationProfile;

