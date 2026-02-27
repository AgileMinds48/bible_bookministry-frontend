import { render, screen } from "@testing-library/react";
import ReviewCards from "../Reviews/ReviewCards";

// Mock Next.js Image component
jest.mock("next/image", () => (props: any) => {
  return <img {...props} alt={props.alt || "image"} />;
});

// Mock Rating component
jest.mock("../Rating", () => ({ rating }: { rating: number }) => <div>Rating: {rating}</div>);

type Review = {
  reviewer: string;
  text: string;
  rating: number;
  img: string;
};

describe("ReviewCards component", () => {
  it("renders all reviews from data", () => {
    render(<ReviewCards />);
    
    const { reviews }: { reviews: Review[] } = require('@/app/utils/data');
    reviews.forEach(({ reviewer, text }) => {
      expect(screen.getByText(reviewer)).toBeInTheDocument();
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it("renders Rating component for each review", () => {
    render(<ReviewCards />);
    const { reviews }: { reviews: Review[] } = require('@/app/utils/data');
    reviews.forEach(({ rating }) => {
      const ratingElems = screen.getAllByText(`Rating: ${rating}`);
      expect(ratingElems.length).toBeGreaterThan(0);
    });
  });

  it("renders images for each review", () => {
    render(<ReviewCards />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThan(0);
  });
});
