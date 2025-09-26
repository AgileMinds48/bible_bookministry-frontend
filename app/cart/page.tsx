import CartPage from '@/components/Cart/CartPage'
import Header from '@/components/Header/Header'
import { ModalProvider } from '@/components/Modal/ModalContext'
import React from 'react'

export const metadata={
  title:"My Cart - Bible and Book Ministry Ghana"
}
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