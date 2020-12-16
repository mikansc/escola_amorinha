import React from "react";

import "./assets/css/style.css";
import MainPage from "./pages/MainPage";

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
        <div className="">
          <table className="table table-hover table-default">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </MainPage>
  );
}

export default App;
