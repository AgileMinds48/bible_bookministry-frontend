import { Book } from '@/app/utils/data';
import { bk1 } from '@/public';
import Image, { StaticImageData } from 'next/image';
import React from 'react'
import { BiCategory } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { IoIosPricetags } from 'react-icons/io';
import { MdFavorite, MdOutlineDateRange } from 'react-icons/md';
import Review from '../Reviews/Review';
import Rating from '../Rating';

type BookDetailProps = {
  book: Book
}

const BookDetail = ({ book }: BookDetailProps) => {
  const date = new Date();
  const today = `${date.getDate()}/ ${((date.getMonth())+1).toString().padStart(2,"0")} / ${date.getFullYear()}`;
  return (
    <section className='min-h-screen pt-36 py-12 px-10 flex justify-center poppins relative'>
      <div className='max-w-[100em] min-w-[90em] min-h-[90em] grid grid-cols-[1.5fr_1fr] gap-10 rounded-lg'>
        <div className='min-h-screen'>
          <div className='w-full h-[60em] border-gray-400 relative '>
            <Image src={book.img} alt={`image of the book `} className='rounded-lg max-w-full max-h-full min-h-full min-w-full object-cover object-center' />
            <div className='absolute top-4 right-8 z-10 '>
              <MdFavorite className='text-6xl text-gray-300 cursor-pointer' />
            </div>
            <div className='flex justify-between w-28 absolute bottom-2 right-[50%] translate-x-[50%]'>
             {[1, 2, 3].map((_,index) => (
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
                Date listed: <span className='font-thin text-black'> {today.toString() }</span>
              </div>
              </div>
          </div>
          <Review book={book} />
        </div>
        <div className='p-8 shadow border border-gray-300 h-max rounded-lg sticky top-30 '>
          <p className='text-4xl text-[#5a88a7] font-semibold mb-2 line-clamp-2'>{book.title} </p>
          <p className='text-gray-500 text-xl mt-6'>Author: <span className='text-black'>{book.author}</span></p>
           <div className='flex items-baseline-center gap-2 mt-2'>
                             <Rating book={book}/>
            <span className='text-xl'>{book.rating}+</span>
                            </div>
          <p className='text-3xl mt-4  text-[#15278c] flex gap-2 items-center'><IoIosPricetags />  GH₵ {book.price.toFixed(2)}</p>
          <button className={`w-full  p-4 rounded-lg text-xl mt-10 transition duration-150 cursor-pointer bg-[#15278c]/5 border-2 border-[#15278c] text-[#15278c]`}>
            Add to cart
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