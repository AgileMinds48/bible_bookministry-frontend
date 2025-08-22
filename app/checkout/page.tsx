import Checkout from '@/components/Checkout/Checkout'
import Header from '@/components/Header'
import { ModalProvider } from '@/components/Modal/ModalContext'
import React from 'react'

const page = () => {
  return (
    <div>
      <ModalProvider>
      <Header/>
        <Checkout />
        </ModalProvider>
    </div>
  )
}

export default page;