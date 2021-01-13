/* eslint-disable react/prop-types */
import React from "react";

const TextField = ({ title, id, columns = "12", ...props }) => {
  return (
    <div className={`form-group col-md-${columns}`}>
      <label htmlFor={id}>{title}</label>
      <input type="text" className="form-control" {...props} />
    </div>
  );
};

export default TextField;
