import { render, screen } from "@testing-library/react";
import PopularBooks from "../Home/PopularBooks";

// Mock Next.js Image component so Jest doesn’t break
jest.mock("next/image", () => (props: any) => {
  return <img {...props} alt={props.alt || "image"} />;
});

describe("PopularBooks component", () => {
  it("renders heading text", () => {
    render(<PopularBooks />);
    expect(screen.getByText(/Our most/i)).toBeInTheDocument();
    expect(screen.getByText(/popular/i)).toBeInTheDocument();
  });

  it("renders 'See all' link", () => {
    render(<PopularBooks />);
    const link = screen.getByText(/See all/i).closest("a");
    expect(link).toHaveAttribute("href", "catalogue#popular-books");
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<PopularBooks />);
    expect(asFragment()).toMatchSnapshot();
  });
});
