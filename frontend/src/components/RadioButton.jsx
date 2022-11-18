import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup({options, name_is}) {
    const [value, setValue] = React.useState("")

    function handleChange(e) {
        setValue(e.target.value)
    }

    return (
        <FormControl>
      
            <RadioGroup
                value={value}
                row
                onChange={handleChange}
                name={name_is}
                //aria-labelledby="demo-radio-buttons-group-label"
                //defaultValue="female"
            >
                {options.map((i)=>(<FormControlLabel value= {i} control={<Radio />} label={i} />))}

               
            </RadioGroup>
        </FormControl>
    );
}