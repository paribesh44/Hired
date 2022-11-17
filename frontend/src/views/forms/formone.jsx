import * as React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as  Yup from 'yup'
import { Button, ButtonGroup, Grid } from '@mui/material';
//import Box from '@mui/material/Box';
import RadioButtonsGroup from '../../components/RadioButton';
//import DropDown from '../../components/DropDown';
//import BasicDatePicker from '../../components/BasicDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import CustomButton from '../../components/Buttons';
import Box from '@mui/material/Box';
//import './formone.css'
import ImageUpload from '../../components/ImageUpload';
import CenteredTabs from '../../components/TabsForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formtwo from './formtwo';
import { Link } from 'react-router-dom';



const initialValues = {
  name: '',
  dob: '',
  address: '',
  contact: '',
  student: '',
  linkedin: '',
  github: '',
  website: '',
  upload: '',
  email: '',
  aboutyourself: ''

}

const options = [
  'Undergraduate',
  'Graduate',

]

const onSubmit = values => {
  console.log('Form data', values)
}



const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationschema = Yup.object({
  name: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  website: Yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Invalid url'),
  contact: Yup.string().matches(phoneRegExp, 'Contact number is not valid').min(10, "The number is too short")
    .max(10, "The number is too long").required('Required'),
  linkedin: Yup.string().matches(/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/, 'Invalid url'),
  github: Yup.string().matches(/^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/, 'Invalid url'),
  dob: Yup.string().matches(/(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/, 'Invalid date').required('Required'),
  aboutyourself: Yup.string().matches(/(\b[A-Za-z0-9\s'_-]+\b){50,}/, 'Word count exceeds 50').required('Required'),

})

function Formone() {
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
        <br />
        <CenteredTabs />
        <div>
          <Grid
            container
            justifyContent="center"
          >
            <h1 >Create your profile</h1>
          </Grid>

          <Grid
            container
            justifyContent="center"
          >
            <h3>
              Apply to multiple companies and startups with one profile
            </h3>
          </Grid>

          <Grid
            container
            justifyContent="center"

          >
            <div>
              <label htmlFor='name'>
                Full name
              </label>

              <Field
                type='text'
                id='name'
                name='name'
                placeholder='Jane Doe'
              />

              <ErrorMessage name='name' />
            </div>
          </Grid>


          <Grid
            container
            justifyContent="center"

          >
            <div>
              <label htmlFor='address'>Current Address</label>

              <Field
                type='text'
                id='address'
                name='address'
                placeholder='Dhulikhel'
              />
              <ErrorMessage name='address' />
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
              <label htmlFor='linkedin'>LinkedIn Profile</label>
              <Field
                type='text'
                id='linkedin'
                name='linkedin'
                placeholder='https://linkedin.com/abc'

              />
              <ErrorMessage name='linkedin' />
            </div>
          </Grid>

          <Grid
            container
            justifyContent="center"
          >
            <div className='from-control'>
              <label htmlFor='github'>Github Profile</label>
              <Field
                type='text'
                id='github'
                name='github'
                placeholder='https://github.com/abc'

              />
              <ErrorMessage name='github' />
            </div>
          </Grid>

          <Grid
            container
            justifyContent="center"
          >
            <div className='from-control'>
              <label htmlFor='website'>Website (if any)</label>
              <Field
                type='text'
                id='website'
                name='website'
                placeholder='https://websitename.com/'

              />
              <ErrorMessage name='website' />
            </div>
          </Grid>

          <Grid
            container
            justifyContent="center"
          >
            <div className='from-control'>
              <label htmlFor='email'>Email</label>
              <Field
                type='email'
                id='email'
                name='email'
                placeholder='abc@gmail.com'

              />
              <ErrorMessage name='email' />
            </div>
          </Grid>

          <Grid
            container
            justifyContent="center"
          >
            <div>
              <label htmlFor='aboutyourself'>Tell us something about yourself</label>


              <h7>Minimum 50 words</h7>

              <Field
                type='text'
                id='aboutyourself'
                name='aboutyourself'
                placeholder='...'
                multiline={true}

              />
              <ErrorMessage name='aboutyourself' />
            </div>
          </Grid>
        </div>

        <Grid
          container
          justifyContent="center"
        >
          <div>
            <label htmlFor='student'>Are you a student or graduate?</label>
          </div>
        </Grid>

        <Grid
          container
          justifyContent="center"
        >
          <RadioButtonsGroup options={options} />
        </Grid>

        <Grid
          container
          justifyContent="center"
        >
          <div>
            <label htmlFor='dateofbirth'>Date of birth</label
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

        <Grid
          container
          justifyContent="center"
        >
          <div>
            <label htmlFor='photo'>Upload your photo</label>
          </div>
        </Grid>

        <Grid
          container
          justifyContent="center" >
          <ImageUpload />
        </Grid>
        <br />


      
            
            <Grid container
              justifyContent="center">
                <Link to= '/Formtwo'>
              <Button variant='contained' >Save and Continue</Button>
              </Link>
            </Grid>
          
       
      </Form>
    </Formik>
  )

}

export default Formone;



