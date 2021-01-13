/* eslint-disable react/prop-types */
import React from "react";
import InputMask from "react-input-mask";

const PhoneField = ({ title = "Data", id, columns = "12", ...props }) => {
  return (
    <div className={`form-group col-md-${columns}`}>
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
