import About from '@/components/About/About'
import Header from '@/components/Header'
import { ModalProvider } from '@/components/Modal/ModalContext'
import React from 'react'

const page = () => {
  return (
    <>
    <ModalProvider>  
      <Header/>
      <section className=' h-screen pt-40 flex flex-col items-center' >
      <p className='text-center'>I&apos;am cooking. Come back in a few days time. Or maybe hours lol🙈.</p>
      <About/>
        </section>
        </ModalProvider>
    </>
  )

}
    

export default page;