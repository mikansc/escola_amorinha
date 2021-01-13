import React from "react";

import "./assets/css/style.css";
import MainPage from "./pages/MainPage";
import Filter from "./components/Filter/Filter";
import Table from "./components/Table/Table";
import TableDataLine from "./components/Table/TableDataLine";
import DateField from "./components/DateField/DateField";
import TextField from "./components/TextField/TextField";
import PhoneField from "./components/PhoneFIeld/PhoneField";
import SelectField from "./components/SelectField/SelectField";
import ToggleField from "./components/ToggleField/ToggleField";

function App() {
  return (
    <MainPage>
      <section className="container m-3 p-2 border">
        <h2 className="h5">Formulário de cadastro</h2>
        <form>
          <div className="form-row">
            <TextField title="Nome do Aluno" name="student" id="student" />

            <DateField title="Data de Nascimento" id="birthdate" />
          </div>
          <div className="form-row">
            <TextField
              title="Responsável"
              name="responsible"
              id="responsible"
            />

            <PhoneField title="Telefone do responsável" />
          </div>
          <div className="form-row">
            <SelectField
              title="Em caso de emergência, avisar"
              name="emergency"
              id="emergency"
            >
              <option selected="">Pais</option>
              <option value="1">Tios</option>
              <option value="2">Avós</option>
              <option value="3">Responsável</option>
            </SelectField>

            <PhoneField title="Telefone para emergências" />
            <ToggleField
              title="Possui restrição alimentar"
              id="foodRestriction"
              name="foodRestriction"
            />
          </div>
          <div className="form-row">
            <TextField
              title="Descrição da restrição alimentar"
              name="responsible"
              id="responsible"
            />
          </div>
          <div className="form-row">
            <ToggleField
              title="Autoriza uso de imagem e vídeo para eventos da escola"
              id="imageAuthorization"
              name="imageAuthorization"
            />
          </div>{" "}
          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-4 my-1">
              <div className="custom-control custom-checkbox mr-sm-2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customControlAutosizing"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlAutosizing"
                >
                  Remember my preference
                </label>
              </div>
            </div>
            <div className="form-group col-md-8">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
      <section className="container m-3 p-2 border">
        <h2 className="h5">Lista de alunos</h2>
        <Filter />
        <Table>
          <TableDataLine />
        </Table>
      </section>
    </MainPage>
  );
}

export default App;
