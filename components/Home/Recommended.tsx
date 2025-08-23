"use client"
import { Books } from '@/app/utils/data'
import { AnimatePresence, motion } from 'framer-motion'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { useMemo, useRef, useState } from 'react'
import { FaCartPlus, FaStar } from 'react-icons/fa'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { MdFavorite } from 'react-icons/md'
import CartPopup from '../CartPopup'
import FavPopup from '../FavPopup'

const Recommended = () => {
  const recommendedBooks = Books.filter((book) => book.category === "Recommended")

  const [isFav, setIsFav] = useState(
    Object.fromEntries(Books.map((book) => [book.id, false]))
  );
  const scrollDivRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollBy({
        left: 400,
        behavior: "smooth"
      })
    }
  }

  const handlePrevious = () => {
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollBy({
        left: -400,
        behavior: "smooth"
      })
    }
  }
  const handleFav = (id: number, bookName: string, img: StaticImageData | string) => {
    const isCurrentlyAdded = added[id];
    const isFavorite = isFav[id];
    setIsFav((prev: { [key: number]: boolean }) => ({
      ...prev,
      [id]: !prev[id]
    }));

    setPopupBookDetails({
      bookName: bookName,
      image: img ,
      isAdded: isCurrentlyAdded,
      isFav: !isFavorite
    });

    setShowPopup(() => ({
      addedToFavorites: true,
      addedToCart: false,
    }));

    setTimeout(() => {
      setShowPopup((prev) => ({
        ...prev,
        addedToFavorites: false
      }))
    }, 1500);
  }

  //handling add to cart
  //types and interfaces
  type AddedState = { [key: number]: boolean };
  interface popupDetails {
    bookName: string
    image: StaticImageData | undefined |string
    isAdded: boolean
    isFav: boolean
  }
  type Popup = { [key: string]: boolean }


  //states
  const [added, setAdded] = useState<AddedState>(
    useMemo(() => Object.fromEntries(Books.map((book) => [book.id, false])), []
    ));

  const [popupBookDetails, setPopupBookDetails] = useState<popupDetails>({
    bookName: "",
    image: undefined,
    isAdded: false,
    isFav: false
  })

  const [showPopup, setShowPopup] = useState<Popup>({
    addedToCart: false,
    addedToFavorites: false
  })
  //function
  const handleAddToCart = (bookName: string, img: StaticImageData | string, id: number) => {
    const isCurrentlyAdded = added[id];
    const isFavorite = isFav[id];
    setPopupBookDetails({
      bookName: bookName,
      image: img,
      isAdded: !isCurrentlyAdded,
      isFav: isFavorite
    });
    setShowPopup(() => ({
      addedToFavorites: false,
      addedToCart: true,
    }));
    setAdded((prev) => ({
      ...prev,
      [id]: !prev[id]  // Toggle the added state for this specific book
    }));

    setTimeout(() => {
      setShowPopup((prev) => ({
        ...prev,
        addedToCart: false
      }))
    }, 1500);
  }



  return (
    <section className='poppins md:p-10 p-4 bg-white shadow-2xs inset-shadow-xs  antialiased'>
      <div className='relative'>
        <div className='flex flex-col md:flex-row md:justify-between items-baseline'>
          <h1 className='md:text-4xl text-2xl font-semibold text-black mb-4'>
            <span className=' text-transparent bg-clip-text blue-gradient'>
              Recommended
            </span>{" "}
            for you </h1>
            <button className='underline cursor-pointer flex center gap-2 group'>
          <Link href={"catalogue"}>

              View all books
              <span aria-label='proceed-button' className='-translate-0.5 inline-flex group-hover:translate-x-2  delay-100 duration-100 transition '>
                <GrNext />
              </span>
          </Link>
          
          </button>
        </div>
        <div className='min-h-max overflow-x-scroll hide-scrollbar' ref={scrollDivRef}>

          <div className={`flex shrink-0 gap-4 pl-8 `} >
            <button
            aria-label='scroll left'
              onClick={handlePrevious} className='absolute top-[50%] -translate-y-[50%] left-0 p-4 bg-black/15 rounded-full hover:bg-black/40 z-10 cursor-pointer text-2xl text-white'><GrPrevious /></button>
            {
              recommendedBooks.map(({ img, title, author, price, rating, id }) => (
                <div key={id} className='group cursor-pointer min-w-[25em]   md:min-h-36  gap-4  overflow-hidden grid grid-cols-2 p-4  hover:scale-97 transition duration-500'>
                  <div className='relative border border-[#5D8AA8] h-full shrink-0 group-hover:shadow-lg transition duration-300'>
                    <MdFavorite className={`absolute right-0 top-2 z-10 text-xl cursor-pointer   ${isFav[id] ? "text-red-500 animate-bubble" : "text-[#FAF3E0]"}`} onClick={() => handleFav(id, title, img)} />
                    <Image src={img} alt="image of book" className='w-full h-full object-cover' placeholder='blur' />
                  </div>
                  <div className='relative min-h-full h-max min-w-full flex flex-col py-8'>
                    <div className='text-black'>
                      <h2 className='line-clamp-3  font-semibold leading-8 md:text-2xl text-lg '>{title}</h2>
                      <div>
                        <h3 className='line-clamp-1 poppins font-medium text-xl text-[#15278c]'>{author}</h3>

                      </div>
                    </div>
                    <div className='mt-auto flex justify-between '>
                      <span className='text-xl font-semibold poppins'>GH₵{price}.00</span>
                      <span className='flex gap-1 items-center text-sm'><FaStar className='text-[#eca624] -translate-y-0.5' /> {rating} </span>

                    </div>
                    <button onClick={() => handleAddToCart(title, img, id)}
                      className={`mt-auto border w-full justify-center rounded-lg px-4 p-2  bottom-0  transition duration-300 flex items-center text-sm gap-1 cursor-pointer ${added[id] ? "bg-[#15278c] text-white hover:bg-[#15278c]" : "text-[black] border-[#15278c] hover:bg-[#15278c] hover:text-white"}`}>
                      {added[id] ? "Remove from cart" :
                        <span className="flex gap-1 items-center">
                          <FaCartPlus />Add to cart</span>}
                    </button>
                  </div>

                </div>
              ))
            }
            <button 
            aria-label='scroll-right'
              onClick={handleNext} className='absolute top-[50%] -translate-y-[50%] md:-right-8 right-0 p-4 bg-black/15 rounded-full hover:bg-black/40 z-10 cursor-pointer text-xl text-white'><GrNext /></button>
          </div>

        </div>
      </div>
      <AnimatePresence>
        {showPopup.addedToCart && (<motion.div
          key="cart-popup"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 0.4 }}
          exit={{ x: 200, opacity: 0 }}
          className='fixed bottom-10 right-4 h-32 w-[26em]  rounded-2xl p-2 bg-white/90 backdrop-blur-2xl border-2 border-gray-400 z-100'>
          <CartPopup bookName={popupBookDetails.bookName} image={popupBookDetails.image} isAdded={popupBookDetails.isAdded} />
        </motion.div>)}

        {showPopup.addedToFavorites &&
          (<motion.div key="fav-popup"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.4 }}
            exit={{ x: 200, opacity: 0 }}
            className='fixed bottom-40 right-4 h-32 w-[26em] z-100 rounded-2xl p-2 bg-white/60 backdrop-blur-2xl border-2 border-gray-400'>
            <FavPopup bookName={popupBookDetails.bookName} image={popupBookDetails.image} isFav={popupBookDetails.isFav} />
          </motion.div>)}
      </AnimatePresence>
    </section>
  )
}

export default Recommended