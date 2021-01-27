import React, { useEffect } from "react";
import Filter from "../components/Filter/Filter";
import Table from "../components/Table/Table";
import TableDataLine from "../components/Table/TableDataLine";
import Cell from "../components/Table/Cell";
import { RiDeleteBin2Line, RiEditLine } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";
import { listStudents } from "../store/Students/actions";
import Button from "../components/Button/Button";
import useSearch from "../hook/useSearch";

const studentListHeaders = [
  "Nome",
  "Nascimento",
  "Turma",
  "Tel. Emergências",
  "Contato emergência",
  "Opções",
];

const StudentListPage = () => {
  const studentsState = useSelector((state) => state.students);
  const [term, search] = useSearch("");
  const { isLoading, list: students } = studentsState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listStudents(term));
  }, [dispatch, term]);

  const handleFilter = (text) => {
    search(text);
  };

  return (
    <section className="container m-3 p-2 border">
      <h2 className="h5">Lista de alunos</h2>
      <Filter onFilter={handleFilter} isLoading={isLoading} />
      <Table tableHeaders={studentListHeaders}>
        {isLoading ? (
          <tr>
            <td colSpan={studentListHeaders.length}>carregando...</td>
          </tr>
        ) : students.length === 0 ? (
          <tr>
            <td colSpan={studentListHeaders.length}>
              Nenhum aluno encontrado.
            </td>
          </tr>
        ) : (
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
