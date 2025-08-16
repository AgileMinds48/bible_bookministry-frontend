import React from 'react'

const MobilePayment = () => {
  return (
    <form >
      <select name="Select Network" id="" className='w-full h-10 border p-2 mt-4'>
        <option value="" className=''>Select your network</option>
        <option value="">MTN</option>
        <option value="">Telecel</option>
        <option value="">AT</option>
      </select>
     <input type="text" readOnly placeholder='+233' className='h-10 w-12 outline-0 border' /> <input type="tel" placeholder='Enter the number' className='border h-10 w-[50%] p-2 mt-4'/>
    </form>
  )
}

export default MobilePayment