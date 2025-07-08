import CatalogueHeader from '@/components/Catalog/CatalogueHeader'
import PopularBooks from '@/components/Catalog/PopularBooks'
import React from 'react'

const page = () => {
  return (
    <div>
      <CatalogueHeader />
      <PopularBooks/>
    </div>
  )
}

export default page