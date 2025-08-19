import {
  sortByTitleAZ,
  sortByTitleZA,
  sortByAuthorAZ,
  sortByAuthorZA,
  sortByPriceLH,
  sortByPriceHL,
  sortByRatingL,
  sortByRatingH,
  filterByPriceRange,
  filterByRating,
  filterBySearch,
} from "../Catalog/Filters";
import { Book } from "@/app/utils/data";  // import the Book type

// 👇 Use Partial<Book> so we don’t need to include every field (like img)
const mockBooks: Partial<Book>[] = [
  { id: 1, title: "C Book", author: "Alice", price: 30, rating: 4 },
  { id: 2, title: "A Book", author: "Charlie", price: 10, rating: 2 },
  { id: 3, title: "B Book", author: "Bob", price: 20, rating: 5 },
];

describe("Sorting functions", () => {
  it("sorts by title A-Z", () => {
    const sorted = sortByTitleAZ(mockBooks as Book[]);
    expect(sorted.map(b => b.title)).toEqual(["A Book", "B Book", "C Book"]);
  });

  it("sorts by title Z-A", () => {
    const sorted = sortByTitleZA(mockBooks as Book[]);
    expect(sorted.map(b => b.title)).toEqual(["C Book", "B Book", "A Book"]);
  });

  it("sorts by author A-Z", () => {
    const sorted = sortByAuthorAZ(mockBooks as Book[]);
    expect(sorted.map(b => b.author)).toEqual(["Alice", "Bob", "Charlie"]);
  });

  it("sorts by author Z-A", () => {
    const sorted = sortByAuthorZA(mockBooks as Book[]);
    expect(sorted.map(b => b.author)).toEqual(["Charlie", "Bob", "Alice"]);
  });

  it("sorts by price low-high", () => {
    const sorted = sortByPriceLH(mockBooks as Book[]);
    expect(sorted.map(b => b.price)).toEqual([10, 20, 30]);
  });

  it("sorts by price high-low", () => {
    const sorted = sortByPriceHL(mockBooks as Book[]);
    expect(sorted.map(b => b.price)).toEqual([30, 20, 10]);
  });

  it("sorts by rating low-high", () => {
    const sorted = sortByRatingL(mockBooks as Book[]);
    expect(sorted.map(b => b.rating)).toEqual([2, 4, 5]);
  });

  it("sorts by rating high-low", () => {
    const sorted = sortByRatingH(mockBooks as Book[]);
    expect(sorted.map(b => b.rating)).toEqual([5, 4, 2]);
  });
});

describe("Filtering functions", () => {
  it("filters by price range", () => {
    const filtered = filterByPriceRange(mockBooks as Book[], 15, 25);
    expect(filtered.map(b => b.price)).toEqual([20]);
  });

  it("filters by rating", () => {
    const filtered = filterByRating(mockBooks as Book[], 3);
    expect(filtered.map(b => b.rating)).toEqual([2]);
  });

  it("filters by search (title)", () => {
    const filtered = filterBySearch(mockBooks as Book[], "A Book");
    expect(filtered.map(b => b.title)).toEqual(["A Book"]);
  });

  it("filters by search (author)", () => {
    const filtered = filterBySearch(mockBooks as Book[], "Alice");
    expect(filtered.map(b => b.author)).toEqual(["Alice"]);
  });

  it("returns all books if search term is empty", () => {
    const filtered = filterBySearch(mockBooks as Book[], "");
    expect(filtered.length).toBe(3);
  });
});
