import { capitalise } from '@/app/utils/auth'
import { categories } from '@/app/utils/catalog'
import React, { MouseEventHandler } from 'react'
const categoryList: categories[] | string[] = [
  "all",'theological',"bibles","children","commentaries","religious",
]

interface CategoriesProps{
  onSelect: (categoryname: string) => void
  selectedCat:string
}
const Categories = ({onSelect,selectedCat}:CategoriesProps) => {
  return (
    <div className='w-full overflow-x-auto  mt-4 max-w-7xl mx-auto'>
      <ul className='flex gap-2 justify-between'>
        {categoryList.map((categoryName,id) => (
          < li
            key={`${categoryName}-${id}`}
            onClick={()=>onSelect(categoryName)}
            className={` w-fit p-1 px-6 rounded-full cursor-pointer
              ${selectedCat===categoryName?"bg-[#15278c] text-white":"border border-[#15278c]"}
              `}
          >
            {capitalise(categoryName)}
          </li>
        ))
          }
      </ul>
    </div>
  )
}

export default Categories