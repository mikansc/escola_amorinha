import React, { useEffect, useState } from "react";
import Filter from "../components/Filter/Filter";
import Table from "../components/Table/Table";
import TableDataLine from "../components/Table/TableDataLine";
import Cell from "../components/Table/Cell";
import { RiDeleteBin2Line, RiEditLine } from "react-icons/ri";

import StudentAPI from "../services/AxiosStudentAPI";

const studentListHeaders = [
  "Nome",
  "Nascimento",
  "Turma",
  "Tel. Emergências",
  "Contato emergência",
  "Opções",
];

const StudentListPage = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    StudentAPI.findAll()
      .then((data) => {
        setStudents(data);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="container m-3 p-2 border">
      <h2 className="h5">Lista de alunos</h2>
      <Filter />
      <Table tableHeaders={studentListHeaders}>
        {students &&
          students.map((student) => (
            <TableDataLine key={student.id}>
              <Cell>{student.name}</Cell>
              <Cell>{student.birthdate}</Cell>
              <Cell>{student.class}</Cell>
              <Cell>{student.emergencyPhone}</Cell>
              <Cell>{student.contactOnEmergency}</Cell>
              <Cell>
                <button className="btn btn-outline-info">
                  <RiEditLine />
                </button>
                <button className="btn btn-outline-danger ml-2" title="Excluir">
                  <RiDeleteBin2Line />
                </button>
              </Cell>
            </TableDataLine>
          ))}
      </Table>
    </section>
  );
};

export default StudentListPage;
