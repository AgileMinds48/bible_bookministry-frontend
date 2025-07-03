import { mainbook } from '@/public';
import Image from 'next/image';
import React from 'react'

const Landing = () => {
  return (
    <main className='h-[100dvh] pt-20 bg-gradient-to-r from-[#F5F5F5] to-[#b0d4e3b2] overflow-hidden'>
      <div className='grid grid-cols-[2fr_1fr] h-[80%] w-full '>
        <div className='b w-full p-10 content-center'>
          <p className='text-5xl font-medium'>Grow in Grace with <span className='bg-gradient-to-tr from-[#E6C17C] to-[#d6a13e] text-transparent bg-clip-text'>Trusted</span> Christian Literature</p>
          <p className='w-[60%] mt-4'>Explore our collection of Bibles and non-charismatic books rooted in scripture and truth.</p>
          <div className='mt-10 flex gap-4'>
          <button className='px-10 py-4 bg-[#5D8AA8] text-white rounded-lg cursor-pointer border-2 border-transparent transition duration-300 hover:bg-[#426074] hover:border-[#5D8AA8] hover:white'>Read Now</button>
            <button className='px-10 py-4 text-[#5D8AA8] border-2 border-[#5D8AA8] rounded-lg cursor-pointer hover:border-[#5D8AA8] transition duration-200 hover:bg-[#5D8AA8] hover:text-white'>Learn About Us</button>
            </div>
      </div>
        <div className=' w-full place-items-center relative'>
          <Image src={mainbook} alt='book' className='h-[25em] object-contain absolute top-[40%] -left-10 -translate-y-[50%] -rotate-[60deg]'/>
          <Image src={mainbook} alt='book' className='h-[25em] object-contain absolute top-[45%] -left-10 -translate-y-[50%] -rotate-30'/>
          <Image src={mainbook} alt='book' className='h-[25em] object-contain absolute top-[50%] -translate-y-[50%]'/>
        </div>
        </div>
    </main>
  )
}

export default Landing;