import React from "react";
const { render, screen } = require("@testing-library/react");

const Filter = () => {
  return (
    <div>
      <input type="text" placeholder="Buscar aluno pelo nome..." />
    </div>
  );
};

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
  });
});
