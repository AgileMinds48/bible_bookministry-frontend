import AllBooks from '@/components/Catalog/AllBooks'
import CatalogueHeader from '@/components/Catalog/CatalogueHeader'
import Header from '@/components/Header'
import { ModalProvider } from '@/components/Modal/ModalContext'
import React from 'react'

const page = () => {
  return (
    <div className='pl-[20em]'>
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