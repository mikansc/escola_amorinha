/* eslint-disable react/prop-types */
import React from "react";
import FormRow from "../FormRow/FormRow";
import SelectField from "../SelectField/SelectField";
import TextField from "../TextField/TextField";

const AuthorizedPeople = ({
  inputTitle,
  selectTitle,
  id,
  columns = "12",
  options,
  children,
}) => {
  return (
    <div className="w-100 mx-1">
      <FormRow>
        <TextField title={inputTitle} columns={columns} />
        <SelectField
          title={selectTitle}
          columns={12 - columns}
          options={options}
        />
      </FormRow>
      {children}
    </div>
  );
};

export default AuthorizedPeople;
