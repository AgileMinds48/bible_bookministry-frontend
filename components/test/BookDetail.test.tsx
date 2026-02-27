import { render, screen } from "@testing-library/react";
import BookDetail from "../Book/BookDetail";

// ✅ Mock next/image to prevent "Failed to parse src" errors
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt || "mocked image"} />;
  },
}));

describe("BookDetail Component", () => {
  const mockBook = {
    id: 1,
    title: "Test Book",
    author: "John Doe",
    price: 29.99,
    rating: 4.5, // ✅ required
    img: "/test.jpg", // ✅ matches BookDetail
  };

  it("renders book title, author, rating, price and image", () => {
    render(<BookDetail book={mockBook} />);

    // ✅ Title and author
    expect(screen.getByText("Test Book")).toBeInTheDocument();
    expect(screen.getByText("Author:")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();

    // ✅ Rating text (since component shows e.g. "4.5+")
    expect(screen.getByText(/4.5\+/)).toBeInTheDocument();

    // ✅ Price text
    expect(screen.getByText(/GH₵ 29.99/)).toBeInTheDocument();

    // ✅ Image rendered
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/test.jpg");
  });

  it("renders 'More Details' section with category and date", () => {
    render(<BookDetail book={mockBook} />);

    expect(screen.getByText("More Details")).toBeInTheDocument();
    expect(screen.getByText(/Category:/)).toBeInTheDocument();
    expect(screen.getByText(/Date listed:/)).toBeInTheDocument();
  });
});
