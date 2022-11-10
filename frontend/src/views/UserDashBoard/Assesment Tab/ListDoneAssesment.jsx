import { Grid } from '@mui/material'
import React, {useState, useEffect} from 'react'
import ContainerBox from '../../../components/ContainerBox'
import UserNavbarIn from '../../../components/UserNavbarIn'
import UserSideBar from '../../../components/UserSideBar'
import callAPI from "../../../utils/callAPI";

function ListDoneAssesment() {
  const [user_assesments, setResult] = useState(null);

    const message = async() => {
        let response_obj = await callAPI({endpoint:"/userAssesment/get_user_assesment_current_user"});
        setResult(response_obj);
    }

    useEffect(() => {
        message()
    }, [])
  
  if (user_assesments != null) {

  return (
    <div>

      <UserNavbarIn/>
      <Grid container direction="row">
            <Grid item>
            <UserSideBar/>
            </Grid>

            <Grid item className='assesmentquestions-main'>
            <div className='assesmentmain-heading'>
            My Assesments
        </div>
        <div className='assesmentmain-subheading'>
            List of all the assesments that you have attempted.
        </div>

        <Grid>
          {user_assesments.data.map((val,key)=>{
                return(
                  <Grid item key={key}>
                    <ContainerBox user_assesment={val}/>
                  </Grid>            
                
                )
              })}
        </Grid>

      


            </Grid>
           

           
            
        </Grid>
        

      
    </div>

    
  )
  }
}

export default ListDoneAssesment
