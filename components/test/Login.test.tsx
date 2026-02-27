import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../Auth/Login';

describe('Login Component', () => {
  const mockOnSignUpClick = jest.fn();

  beforeEach(() => {
    render(<Login onSignUpClick={mockOnSignUpClick} />);
  });

  it('renders email and password inputs', () => {
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('updates form data when typing into inputs', () => {
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect((emailInput as HTMLInputElement).value).toBe('test@example.com');
    expect((passwordInput as HTMLInputElement).value).toBe('password123');
  });

  it('calls onSignUpClick when Signup button is clicked', () => {
    const signupButton = screen.getByRole('button', { name: /signup/i });
    fireEvent.click(signupButton);

    expect(mockOnSignUpClick).toHaveBeenCalledWith(false);
  });

  it('renders login button', () => {
    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });
});