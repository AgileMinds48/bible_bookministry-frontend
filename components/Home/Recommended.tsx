"use client"
import { recommendedBooks } from '@/app/utils/data'
import { bk1 } from '@/public'
import { transform } from 'next/dist/build/swc/generated-native'
import Image from 'next/image'
import React, { MouseEventHandler, useRef, useState } from 'react'
import { FaCartPlus, FaStar } from 'react-icons/fa'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { MdFavorite } from 'react-icons/md'

const Recommended = () => {
  const [translate, setTranslate] = useState<number>(0);
  const [isFav, setIsFav] = useState(
    Object.fromEntries(recommendedBooks.map((_,idx)=>[idx, false]))
  );
  const scrollDivRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollBy({
        left: 400,
        behavior:"smooth"
      })
    }
  }

  const handlePrevious = () => {
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollBy({
        left: -400,
        behavior:"smooth"
      })
    }
  }
  const handleFav = (index:number) => {
    setIsFav((prev:{[key:number]:boolean}) => ({
      ...prev,
      [index]:!prev[index]
    }));
  }
  return (
    <section className='poppins px-10 py-10 bg-[#FAF3E0] h-max '>
      <div className='relative'>
        <h1 className='text-4xl font-semibold text-[#3D3D3D] mb-4'> <span className=' text-transparent bg-clip-text bg-gradient-to-r from-[#5a88a7] to-[#426074]'> Recommended</span> for  you </h1>
        <div className='min-h-max overflow-x-scroll hide-scrollbar ' ref={scrollDivRef}>

          <div  className={`flex shrink-0 gap-4 pl-8 `} >
            <button onClick={handlePrevious} className='absolute top-[50%] -translate-y-[50%] left-0 p-4 bg-black/15 rounded-full hover:bg-black/40 z-10 cursor-pointer text-2xl text-white'><GrPrevious/></button>
          {
            recommendedBooks.map(({img,title,author,price,rating},idx) => (
              <div key={idx} className='group cursor-pointer min-w-[25em] max-w-[5%] gap-4 min-h-36 overflow-hidden grid grid-cols-2 p-4  hover:scale-97 transition duration-500'>
              <div className='relative border border-[#5D8AA8] h-full shrink-0 group-hover:shadow-lg transition duration-300'>
                <MdFavorite className={`absolute right-0 top-2 z-10 text-xl cursor-pointer  ${isFav[idx] ?"text-red-500 animate-bubble":"text-[#FAF3E0]"}`} onClick={()=>handleFav(idx)} />
                <Image src={img} alt="image of book" className='w-full h-full object-cover'/>
              </div>
              <div className='relative min-h-full h-max min-w-full flex flex-col py-8'>
              <div className=''>
                    <h3 className='line-clamp-3 font-garamond font-semibold leading-8 text-2xl'>{ title}</h3>
                <div>
                      <p className='line-clamp-1 poppins font-medium text-[1.2em] text-gray-500'>{author}</p>
                 
                  </div>
                </div>
                <div className='mt-auto flex justify-between '>
                  <span className='text-xl font-semibold poppins'>GH₵{price}.00</span>
                  <span className='flex gap-1 items-center text-sm'><FaStar className='text-[#eca624] -translate-y-0.5' /> {rating} </span>
           
                </div>
                <button className='mt-auto border w-full justify-center rounded-lg px-4 p-2  bottom-0 text-[#3D3D3D] border-[#3D3D3D] hover:bg-[#3D3D3D] hover:text-white transition duration-300 flex items-center text-sm gap-1 cursor-pointer'><FaCartPlus /> Add to cart</button>
                </div>
           
                </div>
            ))
            }
            <button onClick={handleNext} className='absolute top-[50%] -translate-y-[50%] right-0 p-4 bg-black/15 rounded-full hover:bg-black/40 z-10 cursor-pointer text-xl text-white'><GrNext/></button>
            </div>
          
        </div>
      </div>
    </section>
  )
}

export default Recommended