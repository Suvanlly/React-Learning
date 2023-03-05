import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders greeting text", () => {
  render(<App />);
  const greetingText = screen.getByText(/It's good to see you!/i);
  expect(greetingText).toBeInTheDocument();
});

test("clicking on the button changes the greeting text", () => {
  render(<App />);
  const button = screen.getByRole("button");
  button.click();
  const changedText = screen.getByText(/Changed!/i);
  expect(changedText).toBeInTheDocument();
});