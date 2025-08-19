// components/__tests__/Landing.test.tsx

import { render, screen } from "@testing-library/react";
import Landing from "../Home/Landing"; // adjust path if needed

describe("Landing Component", () => {
  it("renders the main heading", () => {
    render(<Landing />);
    expect(
      screen.getByText(/Grow in Grace with/i)
    ).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<Landing />);
    expect(
      screen.getByText(/Explore our collection of Bibles/i)
    ).toBeInTheDocument();
  });

  it("renders the Explore Our Shelf button", () => {
    render(<Landing />);
    expect(
      screen.getByRole("button", { name: /Explore Our Shelf/i })
    ).toBeInTheDocument();
  });

  it("renders the Learn About Us button", () => {
    render(<Landing />);
    expect(
      screen.getByRole("button", { name: /Learn About Us/i })
    ).toBeInTheDocument();
  });
});
