import React from 'react'
import { ImClipboard } from "react-icons/im";
import { IoIosTimer } from "react-icons/io";
import { Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function CardAssesment(props) {
  return (
    <div>
         <Link to ="/Assesment/AssesmentQuestions" state={{target_field_id: props.id}} className='assesment-link'>
        
        <div className='cardassesment-main'>

        
        <Grid container direction="row" justifyContent={"space-between"} >
            <Grid item>
                <Grid container direction="column">
                <div className='typeofasses'>
                    {props.type}        </div>
                    <div className='typeofasses'>{props.difficulty}</div>
        <div className='nameofasses'>
            {props.name}
        </div>

                </Grid>
            </Grid>
        <div > <ImClipboard className='status-icon'/></div>
     

        </Grid>
        <div>
            {
            props.languages.map(function(item, index) {
                return <span key={`demo_snap_${index}`}>{ (index ? ', ' : '') + item }</span>;
            })
            }
        </div>


        <div className='card-buttom'>
        <IoIosTimer className='card-buttomicon'/>  {props.time}
        </div>
      
    </div>
    </Link>
    </div>
    
  )
}

export default CardAssesment
