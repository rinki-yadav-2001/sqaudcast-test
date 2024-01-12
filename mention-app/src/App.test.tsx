import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App component", () => {
  test("renders input field", () => {
    const { getByPlaceholderText } = render(<App />);

    const inputElement = getByPlaceholderText("Mention...");
    expect(inputElement).toBeInTheDocument();
  });

  test("updates input value on change", () => {
    const { getByPlaceholderText } = render(<App />);
    const inputElement = getByPlaceholderText("Mention...");
    fireEvent.change(inputElement, { target: { value: "@Luke" } });

    expect(inputElement).toHaveValue("@Luke");
  });

  test("selects mention option", () => {
    const { getByPlaceholderText, asFragment, getByText } = render(<App />);
    const inputElement = getByPlaceholderText("Mention...");
    fireEvent.change(inputElement, { target: { value: "@Luke" } });
    const mentionOption = getByText("Luke Skywalker");
    expect(mentionOption).toBeInTheDocument();

    fireEvent.click(mentionOption);

    const componentSnapshot = asFragment();
    expect(componentSnapshot).toMatchSnapshot();
    expect(inputElement).toHaveValue("@Luke Skywalker");
  });
});
