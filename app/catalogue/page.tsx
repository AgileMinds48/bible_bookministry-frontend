import AllBooks from '@/components/Catalog/AllBooks'
import CatalogueHeader from '@/components/Catalog/CatalogueHeader'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div className='pl-[20em]'>
      <Header/>
      <CatalogueHeader />
      {/* <PopularBooks/> */}
      <AllBooks />
      
    </div>
  )
}

export default page