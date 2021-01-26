import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Link to="/estudantes">Lista de estudantes</Link>
      <Link to="/estudantes/novo">Novo estudante</Link>
    </div>
  );
};

export default HomePage;
