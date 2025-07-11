import { bk1 } from '@/public'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
interface CartPopupProps{
  bookName: string,
  image: StaticImageData | undefined
  
}
const CartPopup = ({bookName,image}:CartPopupProps) => {
  return (
    <div className='w-full h-full grid grid-cols-[1fr_1px_3fr] rounded-2xl p-2'>
      <div className='m-auto '><FaCheckCircle className='text-green-500 text-5xl ' /></div>
      <div className='w-full h-full bg-black'></div>
      <div className='m-auto flex px-2 gap-2'>
        <Image src={bk1} alt="book added to cart" className='max-h-20 max-w-20 object-cover' />
        <p className='leading-snug font-semibold'>Die with a smile <br /> <span className='font-light'> added to cart successfully </span></p>
      </div>
    </div>
  )
}

export default CartPopup