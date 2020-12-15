import React from "react";
import MainPage from "./MainPage";
const { render, screen } = require("@testing-library/react");

describe("Main page", () => {
  test("should render main page correctly", () => {
    render(<MainPage />);
  });

  test("should render a navigation tag inside main page", () => {
    render(<MainPage />);
    screen.getByRole("navigation");
  });

  test("should render a main tag inside main page", () => {
    render(<MainPage />);
    screen.getByRole("main");
  });

  test("should receive children components inside", () => {
    const Component = () => (
      <MainPage>
        <p>children</p>
      </MainPage>
    );
    render(<Component />);
    expect(screen.getByText("children")).toBeTruthy();
  });
});
