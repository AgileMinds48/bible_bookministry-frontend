import { useCartStore } from '@/app/utils/cartStore'
import Link from 'next/link'
import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { GrPrevious } from 'react-icons/gr'

const BDHeader = () => {
      const count= useCartStore(s=>s.items.reduce((t,i)=>t+i.quantity,0))

  return (
       <header className='fixed top-0 left-0 right-0 w-full-translate-x-1/2 p-4 shadow-md z-[999] bg-white py-6'>
            <div className='max-w-7xl flex  justify-between mx-auto'>
              <button
            onClick={() => window.history.back()}
          className='underline-offset-2 underline flex items-center gap-1'
          >
                <GrPrevious className='cursor-pointer' />
                Go back to catalogue
            </button>
             <button
                  aria-label="cart"
                  className="relative cursor-pointer text-2xl p-2 rounded-full bg-[#B0D4E3] text-[#15278c]">
                  <Link href={"/cart"}>
                  <span className="absolute -top-4 text-[0.4em] -right-2 bg-[#15278c] text-white  min-h-4 min-w-4 flex items-center justify-center rounded-full">
                    {count}
                  </span>
                  <CiShoppingCart />
                </Link>
              </button>
              </div>
            </header>
  )
}

export default BDHeader