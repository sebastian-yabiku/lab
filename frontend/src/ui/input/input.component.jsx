import React from "react";
import "./input.scss";

function Input(props) {
  const {
    children,
    className = "",
    type = "text",
    placeholder = "",
    name= "",
    value="",
    onChange = () => {}
  } = props;

  return (
    <input
      className={`input ${className}`}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required
    >
      {children}
    </input>
  );
}

export { Input };
