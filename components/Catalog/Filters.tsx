import { Book } from '@/app/utils/data';
import { category } from "@/components/Catalog/AllBooks";

//sorting function
export const sortByTitleAZ = (books: Book[]): Book[] => {
  const copyOfBooks = [...books]; //I don't wanna change the original array
  return copyOfBooks.sort((a, b) => a.title.localeCompare(b.title));
}

export const sortByTitleZA = (books: Book[]) => {
  const copyOfBooks = [...books];
  return copyOfBooks.sort((a, b) => b.title.localeCompare(a.title));
}

export const sortByAuthorAZ = (books: Book[]) => {
  const copyOfBooks = [...books]
  return copyOfBooks.sort((a, b) => a.author.localeCompare(b.author));
}
export const sortByAuthorZA = (books: Book[]) => {
  const copyOfBooks = [...books]
  return copyOfBooks.sort((a, b) => b.author.localeCompare(a.author));
}
export const sortByPriceLH = (books: Book[]) => {
  const copyOfBooks = [...books];
  return copyOfBooks.sort((a, b) => a.price - b.price);
}
export const sortByPriceHL = (books: Book[]) => {
  const copyOfBooks = [...books];
  return copyOfBooks.sort((a, b) => b.price - a.price);
}
export const sortByRatingL = (books: Book[]) => {
  const copyOfBooks = [...books];
  return copyOfBooks.sort((a, b) => a.rating - b.rating);
}
export const sortByRatingH = (books: Book[]) => {
  const copyOfBooks = [...books];
  return copyOfBooks.sort((a, b) => b.rating - a.rating);
}

export const filterByPriceRange = (books: Book[], min: number, max: number) => {
  return books.filter((book) => book.price >= min && book.price <= max);
}

export const filterByRating = (books: Book[], rating: number) => {
  return books.filter((book) => book.rating <= rating);
}

export const filterBySearch = (books: Book[], searchTerm: string): Book[] => {
  if (!searchTerm || searchTerm.trim() === "") {
    return books;
  }
  const normalisedSearch = searchTerm.toLowerCase().trim();
  return books.filter(book =>
    book.title.toLowerCase().includes(normalisedSearch) ||
    book.author.toLowerCase().includes(normalisedSearch)
  )
}
export const filterByCategory = (books: Book[], categoryName: string) => {
  if (categoryName.toLowerCase() === "all") return books;
  return books.filter(book => {
    if (typeof book.category === "object" && book.category !== null) {
      return book.category?.categoryName?.toLowerCase().trim() === categoryName.toLowerCase().trim();
    }
    if (typeof book.category === "string") {
      return book.category?.toLowerCase().trim() === categoryName.toLowerCase().trim();
    }
    return false;
  })
}
const Filters = () => {
  
}

export default Filters