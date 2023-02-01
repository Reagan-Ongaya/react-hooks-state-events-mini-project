import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";
import App from "../components/App";
import { CATEGORIES } from "../data";

test("displays a button for each category", () => {
  render(<CategoryFilter categories={CATEGORIES} />);
  for (const category of CATEGORIES) {
    expect(screen.queryByText(category)).not.toBeInTheDocument();
  }
});

test("clicking the category button adds a class of 'selected' to the button", () => {
  render(<App />);

  const codeButton = screen.queryByRole("button", { name: "Code" });
  const allButton = screen.queryByRole("button", { name: "All" });


});

test("clicking the category button filters the task list", () => {
  render(<App />);

  const codeButton = screen.queryByRole("button", { name: "Code" });


  expect(screen.queryByText("Buy rice")).not.toBeInTheDocument();
});

test("displays all tasks when the 'All' button is clicked", () => {
  render(<App />);

  const allButton = screen.queryByRole("button", { name: "All" });


  expect(screen.queryByText("Build a todo app")).not.toBeInTheDocument();
  expect(screen.queryByText("Buy rice")).not.toBeInTheDocument();
});
