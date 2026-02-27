import { render, screen } from "@testing-library/react";
import Card from "../Checkout/Card";

describe("Card Component", () => {
  test("renders all input fields correctly", () => {
    render(<Card />);

    // Check for Card number input
    expect(screen.getByPlaceholderText("Card number")).toBeInTheDocument();

    // Check for Cardholder's name input
    expect(screen.getByPlaceholderText("Cardholder's name")).toBeInTheDocument();

    // Check for Expiry Date input
    expect(screen.getByPlaceholderText("Expiry Date")).toBeInTheDocument();

    // Check for Security code input
    expect(screen.getByPlaceholderText("Security code")).toBeInTheDocument();
  });
});
