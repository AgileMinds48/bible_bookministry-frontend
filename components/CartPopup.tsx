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
    <AnimatePresence>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{type:"spring", }}
        exit={{x:200,opacity:0}}
        className='w-full h-full grid grid-cols-[1fr_1px_3fr] rounded-2xl p-2 bg-white/60 backdrop-blur-2xl border-2 border-gray-400'>
      <div className='m-auto '><FaCheckCircle className='text-green-500 text-5xl ' /></div>
      <div className='w-full h-full bg-black'></div>
      <div className='m-auto flex px-2 gap-2'>
     {image && <Image src={image} alt="book added to cart" className='max-h-20 max-w-20 object-cover object-center rounded-sm' />
}        <p className='leading-snug font-semibold my-auto'>{bookName} <br /> <span className='font-light'>{isAdded?"removed from cart successfully": "added to cart successfully" }</span></p>
      </div>
      </motion.div>
      </AnimatePresence>
  )
}

export default CartPopup