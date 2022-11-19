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
import { Link, Navigate } from 'react-router-dom';
import callAPI from "../../utils/callAPI";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



const initialValues = {
  name: '',
  age: '',
  // dob: new Date(),
  address: '',
  contact: '',
  experience: '',
  skills: '',
  student: '',
  linkedin: '',
  github: '',
  website: '',
  aboutyourself: '',
  cv: '',
  status: ''

}

const options = [
  'Ready to interview',
  'Open to offer',
  'Closed to interview',
]



const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationschema = Yup.object({
  name: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  age: Yup.string().required('Required'),
  skills: Yup.string().required('Required'),
  // website: Yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Invalid url'),
  contact: Yup.string().matches(phoneRegExp, 'Contact number is not valid').min(10, "The number is too short")
    .max(10, "The number is too long").required('Required'),
  // linkedin: Yup.string().matches(/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/, 'Invalid url'),
  // github: Yup.string().matches(/^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9]{1,})+\/?$/, 'Invalid url'),
  // dob: Yup.string().matches(/(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/, 'Invalid date').required('Required'),
  aboutyourself: Yup.string().required('Required'),

})

function Formone() {
  const [value, setValue] = React.useState(null);
  const [profilePic, setImage] = React.useState("");
  const [cv, setCV] = React.useState("");
  const [changeLocation, setChangeLocation] = React.useState(false)
  const [radio, setRadio] = React.useState(null)
  const [radioStatus, setRadioStatus] = React.useState(null)

  const onChange = (newValue) => {
    setValue(newValue);
  }

  const onSubmit = async (values) => {
    console.log('Form data', values)

    if (profilePic=="" || profilePic==null || profilePic==undefined) {
      setImage("")
    }
    if (cv=="" || cv==null || cv==undefined) {
      setCV("")
    }


    let dataForm = new FormData()
    dataForm.append("name", values.name)
    dataForm.append("age", values.age)
    dataForm.append("address", values.address)
    dataForm.append("contact_number", values.contact)
    dataForm.append("write_about_you", values.aboutyourself)
    dataForm.append("years_of_experience", values.experience)
    dataForm.append("skills", values.skills)
    dataForm.append("linkedIn", values.linkedin)
    dataForm.append("website", values.website)
    dataForm.append("github_profile", values.github)
    dataForm.append("status", radioStatus)
    dataForm.append("student", radio)
    dataForm.append("cv", cv)
    dataForm.append("profile_photo", profilePic)

    let response_obj = await callAPI({
      endpoint: "/seeker/create",
      method: "POST",
      data: dataForm,
    });

    if(response_obj.data.msg=="success") {
      console.log("success")
      setChangeLocation(true)
    }
  }

  return (

    <Formik
      initialValues={initialValues}
      validationSchema={validationschema}
      onSubmit={onSubmit}>

      <Form>
        {changeLocation && <Navigate to= '/Formtwo'/>}
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
              <label htmlFor='age'>
                Age
              </label>

              <Field
                type='text'
                id='age'
                name='age'
                placeholder='20'
              />

              <ErrorMessage name='age' />
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
              <label htmlFor='experience'>Year of experience</label>
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
              <label htmlFor='skills'>Skills</label>
              <Field
                type='text'
                id='skills'
                name='skills'
                placeholder='ml, dl, css'
              />
              <ErrorMessage name='skills' />
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
            <div>
              <label htmlFor='aboutyourself'>Tell us something about yourself</label>

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
          <Grid container justifyContent="center">
              <h4>Are you a student?</h4>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
        >
          {/* <RadioButtonsGroup options={options} name_is="student" /> */}
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            row
            onClick={(e)=> {
              setRadio(e.target.value)
            }}
          >
            <FormControlLabel value={true} control={<Radio />} label="True" />
            <FormControlLabel value={false} control={<Radio />} label="False" />
          </RadioGroup>
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
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    row
                    onClick={(e)=> {
                      setRadioStatus(e.target.value)
                    }}
                  >
                    {options.map((i)=>(<FormControlLabel value= {i} control={<Radio />} label={i} />))}
                  </RadioGroup>
              </Grid>
              <ErrorMessage name='phase' />
          </div>
      </Grid>

        {/* <Grid
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
              name="dob"
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid> */}

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
          {/* <ImageUpload /> */}
          <input id="file" name="upload" type="file" accept="image/*" onChange={(event) => {
            setImage(event.currentTarget.files[0]);
          }} />
        </Grid>
        <br />

        <Grid
          container
          justifyContent="center"
        >
          <div>
            <label htmlFor='cv'>Upload your CV</label>
          </div>
        </Grid>

        <Grid
          container
          justifyContent="center" >
          {/* <ImageUpload /> */}
          <input id="file" name="cv" type="file" onChange={(event) => {
            setCV(event.currentTarget.files[0]);
          }} />
        </Grid>

        <Grid
          container
          justifyContent="center"
        >
          <div>
            <label>Do not have cv? <a href='/cvMaker' target="_blank" style={{"textDecoration": "none"}}>Create One</a></label>
          </div>

        </Grid>

        <br />


      
            
            <Grid container
              justifyContent="center">
                {/* <Link to= '/Formtwo'> */}
              <Button type='submit' variant='contained' >Save and Continue</Button>
              {/* </Link> */}
            </Grid>
            <br />
          
       
      </Form>
    </Formik>
  )

}

export default Formone;



