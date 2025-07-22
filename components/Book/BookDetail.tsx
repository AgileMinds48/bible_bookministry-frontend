import { bk1 } from '@/public';
import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';
import { IoIosPricetags } from 'react-icons/io';
import { MdFavorite } from 'react-icons/md';

type BookDetailProps = {
  book: {
    id: number
    title: string
    author: string
    description?: string
  }
}

const BookDetail = ({ book }: BookDetailProps) => {
  const rating = 2.5;
  return (
    <section className='min-h-screen pt-36 py-12 px-10 flex justify-center poppins relative'>
      <div className='max-w-[100em] min-w-[90em] min-h-[90em] grid grid-cols-[1.5fr_1fr] gap-10 rounded-lg'>
        <div className='min-h-screen'>
          <div className='w-full h-[60em] border-gray-400 relative p-12 pb-16 backgroundStripes'>
            <Image src={bk1} alt={`image of the book `} className='rounded-lg max-w-full max-h-full min-h-full min-w-full object-cover object-center' />
            <div className='absolute top-4 right-8 z-10 '>
              <MdFavorite className='text-6xl text-gray-300 cursor-pointer' />
           
            </div>
            <div className='flex justify-between w-28 absolute bottom-2 right-[50%] translate-x-[50%]'>
             {[1, 2, 3].map((dot,index) => (
              <div className='bg-gray-300 rounded-full h-5 w-5 '></div>
             ))}
              </div>
          </div>
          <div className=' p-10'>
            <p className='text-3xl font-semibold'>More Details</p>
          
            </div>
        </div>
        <div className='p-8 shadow border border-gray-300 h-max rounded-lg sticky top-30 '>
          <p className='text-4xl text-[#5a88a7] font-semibold mb-2 line-clamp-2'>Die with a smile but never stfu </p>
          <p className='text-gray-500 text-xl mt-6'>Author: <span className='text-black'>Samuel Ampadu</span></p>
           <div className='flex items-baseline-center gap-2 mt-2'>
                              <div className='flex items-center gap-1'>
                                { [1, 2, 3, 4, 5].map((star) => (
                                  <FaStar
                                    key={star}
                                    className={`text-xl ${star <= rating ? 'text-[#eca624]' : 'text-gray-300'}`}
                                  />
                                ))}
                              </div>
            <span className='text-xl'>{rating}+</span>
                            </div>
          <p className='text-3xl mt-4  text-[#15278c] flex gap-2 items-center'><IoIosPricetags />  GH₵ 32.00</p>
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