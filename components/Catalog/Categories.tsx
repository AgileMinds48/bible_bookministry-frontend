import { capitalise } from '@/app/utils/auth'
import { categories } from '@/app/utils/catalog'
import React from 'react'
const categoryList: categories[] | string[] = [
  "all",'theological',"bibles","children","commentaries","default","religious",
]
const Categories = () => {
  return (
    <div className='w-full overflow-x-auto  mt-4'>
      <ul className='flex gap-2 justify-between'>
        {categoryList.map((categoryName) => (
          < li className='border border-[#15278c] w-fit p-1 px-6 rounded-full cursor-pointer'>{capitalise(categoryName)}</li>
        ))
          }
      </ul>
    </div>
  )
}

export default Categories