import React from "react";
const { render, screen } = require("@testing-library/react");

const Filter = () => {
  return (
    <div>
      <input type="text" />
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
  });
});
