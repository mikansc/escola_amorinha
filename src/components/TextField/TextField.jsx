import React from "react";

const TextField = ({ title, id, columns = "12", ...props }) => {
  return (
    <div className={`form-group col-md-${columns}`}>
      <label htmlFor={id}>{title}</label>
      <input
        type="text"
        className="form-control"
        id={id}
        name={id}
        {...props}
      />
    </div>
  );
};

export default TextField;
