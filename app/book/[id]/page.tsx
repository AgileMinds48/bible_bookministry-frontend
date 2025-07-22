import { Books } from '@/app/utils/data'
import BookDetail from '@/components/Book/BookDetail'
import React from 'react'

type BookPageProps = {
  params: {
    id: string
  }
}
const page = ({ params }: BookPageProps) => {
  const bookId = parseInt(params.id)

  const book = Books.find((book) => book.id === bookId);

  if (!book) {
    return <div>Book not found</div>
  }
  return (
    <div>
      <BookDetail />
    </div>
  )
}

export default page