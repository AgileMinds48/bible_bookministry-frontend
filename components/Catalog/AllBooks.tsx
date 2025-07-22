'use client';
import { Book, Books, getItemsFromLocalStorage, setItemsToLocalStorage } from '@/app/utils/data';
import{ StaticImageData } from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Sidebar from './Sidebar';
import { filterByPriceRange, filterByRating, sortByAuthorAZ, sortByAuthorZA, sortByPriceHL, sortByPriceLH, sortByRatingH, sortByRatingL, sortByTitleAZ, sortByTitleZA } from './Filters';
import CartPopup from '../CartPopup';
import { AnimatePresence,motion } from 'framer-motion';
import FavPopup from '../FavPopup';
import BookDiv from '../Book/BookDiv';
import Link from 'next/link';



const AllBooks = () => {
interface popupDetails {
  bookName: string
  image: StaticImageData | undefined
  isAdded: boolean
  isFav:boolean
}

  //price range state
  const [priceRange, setPriceRange] = useState({min:0,max:100})

  //rating state
  const [rating, setRating] = useState<number>(5);

  //current sorting method
  const [currentSort, setCurrentsort] = useState<string>("");

//list of sorts pulling algorithms from Filter.tsx
  const sortedBooks = useMemo(() => {
    let filteredBooks = filterByPriceRange(Books, priceRange.min, priceRange.max);
    filteredBooks=filterByRating(filteredBooks, rating)
    if (currentSort === "title-asc") {
      return sortByTitleAZ(filteredBooks);
    }
    if (currentSort === "title-desc") {
      return sortByTitleZA(filteredBooks);
    }
    if (currentSort === "author-asc") {
      return sortByAuthorAZ(filteredBooks);
    }
    if (currentSort === "author-desc") {
      return sortByAuthorZA(filteredBooks);
    }
    if (currentSort === "price-asc") {
      return sortByPriceLH(filteredBooks);
    }
    if (currentSort === "price-desc") {
      return sortByPriceHL(filteredBooks);
    }
    if (currentSort === "rating-desc") {
      return sortByRatingH(filteredBooks);
    }
    if (currentSort === "rating-asc") {
      return sortByRatingL(filteredBooks);
    }
    return filteredBooks;
  },[currentSort,priceRange,rating])
  const handleSortChange = (sortValue: string) => {
    setCurrentsort(sortValue);
  }

  //price range handler
  const handlePriceRangeChange = (minPrice:number,maxPrice:number) => {
    setPriceRange({
      min: minPrice,
      max:maxPrice
  })
}
  //rating handler
  const handleRatingChange = (rating:number)=> {
    setRating(rating);
  }
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isFav, setisFav] = useState(
    getItemsFromLocalStorage("favorites",Object.fromEntries(Books.map((book) => [book.id, false])))
    );

  //favorite funciton
  const handleFav = (bookName: string, image: StaticImageData, id: number) => {
       const isCurrentlyAdded = added[id];
    const isFavorite = isFav[id];

    // toggle just the favorite
    setPopupBookDetails({
      bookName: bookName,
      image: image,
      isAdded: isCurrentlyAdded,
      isFav:!isFavorite
    })
    setShowPopup(() => ({
      addedToCart:false,
      addedToFavorites:true
    }))
    //toggle favorite for this id
    setisFav((prev: any[]) => ({
      ...prev,
      [id]: !prev[id],
    }));

    setTimeout(() => {
    setShowPopup({
      addedToCart: false,
      addedToFavorites: false
    });
  }, 1500);
};
  
type AddedState = { [key: string]: boolean };
  type Popup ={[key:string]: boolean}
//Popup
  const [showPopup, setShowPopup] = useState<Popup>({
    addedToCart: false,
    addedToFavorites:false
})
const [popupBookDetails, setPopupBookDetails] = useState<popupDetails>({
    bookName: "",
  image: undefined,
  isAdded: false,
    isFav:false
})
  //add to cart
  const [added, setAdded] = useState<AddedState>(
   getItemsFromLocalStorage("cart",Object.fromEntries(Books.map((book)=>[book,false])))
   );

  const handleAddToCart = (bookName: string, img: StaticImageData, id: number) => {
    const isCurrentlyAdded = added[id];
    const isFavorite = isFav[id];
    setPopupBookDetails({
      bookName: bookName,
      image: img,
      isAdded: !isCurrentlyAdded,
      isFav:isFavorite
    });
    setShowPopup(() => ({
      addedToFavorites:false,
      addedToCart: true,
    }));
    setAdded((prev) => ({
      ...prev,
      [id]: !prev[id]  // Toggle the added state for this specific book
    }));
   
    setTimeout(() => {
      setShowPopup((prev) => ({
        ...prev,
        addedToCart:false
      }))
    }, 1500);
  }
 
  //read from local Storage
  useEffect(() => {
    setItemsToLocalStorage("favorites",isFav)
  }, [isFav])
  
  useEffect(() => {
    setItemsToLocalStorage("cart", added);
  }, [added])

  return (
    <section className="px-8 pb-56 poppins ">
      <div>
        <h1 className="text-5xl text-center font-bold bg-gradient-to-br rounded-2xl from-[#5a88a7]/40 to-[#5a88a7]/20  py-10">
          All
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#5a88a7] to-[#426074]">
            {' '}
            available
          </span>{' '}
          books
        </h1>
        <div
          ref={carouselRef}
          className="flex flex-wrap relative   shrink-0  py-8 overflow-hidden  gap-8 gap-y-14  justify-start mx-auto pl-4"
        >
          <div className='fixed bottom-28 top-24 w-[20em] left-0'>
            <Sidebar onSortChange={handleSortChange} onPriceRangeChange={handlePriceRangeChange} onRatingChange={handleRatingChange}/>
          </div>
          {sortedBooks?.map(({ img, title, author, price, rating, id }) => (
            <Link key={id} href={`/book/${id}`}>
            <div className="rounded-2xl">
              <BookDiv title={title} img={img} author={author} price={price} rating={rating} id={id} handleFav={() => handleFav(title, img, id)} isFav={isFav} handleAddToCart={() => handleAddToCart(title, img, id)} added={added} /> 
            </div>
            </Link>
          ))}
        </div>
      </div>
      <AnimatePresence>
      {showPopup.addedToCart && (<motion.div
            key="cart-popup"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{type:"spring",duration:0.4 }}
          exit={{x:200,opacity:0}}
            className='fixed bottom-10 right-4 h-32 w-[26em]  rounded-2xl p-2 bg-white/60 backdrop-blur-2xl border-2 border-gray-400'>
         <CartPopup bookName={popupBookDetails.bookName} image={popupBookDetails.image} isAdded={popupBookDetails.isAdded} />
          </motion.div>)}

        {showPopup.addedToFavorites &&
          (<motion.div key="fav-popup"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{type:"spring",duration:0.4 }}
          exit={{x:200,opacity:0}}
            className='fixed bottom-40 right-4 h-32 w-[26em]  rounded-2xl p-2 bg-white/60 backdrop-blur-2xl border-2 border-gray-400'>
            <FavPopup bookName={popupBookDetails.bookName} image={popupBookDetails.image} isFav={popupBookDetails.isFav}/>
     </motion.div>)}
      </AnimatePresence>
    </section>
  );
};

export default AllBooks;
