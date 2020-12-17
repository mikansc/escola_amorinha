import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "../Table/Table";

describe("Table component", () => {
  test("should render Table component correctly", () => {
    render(<Table />);
  });

  test("should receibe children props", () => {
    const CHILD_TEXT = "Hello, world!";
    const TableWithChild = () => (
      <Table>
        <tr>
          <td>{CHILD_TEXT}</td>
        </tr>
      </Table>
    );
    render(<TableWithChild />);
    expect(screen.getByText(CHILD_TEXT)).toBeTruthy();
  });

  describe("Table elements", () => {
    beforeEach(() => {
      render(<Table />);
    });

    test("should render a table element", () => {
      expect(screen.getByRole("table")).toBeInTheDocument();
    });

    test("should render a theady element with testId=thead", () => {
      expect(screen.getByTestId("thead")).toBeInTheDocument();
    });

    test("should render a table row element", () => {
      expect(screen.getByRole("row")).toBeInTheDocument();
    });

    test("should render 6 <th> elements", () => {
      expect(screen.getAllByRole("columnheader")).toHaveLength(6);
    });

    test("should render all <th> with the heading text correctly", () => {
      const LABELS = [
        "Nome",
        "Data de Nascimento",
        "Turma",
        "Telefone para Emergências",
        "Em caso de emergência avisar",
      ];

      LABELS.forEach((label) => {
        expect(screen.getByText(label)).toBeInTheDocument();
      });
    });

    test("should render a tbody element with testId=tbody", () => {
      expect(screen.getByTestId("tbody")).toBeInTheDocument();
    });
  });
});
