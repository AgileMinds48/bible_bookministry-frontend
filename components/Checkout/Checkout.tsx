import React from 'react'
import AddressForm from './AddressForm'

const Checkout = () => {
  return (
    <section className='max-w-7xl mx-auto mt-24 mb-20 poppins'>
      <h1 className='text-3xl font-semibold mb-8 text-[#15278c] '>Checkout</h1>
      <div className='grid grid-cols-2'>
      <div className='shadow-2xl shadow-[#15278c]/20 p-4 rounded-2xl'>
        <h2 className='text-2xl'>Shipping Address</h2>
        <AddressForm/>
        </div>
        </div>
    </section>
  )
}

export default Checkout