import { capitalise } from '@/app/utils/auth'
import { categories } from '@/app/utils/catalog'
import React from 'react'
import { CiFilter } from 'react-icons/ci'
const categoryList: categories[] | string[] = [
  "all",'theological',"bibles","children","commentaries","religious",
]

interface CategoriesProps{
  onSelect: (categoryname: string) => void
  selectedCat: string
  show:()=>void
}
const Categories = ({onSelect,selectedCat,show}:CategoriesProps) => {
  return (
    <div className=' overflow-x-scroll hide-scrollbar  mt-4 max-w-7xl mx-auto grid grid-cols-[1fr_5fr] gap-4 md:gap-0'>
       <button
        className=' flex gap-1 items-center bg-gray-300 whitespace-nowrap hover:bg-gray-400 transition duration-150 rounded-full p-2 px-4 text-black text-sm font-bold cursor-pointer w-fit'
        onClick={show}
        >
        <CiFilter />
        Show Filters
      </button>
      <ul className='flex gap-3 justify-between px-2 overflow-x-auto'>
        {categoryList.map((categoryName,id) => (
          < li
            key={`${categoryName}-${id}`}
            onClick={()=>onSelect(categoryName)}
            className={` flex justify-center items-center px-4 md:px-6 rounded-full cursor-pointer md:text-lg text-sm
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