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
import { Link } from 'react-router-dom';

const initialValues = {
    degree: '',
    insitution: '',
    geaduatingYear: '',
    major: '',
    cgpa: '',
    currentStudy: '',

}



const onSubmit = values => {
    console.log('Form data', values)
}

const validationschema = Yup.object({

    
})

function Formtwo() {
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
            <h1 >Enter your educational details</h1>
          </Grid>

                <Grid
                    container
                    justifyContent="center">
                    <div>
                        <label htmlFor='degree'>
                            Highest Educational Degree
                        </label>
                        <Grid
                            container
                            justifyContent="center">
                            <DropDown
                            />
                        </Grid>
                    </div>
                </Grid>

                <Grid
                    container
                    justifyContent="center">
                    <div>
                        <label htmlFor='major'>
                            Major
                        </label>
                        <Grid
                            container
                            justifyContent="center">
                            <DropDown
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
                            Gradutating Institution
                        </label>

                        <Field
                            type='text'
                            id='institution'
                            name='institution'
                            placeholder='Kathmandu University'
                        />

                        <ErrorMessage name='institution' />
                    </div>
                </Grid>

                <Grid
                    container
                    justifyContent="center"
                >
                    <div>
                        <label htmlFor='cgpa'>
                            CGPA
                        </label>

                        <Field
                            type='text'
                            id='cgpa'
                            name='cgpa'
                            placeholder='4.0'
                        />

                        <ErrorMessage name='cgpa' />
                    </div>
                </Grid>

                <Grid
                    container
                    justifyContent="center"
                >
                    <div>
                        <label htmlFor='graduatingYear'>Graduating Year</label
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



                <Grid
                    container
                    justifyContent="center">
                    <div>
                        <label htmlFor='currentStudy'>
                            Are you currently stuyding here?
                        </label>
                        <Grid
                            container
                            justifyContent="center">
                            <RadioButtonsGroup options={[
                                'Yes',
                                'No',
                            ]} />
                        </Grid>
                    </div>
                </Grid>

                <Grid container
                    justifyContent="center">
                    <Link to='/Formthree'>
                        <Button variant='contained' >Save and Continue</Button>
                    </Link>
                </Grid>

            </Form>
        </Formik>
    )
}
export default Formtwo;