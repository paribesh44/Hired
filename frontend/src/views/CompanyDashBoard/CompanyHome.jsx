import React, { useState } from 'react'
import CompanyNavbarIn from '../../components/CompanyNavbarIn'
import RejectPopup from './Applied Tab/RejectPopup';

function CompanyHome() {
  const [modal, setmodal]=useState(false);

  const toggleModle=()=>{
    setmodal(!modal)
  }
  return (
    <div>
      <CompanyNavbarIn/>
      <button onClick={toggleModle}>open</button>

      {modal && <RejectPopup statechanger={setmodal}/>}
    </div>
  )
}

export default CompanyHome
