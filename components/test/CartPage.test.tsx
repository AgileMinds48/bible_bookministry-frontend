import { render, screen, fireEvent } from "@testing-library/react";
import CartPage from "../Cart/CartPage";

// Mock Next.js Image and Link
jest.mock("next/image", () => (props: any) => <img {...props} />);
jest.mock("next/link", () => ({ children }: any) => children);

// Prepare mocks
const mockUpdateQuantity = jest.fn();
const mockRemoveFromCart = jest.fn();
const mockClearCart = jest.fn();
const mockGetTotalPrice = jest.fn();

// Mock cart store with items
jest.mock('@/app/utils/cartStore', () => ({
  useCartStore: (selector: any) => {
    const store = {
      items: [{ id: 1, title: "Book 1", price: 20, quantity: 2, image: "book1.jpg" }],
      updateQuantity: mockUpdateQuantity,
      removeFromCart: mockRemoveFromCart,
      clearCart: mockClearCart,
      getTotalPrice: () => 40,
    };
    return selector(store);
  }
}));

describe("CartPage with items", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders cart page with items", () => {
    render(<CartPage />);
    expect(screen.getByText("Books Cart")).toBeInTheDocument();
    expect(screen.getByText("Book 1")).toBeInTheDocument();
    expect(screen.getByText("GHS 20.00")).toBeInTheDocument();
    // For duplicated 40.00, use getAllByText
    const totals = screen.getAllByText("GHS 40.00");
    expect(totals.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("GHS 10.00")).toBeInTheDocument();
    expect(screen.getByText("GHS 50.00")).toBeInTheDocument();
  });

  it("increments and decrements quantity", () => {
    render(<CartPage />);
    fireEvent.click(screen.getByLabelText("Add one quantity"));
    expect(mockUpdateQuantity).toHaveBeenCalledWith(1, 3);

    fireEvent.click(screen.getByLabelText("remove one quantity"));
    expect(mockUpdateQuantity).toHaveBeenCalledWith(1, 1);
  });

  it("removes item from cart", () => {
    render(<CartPage />);
    fireEvent.click(screen.getByLabelText("Remove item"));
    expect(mockRemoveFromCart).toHaveBeenCalledWith(1);
  });

  it("clears the cart", () => {
    render(<CartPage />);
    fireEvent.click(screen.getByText("Clear"));
    expect(mockClearCart).toHaveBeenCalled();
  });
});
