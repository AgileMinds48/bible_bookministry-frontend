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
      <p className='text-center'>Our mission is so great it took us years to compile. Moses has the scroll now, come back a few days.</p>
      <About/>
        </section>
        </ModalProvider>
    </>
  )

}
    

export default page;