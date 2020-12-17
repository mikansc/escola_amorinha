import React from "react";
import { render, screen } from "@testing-library/react";

const Table = () => {
  return (
    <table>
      <thead data-testid="thead">
        <tr>
          <th>Nome</th>
          <th>Data de Nascimento</th>
          <th>Turma</th>
          <th>Telefone para Emergências</th>
          <th>Em caso de emergência avisar</th>
          <th></th>
        </tr>
      </thead>
      <tbody data-testid="tbody"></tbody>
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
