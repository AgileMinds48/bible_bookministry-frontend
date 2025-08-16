import React from 'react'
import AddressForm from './AddressForm'
import { FaAddressCard } from 'react-icons/fa'
import { GiMoneyStack } from 'react-icons/gi'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

const Checkout = () => {
  return (
    <section className='max-w-7xl mx-auto mt-24 mb-20 poppins'>
      <h1 className='text-3xl font-semibold mb-8 text-[#15278c] '>Checkout</h1>
      <div className='grid grid-cols-2'>
      <div className='shadow-2xl shadow-[#15278c]/20 p-4 rounded-2xl'>
        <h2 className='text-2xl border-b-2 border-[#15278c] mb-2 flex justify-between'>Delivery Address <FaAddressCard /></h2>
          <AddressForm />
           <div className='mt-6'>
            <h2 className='text-2xl border-b-2 border-[#15278c] mb-2 flex justify-between'>Payment <RiMoneyDollarCircleLine /></h2>
        </div>
        </div>

       
        </div>
    </section>
  )
}

export default Checkout