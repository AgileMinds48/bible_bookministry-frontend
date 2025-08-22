import { section } from 'framer-motion/client'
import React from 'react'

const Loader = () => {
  return (
    <section className='h-full w-full min-h-40 flex justify-center items-center '>
      <div className='w-16 h-16 border-b-2 animate-spin border-green-500 rounded-full'></div>
      </section>
  )
}

export default Loader