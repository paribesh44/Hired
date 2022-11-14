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
  lookingfor: '',
  position: '',
  location: '',
  startdate: '',
  description: '',
  responsibilities: '',
  benefits: '',
  vancancy: '',
  workhours: '',
  deadline: '',
  contact: '',
  vancancy: '',
  minexperince: '',
  education: '',
  skills: '',
  jobtype: '',
  status: '',

}



const onSubmit = values => {
  console.log('Form data', values)
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationschema = Yup.object({
  lookingfor: Yup.string().required('Required'),
  location: Yup.string().required('Required'),
  description: Yup.string().matches(/(\b[A-Za-z0-9\s'_-]+\b){50,}/, 'Word count exceeds 50').required('Required'),
  contact: Yup.string().matches(phoneRegExp, 'Contact number is not valid').min(10, "The number is too short")
    .max(10, "The number is too long").required('Required'),
  responsibilities: Yup.string().required('Required'),
  benefits: Yup.string().required('Required'),
  vancancy: Yup.string().required('Required'),
  exeprience: Yup.string().required('Required'),
  education: Yup.string().required('Required'),
  skills: Yup.string().required('Required'),
  hours: Yup.string().required('Required'),




})

function Cformtwo() {
  const [value, setValue] = React.useState(null);
  const onChange = (newValue) => {
    setValue(newValue);
  }

  const options=[
{
  value: 1,
  description:'Intern'
},
{
  value: 2,
  description:'Full time employee'
},
{
  value: 3,
  description:'Par-time employee'
},


  ]

  return (
    <Formik initialValues={initialValues}
      validationSchema={validationschema}
      onSubmit={onSubmit}>

      <Form>
        <Grid
          container
          justifyContent="center"
        >
          <h2>
            Post a job
          </h2>
        </Grid>
        <Grid
          container
          justifyContent="center"
        >
          <h3>
            Fill up the following fields to post a job vacancy.
          </h3>
        </Grid>


        <Grid
          container
          justifyContent="center">
          <div>
            <label htmlFor='lookingfor'>
              What are you looking for?
            </label>
            <Grid
              container
              justifyContent="center">
              <DropDown options={options}
              />
            </Grid>
          </div>
        </Grid>

        <Grid
          container
          justifyContent="center"
        >
          <div>
            <label htmlFor='position'>
              Job Position                        </label>

            <Field
              type='text'
              id='position'
              name='position'
              placeholder='e.g. Graphic Designer'
            />

            <ErrorMessage name='position' />
          </div>
        </Grid>
        <Grid
          container
          justifyContent="center"
        >
          <div>
            <label htmlFor='location'>
              Job Location                        </label>

            <Field
              type='text'
              id='location'
              name='location'
              placeholder='Dhulikhel'
            />

            <ErrorMessage name='location' />
          </div>
        </Grid>

        <Grid
          container
          justifyContent="center"
        >
          <div>
            <label htmlFor='description'>Description</label>


            <h7>Minimum 50 words</h7>
<br/>
            <Field
           
              type='text'
              id='description'
              name='description'
              placeholder='Lorem ipsum dolor sit amet'
              multiline={true}

            />
            <ErrorMessage name='description' />
          </div>
        </Grid>

        <Grid
          container
          justifyContent="center"
        >
          <div>
            <label htmlFor='responsibilities'>
              Gradutating Institution
            </label>

            <Field
              type='text'
              id='responsibilities'
              name='responsibilities'
              placeholder='Kathmandu University'
            />

            <ErrorMessage name='responsibilities' />
          </div>
        </Grid>

        <Grid
          container
          justifyContent="center"
        >
          <div>
            <label htmlFor='benefits'>
              Job Benefits
            </label>

            <Field
              type='text'
              id='benefits'
              name='benefits'
              placeholder='Lorem ipsum dolor sit amet'
            />

            <ErrorMessage name='benefits' />
          </div>
        </Grid>

        <Grid
          container
          justifyContent="center"
        >
          <div>
            <label htmlFor='vacancy'>
              Number of vancancies
            </label>

            <Field
              type='text'
              id='vacancy'
              name='vacancy'
              placeholder='10'
            />

            <ErrorMessage name='vacancy' />
          </div>
        </Grid>

        <Grid
          container
          justifyContent="center"
        >
          <div>
            <label htmlFor='hours'>
              Work Hours per week
            </label>

            <Field
              type='text'
              id='hours'
              name='hours'
              placeholder='40'
            />

            <ErrorMessage name='hours' />
          </div>
        </Grid>

        <Grid
          container
          justifyContent="center"
        >
          <div>
            <label htmlFor='contact'>Contact Number</label>
            <Field
              type='text'
              id='contact'
              name='contact'
              placeholder='98XXXXXXXX'
            />
            <ErrorMessage name='contact' />
          </div>
        </Grid>

        <Grid
          container
          justifyContent="center"
        >
          <div>
            <label htmlFor='experience'>
              Minimun years of experience
            </label>

            <Field
              type='text'
              id='experience'
              name='experience'
              placeholder='2'
            />

            <ErrorMessage name='experience' />
          </div>
        </Grid>

        <Grid
          container
          justifyContent="center"
        >
          <div>
            <label htmlFor='education'>
              Education Required
            </label>

            <Field
              type='text'
              id='education'
              name='education'
              placeholder='2'
            />

            <ErrorMessage name='education' />
          </div>
        </Grid>

        <Grid
          container
          justifyContent="center"
        >
          <div>
            <label htmlFor='skills'>
              Skills Required
            </label>

            <Field
              type='text'
              id='skills'
              name='skills'
              placeholder='should have knowledge on this/that'
            />

            <ErrorMessage name='skills' />
          </div>
        </Grid>

        <Grid
          container
          justifyContent="center">
          <div>
            <label htmlFor='type'>
              Job Type
            </label>
            <Grid
              container
              justifyContent="center">
              <RadioButtonsGroup options={[
                'Remote',
                'On-Site',
                'Closed to Offers'
              ]} />
            </Grid>
          </div>
        </Grid>


        <Grid
          container
          justifyContent="center">
          <div>
            <label htmlFor='status'>
              Status of post
            </label>
            <Grid
              container
              justifyContent="center">
              <RadioButtonsGroup options={[
                'Currently active',
                'Inactive',

              ]} />
            </Grid>
          </div>
        </Grid>
        <Grid
          container
          justifyContent="center"
        >
          <div>
            <label htmlFor='startdate'>Job start date</label
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
          justifyContent="center"
        >
          <div>
            <label htmlFor='deadline'>Deadline for submission of CV</label
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
          {/* <Link to= '/Formtwo'> */}
          <Button variant='contained' >Post</Button>
          {/* </Link> */}
        </Grid>


      </Form>

    </Formik>
  )
}

export default Cformtwo
