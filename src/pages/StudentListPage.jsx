import React from "react";
import Filter from "../components/Filter/Filter";
import Table from "../components/Table/Table";
import TableDataLine from "../components/Table/TableDataLine";
import Cell from "../components/Table/Cell";

const StudentListPage = ({ schoolchildren = [] }) => {
  const studentListHeaders = [
    "Nome",
    "Data de Nascimento",
    "Turma",
    "Telefone para Emergências",
    "Em caso de emergência avisar",
    "Opções",
  ];

  return (
    <section className="container m-3 p-2 border">
      <h2 className="h5">Lista de alunos</h2>
      <Filter />
      <Table tableHeaders={studentListHeaders}>
        {schoolchildren &&
          schoolchildren.map((child, index) => (
            <TableDataLine key={index}>
              <Cell>{child.name}</Cell>
              <Cell>{child.birthdate}</Cell>
              <Cell>{child.class}</Cell>
              <Cell>{child.emergencyPhone}</Cell>
              <Cell>{child.contactOnEmergency}</Cell>
              <Cell>Editar Excluir</Cell>
            </TableDataLine>
          ))}
      </Table>
    </section>
  );
};

export default StudentListPage;
