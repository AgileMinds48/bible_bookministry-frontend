import { header } from '@/public'
import Image from 'next/image'
import React from 'react'

const catalogueHeader = () => {
  return (
    <section className="px-10 p-8 poppins">
      <div className='h-[20em] rounded-2xl w-full relative before:absolute before:inset-0 before:bg-black/60 before:rounded-2xl'>
        <Image src={header} alt="bg" className='w-full h-full object-cover rounded-2xl' />
        <div className='absolute inset-0 text-white  text-6xl  flex items-center justify-center'>
          <p>View Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#5a88a7] to-[#426074]'> Catalogue </span></p>
        </div>
      </div>
    </section>
  )
}

export default catalogueHeader