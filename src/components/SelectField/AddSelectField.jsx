/* eslint-disable react/prop-types */
import React from "react";
import CreatableSelect from "react-select/creatable";

const AddSelectField = ({
  infoMessage,
  title,
  id,
  children,
  columns = "12",
  ...props
}) => {
  const handleChange = () => {
    console.log("Handle Change");
  };
  const handleInputChange = () => {
    console.log("Handle Input Change");
  };

  return (
    <div className={`form-group col-md-${columns}`}>
      <label htmlFor={id}>{title}</label>
      <CreatableSelect
        isClearable
        placeholder="Selecione..."
        noOptionsMessage={() => "Nenhuma opção cadastrada"}
        formatCreateLabel={(value) => `Adicionar "${value}"`}
        create
        onChange={handleChange}
        onInputChange={handleInputChange}
        styles={() => ({
          input: "custom-select",
        })}
        id={id}
      />
      <small className="form-text text-muted">{infoMessage}</small>
    </div>
  );
};

export default AddSelectField;
