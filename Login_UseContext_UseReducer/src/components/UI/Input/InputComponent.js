import React from "react";

import classes from "./InputComponent.module.css";

// this is a re-usable input component
const InputComponent = (props) => {
  return (
    <div
      className={`${classes.control} ${props.isValid === false ? classes.invalid : ""}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default InputComponent;
