import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup({options}) {
    return (
        <FormControl>
      
            <RadioGroup
                row
                //aria-labelledby="demo-radio-buttons-group-label"
                //defaultValue="female"
                name="radio-buttons-group"
            >
                {options.map((i)=>(<FormControlLabel value= {i} control={<Radio />} label={i} />))}

               
            </RadioGroup>
        </FormControl>
    );
}