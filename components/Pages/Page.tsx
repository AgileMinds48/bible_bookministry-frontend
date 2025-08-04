import React from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'

const Page = () => {
  return (
    <div className='w-full text-center space-x-8 mt-10'>
      <button className='p-4 shadow-2xl rounded-full cursor-pointer hover:outline-offset-2 hover:outline-2 hover:outline-[#56c10b] '>
        <GrPrevious />
      </button>
      <button className='p-6 py-3 rounded-lg bg-gray-50 border border-gray-400 cursor-pointer text-lg'>
        1
      </button>
      <button className='p-4 shadow-2xl rounded-full cursor-pointer hover:outline-offset-2 hover:outline-2 hover:outline-[#56c10b] '>
        <GrNext />
      </button>
    </div>
  )
}

export default Page