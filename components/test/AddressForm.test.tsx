import { render, screen } from "@testing-library/react";
import AddressForm from "../Checkout/AddressForm";

describe("AddressForm Component", () => {
  it("renders input fields correctly", () => {
    render(<AddressForm />);

    // check if input placeholders exist
    expect(screen.getByPlaceholderText("First name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Last name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Address")).toBeInTheDocument();
  });
});