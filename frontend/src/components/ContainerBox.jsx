import { Grid } from '@mui/material'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import CustomButton from './Buttons'
import "./ContainerBox.css"
import SkillContainer from './SkillContainer'
import callAPI from "../utils/callAPI";


function ContainerBox(props) {
    const [visibilityState, setVisibilityState] = useState(props.user_assesment.visibility)
    
    async function handleChange(e) {
        // console.log(props.user_assesment.id)
        console.log(e.target.value)
        // change option when clicked in the dropdown
        setVisibilityState(e.target.value)

        // update visibility in the database
        let response_obj = await callAPI({
            endpoint: `/userAssesment/update_visibility/${props.user_assesment.id}`,
            method: "PUT",
            data: {visibility: e.target.value},
            });
    };
  return (
    <div className='containerboxmain'>
        <Grid container direction="row" justifyContent="space-between">
            <Grid item >
         <div className='containerhead'>
         Name of the Assesment


         </div>
         
            <Grid item>

            <Grid container direction="row">
                <Grid item className='containersub'>
             
                Assesed Date: 
           
                </Grid>
                <Grid item>
                    {props.user_assesment.accessed_date}
                </Grid>

            </Grid>

            <Grid container direction="row">
                <Grid item className='containersub'>
             
                Marks Obtained: 
           
                </Grid>
                <Grid item>
                    {props.user_assesment.score} / 20
                </Grid>

            </Grid>

            <Grid container direction="row">
                <Grid item className='containersub'>
             
                Visibility: 
           
                </Grid>

                <Grid item>
              <select components={{ DropdownIndicator:() => null }} onChange={handleChange} className='status-buttonassesment' value={visibilityState}>
                <option value={false}> Hide</option>
                <option value={true}> Show</option>

                {/* Backend bata aayeko Visibility true xa vane SHow vanera tyo dropdown ma lekne. */}
                {/* Dropdown change vaye paxi backend bata update api call garera visibility change garne. */}
                

                

              {/* <CustomButton name="Ready to interview" addStyles={"status-button"} /> */}


              </select>
            </Grid>
                {/* <Grid item>
                    <SkillContainer name="Hidden"/>
                </Grid> */}

            </Grid>

            </Grid>

            
           

            </Grid>

            <Grid item>
                <Link to="/Assesment/ViewAssesment"  state={{target_field_id: props.user_assesment.target_field_id, user_assesment_id: props.user_assesment.id, score: props.user_assesment.score, visibility: props.user_assesment.visibility, difficulty: props.user_assesment.target_field.difficulty}}  className='assesment-link'>
                    
                
                <CustomButton addStyles={"accept-button"} name="View Assesment"></CustomButton>
                </Link>
            </Grid>
        </Grid>
       
      
    </div>
  )
}

export default ContainerBox
