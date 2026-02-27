import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; //ensures toHaveAttribute etc. works
import SignUp from "../Auth/SignUp"; 

// Helper to render SignUp with a mock onLoginClick
const renderSignUp = (onLoginClick = jest.fn()) => {
  render(<SignUp onLoginClick={onLoginClick} />);
  return { onLoginClick };
};

describe("SignUp Component", () => {
  it("should update form data when inputs change", () => {
    renderSignUp();

    const firstNameInput = screen.getByLabelText(/first name/i);
    fireEvent.change(firstNameInput, { target: { value: "John" } });

    expect(firstNameInput).toHaveValue("John");
  });

  it("should toggle password visibility when eye icon is clicked", () => {
    renderSignUp();

    const passwordInput = screen.getByLabelText(/^password$/i);
    expect(passwordInput).toHaveAttribute("type", "password");

    const toggleButton = passwordInput.parentElement?.querySelector("span[role='button']");
    if (toggleButton) {
      fireEvent.click(toggleButton);
      expect(passwordInput).toHaveAttribute("type", "text");
    }
  });

  it("should show password mismatch error when passwords do not match", () => {
    renderSignUp();

    const passwordInput = screen.getByLabelText(/^password$/i);
    const repeatPasswordInput = screen.getByLabelText(/repeat password/i);

    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(repeatPasswordInput, { target: { value: "wrongpass" } });

    expect(screen.getByText(/passwords mismatch/i)).toBeInTheDocument();
  });

  it("should call onLoginClick when Login button is clicked", () => {
    const { onLoginClick } = renderSignUp();

    const loginButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(loginButton);

    expect(onLoginClick).toHaveBeenCalledWith(true);
  });
});