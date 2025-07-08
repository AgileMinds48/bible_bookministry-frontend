import { header } from '@/public'
import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const catalogueHeader = () => {
  return (
    <section className="px-10 p-4 poppins">
      <div className='h-[20em] rounded-2xl w-full relative before:absolute before:inset-0 before:bg-black/60 before:rounded-2xl'>
        <Image src={header} alt="bg" className='w-full h-full object-cover rounded-2xl' />
        <div className='absolute inset-0 text-white  text-6xl  flex items-center justify-center'>
          <p className='font-bold'>View Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#6ba3c9] to-[#426074]'> Catalogue </span></p>
        </div>
        <div className='absolute text-white bottom-4 right-8 flex justify-end'>
        <FaQuoteLeft />
          <p className='text-gray-300 w-[30%] italic'>Give yourself unto reading. The man who never reads will never be read; he who never quotes will never be quoted...</p>
        </div>
      </div>
    </section>
  )
}

export default catalogueHeader