import React from 'react'

const AddressForm = () => {
  return (
    <form className='grid grid-cols-2 gap-4 '>
      <input
        type="text"
        placeholder='First name'
        className='col-span-1 p-2 py-4 h-10 outline-none border-b mt-2 ' />
      <input
        type="text"
        placeholder='Last name'
        className='col-span-1 p-2 py-4 h-10 outline-none border-b mt-2 ' />
      <input
        type="text"
        placeholder='Email'
        className='col-span-2 p-2 py-4 w-full h-10 outline-none border-b ' />
      <input
        type="text"
        placeholder='Address'
        className='col-span-2 p-2 py-4 w-full h-10 outline-none border-b ' />
     
    </form>
  )
}

export default AddressForm