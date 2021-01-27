import React, { useEffect } from "react";
import Filter from "../components/Filter/Filter";
import Table from "../components/Table/Table";
import TableDataLine from "../components/Table/TableDataLine";
import Cell from "../components/Table/Cell";
import { RiDeleteBin2Line, RiEditLine } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";
import { listStudents } from "../store/Students/actions";
import Button from "../components/Button/Button";

const studentListHeaders = [
  "Nome",
  "Nascimento",
  "Turma",
  "Tel. Emergências",
  "Contato emergência",
  "Opções",
];

const StudentListPage = () => {
  const dispatch = useDispatch();
  const studentsState = useSelector((state) => state.students);
  const { isLoading, list: students } = studentsState;

  useEffect(() => {
    if (students.length === 0) {
      dispatch(listStudents());
    }
  }, [dispatch]);

  return (
    <section className="container m-3 p-2 border">
      <h2 className="h5">Lista de alunos</h2>
      <Filter />
      <Table tableHeaders={studentListHeaders}>
        {isLoading ? (
          <p>carregando...</p>
        ) : (
          students &&
          students.map((student) => (
            <TableDataLine key={student.id}>
              <Cell>{student.name}</Cell>
              <Cell>{student.birthdate}</Cell>
              <Cell>{student.class}</Cell>
              <Cell>{student.emergencyPhone}</Cell>
              <Cell>{student.contactOnEmergency}</Cell>
              <Cell>
                <Button color="info">
                  <RiDeleteBin2Line />
                </Button>
                <Button color="danger">
                  <RiEditLine />
                </Button>
              </Cell>
            </TableDataLine>
          ))
        )}
      </Table>
    </section>
  );
};

export default StudentListPage;
