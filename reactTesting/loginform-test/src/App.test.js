import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App, { validateInput } from "./App";

describe("login describe statement", () => {
  test("validate function should pass on correct input", () => {
    const text = "text@test.com";
    expect(validateInput(text)).toBe(true);
  });

  test("validate function should fail on incorrect input", () => {
    const text = "text";
    expect(validateInput(text)).not.toBe(true);
  });

  test("login form should be in the document", () => {
    const component = render(<App />);
    // console.log(component)
    const inputNode = component.getByText("Email:");
    expect(inputNode).toBeInTheDocument();
  });

  test("email field should have label", () => {
    const component = render(<App />);
    const emailInputNode = component.getByLabelText("Email:");
    expect(emailInputNode.getAttribute("name")).toBe("email");
  });

  test("email input should accept text", () => {
    const { getByLabelText, getByText } = render(<App />);
    const emailInputNode = getByLabelText("Email:");
    expect(emailInputNode.value).toMatch("");
    fireEvent.change(emailInputNode, { target: { value: "testing" } });
    expect(emailInputNode.value).toMatch("testing");

    const errorMessageNode = getByText("Email not valid");
    expect(errorMessageNode).toBeInTheDocument();
    fireEvent.change(emailInputNode, { target: { value: "testing@" } });
    expect(errorMessageNode).not.toBeInTheDocument();
  });

  test("should be able to submit form", () => {
    const mockFn = jest.fn();
    const { getByRole } = render(<App handleSubmit={mockFn} />);
    const buttonNode = getByRole("button");
    fireEvent.submit(buttonNode);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
