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
import InputSlider from '../../components/Slider';
import Jobs from '../../components/Jobs';

const initialValues = {
    phase: '',
    interest: '',
    preference: '',
    roles: '',
    salary:'',
    hours:'',
}

const onSubmit = values => {
    console.log('Form data', values)
}

const validationschema = Yup.object({
    phase: Yup.string().required('Select one of the above option'),
    interest: Yup.string().required('Select one of the above option'),
    prefernces: Yup.string().required('Select one of the above option'),

})

function Formfour() {
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
            <h1 >Enter your preferences</h1>
          </Grid> 

          <Grid
                    container
                    justifyContent="center">
                    <div>
                        <label htmlFor='hours'>
                            Available hours
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
                        <label htmlFor='salary'>
                            Expected Salary
                        </label>
                        <Grid
                            container
                            justifyContent="center">
                                <h7>Use slider to select manixum salary (in thousands)</h7>
                                </Grid>
                                <br />
                                <Grid
                            container
                            justifyContent="center">
                               <InputSlider /></Grid>
                               </div>
                               
                                </Grid>

                <Grid
                    container
                    justifyContent="center">
                    <div>
                        <label htmlFor='phase'>
                            Which phase of job search are you in?
                        </label>
                        <Grid
                            container
                            justifyContent="center">
                            <RadioButtonsGroup options={[
                                'Ready to interview',
                                'Open to offers',
                                //'Closed to offers',
                            ]} />
                        </Grid>
                        <ErrorMessage name='phase' />
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
                            <RadioButtonsGroup options={[
                                'Full-time',
                                'Part-time',
                                'INternship',
                            ]} />
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
                            justifyContent="center">
                            <RadioButtonsGroup options={[
                                'Remote',
                                'On-site',
                                //'Closed to offers',
                            ]} />
                        </Grid>
                        <ErrorMessage name='preferences' />
                    </div>
                </Grid>

               
<br />

                <Grid container
                    justifyContent="center">
                    <Link to='/Formfive'>
                        <Button variant='contained' >Save and Continue</Button>
                    </Link>
                </Grid>



                </Form></Formik>
  )
}

export default Formfour
