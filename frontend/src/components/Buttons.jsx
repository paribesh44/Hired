import React from "react";
import "./button.css";

const CustomButton = ({
  children,
  name,
  addStyles,
  onClicked,
  Icon,
  ...rest
}) => {
  return (
    <button
      id={name}
      className={"main_button " + addStyles}
      onClick={onClicked}
      {...rest}
    >
      {Icon && <Icon />}
      {name}
    </button>
  );
};

export default CustomButton;
