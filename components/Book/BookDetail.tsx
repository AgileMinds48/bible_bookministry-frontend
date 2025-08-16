"use client"
import { Book } from '@/app/utils/data';
import Image, { StaticImageData } from 'next/image';
import React, { useMemo, useState } from 'react'
import { BiCategory } from 'react-icons/bi';
import { IoIosPricetags } from 'react-icons/io';
import { MdFavorite, MdOutlineDateRange } from 'react-icons/md';
import Review from '../Reviews/Review';
import Rating from '../Rating';
import { useCartStore } from '@/app/utils/cartStore';
import { FaCartPlus } from 'react-icons/fa';
import { BsCartX } from 'react-icons/bs';

type BookDetailProps = {
  book: Book
}

const BookDetail = ({ book }: BookDetailProps) => {

  const addToCart = useCartStore(s => s.addToCart)
  const [added, setAdded] = useState<boolean>(false)
  const removeFromCart = useCartStore(s => s.removeFromCart)
  const items = useCartStore(s => s.items)

  // is this book already in the cart?
  const isInCart = useMemo(() => items.some(i => i.id === book.id),
    [items, book.id])
  
  const handleToggleCart = () => {
    const image = typeof book.img === 'string' ? book.img : (book.img as StaticImageData)?.src ?? ''
    if (isInCart) {
      removeFromCart(book.id)
    } else {
      addToCart({ id: book.id, title: book.title, price: book.price, image })
    }
  }

  return (
    <section className='min-h-screen pt-36 py-12 px-10 flex justify-center poppins relative max-w-7xl mx-auto'>
      <div className=' grid grid-cols-[1fr_1.5fr] gap-10 rounded-lg'>
        <div className='min-h-screen'>
          <div className='w-[30em] h-[40em] border-gray-400 relative '>
            <div className='w-full h-full'>
              <Image src={book.img} alt={`image of the book `} fill={true} className='rounded-lg max-w-full max-h-full min-h-full min-w-full object-cover object-center' />
            </div>
            <div className='absolute top-4 right-4 z-10 '>
              <MdFavorite className='text-xl text-gray-300 cursor-pointer' />
            </div>
            <div className='flex justify-between w-28 absolute bottom-2 right-[50%] translate-x-[50%]'>
              {[1, 2, 3].map((_, index) => (
                <div key={index} className='bg-white rounded-full h-5 w-5 '></div>
              ))}
            </div>
          </div>
          <div className=' px-4 py-10'>
            <p className='text-3xl font-semibold'>More Details</p>
            <div className='mt-4'>
              <div className='flex items-center gap-2 font-semibold text-2xl text-[#15278c] '>
                <div className='p-2 rounded-full bg-[#15278c28] w-fit'>  <BiCategory className='text-xl text-[#15278c]' /></div>
                Category: <span className='font-thin text-black'> Children books</span>
              </div>
              <div className='flex items-center gap-2 font-semibold text-2xl text-[#15278c] mt-4'>
                <div className='p-2 rounded-full bg-[#15278c28] w-fit'>  <MdOutlineDateRange className='text-xl text-[#15278c]' /></div>
                Date listed: <span className='font-thin text-black'> Today</span>
              </div>
            </div>
          </div>
        </div>
        <div className='p-8 shadow border border-gray-300 h-max rounded-lg sticky top-30 '>
          <p className='text-3xl text-[#5a88a7] font-semibold mb-2 line-clamp-2'>{book.title} </p>
          <p className='text-gray-500 text-xl mt-2'>Author: <span className='text-black'>{book.author}</span></p>
          <div className='flex items-baseline-center gap-2 mt-2'>
            <Rating rating={book.rating} />
            <span className='text-xl'>{book.rating}+</span>
          </div>
          <p className='text-3xl mt-4  text-[#15278c] flex gap-2 items-center'><IoIosPricetags />  GH₵ {book.price.toFixed(2)}</p>
          <button
            onClick={handleToggleCart}
            className={`w-full  p-4 rounded-lg text-xl mt-10  transition-colors duration-200 cursor-pointer  
             flex justify-center border-2 border-[#15278c] 
            ${isInCart?"text-white bg-[#15278c]":"bg-[#15278c]/5 text-[#15278c]"}
            `}>
            {isInCart ? 
            <span className='flex gap-1 items-center '><BsCartX className='text-white'/> Remove from cart</span>
            :
              <span className='flex gap-1 items-center '><FaCartPlus /> Add to cart</span>}
          </button>
          <button className={`w-full  p-4 rounded-lg text-xl mt-4 transition duration-150 cursor-pointer border-2 border-[#15278c] text-white bg-[#15278c]`}>
            Proceed to checkout
          </button>
        </div>
      </div>
    </section>
  )
}

export default BookDetail;