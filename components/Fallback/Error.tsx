"use client"
import React, { useState } from 'react'
import { IoMdRefresh } from 'react-icons/io'
import Loader from '../Loader/Loader'
import Image from 'next/image'
import { error } from '@/public'
// import BDHeader from '../Book/BDHeader'

const Error = () => {
  const [isLoading,setIsLoading]= useState<boolean>(false)
  const handleRefresh = () => {
    setIsLoading(true)
    window.location.reload();
  }
  if (isLoading) {
    return <div className='h-screen flex justify-center items-center'> <Loader /></div>
}

  return (
    <>
      {/* <BDHeader/> */}
    <div className='h-full w-full flex flex-col justify-center items-center'>
      
      <Image src={error} alt='no connection' height={80} />
      <div className='bg-red-500/30 border-red-500 border rounded-2xl p-6 flex flex-col items-center'>
      <p className='text-2xl = max-w-2xl text-center mb-4 text-black'> Oops, something went wrong. Check your internet connection and try refreshing the page. 
      </p>
      <button
        className='bg-gray-200 px-8 py-2 flex items-center text-xl cursor-pointer'
        onClick={handleRefresh}
      >
        <IoMdRefresh />
          Refresh
        </button>
        </div>
      </div>
      </>
  )
}

export default Error