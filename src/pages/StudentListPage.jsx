import React from "react";
import Filter from "../components/Filter/Filter";
import Table from "../components/Table/Table";
import TableDataLine from "../components/Table/TableDataLine";
import Cell from "../components/Table/Cell";

const schoolchildren = [
  {
    id: 1,
    name: "Fulana da Silva de Souza",
    birthdate: "29/01/1991",
    class: "1º ano do Ensino Médio",
    emergencyPhone: "(47) 91234-5678",
    contactOnEmergency: "Pais",
  },
];

const StudentListPage = () => {
  const studentListHeaders = [
    "Nome",
    "Nascimento",
    "Turma",
    "Tel. Emergências",
    "Contato emergência",
    "Opções",
  ];

  return (
    <section className="container m-3 p-2 border">
      <h2 className="h5">Lista de alunos</h2>
      <Filter />
      <Table tableHeaders={studentListHeaders}>
        {schoolchildren &&
          schoolchildren.map((child) => (
            <TableDataLine key={child.id}>
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
