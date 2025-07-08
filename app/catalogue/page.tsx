import AllBooks from '@/components/Catalog/AllBooks'
import CatalogueHeader from '@/components/Catalog/CatalogueHeader'
import PopularBooks from '@/components/Catalog/PopularBooks'
import React from 'react'

const page = () => {
  return (
    <div className='pl-[20em]'>
      <CatalogueHeader />
      <PopularBooks/>
      <AllBooks />
    </div>
  )
}

export default page