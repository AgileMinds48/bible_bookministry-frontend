import { Books } from '@/app/utils/data'
import BookDetail from '@/components/Book/BookDetail'
import React from 'react'

type BookPageProps = {
  params: {
    id: string
  }
}
const page = async ({ params }: BookPageProps) => {
  const { id } = await params;
  const bookId = parseInt(id)

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