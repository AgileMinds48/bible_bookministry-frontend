import About from '@/components/About/About'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <>
      <Header/>
      <section className=' h-screen pt-40 flex flex-col items-center' >
      <p className='text-center'> I'm cooking don't worry </p>
      <About/>
    </section>
    </>
  )

}
    

export default page;