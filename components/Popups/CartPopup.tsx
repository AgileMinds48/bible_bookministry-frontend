import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
interface CartPopupProps{
  bookName: string,
  image: string|  StaticImageData | undefined
  isAdded:boolean 
}
const CartPopup = ({bookName,image,isAdded}:CartPopupProps) => {
  return (
    <div className=' grid grid-cols-[40px_3fr] 
md:h-32 md:w-[26em] h-28 w-[20em]  rounded-2xl p-2 bg-gray-200 backdrop-blur-xl border-2 border-[#15278c]
'>
      <div className='m-auto  '><FaCheckCircle className='text-green-500 text-3xl ' /></div>
      {/* <div className='w-full h-full bg-black'></div> */}
      <div className='m-auto flex px-2 gap-2 items-center justify-end border-l w-full h-full'>
        {image &&
          <Image src={image}
     width={80} height={80}
            alt="book added to cart" className='max-h-20 max-w-20 object-cover object-center rounded-sm' />
          
        }    <div className='leading-snug max-h-full font-semibold '><p className='line-clamp-3 text-sm md:text-lg m-0'>{bookName}</p>
          {<p className='font-light m-0 text-sm md:text-lg'>{isAdded ? "added to cart successfully" : "removed from cart successfully"} </p>}</div>
      </div>
      </div>
      
  )
}

export default CartPopup