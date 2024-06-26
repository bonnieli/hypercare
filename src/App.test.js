import { render, screen } from "@testing-library/react";
import { act } from "react";
import App from "./App";

test("renders home page", () => {
  act(() => {
    render(<App />);
  });
  const titleElement = screen.getByText(/home/i);
  expect(titleElement).toBeInTheDocument();
});
