import { render, screen } from "@testing-library/react";
import Recommended from "../Home/Recommended";

describe("Recommended Component", () => {
  it("renders the heading 'Recommended for you'", () => {
    render(<Recommended />);
    // The heading is a <h2> with role="heading"
    const heading = screen.getByRole("heading", { name: /recommended for you/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders at least one recommended book", () => {
    render(<Recommended />);
    // You showed "Die with a smile or live" in the DOM snapshot
    const book = screen.getByText(/die with a smile or live/i);
    expect(book).toBeInTheDocument();
  });

  it("renders the author of the book", () => {
    render(<Recommended />);
    // You showed "Kyeiwaa" as the author
    const author = screen.getByText(/kyeiwaa/i);
    expect(author).toBeInTheDocument();
  });
});
