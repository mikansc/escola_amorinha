import React from "react";
import { render, screen } from "@testing-library/react";

const TableDataLine = () => {
  return <tr></tr>;
};

describe("Table Data Line component", () => {
  test("should render TableDataLine correctly", () => {
    render(<TableDataLine />);
  });

  test("should render a table row element", () => {
    render(<TableDataLine />);
    expect(screen.getByRole("row")).toBeInTheDocument();
  });
});
