import { bk1 } from '@/public'
import { AnimatePresence,motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
interface CartPopupProps{
  bookName: string,
  image: StaticImageData | undefined
  isAdded:boolean 
}
const CartPopup = ({bookName,image,isAdded}:CartPopupProps) => {
  return (
<div className='w-full h-full grid grid-cols-[1fr_1px_3fr] '>
      <div className='m-auto '><FaCheckCircle className='text-green-500 text-5xl ' /></div>
      <div className='w-full h-full bg-black'></div>
      <div className='m-auto flex px-2 gap-2'>
     {image && <Image src={image} alt="book added to cart" className='max-h-20 max-w-20 object-cover object-center rounded-sm' />
}    <p className='leading-snug font-semibold my-auto'>{bookName} <br />{ <span className='font-light'>{isAdded ? "added to cart successfully" : "removed from cart successfully"} </span>}</p>
      </div>
      </div>
      
  )
}

export default CartPopup