import AboutHeader from '@/components/About/AboutHeader'
import Header from '@/components/Header/Header';
import { ModalProvider } from '@/components/Modal/ModalContext';
import React from 'react'

const page = () => {
  return (
    <ModalProvider>
      <Header/>
      <AboutHeader />
      </ModalProvider>
  )
  

}
    

export default page;