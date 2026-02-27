import { render, screen } from "@testing-library/react";
import MobilePayment from "../Checkout/MobilePayment";

describe("MobilePayment Component", () => {
  test("renders network select dropdown", () => {
    render(<MobilePayment />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();
  });

  test("renders default option in select", () => {
    render(<MobilePayment />);
    const defaultOption = screen.getByText("Select your network");
    expect(defaultOption).toBeInTheDocument();
  });

  test("renders network options (MTN, Telecel, AT)", () => {
    render(<MobilePayment />);
    expect(screen.getByText("MTN")).toBeInTheDocument();
    expect(screen.getByText("Telecel")).toBeInTheDocument();
    expect(screen.getByText("AT")).toBeInTheDocument();
  });

  test("renders prefix input with +233 as placeholder and readonly", () => {
    render(<MobilePayment />);
    const prefixInput = screen.getByPlaceholderText("+233");
    expect(prefixInput).toBeInTheDocument();
    expect(prefixInput).toHaveAttribute("readOnly");
  });

  test("renders phone number input", () => {
    render(<MobilePayment />);
    const phoneInput = screen.getByPlaceholderText("Enter the number");
    expect(phoneInput).toBeInTheDocument();
  });
});
