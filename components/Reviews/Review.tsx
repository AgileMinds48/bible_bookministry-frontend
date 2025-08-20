"use client"
import { Book } from '@/app/utils/data';
import { headshot } from '@/public';
import Image from 'next/image';
import React, { useState } from 'react'
import { FaPenAlt, FaStar } from 'react-icons/fa';
import ReviewCards from './ReviewCards';

type ReviewProps = {
  book:Book
}

const Review = ({ book }: ReviewProps) => {
  const [rating, setRating] = useState<number>(1); 
  const handleStar = (star: number) => {
    setRating(star);
  }
  
  return (
    <div className='px-4 max-w-7xl mx-auto mb-10'>
      <div className='py-8 px-4 shadow bg-[#15278c28] rounded-2xl'>
        <h1 className='text-3xl flex center '>Leave an impact <FaPenAlt /></h1>
        <div className='bg-white rounded-2xl p-4 mt-6'>
        <div className='flex items-center justify-between '>
          <p className='text-xl mt-4 text-[#15278c]'>Rate<span className='font-semibold'> "{book.title}" </span> <span className='text-gray-700'>by {book.author}</span></p>
          <div className='flex gap-1 '>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} className={`text-3xl cursor-pointer ${rating<star?"text-gray-300":"text-[#eca624]"}`} onMouseEnter={()=>handleStar(star)} onClick={()=>handleStar(star)}/>
            ))}
          </div>
          
        </div>
        <div className='flex items-center gap-2 font-semibold  p-4 mt-4'>
          <div className='bg-gray-400  rounded-full h-16 w-16 border'>
            <Image src={headshot} alt="image of reviewer" className='object-cover object-center rounded-full h-full w-full'/>
            </div>
            <em>You</em>
            <div className='w-1 h-1 bg-gray-400 rounded-full'></div>
            <p className='text-gray-400 font-thin'> August 11, 2025</p>
        </div>
        <div className='w-full'>
            <textarea className='min-h-20 max-h-40 w-full border border-black p-4 hide-scrollbar outline-none rounded-2xl placeholder:italic ' placeholder={`I really enjoyed reading ${book.title}!`} />
        </div>
        </div>
        <ReviewCards  />
        </div>
    </div>
  )
}

export default Review;