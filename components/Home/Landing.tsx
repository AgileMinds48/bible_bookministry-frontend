import { mainbook } from '@/public';
import Image from 'next/image';
import React from 'react'
import { GrNext } from 'react-icons/gr';

const Landing = () => {
  return (
    <main className='h-[100dvh] pt-20 bg-gradient-to-r from-[#F5F5F5] to-[#b0d4e3b2] overflow-hidden '>
      <div className='grid grid-cols-[2fr_1fr] h-[80%] w-full '>
        <div className='b w-full p-10 content-center'>
          <h1 className='text-6xl font-medium w-[80%] font-crimson text-[#5D8AA8]'>Grow in Grace with <span className='bg-gradient-to-tr from-[#E6C17C] to-[#d6a13e] text-transparent bg-clip-text'>Trusted</span> Christian Literature</h1>
          <p className='w-[50%] mt-4 text-lg poppins font-medium'>Explore our collection of Bibles and non-charismatic books rooted in scripture and truth.</p>
          <div className='mt-10 flex gap-4'>
            <button className='px-10 py-4 bg-gradient-to-r from-[#5a88a7] to-[#426074] text-white hover:shadow-lg rounded-lg cursor-pointer  transition duration-300 hover:bg-[#426074] hover: flex items-center gap-2 group poppins font-medium antialiased'>Read Now
              <div className='group-hover:translate-x-4 transition duration-300 delay-100'><GrNext /></div>
            </button>
            <button className='poppins font-medium px-10 py-4 text-[#5D8AA8] border-2 border-[#5D8AA8] hover:shadow-lg rounded-lg cursor-pointer hover:border-[#5D8AA8] transition duration-200 hover:bg-gradient-to-r hover:from-[#5a88a7] hover:to-[#426074] hover:text-white'>Learn About Us</button>
          </div>
        </div>
        <div className=' w-full place-items-center relative'>
          <Image priority={true} src={mainbook} alt='book' className='h-[25em] object-contain absolute top-[40%] -left-10 -translate-y-[50%] -rotate-[60deg]' />
          <Image priority={true} src={mainbook} alt='book' className='h-[25em] object-contain absolute top-[45%] -left-10 -translate-y-[50%] -rotate-30' />
          <Image priority={true} src={mainbook} alt='book' className='h-[25em] object-contain absolute top-[50%] -translate-y-[50%]' />
        </div>
      </div>
    </main>
  )
}

export default Landing;