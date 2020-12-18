import React from "react";

import "./assets/css/style.css";
import MainPage from "./pages/MainPage";
import Filter from "./components/Filter/Filter";
import Table from "./components/Table/Table";
import TableDataLine from "./components/Table/TableDataLine";

function App() {
  return (
    <MainPage>
      <section className="container m-3 p-2 border">
        <h2 className="h5">Formulário de cadastro</h2>
        <form>
          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="inputCity">Nome do aluno</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="inputZip">Data de Nascimento</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>

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
