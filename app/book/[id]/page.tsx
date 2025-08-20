import { Book } from '@/app/utils/data'
import BookDetail from '@/components/Book/BookDetail'
import Error from '@/components/Fallback/Error'
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
      bookCategory: BookData.bookCategory.categoryName,
      img: BookData.media[0] || '',
      amountInStock: BookData.amountInStock,
      bookDescription: BookData.bookDescription,
    }
     return (
    <div>
         <BookDetail book={selectedBook} />
         <Review book={selectedBook}/>
    </div>
  )
  } catch(error) {
    console.error("Error fetching book: ", error)
    return <Error/>
  }

 
}

export default page