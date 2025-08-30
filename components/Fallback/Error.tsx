"use client"
import React, { useState } from 'react'
import { IoMdRefresh } from 'react-icons/io'
import Image from 'next/image'
import { error } from '@/public'
// import BDHeader from '../Book/BDHeader'

const Error = () => {
  const [isLoading,setIsLoading]= useState<boolean>(false)
  const handleRefresh = () => {
    setIsLoading(true)
    window.location.reload();
  }
//   if (isLoading) {
//     return <div className='h-screen flex justify-center items-center'> <Loader /></div>
// }

  return (
    <>
      {/* <BDHeader/> */}
    <div className='h-[40dvh] w-full flex flex-col justify-center items-center poppins'>
      
      <Image src={error} alt='no connection' height={80} />
      <div className='bg-red-100 border-red-500 border rounded-2xl p-6 flex flex-col items-center'>
      <p className='text-sm = max-w-2xl text-center mb-4 text-black'>Something went wrong. Check your internet connection and try refreshing the page. 
      </p>
      <button
        className='blue-gradient text-white px-8 py-2 flex items-center gap-1 text-sm rounded-lg cursor-pointer'
        onClick={handleRefresh}
      >
      
           {!isLoading&& `Refresh`}
            <IoMdRefresh className={`text-sm ${isLoading?"animate-spin":""}`} />
        </button>
        </div>
      </div>
      </>
  )
}

export default Error