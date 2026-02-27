
import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "../Catalog/loading";

describe("Loading Component", () => {
  it("renders without crashing", () => {
    render(<Loading />);
    // Just making sure it mounted
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays the correct text", () => {
    render(<Loading />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("applies the correct CSS classes", () => {
    render(<Loading />);
    const textElement = screen.getByText("Loading...");
    expect(textElement).toHaveClass("text-center");
    expect(textElement).toHaveClass("text-blue-600");
  });
});
