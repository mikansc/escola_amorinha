import React from "react";

const Button = ({ color = "default", children, ...rest }) => {
  return (
    <button className={`btn btn-outline-${color} mr-1`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
