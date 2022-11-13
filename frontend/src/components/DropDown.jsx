import React, { useState } from "react";
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
  
  );
};

export default DropDown;
