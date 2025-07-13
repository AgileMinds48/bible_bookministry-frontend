import { Book } from '@/app/utils/data';
import React from 'react'
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
export const sortByPriceLH = (books: Book[])=>{
  const copyOfBooks = [...books];
  return copyOfBooks.sort((a, b) => a.price - b.price);
}
export const sortByPriceHL = (books: Book[])=>{
  const copyOfBooks = [...books];
  return copyOfBooks.sort((a, b) => b.price - a.price);
}
export const sortByRatingL = (books: Book[])=>{
  const copyOfBooks = [...books];
  return copyOfBooks.sort((a, b) => a.rating - b.rating);
}
export const sortByRatingH = (books: Book[])=>{
  const copyOfBooks = [...books];
  return copyOfBooks.sort((a, b) => b.rating - a.rating);
}

export const filterByPricerange = (books:Book[], min:number, max:number) => {
  return books.filter((book) => book.price >= min && book.price <= max);
}
const Filters = () => {



  
}

export default Filters