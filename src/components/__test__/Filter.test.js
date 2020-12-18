import React from "react";
import Filter from "../Filter/Filter";
const { render, screen } = require("@testing-library/react");

describe("Filter component", () => {
  test("should render a Filter component correctly", () => {
    render(<Filter />);
  });

  describe("Filter elements", () => {
    beforeEach(() => {
      render(<Filter />);
    });

    test("should render an text input element", () => {
      expect(screen.getByRole("textbox").getAttribute("type")).toBe("text");
    });

    test("should have a placeholder with text 'buscar aluno pelo nome'", () => {
      const PLACEHOLDER = "Buscar aluno pelo nome...";
      expect(screen.getByPlaceholderText(PLACEHOLDER)).toBeInTheDocument();
    });

    test("should render a button with type='button' element", () => {
      expect(screen.getByRole("button")).toBeInTheDocument();
      expect(screen.getByRole("button").getAttribute("type")).toBe("button");
    });
  });
});
