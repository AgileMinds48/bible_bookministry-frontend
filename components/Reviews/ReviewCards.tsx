import { reviews } from '@/app/utils/data'
import { headshot } from '@/public'
import { div } from 'framer-motion/client'
import Image from 'next/image'
import React from 'react'
import Rating from '../Rating'

const ReviewCards = () => {
  return (
    <div className='bg-white mt-4 w-full min-h-20 rounded-2xl p-4 '>
      {reviews.map(({img,rating,reviewer,text},id) => (
        <div key={id} className='border-b border-gray-300 py-4'>
          <div className='flex  center'>
            <div className='flex items-center gap-2'>
            <Image src={img} alt='image of reviewer' width={40} height={40} className='object-cover object-center rounded-full border border-black shrink-0' />
            <div className='flex flex-col '>
            {reviewer}
              <span className='text-gray-400'>Jun 26, 20</span>
              </div>
              </div>
            <Rating rating={rating}/>
          </div>
          <p className='mt-4'>{ text}</p>
          <div>
          </div>
        </div>
      ))}
  </div>
  )
}

export default ReviewCards