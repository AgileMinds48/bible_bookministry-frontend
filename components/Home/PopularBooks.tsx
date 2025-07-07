import { popularBooks, recommendedBooks } from '@/app/utils/data'
import { bk8 } from '@/public'
import Image from 'next/image'
import React from 'react'
import { FaCartPlus, FaStar } from 'react-icons/fa'

const PopularBooks = () => {
  return (
    <section>
      <div className='p-4 py-10 poppins'>
        <h1 className='text-4xl poppins font-semibold text-[#3D3D3D]'>Our most <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#5a88a7] to-[#426074]'>popular</span>  books</h1>
        <div className='flex shrink-0 px-16 p-8 overflow-hidden gap-8 gap-y-14 flex-wrap'>
          {recommendedBooks.map(({img,title,author,price,rating},index) => (
             <div key={index} className='rounded-2xl'>
          <div className='grid grid-cols-1 grid-rows-[60%_40%] cursor-pointer hover:shadow-xl transition duration-100 h-[22em]  w-[14em] shadow-lg rounded-2xl overflow-hidden'>
            <div className='h-full relative before:absolute before:inset-x-0 before:bottom-0 rounded-2xl overflow-hidden'>
              <Image src={img} alt='' className='h-full w-full object-cover '/>
            </div>
              <div className='p-4 px-2 flex flex-col h-full'>
                  <p className='line-clamp-2 text-lg font-semibold text-[#426074] leading-[1.1em] mb-1'>{title}</p>
                <div className='w-full flex items-center gap-2 mt-2'>
                    <p className='text-sm text-gray-500'>{ author}</p>
                  <div className='bg-gray-600 w-1 h-1 rounded-full'></div>
                  <span className='text-sm flex items-baseline translate-y-0.5'><FaStar className='text-[#eca624]'/> {rating} </span>
                </div>
                <div className=' flex center mt-auto pr-4'>
                  <span className=''>₵{price}.00</span>
                  <button className='text-3xl text-[#5a88a7] '><FaCartPlus/></button>
                </div>
              </div>
            </div>
            </div>
          ))}
         
        </div>
      </div>
    </section>
  )
}

export default PopularBooks