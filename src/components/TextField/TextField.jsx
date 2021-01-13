/* eslint-disable react/prop-types */
import React from "react";

const TextField = ({ title, id, ...props }) => {
  return (
    <div className="form-group col-md-8">
      <label htmlFor={id}>{title}</label>
      <input type="text" className="form-control" {...props} />
    </div>
  );
};

export default TextField;
