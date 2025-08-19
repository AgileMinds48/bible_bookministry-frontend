
import { lcp } from '@/public';
import Image from 'next/image';
import Link from 'next/link';
 import React from 'react'
import { GrNext } from 'react-icons/gr';

const Landing = () => {

  return (
    <main className={`h-[80dvh] pt-20 bg-gradient-to-r from-[#F5F5F5] to-[#b0d4e3b2] overflow-hidden  flex justify-center`} >
      <div className='grid md:grid-cols-[2fr_1fr] grid-cols-1 h-[80%] w-full max-w-[100em]'>
        <div className='b w-full p-4 md:p-10 flex flex-col items-center md:items-start justify-center'>
          <h1 className='md:text-6xl text-3xl md:w-[90%] poppins font-bold text-[#15278c] text-center md:text-left '>
            Grow in Grace with
            {" "}
            <span className='green-gradient text-transparent bg-clip-text'>
              Trusted
            </span>
            <br className='lg:block hidden' />
            {" "}
            Christian Literature
          </h1>
          <p className='md:w-[50%] w-[90%]  mt-4 text-sm md:text-lg poppins font-medium text-center md:text-left'>
            Explore our collection of Bibles and non-charismatic books rooted in scripture and truth
          </p>
          <div className='md:mt-10 mt-10 flex gap-4 justify-center '>
            <Link href={`/catalogue`}> 
              <button className='md:px-10 md:py-4 p-2 px-4 border-2 border-[#15278c] whitespace-nowrap blue-gradient text-white hover:shadow-lg rounded-lg cursor-pointer  transition duration-300 hover:bg-[#426074] hover: flex items-center gap-2 group poppins font-medium antialiased'>
                Explore Our Shelf
                <div aria-label='next-button' className='group-hover:translate-x-4 transition duration-300 delay-100'>
                  <GrNext />
                </div>
              </button>
              </Link>
            <button className='poppins font-medium md:px-10 md:py-4 p-2 px-4 text-[#15278c] border-2 border-[#15278c] hover:shadow-lg rounded-lg cursor-pointer  transition duration-200  hover-blue-gradient hover:text-white'>Learn About Us</button>
          </div>
        </div>
        <div className='h-[40em] w-full place-items-center relative hidden md:block -translate-y-[45%]'>
          <Image priority={true} src={lcp} alt='book' className='h-full object-contain absolute top-[50%]   drop-shadow-2xl' />
        </div>
      </div>
    </main>
  )
}

export default Landing;