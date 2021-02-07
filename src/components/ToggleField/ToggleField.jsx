import React, { useState } from "react";

const ToggleField = ({ title, onChange, id, columns = "12", ...rest }) => {
  const [fieldChecked, setFieldChecked] = useState(false);

  const handleOnChange = (e) => {
    setFieldChecked(!fieldChecked);
    onChange(e);
  };
  return (
    <div className={`form-group col-md-${columns}`}>
      <div className="custom-control custom-switch">
        <input
          type="checkbox"
          className="custom-control-input"
          id={id}
          name={id}
          checked={fieldChecked}
          onChange={handleOnChange}
          {...rest}
        />
        <label className="custom-control-label" htmlFor={id}>
          {title}
        </label>
      </div>
    </div>
  );
};

export default ToggleField;
