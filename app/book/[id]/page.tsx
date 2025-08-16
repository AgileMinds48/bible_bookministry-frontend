import { Book } from '@/app/utils/data'
import BookDetail from '@/components/Book/BookDetail'
import Review from '@/components/Reviews/Review'
import axios from 'axios'
import React from 'react'

type BookPageProps = {
  params: Promise<{
    id: string
  }>
}
const page = async ({ params }: BookPageProps) => {
  const { id } = await params;
  const bookId = id;

  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const response = await axios.get(`${backendUrl}/api/v1/books/get-book/${bookId}`);
      const BookData = response.data;
    const selectedBook: Book = {
       id: BookData.bookId,
      title: BookData.bookTitle,
      author: BookData.bookAuthor,
      price: BookData.bookPrice,
      rating: BookData.rating || 0,
      category: BookData.bookCategory,
      img: BookData.media[0] || '',
      amountInStock: BookData.amountInStock,
      bookDescription: BookData.bookDescription,
      bookCategory: BookData.bookCategory
    }
     return (
    <div>
         <BookDetail book={selectedBook} />
         <Review book={selectedBook}/>
    </div>
  )
  } catch(error) {
    console.error("Error fetching book: ", error)
    return <div className='pt-44'>Book not found</div>
  }
  // if (isNaN(bookId)) return (
  //   <div>Error accessing book</div>
  // )

  // const selectedBook = Books.find((book) => book.id === bookId);

  // if (!selectedBook) {
  //   return <div>Book not found</div>
  // }
 
}

export default page