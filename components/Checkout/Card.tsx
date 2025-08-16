import React from 'react'

const Card = () => {
  return (
    <div>
      <form className='w-full grid grid-cols-2 gap-4 mt-2'>
        <input
        type="text"
        placeholder='Card number'
        className='col-span-2 p-2 py-4 h-10 outline-none border-b mt-2 ' />
      <input
        type="text"
        placeholder="Cardholder's name"
        className='col-span-2 p-2 py-4 h-10 outline-none border-b mt-2 ' />
      <input
        type="text"
        placeholder="Expiry Date"
        className='col-span-1 p-2 py-4 h-10 outline-none border-b mt-2 ' />
      <input
        type="number"
        placeholder="Security code"
        className='col-span-1 p-2 py-4 h-10 outline-none border-b mt-2 ' />

        
      </form>
    </div>
  )
}

export default Card