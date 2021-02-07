import React, { useState } from "react";

const Filter = ({ onFilter, isLoading = false }) => {
  const [term, setTerm] = useState("");

  const handleOnChange = (value) => {
    onFilter(value);
    setTerm(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pesquisar", term);
    onFilter(term);
  };

  const handleOnFocus = () => {
    setTerm("");
  };

  return (
    <form className="form-inline" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="form-control mr-2 my-4  w-50"
        type="text"
        placeholder="Buscar aluno pelo nome..."
        onChange={(e) => handleOnChange(e.target.value)}
        onFocus={handleOnFocus}
        value={term}
      />
      {isLoading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden"></span>
        </div>
      )}
    </form>
  );
};

export default Filter;
