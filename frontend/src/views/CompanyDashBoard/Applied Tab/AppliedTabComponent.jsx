import React from 'react'
import { Tab, IconButton } from "@mui/material";
import { TabsContext } from '@mui/base';


function AppliedTabComponent() {
  return (
    <div className='Tab-name'>
        Profile              CV/Resume
        {/* <TabsContext >
            <TabList ></TabList>
        </TabsContext>
        <Tabs value={value}>
            <Tab label="Profile"></Tab>
            <Tab label="CV"/>
        </Tabs> */}
      
    </div>
  )
}

export default AppliedTabComponent
