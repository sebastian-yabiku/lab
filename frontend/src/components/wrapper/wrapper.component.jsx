import React from "react";
import "./wrapper.scss";

function Wrapper(props) {
  const { children, className = "" } = props;
  return <div className={`wrapper ${className}`}>{children}</div>;
}

export { Wrapper };
