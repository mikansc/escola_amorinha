/* eslint-disable react/prop-types */
import React from "react";

const MainPage = ({ children }) => {
  return (
    <>
      <div className="bg-light">
        <nav className="navbar navbar-dark bg-secondary">
          <a className="navbar-brand">Amorinha</a>
        </nav>
      </div>
      <main className="container mt-4 p-4 border">
        <h1 className="h4">Sistema de controle de alunos Amorinha</h1>
        <section>{children}</section>
      </main>
    </>
  );
};

export default MainPage;
