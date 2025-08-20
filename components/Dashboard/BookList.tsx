import React from 'react'

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
    price: 3500,
    stock: 12,
  },
  {
    bookId: 2,
    title: "Knowing God",
    author: "J.I. Packer",
    price: 4200,
    stock: 7,
  },
  {
    bookId: 3,
    title: "Mere Christianity",
    author: "C.S. Lewis",
    price: 3000,
    stock: 20,
  },
  {
    bookId: 4,
    title: "The Case for Christ",
    author: "Lee Strobel",
    price: 3800,
    stock: 5,
  },
  {
    bookId: 5,
    title: "Celebration of Discipline",
    author: "Richard Foster",
    price: 3400,
    stock: 9,
  },
];



  return (
    <div>
      <h1 className='text-2xl text-[#15278c] font-semibold'>Orders</h1>
    <table className='w-full text-left '>
      <thead className=''>
          <tr className='border-b-2 border-b-gray-700/60 '>
            <th></th>
      <th>Order ID</th>
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
              <td>{bookId}</td>
              <td>{title}</td>
              <td className='text-right px-4'>{stock}</td>
              <td className="text-right px-8">{price}</td>
              <td>...</td>
            </tr>
        ))}
      </tbody>
      </table>
      </div>
  )
}

export default BookList