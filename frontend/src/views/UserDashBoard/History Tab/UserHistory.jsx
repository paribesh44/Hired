import { Grid } from '@mui/material'
import React from 'react'
import AppliedComponentUser from '../../../components/AppliedComponentUser'
import DashboardLayout from '../../../components/DashhboardLayout'
import UserNavbarIn from '../../../components/UserNavbarIn'
import UserSideBar from '../../../components/UserSideBar'

function UserHistory() {
  const appliedjobs=[
    {
      company: "Twitter Inc",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      jobName: "Software Developer",
      applieedate: "5 sec ago",
      location: "Pokhara, Nepal",
      status:"pending"
    },
    {
      company: "Twitter Inc",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      jobName: "Software Developer",
      applieedate: "5 sec ago",
      location: "Pokhara, Nepal",
      status:"pending"
    },
    {
      company: "Twitter Inc",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      jobName: "Software Developer",
      applieedate: "5 sec ago",
      location: "Pokhara, Nepal",
      status:"pending"
    },
    

  ]
  return (
    <div>
       <DashboardLayout>
        <Grid container direction="column" className='assesmentmain-main' >
          <Grid className='assesmentmain-heading'>
            Applied Jobs
          </Grid>

          <Grid  className="assesmentmain-subheading">
            List of all  the jobs that you have applied to.
          </Grid>

          <Grid item>
            {appliedjobs.map((job)=>(
              <AppliedComponentUser/>
            ))}
          </Grid>


          

        </Grid>
       </DashboardLayout>
    </div>
  )
}

export default UserHistory
