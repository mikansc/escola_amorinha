import React from "react";

const Filter = () => {
  return (
    <div className="form-inline">
      <input
        className="form-control mr-2 my-4  w-50"
        type="text"
        placeholder="Buscar aluno pelo nome..."
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="button">
        Buscar
      </button>
    </div>
  );
};

export default Filter;
