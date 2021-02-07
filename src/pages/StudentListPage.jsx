/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import Filter from "../components/Filter/Filter";
import Table from "../components/Table/Table";
import TableDataLine from "../components/Table/TableDataLine";
import Cell from "../components/Table/Cell";
import { RiDeleteBin2Line, RiEditLine } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";
import { listStudents } from "../store/Students/actions";
import Button from "../components/Button/Button";
import useSearch from "../hook/useSearch";
import { useHistory } from "react-router-dom";
import AxiosStudentAPI from "../services/AxiosStudentAPI";

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
  const history = useHistory();

  useEffect(() => {
    dispatch(listStudents(term));
  }, [dispatch, term]);

  const handleFilter = (text) => {
    search(text);
  };

  const handleEditStudent = (student) => {
    history.push(`/estudantes/${student.id}/editar`, student);
  };

  const handleDeleteStudent = (id) => {
    console.log("Id do estudante:", id);
    (async function () {
      await AxiosStudentAPI.delete(id)
        .then(() => {
          toast.success("Estudante deletado com sucesso!");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Erro ao deletar o estudante!");
        });
    })();
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
                <Button
                  color="info"
                  onClick={() => handleDeleteStudent(student.id)}
                >
                  <RiDeleteBin2Line />
                </Button>
                <Button
                  color="danger"
                  onClick={() => handleEditStudent(student)}
                >
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
