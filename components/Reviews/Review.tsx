"use client"
import { Book } from '@/app/utils/data';
import { logo } from '@/public';
import Image from 'next/image';
import React, { useState } from 'react'
import { FaPenAlt, FaStar } from 'react-icons/fa';

type ReviewProps = {
  book:Book
}

const Review = ({ book }: ReviewProps) => {
  const [rating, setRating] = useState<number>(1); 
  const handleStar = (star: number) => {
    setRating(star);
  }
  
  return (
    <div className='px-4'>
      <div className='py-8 px-4 shadow bg-[#15278c28] rounded-2xl'>
        <h1 className='text-3xl flex center '>Leave an impact <FaPenAlt /></h1>
        <div className='flex items-baseline justify-between'>
          <p className='text-xl mt-4 text-[#15278c]'>Rate<span className='font-semibold'> "{book.title}" </span> <span className='text-gray-700'>by {book.author}</span></p>
          <div className='flex gap-1 '>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar className={`text-xl cursor-pointer ${rating<star?"text-gray-400":"text-[#eca624]"}`} onMouseEnter={()=>handleStar(star)} onClick={()=>handleStar(star)}/>
            ))}
          </div>
          
        </div>
        <div className='flex items-center gap-2 font-semibold bg-white rounded-2xl p-4 mt-8'>
          <div className='bg-gray-400 p-2 rounded-full h-16 w-16 '>
            <Image src={logo} alt="image of reviewer" width={60} height={60} className='object-cover object-center'/>
            </div>
          Fenuku Reynolds
        </div>
        {/* <div>
<input type="text" className='h-10 w-full' />

        </div> */}
        
        </div>
    </div>
  )
}

export default Review;