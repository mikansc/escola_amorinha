import React, { useState } from "react";
import { RiDeleteBin2Line } from "react-icons/ri";

import useForm from "../hook/useForm";
import DateField from "../components/DateField/DateField";
import TextField from "../components/TextField/TextField";
import PhoneField from "../components/PhoneFIeld/PhoneField";
import SelectField from "../components/SelectField/SelectField";
import ToggleField from "../components/ToggleField/ToggleField";
import Button from "../components/Button/Button";
import FormRow from "../components/FormRow/FormRow";
import Table from "../components/Table/Table";
import TableDataLine from "../components/Table/TableDataLine";
import Cell from "../components/Table/Cell";

const NewStudentFormPage = () => {
  const [handlers, setHandlers] = useState([]);
  const [authorizedName, setAuthorizedName] = useState("");
  const [authorizedRelationship, setAuthorizedRelationship] = useState("Pais");
  const [field, setFieldValue] = useForm({
    name: "",
    birthdate: "",
    responsible: "",
    phone: "",
    contactOnEmergency: "",
    emergencyPhone: "",
    hasFoodRestriction: false,
    foodRestriction: "",
    authorizeImage: "",
    authorizedHandlers: [],
    class: "",
    observations: "",
  });

  const handleAddHandler = () => {
    setHandlers([...handlers, { authorizedName, authorizedRelationship }]);
    setFieldValue("authorizedHandlers", [
      ...handlers,
      { authorizedName, authorizedRelationship },
    ]);
    setAuthorizedRelationship("");
    setAuthorizedName("");
  };

  const handleSubmit = () => {
    console.log(field);
  };

  return (
    <section className="container m-3 p-2 ">
      <fieldset className="mt-5 p-2 border shadow-sm">
        <legend className="h5">Dados iniciais</legend>
        <FormRow>
          <TextField
            title="Nome do Aluno"
            id="name"
            columns="8"
            value={field.name}
            onChange={(e) => setFieldValue("name", e.target.value)}
          />
          <DateField
            title="Data de Nascimento"
            id="birthdate"
            columns="4"
            value={field.birthdate}
            onChange={(e) => setFieldValue("birthdate", e.target.value)}
          />
        </FormRow>

        <FormRow>
          <TextField
            title="Responsável"
            id="responsible"
            columns="8"
            value={field.responsible}
            onChange={(e) => setFieldValue("responsible", e.target.value)}
          />
          <PhoneField
            title="Telefone do responsável"
            id="phone"
            columns="4"
            value={field.phone}
            onChange={(e) => setFieldValue("phone", e.target.value)}
          />
        </FormRow>

        <FormRow justify="end">
          <SelectField
            title="Em caso de emergência, avisar"
            id="contactOnEmergency"
            columns="4"
            options={["Pais", "Tios", "Avós", "Responsável"]}
            value={field.contactOnEmergency}
            onChange={(e) =>
              setFieldValue("contactOnEmergency", e.target.value)
            }
          />
          <PhoneField
            title="Telefone para emergências"
            id="emergencyPhone"
            columns="4"
            value={field.emergencyPhone}
            onChange={(e) => setFieldValue("emergencyPhone", e.target.value)}
          />
        </FormRow>
      </fieldset>

      <fieldset className="mt-5 p-2 border shadow-sm">
        <legend className="h5">Restrições alimentares</legend>
        <FormRow>
          <ToggleField
            title="Possui restrição alimentar"
            id="hasFoodRestriction"
            columns="4"
            value={field.hasFoodRestriction}
            onChange={(e) =>
              setFieldValue("hasFoodRestriction", e.target.checked)
            }
          />
          <TextField
            title="Descrição da restrição alimentar"
            id="foodRestriction"
            columns="8"
            value={field.foodRestriction}
            onChange={(e) => setFieldValue("foodRestriction", e.target.value)}
          />
        </FormRow>
      </fieldset>

      <fieldset className="mt-5 p-2 border shadow-sm">
        <legend className="h5">Autorizações</legend>
        <FormRow>
          <TextField
            title="Nome"
            id="authorizedName"
            columns="6"
            value={authorizedName}
            onChange={(e) => setAuthorizedName(e.target.value)}
          />
          <SelectField
            title="Parentesco"
            id="authorizedRelationship"
            columns="4"
            options={["Pais", "Tios", "Avós", "Responsável"]}
            value={authorizedRelationship}
            onChange={(e) => setAuthorizedRelationship(e.target.value)}
          />
          <Button color="primary" onClick={handleAddHandler}>
            Adicionar
          </Button>
          <Table tableHeaders={["Nome", "Parentesco", "Opções"]}>
            {handlers?.map((entry, idx) => (
              <TableDataLine key={idx}>
                <Cell width="50%">{entry.authorizedName}</Cell>
                <Cell width="30%">{entry.authorizedRelationship}</Cell>
                <Cell width="20%">
                  <Button color="info">
                    <RiDeleteBin2Line />
                  </Button>
                </Cell>
              </TableDataLine>
            ))}
          </Table>
        </FormRow>
      </fieldset>

      <fieldset className="mt-5 p-2 border shadow-sm">
        <legend className="h5">Turma</legend>
        <FormRow>
          <SelectField
            title="Turma"
            id="class"
            options={["Ensino Médio 1", "Ensino Médio 2", "Ensino Médio 3"]}
            columns="4"
            value={field.class}
            onChange={(e) => setFieldValue("class", e.target.value)}
          />
        </FormRow>
      </fieldset>

      <fieldset className="mt-5 p-2 border shadow-sm">
        <legend className="h5">Observações</legend>
        <FormRow>
          <ToggleField
            title="Autoriza uso de imagem e vídeo para eventos da escola"
            id="authorizeImage"
            columns="6"
            value={field.authorizeImage}
            onChange={(e) => setFieldValue("authorizeImage", e.target.checked)}
          />
          <TextField
            title="Observações"
            id="observations"
            columns="6"
            value={field.observations}
            onChange={(e) => setFieldValue("observations", e.target.value)}
          />
        </FormRow>
      </fieldset>

      <button
        type="submit"
        className="mt-5 btn btn-primary"
        onClick={handleSubmit}
      >
        Cadastrar
      </button>
    </section>
  );
};

export default NewStudentFormPage;
