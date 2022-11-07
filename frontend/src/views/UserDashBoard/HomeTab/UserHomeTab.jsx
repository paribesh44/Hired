import { Switch } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../../../components/Buttons'
import UserNavbarIn from '../../../components/UserNavbarIn'
import UserSideBar from '../../../components/UserSideBar'

function UserHomeTab() {
  return (
    <div>
        <UserNavbarIn/>
        <UserSideBar />
        <Switch >
        <Link to="/aaa">
<CustomButton name="ssd"></CustomButton>

</Link>

        </Switch>

        
        
    </div>
  )
}

export default UserHomeTab
