import React from 'react'
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
import * as Yup from 'yup';
import {Formik, Form, Field} from 'formik'
import { Grid } from '@mui/material';
import { ErrorMessage } from 'formik';
import Cformtwo from './Cformtwo';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const initialValues = {
  cname: '',
  estdate: '',
  address: '',
  contact: '',
  target: '',
  website: '',
  vision: '',
  description: '',
  procedure: '',
}

const onSubmit = values => {
  console.log('Form data', values)
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationschema = Yup.object({
  cname: Yup.string().required('Required'),
  estdate: Yup.string().matches(/(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/, 'Invalid date').required('Required'),
  contact: Yup.string().matches(phoneRegExp, 'Contact number is not valid').min(10, "The number is too short")
  .max(10, "The number is too long").required('Required'),
  target: Yup.string().required('Required'),
  website: Yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Invalid url'),
  description: Yup.string().matches(/(\b[A-Za-z0-9\s'_-]+\b){50,}/, 'Word count exceeds 50').required('Required'),
procedure: Yup.string().matches(/(\b[A-Za-z0-9\s'_-]+\b){50,}/, 'Word count exceeds 50').required('Required'),

})

function Cformone() {

  const [value, setValue] = React.useState(null);
  const onChange = (newValue) => {
    setValue(newValue);
  }

  return (
    <Formik initialValues={initialValues}
    validationSchema={validationschema}
    onSubmit={onSubmit}>
<Form>
<Grid
            container
            justifyContent="center"
          >
            <h3>
              Register your company
            </h3>
          </Grid>

          <Grid
            container
            justifyContent="center"

          >
            <div>
              <label htmlFor='name'>
                Company name
              </label>

              <Field
                type='text'
                id='cname'
                name='cname'
                placeholder='ABC Company'
              />
 <ErrorMessage name='cname' />
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
              <label htmlFor='market'>
                Target Markets
              </label>

              <Field
                type='text'
                id='market'
                name='market'
                placeholder='Lorem ipsum dolor sit amet'
              />
 <ErrorMessage name='target' />
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
            <div>
              <label htmlFor='vision'>
Vision              </label>

              <Field
                type='text'
                id='vision'
                name='vision'
                placeholder='Lorem ipsum dolor sit amet'
              />

            </div>
          </Grid>

          <Grid
            container
            justifyContent="center"
          >
            <div>
              <label htmlFor='description'>Description</label>


              <h7>Minimum 50 words</h7>

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
              <label htmlFor='procedure'>Application Procedure</label>


              <h7>Minimum 50 words</h7>

              <Field
                type='text'
                id='procedure'
                name='procedure'
                placeholder='Lorem ipsum dolor sit amet'
                multiline={true}

              />
              <ErrorMessage name='procedure' />
            </div>
          </Grid>

          <Grid
          container
          justifyContent="center"
        >
          <div>
            <label htmlFor='estdate'>Established Date</label
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
<br/>
<Grid
          container
          justifyContent="center"
        >
          <div>
            <label htmlFor='photo'>Company Logo</label>
          </div>
        </Grid>
        <Grid
          container
          justifyContent="center" >
          <ImageUpload />
        </Grid>
      

<br/>
        <Grid container
                    justifyContent="center">
                    <Link to='/Cformtwo'>
                        <Button variant='contained' >Verify your company</Button>
                    </Link>
                </Grid>



</Form>

    </Formik>
    
  )
}

export default Cformone
