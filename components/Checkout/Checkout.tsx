"use client"
import React, { useState } from 'react'
import AddressForm from './AddressForm'
import { FaAddressCard } from 'react-icons/fa'
import { GiMoneyStack } from 'react-icons/gi'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import Payment from './Payment'

export type paymentmethods = "momo" | "card";
const Checkout = () => {
  const [paymentType,setPaymentType]= useState<paymentmethods>("momo")
  return (
    <section className='max-w-7xl mx-auto mt-24 mb-20 poppins'>
      <h1 className='text-3xl font-semibold mb-8 text-[#15278c] '>Checkout</h1>
      <div className='grid grid-cols-2'>
      <div className='shadow-2xl shadow-[#15278c]/20 p-4 rounded-2xl'>
        <h2 className='text-2xl border-b-2 border-[#15278c] mb-2 flex justify-between'>Delivery Address <FaAddressCard /></h2>
          <AddressForm />
           <div className='mt-6'>
            <h2 className='text-2xl border-b-2 border-[#15278c] mb-4 flex justify-between '>Payment <RiMoneyDollarCircleLine /></h2>
            <div className='flex gap-2'>
              <button
                name='momo'
                onClick={()=>setPaymentType("momo")}
            className='w-[50%] focus:bg-[#56c10b] focus:text-white transition duration-200 p-2 cursor-pointer border border-dashed border-black'
            >
              Mobile money
            </button>
              <button
                className='w-[50%] focus:bg-[#15278c] focus:text-white transition duration-200 p-2 cursor-pointer  border border-dashed border-black'
                onClick={()=>setPaymentType("card")}
              >
              Debit / Credit Card
              </button>
            </div>
            <Payment
              paymentType={paymentType} />
        </div>
        </div>

       
        </div>
    </section>
  )
}

export default Checkout