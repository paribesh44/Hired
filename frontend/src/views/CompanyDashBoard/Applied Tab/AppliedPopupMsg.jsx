import React , {useState} from 'react'
import CustomButton from '../../../components/Buttons'
import { Grid, IconButton } from "@mui/material";


function AppliedPopupMsg({statechanger, ... props}) {
  const [nextstepdata, setnextstepdata]=useState({nextstep:""})
  console.log(props.name)

  const [acceptModal, setacceptModal]=useState(false);
  const [showButtons, setshowButtons]=useState(true);

  const toggleacceptModal2=()=>{
    setacceptModal(!acceptModal)
    setshowButtons(!showButtons)
  }

  function handlenextstep(event){
    setnextstepdata(prevdata=>{
      return {
        ...prevdata,
        [event.target.name]:event.target.value
      }
    })
  }

  function acceptedbutton()
  {
    console.log(nextstepdata.nextstep)
    statechanger(false)
  }
    return (
  <div>
   <div className="modal">
              <div className="overlay" >
                <div className="modal-content">
                      Are you sure you want to accept {props.name} for the post of {props.post} ?
                      {acceptModal && 
                      <div> 
                          <div className='rejectreason'>
                              Do you want to let them know what the next step would be?
                              </div>
                              <br/>
                              <input 
                                type={"text"}
                                placeholder="Enter text here"
                                  value={nextstepdata.nextstep} 
                                  name="nextstep" 
                                  onChange={handlenextstep}/>
                       </div>}
                    { showButtons &&
                     <Grid container justifyContent={"space-around"} className=" reject-popupbuttons"direction="row">
                      <Grid item>
                        <CustomButton name="Accept" addStyles={"accept-button"} onClick={toggleacceptModal2}/>
                      </Grid>
                      <Grid item>
                        <CustomButton name="Cancel" onClicked={() => statechanger(false)} addStyles="reject-button"/>
                        
                      </Grid>

                    </Grid>}

                    { !showButtons && 
                    <Grid container justifyContent={"space-around"} className=" reject-popupbuttons"direction="row">
                      <Grid item>
                        <CustomButton name="Accept" addStyles={"accept-button"} onClicked={acceptedbutton }/>
                      </Grid>
                      <Grid item>
                        <CustomButton name="Cancel" onClicked={() => statechanger(false)} addStyles="reject-button"/>
                        
                      </Grid>

                    </Grid>}


                     
                </div>
              </div>
             </div> 
    
  </div>
)
}

export default AppliedPopupMsg
