import React from "react";
import "./select.scss";

function Select(props) {
  const {
    className = "",
    name = "",
    value = "",
    options = [{ key: "", value: "Seleccionar" }],
    onChange = () => {}
  } = props;
  return (
    <select
      className={`select ${className}`}
      name={name}
      value={value}
      onChange={onChange}
    >
      {options.map((option, key) => (
        <option value={option.key} key={key}>
          {option.value}
        </option>
      ))}
    </select>
  );
}

export { Select };
