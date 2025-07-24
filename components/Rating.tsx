import { Book } from '@/app/utils/data'
import React from 'react'
import { FaStar } from 'react-icons/fa'
type RatingProps = {
  book:Book
}
const Rating = ({book}:RatingProps) => {
  return (
     <div className='flex items-center gap-1'>
                                    { [1, 2, 3, 4, 5].map((star) => (
                                      <FaStar
                                        key={star}
                                        className={`text-xl ${star <= book.rating ? 'text-[#eca624]' : 'text-gray-300'}`}
                                      />
                                    ))}
                                  </div>
  )
}

export default Rating