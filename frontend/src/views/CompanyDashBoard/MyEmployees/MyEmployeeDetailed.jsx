import React from 'react'
import CompanyNavbarIn from '../../../components/CompanyNavbarIn'
import AppliedProfiletab from '../Applied Tab/AppliedProfiletab'
import AppliedSummaryBlock from '../Applied Tab/AppliedSummaryBlock'
import AppliedTabComponent from '../Applied Tab/AppliedTabComponent'
import EmployeeTabComponent from './EmployeeTabComponent'

function MyEmployeeDetailed() {
  return (
    <div className="myemployeetitle">
       
      <div >
        My Employees
      </div>
      <div className="applied-whole-box">
      <AppliedSummaryBlock
      name="Jane Doe"
      post="Graphics Designing"
      applieddate="2020-03-05"
      availability="currently available"
      experience="4 years"
      age="21 years"
      contact="9856632502"
      hireddate="2022/06/06"
      type={false} /* false means not a new applier*/
      
      
      />
      <EmployeeTabComponent/>
       <AppliedProfiletab
       
       />

      </div>
      
    </div>
  )
}

export default MyEmployeeDetailed
