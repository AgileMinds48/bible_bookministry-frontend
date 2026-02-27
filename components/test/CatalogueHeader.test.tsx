import { render, screen } from "@testing-library/react";
import CatalogueHeader from "../Catalog/CatalogueHeader";

// Mock next/image since Jest can't handle it directly
jest.mock("next/image", () => (props: any) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} alt={props.alt} />;
});

describe("CatalogueHeader", () => {
  it("renders the catalogue title", () => {
    render(<CatalogueHeader />);
    expect(
      screen.getByRole("heading", { name: /view our catalogue/i })
    ).toBeInTheDocument();
  });

  it("renders the quote text", () => {
    render(<CatalogueHeader />);
    expect(
      screen.getByText(/give yourself unto reading/i)
    ).toBeInTheDocument();
  });

  it("renders the background image", () => {
    render(<CatalogueHeader />);
    const img = screen.getByAltText("bg");
    expect(img).toBeInTheDocument();
  });
});