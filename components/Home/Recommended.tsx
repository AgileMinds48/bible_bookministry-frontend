"use client"
import { bk1 } from '@/public'
import Image from 'next/image'
import React, { useState } from 'react'
import { CiStar, CiUser } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'

const Recommended = () => {
  const [isFav, setIsFav] = useState<boolean>(false);

  const handleFav = () => {
    setIsFav(!isFav);
  }
  return (
    <section className='poppins px-10 py-10 bg-[#FAF3E0] h-max'>
      <div>
        <h1 className='text-3xl font-semibold text-[#3D3D3D] mb-4'> <span className=' text-transparent bg-clip-text bg-gradient-to-r from-[#5a88a7] to-[#426074]'> Recommended</span> for  you </h1>
        <div className='min-h-max'>
          <div className='w-[20%] gap-4 h-48 overflow-hidden grid grid-cols-[9rem_1fr]'>
            <div className='relative border border-[#5D8AA8] h-full '>
              <MdFavorite className={`absolute right-0 top-2 z-10 text-xl ${isFav ?"text-red-500 animate-bubble":""}`} onClick={handleFav} />
              <Image src={bk1} alt="image of book" className='w-full h-full object-cover'/>
            </div>
            <div>
            <div className='h-[50%] flex flex-col  justify-between'>
              <h3 className='line-clamp-3 font-crimson font-medium text-lg leading-4'>I didn't come this far to only come this far</h3>
              <div className='flex gap-1 text-gray-500 text-sm items-center mt'>
              <CiUser />
                <p className='line-clamp-1 poppins'>Ampadu Samuel</p>
                </div>
              </div>
              <div className='mt-1'>
              <span className='flex gap-1 items-center text-sm'><FaStar className='text-[#E6C17C] -translate-y-0.5'/> 4.5 </span>
            </div>
              </div>
         
              </div>
          
        </div>
      </div>
    </section>
  )
}

export default Recommended