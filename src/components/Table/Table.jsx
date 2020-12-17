/* eslint-disable react/prop-types */
import React from "react";

const Table = ({ children }) => {
  return (
    <table>
      <thead data-testid="thead">
        <tr>
          <th>Nome</th>
          <th>Data de Nascimento</th>
          <th>Turma</th>
          <th>Telefone para Emergências</th>
          <th>Em caso de emergência avisar</th>
          <th></th>
        </tr>
      </thead>
      <tbody data-testid="tbody">{children}</tbody>
    </table>
  );
};

export default Table;
