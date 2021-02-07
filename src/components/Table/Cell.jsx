import React from "react";

const Cell = ({ width = "0", children }) => {
  return <td width={width}>{children}</td>;
};

export default Cell;
