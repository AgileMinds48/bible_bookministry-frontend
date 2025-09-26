'use client';
import { Book, getItemsFromLocalStorage, setItemsToLocalStorage } from '@/app/utils/data';
import { StaticImageData } from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Sidebar from './Sidebar';
import { filterByCategory, filterByPriceRange, filterByRating, filterBySearch, sortByAuthorAZ, sortByAuthorZA, sortByPriceHL, sortByPriceLH, sortByRatingH, sortByRatingL, sortByTitleAZ, sortByTitleZA } from './Filters';
import CartPopup from '../Popups/CartPopup';
import { AnimatePresence, motion } from 'framer-motion';
import FavPopup from '../Popups/FavPopup';
import BookDiv from '../Book/BookDiv';
import axios from 'axios';
import Loading from './loading';
import Page from '../Pages/Page';
import { useCartStore } from '@/app/utils/cartStore';
import Error from '../Fallback/Error';
import Categories from './Categories';
import { categories } from '@/app/utils/catalog';
import { CiSearch } from 'react-icons/ci';
export interface category{
  categoryName: string,
  categoryId: string,
  categoryDescription: string,
}

interface ApiBook {
  bookId: number;
  bookTitle: string;
  bookAuthor: string;
  bookPrice: number;
  bookCategory: category;
  media: string[];
  quantity: number;
}

const AllBooks = () => {
  //data fetching
  const [allBooks, setAllBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>();
  const [error, setError] = useState<string>();
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  useEffect(() => {
    setLoading(true);
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/v1/books/all-books?page=${currentPage}`
        )
        console.log(response.data);

        setTotalPages(response.data.totalPages)
        //mapping API response to Book interface
        const mappedBooks: Book[] = response.data.content.map((book: ApiBook) => ({
          id: book.bookId,
          title: book.bookTitle,
          author: book.bookAuthor,
          price: book.bookPrice,
          rating: 0,
          category: book.bookCategory,
          img: book.media[0] || '',
          amountInStock: book.quantity
        }))
        setAllBooks(mappedBooks);

      } catch (err) {
        setError("There was a problem loading books. Our librarian would look into the issue for you soon.")
        console.error("Unable to fetch", err);
      } finally {
        setLoading(false);
      }
    }
    fetchBooks();

  }, [currentPage, backendUrl])

  //for pagination
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
  }
  const handleNextpage = () => {
    setCurrentPage(currentPage + 1);
  }

  const handlePreviousPage = () => {
    if (currentPage >= 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  //search
  const [searchInput, setSearchInput] = useState<string>()
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchInput(value);
  }

  //category
  const [selectedCategory, setSelectedCategory] = useState<categories | string>("all");
  const handleCategorySelect=(categoryname:string) => {
    setSelectedCategory(categoryname);
  }
  interface popupDetails {
    bookName: string
    image: string | StaticImageData | undefined
    isAdded: boolean
    isFav: boolean
  }

  //price range state
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 })

  //rating state
  const [rating, setRating] = useState<number>(5);

  //current sorting method
  const [currentSort, setCurrentsort] = useState<string>("");

  //list of sorts pulling algorithms from Filter.tsx
  const sortedBooks = useMemo(() => {
    // filteredBooks = filterByCategory(allBooks, selectedCategory);
   let   filteredBooks = filterByPriceRange(allBooks, priceRange.min, priceRange.max);
    filteredBooks = filterByRating(filteredBooks, rating)

    //search filtering
    filteredBooks = filterBySearch(filteredBooks, searchInput || "")

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
    return filterByCategory(filteredBooks,selectedCategory);
  }, [currentSort, priceRange, rating, allBooks, searchInput,selectedCategory])
  const handleSortChange = (sortValue: string) => {
    setCurrentsort(sortValue);
  }
useEffect(() => {
}, [selectedCategory]);
  //price range handler
  useEffect(() => {
    if (allBooks.length > 0) {
      const prices = allBooks.map(book => book.price);
      const maxPrice = Math.max(...prices);
      setPriceRange({ min: 0, max: maxPrice });
    }
  }, [allBooks]);
  const handlePriceRangeChange = (minPrice: number, maxPrice: number) => {
    setPriceRange({
      min: minPrice,
      max: maxPrice
    })
  }
  //rating handler
  const handleRatingChange = (rating: number) => {
    setRating(rating);
  }
  const carouselRef = useRef<HTMLDivElement>(null);

  //favorites object
  const [isFav, setisFav] = useState<{ [key: number]: boolean }>(
    getItemsFromLocalStorage("favorites", Object.fromEntries(allBooks.map((book) => [book.id, false])))
  );

  //favorite function
  const handleFav = (id: number) => {
    //find the book with this id (i.e the book that is 'favorited')
    const book = allBooks.find(book => book.id === id);
    if (!book) return;

    const isCurrentlyAdded = added[id];
    const isFavorite = isFav[id];

    // toggle just the favorite
    setPopupBookDetails({
      bookName: book.title,
      image: book.img,
      isAdded: isCurrentlyAdded,
      isFav: !isFavorite
    })
    setShowPopup(() => ({
      addedToCart: false,
      addedToFavorites: true
    }))
    //toggle favorite for this id
    setisFav((prev) => ({
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

  type AddedState = { [key: number]: boolean };
  type Popup = { [key: string]: boolean }
  //Popup
  const [showPopup, setShowPopup] = useState<Popup>({
    addedToCart: false,
    addedToFavorites: false
  })
  const [popupBookDetails, setPopupBookDetails] = useState<popupDetails>({
    bookName: "",
    image: undefined,
    isAdded: false,
    isFav: false
  })
  // cart store integration
  const cartItems = useCartStore((s) => s.items);
  const addToCartStore = useCartStore((s) => s.addToCart);
  const removeFromCartStore = useCartStore((s) => s.removeFromCart);

  // derive a quick lookup of items in cart
  const added: AddedState = useMemo(() => {
    const idsInCart = new Set(cartItems.map((i) => i.id));
    return Object.fromEntries(allBooks.map((b) => [b.id, idsInCart.has(b.id)]));
  }, [cartItems, allBooks]);

  const handleAddToCart = (id: number) => {
    const book = allBooks.find((b) => b.id === id);
    if (!book) return;

    const isCurrentlyAdded = added[id];
    const isFavorite = isFav[id];

    // update popup state first for snappy UI
    setPopupBookDetails({
      bookName: book.title,
      image: book.img,
      isAdded: !isCurrentlyAdded,
      isFav: isFavorite,
    });
    setShowPopup(() => ({ addedToFavorites: false, addedToCart: true }));

    // push to/remove from global cart store
    if (!isCurrentlyAdded) {
      addToCartStore({
        id: book.id,
        title: book.title,
        price: book.price,
        image: typeof book.img === 'string' ? book.img : book.img.src,
      });
    } else {
      removeFromCartStore(book.id);
    }

    setTimeout(() => {
      setShowPopup((prev) => ({ ...prev, addedToCart: false }));
    }, 1500);
  };

  //read from local Storage
  useEffect(() => {
    setItemsToLocalStorage("favorites", isFav)
  }, [isFav])

  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  return (
    <section className={`px-4 md:px-6 pb-10 poppins ${showSidebar?"":""}`}>
      <div className='relative'>
        <h1 className="lg:text-5xl text-2xl  text-center font-bold bg-gradient-to-br rounded-2xl from-[#5a88a7]/40 to-[#5a88a7]/20  md:py-10 py-4">
          All
          <span className=" text-transparent bg-clip-text blue-gradient">
            {' '}
            available books
          </span>{' '}
        </h1>
     
        <div className={`w-full gap-x-30 grid ${allBooks.length > 0 && showSidebar ? "grid-cols-[20em_1fr]" : ""} h-full`}>
          <AnimatePresence>
          {/* sidebar div*/}
          {
             showSidebar &&
            allBooks.length > 0 &&
            
            <motion.div
                initial={{ x: -50,opacity:0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ x: "-25em", }}
                transition={{duration:0.1}}
                className='sticky bottom-0 top-24 h-fit w-full md:w-[25em] left-0'>
            <Sidebar
              onSortChange={handleSortChange}
              onPriceRangeChange={handlePriceRangeChange}
              onRatingChange={handleRatingChange}
                  onSearchChange={handleSearch}
                  hide={handleShowSidebar}
            />
                </motion.div>
            }
          </AnimatePresence>
        

          {/* categories */}
          <div>
          {
              allBooks.length > 0 &&
              // search and categories 
              <div className='w-full overflow-x-scroll hide-scrollbar'>
                    <div className='w-full flex items-center justify-center mt-4'>
            <div className='max-w-4xl w-full h-10 rounded-full p-1  border-2 relative'>
              <input type="text"
                placeholder='Search for a book by title or name of author'
                value={searchInput}
                onChange={handleSearch}
            className='w-full h-full outline-none pl-8 md:text-lg text-sm '
              />
              <div className='bg-gray-300  absolute top-[50%] -translate-y-[50%] flex justify-center items-center p-1 rounded-full '>
                <CiSearch className='text-xl' />
                </div>
              </div>
          </div>
            <Categories
            show={handleShowSidebar}
          onSelect={handleCategorySelect}
                selectedCat={selectedCategory} />
           </div>
          }
        <div
          ref={carouselRef}
          className="flex flex-wrap relative shrink-0  py-8 overflow-hidden gap-8 justify-evenly px-4 md:justify-start"
        >
          
          {loading ?
            <div className='w-full h-36'>
              <Loading captioned={true} />
            </div>
            : error ?
              (
                <Error />
              )
              : sortedBooks?.map(({ img, title, author, price, rating, id, amountInStock,category }) => (
                <AnimatePresence key={id}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    key={id} className="rounded-2xl">
                    <BookDiv
                      title={title}
                      img={img}
                      author={author}
                      price={price}
                      rating={rating}
                      id={id}
                      handleFav={handleFav}
                      isFav={isFav}
                      handleAddToCart={handleAddToCart}
                      added={added}
                      category={category}
                      amountInStock={amountInStock}
                    />

                  </motion.div>
                </AnimatePresence>
              ))}

          </div>
          </div>
          </div>
        {!loading && !error && allBooks.length > 0 &&
          (
            <Page
              onPageNext={handleNextpage}
              onPagePrev={handlePreviousPage}
              onPageChange={handlePageChange}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          )
        }
      </div>
      <AnimatePresence>
        {showPopup.addedToCart && (<motion.div
          key="cart-popup"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 0.4 }}
          exit={{ x: 200, opacity: 0 }}
          className='fixed bottom-10 right-4 h-32 w-[26em]  rounded-2xl p-2 bg-white/90 backdrop-blur-xl border-2 border-gray-400'>
          <CartPopup bookName={popupBookDetails.bookName} image={popupBookDetails.image} isAdded={popupBookDetails.isAdded} />
        </motion.div>)}

        {showPopup.addedToFavorites &&
          (<motion.div key="fav-popup"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.4 }}
            exit={{ x: 200, opacity: 0 }}
            className='fixed bottom-40 right-4 h-32 w-[26em]  rounded-2xl p-2 bg-white/90 backdrop-blur-xl border-2 border-gray-400'>
            <FavPopup bookName={popupBookDetails.bookName} image={popupBookDetails.image} isFav={popupBookDetails.isFav} />
          </motion.div>)}
      </AnimatePresence>
    </section>
  );
};

export default AllBooks;
