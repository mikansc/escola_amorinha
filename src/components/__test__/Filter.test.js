import React from "react";
const { render } = require("@testing-library/react");

const Filter = () => {
  return <p></p>;
};

describe("Filter component", () => {
  test("should render a Filter component correctly", () => {
    render(<Filter />);
  });
});
