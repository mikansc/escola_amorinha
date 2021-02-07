import React from "react";

const Table = ({ children, tableHeaders }) => {
  return (
    <table className="table table-hover table-default" width="100%">
      <thead data-testid="thead">
        <tr>
          {tableHeaders &&
            tableHeaders.map((header, index) => (
              <th key={index} scope="col">
                {header}
              </th>
            ))}
        </tr>
      </thead>
      <tbody data-testid="tbody">{children}</tbody>
    </table>
  );
};

export default Table;
