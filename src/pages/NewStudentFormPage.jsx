import React from "react";

import DateField from "../components/DateField/DateField";
import TextField from "../components/TextField/TextField";
import PhoneField from "../components/PhoneFIeld/PhoneField";
import SelectField from "../components/SelectField/SelectField";
import ToggleField from "../components/ToggleField/ToggleField";
import FormRow from "../components/FormRow/FormRow";
import AuthorizedPeople from "../components/AuthorizedPeople/AuthorizedPeople";
import Table from "../components/Table/Table";
import TableDataLine from "../components/Table/TableDataLine";
import Cell from "../components/Table/Cell";

const NewStudentFormPage = () => {
  return (
    <section className="container m-3 p-2 ">
      <form>
        <fieldset className="mt-5 p-2 border shadow-sm">
          <legend className="h5">Dados iniciais</legend>
          <FormRow>
            <TextField
              title="Nome do Aluno"
              name="student"
              id="student"
              columns="8"
            />
            <DateField title="Data de Nascimento" id="birthdate" columns="4" />
          </FormRow>

          <FormRow>
            <TextField
              title="Responsável"
              name="responsible"
              id="responsible"
              columns="8"
            />
            <PhoneField title="Telefone do responsável" columns="4" />
          </FormRow>

          <FormRow justify="end">
            <SelectField
              title="Em caso de emergência, avisar"
              name="emergency"
              id="emergency"
              defaultValue="3"
              columns="4"
              options={["Pais", "Tios", "Avós", "Responsável"]}
            />
            <PhoneField title="Telefone para emergências" columns="4" />
          </FormRow>
        </fieldset>

        <fieldset className="mt-5 p-2 border shadow-sm">
          <legend className="h5">Restrições alimentares</legend>
          <FormRow>
            <ToggleField
              title="Possui restrição alimentar"
              id="foodRestriction"
              name="foodRestriction"
              columns="4"
            />
            <TextField
              title="Descrição da restrição alimentar"
              name="responsible"
              id="responsible"
              columns="8"
            />
          </FormRow>
        </fieldset>

        <fieldset className="mt-5 p-2 border shadow-sm">
          <legend className="h5">Autorizações</legend>
          <FormRow>
            <AuthorizedPeople
              inputTitle="Pessoas autorizadas a buscar"
              selectTitle="Grau de parentesco"
              name="emergency"
              id="emergency"
              options={["Pais", "Tios", "Avós", "Responsável"]}
              columns={6}
            >
              <Table tableHeaders={["Nome", "Parentesco"]}>
                <TableDataLine>
                  <Cell>Oi</Cell>
                  <Cell>Pai</Cell>
                </TableDataLine>
              </Table>
            </AuthorizedPeople>
          </FormRow>
        </fieldset>

        <fieldset className="mt-5 p-2 border shadow-sm">
          <legend className="h5">Turma</legend>
          <FormRow>
            <ToggleField
              title="Autoriza uso de imagem e vídeo para eventos da escola"
              id="imageAuthorization"
              name="imageAuthorization"
              columns="6"
            />
            <SelectField
              title="Turma"
              name="emergency"
              id="emergency"
              options={["Ensino Médio 1", "Ensino Médio 2", "Ensino Médio 3"]}
              columns="6"
            />
          </FormRow>
        </fieldset>

        <button type="submit" className="mt-5 btn btn-primary">
          Cadastrar
        </button>
      </form>
    </section>
  );
};

export default NewStudentFormPage;
