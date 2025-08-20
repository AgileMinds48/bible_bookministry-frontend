import React from 'react'

interface BookList{
  bookId: string,
  title: string,
  author: string,
  price: number
}

const BookList = () => {
 const mockBookList: BookList[] = [
  {
    id: 1,
    title: "The Purpose Driven Life",
    author: "Rick Warren",
    category: "Christian Living",
    price: 3500,
    stock: 12,
    published: 2002,
  },
  {
    id: 2,
    title: "Knowing God",
    author: "J.I. Packer",
    category: "Theology",
    price: 4200,
    stock: 7,
    published: 1973,
  },
  {
    id: 3,
    title: "Mere Christianity",
    author: "C.S. Lewis",
    category: "Apologetics",
    price: 3000,
    stock: 20,
    published: 1952,
  },
  {
    id: 4,
    title: "The Case for Christ",
    author: "Lee Strobel",
    category: "Apologetics",
    price: 3800,
    stock: 5,
    published: 1998,
  },
  {
    id: 5,
    title: "Celebration of Discipline",
    author: "Richard Foster",
    category: "Spiritual Growth",
    price: 3400,
    stock: 9,
    published: 1978,
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
        <th className='py-2'>Author</th>
        <th className='py-2'>Price</th>
        <th className='py-2 '>Actions</th>
        </tr>
      </thead>
      <tbody className='text-sm font-medium'>
          {mockBookList.map(({author,category,id,price,published,stock,title }, idx) => (
            <tr className=' border-b last:border-none border-b-gray-700/30'>
              <td>{id}</td>
              <td>{customerName}</td>
              <td className='text-right px-4'>{totalAmount}</td>
              <td className="text-right px-8">{numberOfBooks}</td>
              <td>{Date}</td>
              <td className={`${getStatusClass(Status)} font-semibold`} >{ Status}</td>
            </tr>
        ))}
      </tbody>
      </table>
      </div>
  )
}

export default BookList