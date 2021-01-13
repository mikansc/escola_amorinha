/* eslint-disable react/prop-types */
import React from "react";
import InputMask from "react-input-mask";

const PhoneField = ({ title = "Data", id, ...props }) => {
  return (
    <div className="form-group col-md-4">
      <label htmlFor={id}>{title}</label>
      <InputMask
        {...props}
        className="form-control"
        mask="(99) 999999999"
        maskChar=" "
      />
    </div>
  );
};

export default PhoneField;
