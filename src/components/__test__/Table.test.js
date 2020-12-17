import React from "react";
import { render, screen } from "@testing-library/react";

const Table = () => {
  return (
    <table>
      <thead data-testid="thead">
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </thead>
    </table>
  );
};

describe("Table component", () => {
  test("should render Table component correctly", () => {
    render(<Table />);
  });

  describe("Table elements", () => {
    beforeEach(() => {
      render(<Table />);
    });

    test("should render a table element", () => {
      expect(screen.getByRole("table")).toBeInTheDocument();
    });
  });
});
