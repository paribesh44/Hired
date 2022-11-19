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
import { Link, Navigate } from 'react-router-dom';
import callAPI from "../../utils/callAPI";

const initialValues = {
  cname: '',
  estdate: '',
  address: '',
  contact: '',
  target: '',
  website: '',
  vision: '',
  description: '',
  person: '',
  email: ''
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationschema = Yup.object({
  cname: Yup.string().required('Required'),
  // estdate: Yup.string().matches(/(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/, 'Invalid date').required('Required'),
  contact: Yup.string().matches(phoneRegExp, 'Contact number is not valid').min(10, "The number is too short")
  .max(10, "The number is too long").required('Required'),
  // target: Yup.string().required('Required'),
  // website: Yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Invalid url'),
  // description: Yup.string().matches(/(\b[A-Za-z0-9\s'_-]+\b){50,}/, 'Word count exceeds 50').required('Required'),
  // procedure: Yup.string().matches(/(\b[A-Za-z0-9\s'_-]+\b){50,}/, 'Word count exceeds 50').required('Required'),

})

function Cformone() {

  const [edate, setValue] = React.useState(null);
  const [logo, setLogo] = React.useState("");

  const [changeLocation, setChangeLocation] = React.useState(false)

  const onChange = (newValue) => {
    setValue(newValue);
  }

  const onSubmit = async (values) => {
    console.log('Form data', values)
    console.log(logo)
    console.log(edate)

    if (logo=="" || logo==null || logo==undefined) {
      setLogo("")
    }

    let dataForm = new FormData()
    dataForm.append("company_name", values.cname)
    dataForm.append("location", values.address)
    dataForm.append("description", values.description)
    dataForm.append("website", values.website)
    dataForm.append("target_market", values.target)
    dataForm.append("vision", values.vision)
    dataForm.append("contact_number", values.contact)
    dataForm.append("contact_email", values.email)
    dataForm.append("contact_person", values.person)
    dataForm.append("logo", logo)
    dataForm.append("established_date", edate)

    let response_obj = await callAPI({
      endpoint: "/employer/create",
      method: "POST",
      data: dataForm,
    });

    if(response_obj.data.msg=="success") {
      console.log("success")
      setChangeLocation(true)
    }

  }

  return (
    <Formik initialValues={initialValues}
    validationSchema={validationschema}
    onSubmit={onSubmit}>
    <Form>
      <br />
      {changeLocation && <Navigate to= '/CompanyHome'/>}
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
              <label htmlFor='person'>Contact Person</label>
              <Field
                type='text'
                id='person'
                name='person'
                placeholder='John Cena'
              />
              <ErrorMessage name='person' />
            </div>
          </Grid>

          <Grid
            container
            justifyContent="center"
          >
            <div>
              <label htmlFor='email'>Contact Email</label>
              <Field
                type='text'
                id='email'
                name='email'
                placeholder='XXXX@gmail.com'
              />
              <ErrorMessage name='email' />
            </div>
          </Grid>

          <Grid
            container
            justifyContent="center"

          >
            <div>
              <label htmlFor='target'>
                Target Markets
              </label>

              <Field
                type='text'
                id='target'
                name='target'
                placeholder='ai, dl'
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
                Vision</label>

              <Field
                type='text'
                id='vision'
                name='vision'
                placeholder='we aim to change the world'
              />

            </div>
          </Grid>

          <Grid
            container
            justifyContent="center"
          >
            <div>
              <label htmlFor='description'>Description</label>


              <h7>Describe your company</h7>

              <Field
                type='text'
                id='description'
                name='description'
                placeholder='Its the best'
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
            <label htmlFor='estdate'>Established Date</label></div>
          <Grid
            container
            justifyContent="center" />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="MM/DD/YYYY"
              value={edate}
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
          {/* <ImageUpload /> */}
          <input id="file" type="file" onChange={(event) => {
            setLogo(event.currentTarget.files[0]);
          }} />
        </Grid>
      

<br/>
        <Grid container
                    justifyContent="center">
                    {/* <Link to='/Cformtwo'> */}
                        <Button type='submit' variant='contained' >Verify your company</Button>
                    {/* </Link> */}
                </Grid>



</Form>

    </Formik>
    
  )
}

export default Cformone
