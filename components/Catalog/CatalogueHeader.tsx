import { header } from '@/public'
import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const catalogueHeader = () => {
  return (
    <section className="md:px-6 p-4 md:p-4 poppins">
      <div className='lg:h-[20em] md:h-[12em] h-[8em] rounded-2xl w-full relative before:absolute before:inset-0 before:bg-black/60 before:rounded-2xl blue-gradient'>
        <Image  src="/Catalogue/header.jpg" priority={true} width={500} height={500} alt="bg" className='w-full h-full hidden md:block object-cover rounded-2xl' />
        <div className='absolute inset-0 text-white    flex items-center justify-center text-center '>
          <h1 className='font-bold z-20  text-2xl md:text-3xl  lg:text-5xl'>View Our <span className='text-transparent bg-clip-text green-gradient'> Catalogue </span></h1>
        </div>
        <div className='hidden  absolute text-white bottom-4 right-8 lg:flex justify-end'>
        <FaQuoteLeft />
          <p className='text-gray-300 w-[30%] italic'>Give yourself unto reading. The man who never reads will never be read; he who never quotes will never be quoted...</p>
        </div>
      </div>
    </section>
  )
}

export default catalogueHeader