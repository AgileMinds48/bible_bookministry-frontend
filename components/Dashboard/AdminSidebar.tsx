import React from 'react'
import { FaLock } from 'react-icons/fa6'

const AdminSidebar = () => {
  return (
    <nav className='absolute top-0 h-[50em] left-0 w-[20em] border-r border-white bg-[#15278c] text-white'>
      <h1>Bible and Book Ministry</h1>
      <p className='bg-white rounded-3xl flex gap-1 items-center text-sm w-fit text-green-400 px-2'><FaLock />Admin</p>
    </nav>
  )
}

export default AdminSidebar