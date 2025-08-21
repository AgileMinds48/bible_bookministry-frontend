import React from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

interface BookList{
  bookId: number,
  title: string,
  author: string,
  price: number
  stock:number
}

const BookList = () => {
 const mockBookList: BookList[] = [
  {
    bookId: 1,
    title: "The Purpose Driven Life",
    author: "Rick Warren",
    price: 35,
    stock: 12,
  },
  {
    bookId: 2,
    title: "Knowing God",
    author: "J.I. Packer",
    price: 42,
    stock: 7,
  },
  {
    bookId: 3,
    title: "Mere Christianity",
    author: "C.S. Lewis",
    price: 30,
    stock: 20,
  },
  {
    bookId: 4,
    title: "The Case for Christ",
    author: "Lee Strobel",
    price: 38,
    stock: 5,
  },
  {
    bookId: 5,
    title: "Celebration of Discipline",
    author: "Richard Foster",
    price: 34,
    stock: 9,
  },
];



  return (
    <div>
      <h1 className='text-2xl text-[#15278c] font-semibold  flex items-center justify-between'>Books

        <button className='border-black border text-sm text-black rounded-xl py-2 px-4'>+ Add New Book</button>
      </h1>
    <table className='w-full text-left '>
      <thead className=''>
          <tr className='border-b-2 border-b-gray-700/60 '>
      <th className='py-2'>Book ID</th>
      <th className='py-2'>Title</th>
        <th className='py-2'>Stock</th>
        <th className='py-2'>Price</th>
        <th className='py-2 '>Actions</th>
        </tr>
      </thead>
      <tbody className='text-sm font-medium'>
          {mockBookList.map(({author,bookId,price,stock,title }, idx) => (
            <tr className=' border-b last:border-none border-b-gray-700/30'>
              <td className='py-8'>{bookId}</td>
              <td className='py-8'>{title}</td>
              <td className='text-center '>{stock}</td>
              <td className="text-center ">GHS{price}</td>
              <td className='py-8  flex justify-end gap-1'><AiFillEdit className='text-green-500'/><MdDelete className='text-red-500'/></td>
            </tr>
        ))}
      </tbody>
      </table>
      </div>
  )
}

export default BookList