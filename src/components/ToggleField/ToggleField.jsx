/* eslint-disable react/prop-types */
import React from "react";

const ToggleField = ({ title, id, disabled, columns = "12", ...props }) => {
  return (
    <div className={`form-group col-md-${columns}`}>
      <div className="custom-control custom-switch">
        <input
          type="checkbox"
          className="custom-control-input"
          disabled={disabled}
          id={id}
        />
        <label className="custom-control-label" htmlFor={id}>
          {title}
        </label>
      </div>
    </div>
  );
};

export default ToggleField;
