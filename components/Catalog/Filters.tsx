import { Book } from '@/app/utils/data';
import React from 'react'
 //sorting function
export const sortByTitleAZ = (books: Book[]): Book[] => {
  const copyOfBooks = [...books]; //I don't wanna change the original array
  return copyOfBooks.sort((a, b) => a.title.localeCompare(b.title));
}
const Filters = () => {

  return (
    <div>Filters</div>
  )
}

export default Filters