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
import { Link } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



const initialValues = {
    years: '',
    jobs: '',
    currentWork: '',
    workStartDate: '',
}


const onSubmit = values => {
    console.log('Form data', values)
}

const validationschema = Yup.object({})

function Formthree() {
    const [value, setValue] = React.useState(null);
    const onChange = (newValue) => {
        setValue(newValue);
    }


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationschema}
            onSubmit={onSubmit}>
            <Form>
            <Grid
            container
            justifyContent="center"
          >
            <h1 >Enter your experience</h1>
          </Grid> 
                <Grid
                    container
                    justifyContent="center">
                    <div>
                        <label htmlFor='degree'>
                            How many years of experience do you have?
                        </label>
                        <Grid
                            container
                            justifyContent="center">
                            <DropDown  options={[
        {
          value: 1,
          description:'0 years'
        },
        {
          value: 2,
          description:'1 years'
        },
        {
          value: 3,
          description:'2 years'
        },
        {
          value: 4,
          description:'3 years'
        },
        {
            value: 5,
            description:'4 years'
          },
          {
            value: 6,
            description:'5+ years'
          },
          
        
          ]
}
                            />
                        </Grid>
                    </div>
                </Grid>

                <Grid
                    container
                    justifyContent="center"
                >
                    <div>
                        <label htmlFor='Institution'>
                           Where roles have you worked before?
                        </label>

                        <Field
                            type='text'
                            id='roles'
                            name='roles'
                            placeholder='e.g. Graphic Designer'
                        />

                        <ErrorMessage name='roles' />
                    </div>
                </Grid>

                <Grid
                    container
                    justifyContent="center"
                >
                    <div>
                        <label htmlFor='work'>
                            Where do you curently work?
                        </label>

                        <Grid container justifyContent="center">
                            <h4>Job Role</h4>
                        </Grid>

                        <Grid
                            item
                            container
                            direction="row"
                            alignItems="center" />
                       
                        <Field
                            type='text'
                            id='jobRole'
                            name='jobRole'
                            placeholder='e.g. Designer'
                        />

                        <ErrorMessage name='jobRole' />

                        <Grid container justifyContent="center">
                            <h4>Company name</h4>
                        </Grid>

                        <Grid
                            item
                            container
                            direction="row"
                            alignItems="center" />
                       
                        <Field
                            type='text'
                            id='companyName'
                            name='companyName'
                            placeholder='e.g. Leapfrog'
                        />

                        <ErrorMessage name='Company Name' />

                        <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Currently unemployed" />   
    </FormGroup>


                    </div>
                </Grid>

                <Grid
                    container
                    justifyContent="center"
                >
                    <div>
                        <label htmlFor='workingDate'>When did you start working? </label
                        ></div>
                    <Grid
                        container
                        justifyContent="center" />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="MM/DD/YYYY"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
                
                <br />
                
                <Grid container
                    justifyContent="center">
                    <Link to='/Formfour'>
                        <Button variant='contained' >Save and Continue</Button>
                    </Link>
                </Grid>

            </Form>
        </Formik>
    )
}

export default Formthree
