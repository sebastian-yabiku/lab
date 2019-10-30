import React from "react";
import "./textarea.scss";

function Textarea(props) {
  const {
    children,
    className = "",
    placeholder = "",
    name = "",
    value = "",
    onChange = () => {}
  } = props;

  return (
    <textarea
      className={`textarea ${className}`}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    >
      {children}
    </textarea>
  );
}

export { Textarea };
