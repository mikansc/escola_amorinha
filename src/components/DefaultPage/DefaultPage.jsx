/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const DefaultPage = ({ children }) => {
  return (
    <>
      <div className="bg-light">
        <nav className="navbar navbar-dark bg-secondary">
          <Link to="/" className="navbar-brand">
            Amorinha
          </Link>
        </nav>
      </div>
      <main className="container mt-4 p-4 border">
        <h1 className="h4">Sistema de controle de alunos Amorinha</h1>
        <section>{children}</section>
      </main>
    </>
  );
};

export default DefaultPage;
