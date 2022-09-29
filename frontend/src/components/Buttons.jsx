import { IconButton } from "@mui/material";
import React from "react";
import "./button.css";

const CustomButton = ({
  children,
  name,
  addStyles,
  onClicked,
  iconbutton,
  ...rest
}) => {
  return (
    <button
      id={name}
      className={"main_button " + addStyles}
      onClick={onClicked}
      iconbutton={IconButton}
      {...rest}
    >
      {name}
    </button>
  );
};

export default CustomButton;
