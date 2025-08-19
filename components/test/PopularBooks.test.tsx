
import { render, screen } from "@testing-library/react";
import PopularBooks from "../Catalog/PopularBooks";

// Mock Next.js Image component so Jest doesn’t break
jest.mock("next/image", () => (props: any) => {
  return <img {...props} alt={props.alt || "image"} />;
});

describe("PopularBooks component", () => {
  it("renders heading text", () => {
    render(<PopularBooks />);
    expect(
      screen.getByText(/Our most/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/popular/i)
    ).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<PopularBooks />);
    expect(asFragment()).toMatchSnapshot();
  });
});
