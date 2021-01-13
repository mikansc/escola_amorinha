/* eslint-disable react/prop-types */
import React from "react";

const SelectField = ({ title, id, children, columns = "12", ...props }) => {
  return (
    <div className={`form-group col-md-${columns}`}>
      <label htmlFor={id}>{title}</label>
      <select className="custom-select">{children}</select>
    </div>
  );
};

export default SelectField;
