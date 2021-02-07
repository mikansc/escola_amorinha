import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoImg } from "../../assets/img/logo.svg";

const DefaultPage = ({ children }) => {
  return (
    <>
      <div className="bg-light">
        <nav className="navbar navbar-dark bg-secondary">
          <Link to="/" className="navbar-brand">
            Amorinha
            <LogoImg style={{ width: 20, height: 20, marginLeft: 5 }} />
          </Link>
        </nav>
      </div>
      <main className="container mt-4 p-4 border">
        <h1 className="h4">Sistema de controle de alunos Amorinha</h1>
        {children}
      </main>
    </>
  );
};

export default DefaultPage;
