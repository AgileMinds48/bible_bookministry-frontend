import React from 'react'

const AddressForm = () => {
  return (
    <form className='flex gap-2 flex-wrap'>
      <input type="text" className='w-[50%] h-10 outline-black border mt-2'/>
      <input type="text" className='w-[50%] h-10 outline-black border mt-2'/>
    
      <input type="text" className='w-full'/>
    </form>
  )
}

export default AddressForm