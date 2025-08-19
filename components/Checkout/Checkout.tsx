"use client"
import  { useState } from 'react'
import AddressForm from './AddressForm'
import { FaAddressCard } from 'react-icons/fa'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import Payment from './Payment'
import Link from 'next/link'
import { useCartStore } from '@/app/utils/cartStore'

export type paymentmethods = "momo" | "card";
const Checkout = () => {
  const [paymentType, setPaymentType] = useState<paymentmethods>("momo")
  
    const items = useCartStore(s => s.items)
  const subtotal = useCartStore(s => s.getTotalPrice())
  const DELIVERY_FEE = 10
  const grandTotal = subtotal + DELIVERY_FEE
  return (
    <section className='max-w-7xl mx-auto mt-24 mb-20 poppins'>
      <h1 className='text-3xl font-semibold mb-8 text-[#15278c] '>Checkout</h1>
      <div className='grid grid-cols-2 gap-6'>
      <div className='shadow-2xl shadow-[#15278c]/20 p-4 rounded-2xl'>
        <h2 className='text-2xl border-b-2 border-[#15278c] mb-2 flex justify-between'>Delivery Address <FaAddressCard /></h2>
          <AddressForm />
           <div className='mt-20'>
            <h2 className='text-2xl border-b-2 border-[#15278c] mb-4 flex justify-between '>Payment <RiMoneyDollarCircleLine /></h2>
            <em className='text-gray-600'>Select your payment method:</em>
            <div className='flex gap-2'>
              <button
                name='momo'
                onClick={()=>setPaymentType("momo")}
                className={`w-[50%]  transition duration-200 p-2 cursor-pointer border border-dashed border-black
              ${paymentType==="momo"?"bg-[#56c10b] text-white":""}
                  `}
            >
              Mobile money
            </button>
              <button
                className={`w-[50%] transition duration-200 p-2 cursor-pointer  border border-dashed border-black
                  ${paymentType==="card"?"bg-[#15278c] text-white":""}
                  `}
                onClick={()=>setPaymentType("card")}
              >
              Debit / Credit Card
              </button>
            </div>
            <Payment
              paymentType={paymentType} />
        </div>
        </div>
        
          <div className="w-full  bg-white rounded-lg p-6 shadow-sm border border-green-200 h-fit">
            <h2 className="text-lg font-medium text-center mb-4 text-green-700">
              Order summary
            </h2>
            <div className="flex justify-between py-2 border-b">
              <span>Subtotal</span>
              <span className="text-green-700">GHS {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Delivery Fee</span>
              <span className="text-green-700">GHS {DELIVERY_FEE.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-4 border-b-2 border-black font-semibold text-lg">
              <span>Grand Total</span>
              <span className="text-[#15278c]">GHS {grandTotal.toFixed(2)}</span>
            </div>
            <div className="flex gap-2 mt-6">
              <Link href={"/checkout"}
                className='w-full'>
              <button
                className="w-full bg-[#15278c] hover:bg-[#091974] cursor-pointer text-white py-2 rounded transition flex items-center justify-center gap-2"
                disabled={items.length === 0}
              >
                <RiMoneyDollarCircleLine className='text-2xl'/>
                Pay GHS { grandTotal.toFixed(2)}
                </button>
                </Link>
            
            </div>
          </div>
        </div>
        
    </section>
  )
}

export default Checkout