import { reviews } from '@/app/utils/data'
import { headshot } from '@/public'
import { div } from 'framer-motion/client'
import Image from 'next/image'
import React from 'react'

const ReviewCards = () => {
  return (
    <div className='bg-white mt-4 w-full h-20 rounded-2xl p-4'>
      {reviews.map(({img,rating,reviewer,text},id) => (
        <div key={id}>
          <div className='flex items-center gap-2'>
            <Image src={headshot} alt='image of reviewer' width={40} height={40} className='object-cover object-center rounded-full border border-black shrink-0' />
            <div className='flex flex-col '>
            Afia Frimpomaa
              <span className='text-gray-400'>Jun 26, 20</span>
              </div>
          </div>
          <div>

          </div>
        </div>
      ))}
  </div>
  )
}

export default ReviewCards