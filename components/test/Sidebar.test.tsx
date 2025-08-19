import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "../Catalog/Sidebar";

describe("Sidebar component", () => {
  const mockOnSortChange = jest.fn();
  const mockOnPriceRangeChange = jest.fn();
  const mockOnRatingChange = jest.fn();
  const mockOnSearchChange = jest.fn();

  const setup = () =>
    render(
      <Sidebar
        onSortChange={mockOnSortChange}
        onPriceRangeChange={mockOnPriceRangeChange}
        onRatingChange={mockOnRatingChange}
        onSearchChange={mockOnSearchChange}
      />
    );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders header and search input", () => {
    setup();
    expect(screen.getByText("Filters")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Search for book by title or author/i)
    ).toBeInTheDocument();
  });

  it("calls onSearchChange when typing in search input", () => {
    setup();
    const searchInput = screen.getByPlaceholderText(/Search for book by title or author/i);
    fireEvent.change(searchInput, { target: { value: "Harry Potter" } });
    expect(mockOnSearchChange).toHaveBeenCalled(); // test only that function is called
    // optionally check the value via the event:
    const eventArg = mockOnSearchChange.mock.calls[0][0];
    expect(eventArg.target.value).toBe("Harry Potter");
  });

  it("clears all filters when clicking Clear All", () => {
    setup();
    fireEvent.click(screen.getByText(/Clear All/i));
    expect(mockOnSortChange).toHaveBeenCalled();
    expect(mockOnPriceRangeChange).toHaveBeenCalled();
    expect(mockOnRatingChange).toHaveBeenCalled();
  });

  it("toggles Sort By section", () => {
    setup();
    const sortButton = screen.getByText(/Sort By/i);
    fireEvent.click(sortButton);
    expect(screen.getByText(/Sort By/i)).toBeInTheDocument();
  });

  it("updates price range when changing inputs", () => {
    setup();
    // Expand Price section first
    fireEvent.click(screen.getByText(/Price Range/i));

    const minInput = screen.getByPlaceholderText("0"); // placeholder in component
    fireEvent.change(minInput, { target: { value: "10" } });
    expect(mockOnPriceRangeChange).toHaveBeenCalledWith(10, 100);

    const maxInput = screen.getByPlaceholderText("100");
    fireEvent.change(maxInput, { target: { value: "50" } });
    expect(mockOnPriceRangeChange).toHaveBeenCalledWith(10, 50);
  });

  it("updates rating when moving slider", () => {
    setup();
    // Expand Rating section first
    fireEvent.click(screen.getByText(/Minimum Rating/i));

    const ratingSlider = screen.getByRole("slider");
    fireEvent.change(ratingSlider, { target: { value: "4" } });
    expect(mockOnRatingChange).toHaveBeenCalledWith(4);
  });
});
