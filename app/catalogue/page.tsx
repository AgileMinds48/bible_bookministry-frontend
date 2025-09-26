import AllBooks from '@/components/Catalog/AllBooks'
import CatalogueHeader from '@/components/Catalog/CatalogueHeader'
import Header from '@/components/Header/Header'
import { ModalProvider } from '@/components/Modal/ModalContext'
import React from 'react'

export const metadata = {
  title: "View Our Catalogue - Bible and Book Ministry, Ghana"
}
const page = () => {
  return (
    <div className='py-8'>
      <ModalProvider>
      <Header/>
      <CatalogueHeader />
      {/* <PopularBooks/> */}
      <AllBooks />
      </ModalProvider>
    </div>
  )
}

export default page