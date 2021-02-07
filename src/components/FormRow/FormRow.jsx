import React from "react";

const FormRow = ({ children, justify = "between" }) => {
  return (
    <div className={`form-row align-items-center justify-content-${justify}`}>
      {children}
    </div>
  );
};

export default FormRow;
