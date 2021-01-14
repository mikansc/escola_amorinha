/* eslint-disable react/prop-types */
import React from "react";

const SelectField = ({ title, id, options, columns = "12", ...props }) => {
  return (
    <div className={`form-group col-md-${columns}`}>
      <label htmlFor={id}>{title}</label>
      <select className="custom-select" {...props}>
        {options &&
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectField;
