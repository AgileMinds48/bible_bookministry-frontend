import { render, screen } from "@testing-library/react";
import Card from "../Checkout/Card"; // adjust path if needed

describe("Card Component", () => {
  it("renders all input fields with correct placeholders", () => {
    render(<Card />);

    expect(screen.getByPlaceholderText("Card number")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Cardholder's name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Expiry Date")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Security code")).toBeInTheDocument();
  });

  it("renders 4 input fields", () => {
    render(<Card />);
    const inputs = screen.getAllByRole("textbox"); // finds all text inputs
    const spinbox = screen.getByRole("spinbutton"); // finds number input
    expect(inputs).toHaveLength(3);
    expect(spinbox).toBeInTheDocument();
  });
});
