/* eslint-disable react/prop-types */
import React from "react";

const Table = ({ children }) => {
  return (
    <table className="table table-hover table-default">
      <thead data-testid="thead">
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Data de Nascimento</th>
          <th scope="col">Turma</th>
          <th scope="col">Telefone para Emergências</th>
          <th scope="col">Em caso de emergência avisar</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody data-testid="tbody">{children}</tbody>
    </table>
  );
};

export default Table;
