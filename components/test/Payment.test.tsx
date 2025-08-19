import React from "react";
import { render, screen } from "@testing-library/react";
import Payment from "../Checkout/Payment";
import MobilePayment from "../Checkout/MobilePayment";
import Card from "../Checkout/Card";
import { paymentmethods } from "../Checkout/Checkout";

// Mock child components so we can check if they're rendered
jest.mock("../Checkout/MobilePayment", () => () => <div>Mobile Payment Component</div>);
jest.mock("../Checkout/Card", () => () => <div>Card Payment Component</div>);

describe("Payment Component", () => {
  it("renders MobilePayment when paymentType is 'momo'", () => {
    render(<Payment paymentType={"momo" as paymentmethods} />);
    expect(screen.getByText("Mobile Payment Component")).toBeInTheDocument();
  });

  it("renders Card when paymentType is 'card'", () => {
    render(<Payment paymentType={"card" as paymentmethods} />);
    expect(screen.getByText("Card Payment Component")).toBeInTheDocument();
  });

  it("renders nothing if paymentType is invalid", () => {
    const { container } = render(<Payment paymentType={"invalid" as paymentmethods} />);
    expect(container).toBeEmptyDOMElement();
  });
});
