"use client"
import { recommendedBooks } from '@/app/utils/data'
import { bk1 } from '@/public'
import Image from 'next/image'
import React, { MouseEventHandler, useState } from 'react'
import { FaCartPlus, FaStar } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'

const Recommended = () => {
  const [isFav, setIsFav] = useState<boolean>(false);

  const handleFav:MouseEventHandler = () => {
    setIsFav(!isFav);
  }
  return (
    <section className='poppins px-10 py-10 bg-[#FAF3E0] h-max'>
      <div>
        <h1 className='text-3xl font-semibold text-[#3D3D3D] mb-4'> <span className=' text-transparent bg-clip-text bg-gradient-to-r from-[#5a88a7] to-[#426074]'> Recommended</span> for  you </h1>
        <div className='min-h-max overflow-x-scroll hide-scrollbar'>
          <div className='flex w-max gap-4'>
          {
            recommendedBooks.map(({img,title,author,price,rating},idx) => (
              <div className='min-w-36 max-w-[30%] gap-4 min-h-48 overflow-hidden grid grid-cols-2 p-4 '>
              <div className='relative border border-[#5D8AA8] h-full shadow-2xl'>
                <MdFavorite className={`absolute right-0 top-2 z-10 text-xl ${isFav ?"text-red-500 animate-bubble":""}`} onClick={handleFav} />
                <Image src={img} alt="image of book" className='w-full h-full object-cover'/>
              </div>
              <div className='relative min-h-full h-max min-w-full flex flex-col'>
              <div className='h-[50%] flex flex-col  gap-4'>
                    <h3 className='line-clamp-3 font-garamond font-semibold leading-8 text-2xl'>{ title}</h3>
                <div>
                      <p className='line-clamp-1 poppins font-medium text-xl text-gray-500'>{author}</p>
                 
                  </div>
                </div>
                <div className='mt-4 flex justify-between'>
                  <span className='text-xl font-semibold'>GH₵{price}.00</span>
                  <span className='flex gap-1 items-center text-sm'><FaStar className='text-[#eca624] -translate-y-0.5' /> {rating} </span>
           
                </div>
                <button className='mt-auto border w-full justify-center rounded-lg px-4 p-2  bottom-0 text-[#3D3D3D] border-[#3D3D3D] hover:bg-[#3D3D3D] hover:text-white transition duration-300 flex items-center text-sm gap-1 cursor-pointer'><FaCartPlus /> Add to cart</button>
                </div>
           
                </div>
            ))
          }
         </div>
          
        </div>
      </div>
    </section>
  )
}

export default Recommended