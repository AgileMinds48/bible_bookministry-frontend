import CartPage from '@/components/Cart/CartPage'
import Header from '@/components/Header'
import { ModalProvider } from '@/components/Modal/ModalContext'
import React from 'react'

const page = () => {
  return (
    <div>
      <ModalProvider>
      <Header/>
      <CartPage />
      </ModalProvider>
    </div>
  )
}

export default page