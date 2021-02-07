import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as NewStudentImg } from "../assets/img/new-student.svg";
import { ReactComponent as StudentListImg } from "../assets/img/student-list.svg";

const HomePage = () => {
  return (
    <div className="row">
      <div className="col">
        <Link to="/estudantes/novo">
          <div className="card mb-3">
            <div className="card-body">
              <div className="card-text text-center">
                <div className="img-fluid ">
                  <NewStudentImg style={{ width: 200, height: 200 }} />
                </div>
                <h4 className="card-title">Novo estudante</h4>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="col">
        <Link to="/estudantes/">
          <div className="card mb-3">
            <div className="card-body">
              <div className="card-text text-center">
                <div className="img-fluid">
                  <StudentListImg style={{ width: 200, height: 200 }} />
                </div>
                <h4 className="card-title">Lista de estudantes</h4>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
