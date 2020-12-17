import React from "react";
import { render, screen } from "@testing-library/react";

const Table = () => {
  return (
    <table>
      <thead data-testid="thead">
        <th>Nome</th>
        <th>Data de Nascimento</th>
        <th>Turma</th>
        <th>Telefone para Emergências</th>
        <th>Em caso de emergência avisar</th>
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

    test("should render a theady element with testId=thead", () => {
      expect(screen.getByTestId("thead")).toBeInTheDocument();
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
  });
});