import { mainbook } from '@/public';
import Image from 'next/image';
import React from 'react'

const Landing = () => {
  return (
    <main className='h-[90dvh] pt-20'>
      <div className='grid grid-cols-[2fr_1fr] h-full w-full'>
        <div className='b w-full p-10'>
          <p className='text-5xl font-medium'>Grow in Grace with <span className='bg-gradient-to-tr from-[#E6C17C] to-[#d6a13e] text-transparent bg-clip-text'>Trusted</span> Christian Literature</p>
          <p className='w-[60%] mt-4'>Explore our collection of Bibles and non-charismatic books rooted in scripture and truth.</p>
      </div>
        <div className=' w-full place-items-center'>
          <Image src={mainbook} alt='book' className='h-[25em] object-contain'/>
        </div>
        </div>
    </main>
  )
}

export default Landing;