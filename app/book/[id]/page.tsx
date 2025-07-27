import { Books } from '@/app/utils/data'
import BookDetail from '@/components/Book/BookDetail'
import { div } from 'framer-motion/client'
import React from 'react'

type BookPageProps = {
  params: Promise<{
    id: string
  }>
}
const page = async ({ params }: BookPageProps) => {
  const { id } = await params;
  const bookId = parseInt(id)

  if (isNaN(bookId)) return (
    <div>Error accessing book</div>
  )

  const selectedBook = Books.find((book) => book.id === bookId);

  if (!selectedBook) {
    return <div>Book not found</div>
  }
  return (
    <div>
      <BookDetail book={selectedBook}/>
    </div>
  )
}

export default page