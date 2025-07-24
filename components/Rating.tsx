import { Book } from '@/app/utils/data'
import React from 'react'
import { FaStar } from 'react-icons/fa'
interface RatingProps{
  rating:number
}

const Rating = ({rating}:RatingProps) => {
  return (
     <div className='flex items-center gap-1'>
                                    { [1, 2, 3, 4, 5].map((star) => (
                                      <FaStar
                                        key={star}
                                        className={`text-xl ${star <= rating ? 'text-[#eca624]' : 'text-gray-300'}`}
                                      />
                                    ))}
                                  </div>
  )
}

export default Rating