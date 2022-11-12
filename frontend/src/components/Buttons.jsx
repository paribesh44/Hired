import { IconButton } from "@mui/material";
import React from "react";
import "./button.css";

const CustomButton = ({
  children,
  name,
  addStyles,
  onClicked,
  iconbutton,
  type,
  ...rest
}) => {
  return (
    <button
      id={name}
      className={"main_button " + addStyles}
      onClick={onClicked}
      iconbutton={IconButton}
      {...rest}
      type = {type==="submit" ? "submit": "button"}
    >
      {name}
  
    </button>
  );
};

export default CustomButton;
