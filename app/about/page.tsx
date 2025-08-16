import { cook } from '@/public'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section className=' h-screen pt-40 flex flex-col items-center' >
      <Image src={cook} alt='cooking'/>
     <p className='text-center'> I'm cooking don't worry </p>

      
    </section>
  )
}

export default page