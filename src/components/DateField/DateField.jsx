/* eslint-disable react/prop-types */
import React from "react";

const DateField = ({ title = "Data", id, ...props }) => {
  return (
    <div className="form-group col-md-4">
      <label htmlFor={id}>{title}</label>
      <input type="date" className="form-control" id={id} {...props} />
    </div>
  );
};

export default DateField;
