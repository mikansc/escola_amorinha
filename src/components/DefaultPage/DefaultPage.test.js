import React from "react";
import DefaultPage from "./DefaultPage";
const { render, screen } = require("@testing-library/react");

describe("Main page", () => {
  test("should render main page correctly", () => {
    render(<DefaultPage />);
  });

  test("should render a navigation tag inside main page", () => {
    render(<DefaultPage />);
    screen.getByRole("navigation");
  });

  test("should render a main tag inside main page", () => {
    render(<DefaultPage />);
    screen.getByRole("main");
  });

  test("should receive children components inside", () => {
    const Component = () => (
      <DefaultPage>
        <p>children</p>
      </DefaultPage>
    );
    render(<Component />);
    expect(screen.getByText("children")).toBeTruthy();
  });
});
