import React from "react";
import { render, screen } from "@testing-library/react";

const TableDataLine = () => {
  return (
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};

describe("Table Data Line component", () => {
  test("should render TableDataLine correctly", () => {
    render(<TableDataLine />);
  });
  describe("Table Data Line elements", () => {
    beforeEach(() => {
      render(<TableDataLine />);
    });

    test("should render a table row element", () => {
      expect(screen.getByRole("row")).toBeInTheDocument();
    });

    test("should render 5 table cells", () => {
      expect(screen.getAllByRole("cell")).toHaveLength(5);
    });
  });
});
