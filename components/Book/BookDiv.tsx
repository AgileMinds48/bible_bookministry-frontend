import { Book } from '@/app/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCartPlus, FaStar } from 'react-icons/fa'
import { ImBooks } from 'react-icons/im'
import { MdFavorite } from 'react-icons/md'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

interface BookDiv extends Book{
  handleFav: (id: number) => void
  handleAddToCart:(id:number)=>void
  isFav: { [key: number]: boolean }
  added:{ [key: number]: boolean }
}
const BookDiv: React.FC<BookDiv> = ({
  img,           
  title,           
  author,        
  price,         
  rating,        
  id, 
  amountInStock,
  handleFav, 
  isFav, 
  handleAddToCart, 
  added }) => {
  
  return (
     <div className="grid grid-cols-1 grid-rows-[60%_40%] cursor-pointer hover:shadow-xl transition duration-100 h-[28em]  w-[14em] shadow-lg rounded-2xl overflow-hidden">
      <div className="group h-full relative before:pointer-events-none before:absolute before:inset-0 before:bottom-0 before:bg-linear-to-t  before:from-black/30 before:from-0% before:via-black/10 before:via-60% before:to-black/0 before:to-100% before:opacity-0 hover:before:opacity-100 before:transition before:duration-500  rounded-2xl overflow-hidden">
        <Link key={id} href={`/book/${id}`}>
                  <Image
            src={img}
            width={192}
            height={280}
                    alt={title}
                    className="h-full w-full object-cover object-center"
          />
          </Link>
                  {
                    <div 
                      className="absolute bottom-2 right-2"
                      onClick={() => handleFav(id)}
                    >
                      <MdFavorite
                        className={`text-3xl  opacity-0 group-hover:opacity-100 transition duration-500 ${
                          isFav?.[id]
                            ? 'text-red-500 opacity-100 animate-bubble'
                            : 'text-white'
                        }`}
                      />
                    </div>
                  }
                </div>
                <div className="p-2 px-2 flex flex-col h-full">
                  <p title={title} className="line-clamp-2 text-lg font-semibold text-[#051363] leading-[1.3em] mb-1">
                    {title}
                  </p>
                  <div className="w-full flex items-center gap-2 mt-2">
                    <p className="text-sm text-gray-500">{author}</p>
                    <div className="bg-[#15278c] w-[5px] h-[5px] rounded-full shrink-0"></div>
                    <span className="text-sm flex items-baseline translate-y-0.5">
                      <FaStar className="text-[#eca624]" /> {rating}{' '}
                    </span>
                  </div>
                  <div className='flex flex-col mt-auto'>
                  <div className=" flex item-center  pr-2">
                    <div className="flex gap-2">
                      <p className="flex gap-1 items-center font-semibold">
                        <RiMoneyDollarCircleLine className='text-[#56c10b]'/> ₵{price}.00
                      </p>
                      <span className="border-r border"></span>
                      <p
                        title={`${amountInStock} available copies`}
                        className="flex items-baseline-last gap-0.5 text-sm mb-0.5"
                      >
                <ImBooks className='translate-y-0.5 ' />
                {amountInStock}
                      </p>
                    </div>
                   
                  </div>
                    <button className={`mt-2 p-[0.4em] rounded-lg text-sm transition duration-150   cursor-pointer     border border-[#15278c] ${added?.[id] ? "text-white bg-[#15278c] hover:bg-[#040d42]" : "text-[#15278c] hover:bg-[#15278c] bg-white hover:text-white"} `}
                      onClick={(e) => handleAddToCart(id)}>
                   {added?.[id] ? "Remove from cart" : <span className='flex items-center justify-center gap-2'><FaCartPlus /> Add to cart </span>}
                  </button>
                  </div>
                </div>
              </div>
  )
}

export default BookDiv;