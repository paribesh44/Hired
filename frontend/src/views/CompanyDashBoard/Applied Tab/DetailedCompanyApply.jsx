import React from 'react'
import "./companyapplied.css";
import AppliedSummaryBlock from './AppliedSummaryBlock';
import AppliedProfiletab from './AppliedProfiletab';
import AppliedTabComponent from './AppliedTabComponent';



function DetailedCompanyApplied() {
  return (
    <div>
      
      <div className='title'>
      Applied Employees
      <div className="applied-whole-box">

      <AppliedSummaryBlock 
      name="Jane Doe"
      post="Graphics Designing"
      applieddate="2020-03-05"
      availability="currently available"
      experience="4 years"
      age="21 years"
      contact="9856632502"
      type={true}     />

       <AppliedTabComponent/>
       <AppliedProfiletab
       
       />

      </div>
      
      </div>
    </div>
  )
}

export default DetailedCompanyApplied
