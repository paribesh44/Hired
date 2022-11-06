import React from 'react'
import "./ovalcontainer.css"

const SkillContainer=({children, name, addStyles,...rest})=> {
  return (
    <div  className={"skillcontainerpadding"}>
      <div
       id={name}
       className={"skillcontainerbasic"}
       {...rest}       
      >
        {name}
      </div>     
    </div>
  );
};

export default SkillContainer;
