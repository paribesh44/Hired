/* import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const DropDown = ({ label, value, options, onChange }) => {
  return (
    <FormControl fullWidth variant="standard">
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={onChange}>
        {options.map((item) => (
          <MenuItem value={item.value}>{item.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  
    <Grid item>
      <div>
        <FormControl>
          <InputLabel>{label}</InputLabel>
          <Select value={value} label={label} onChange={onChange}>
            {options.map((item) => (
              <MenuItem value={item.i}>{item.i}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Grid>
  );
};

export default DropDown;

 */

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { height } from '@mui/system';

export default function DropDown({options, name_type}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      
      <FormControl sx={{ m: 1, minWidth: 380}}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Select</em>
          </MenuItem>
          {options&&options.map((i)=>( <MenuItem value={i.value}>{i.description}</MenuItem>))}
        </Select>
      
      </FormControl>
    </div>
  );
}
