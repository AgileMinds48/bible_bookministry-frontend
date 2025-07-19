import { bk1 } from '@/public';
import Image from 'next/image';
import React from 'react'

const BookDetail = () => {
  return (
    <section className='min-h-screen pt-15 px-10 flex justify-center poppins'>
      <div className='max-w-[100em] min-w-[90em] min-h-[90em] grid grid-cols-2 gap-10'>
        <div>
          <div className='w-full min-h-screen'>
            <Image src={bk1} alt={`image of the book `} className='w-full  h-[70%] object-cover object-center' />
          </div>
        </div>
        <div className='p-4 shadow '>
          <p className='text-4xl font-semibold mb-2'>Die with a smile</p>
          <p className='text-gray-500 text-xl'>Author: <span className='text-black'>Samuel Ampadu</span></p>
          <p className='text-3xl text-[#15278c]'>GHC32.00</p>

        </div>
      </div>
    </section>
  )
}

export default BookDetail;