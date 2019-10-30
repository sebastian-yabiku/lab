import React from "react";
import "./button.scss";

function Button(props) {
  const { children, className = "" } = props;
  return <button className={`button ${className}`}>{children}</button>;
}

export { Button };
