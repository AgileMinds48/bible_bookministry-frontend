import { render, screen } from "@testing-library/react";
import Review from "../Reviews/Review";
import { Book } from "@/app/utils/data";

// Mock Next.js Image component
jest.mock("next/image", () => (props: any) => {
  return <img {...props} alt={props.alt || "image"} />;
});

// Mock ReviewCards component
jest.mock("../Reviews/ReviewCards", () => () => <div>ReviewCards Component</div>);

describe("Review component", () => {
  const mockBook: Book = {
    id: 1,
    title: "Test Book",
    author: "Test Author",
    category: "Popular",
    img: "/test.jpg",
    price: 50,
    rating: 4,
  };

  it("renders heading text", () => {
    render(<Review book={mockBook} />);
    expect(screen.getByText(/Leave an impact/i)).toBeInTheDocument();
    expect(screen.getByText(/Rate/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Book/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Author/i)).toBeInTheDocument();
  });

  it("renders textarea", () => {
    render(<Review book={mockBook} />);
    const textarea = screen.getByPlaceholderText(`I really enjoyed reading ${mockBook.title}!`);
    expect(textarea).toBeInTheDocument();
  });

  it("renders ReviewCards component", () => {
    render(<Review book={mockBook} />);
    expect(screen.getByText("ReviewCards Component")).toBeInTheDocument();
  });
});
