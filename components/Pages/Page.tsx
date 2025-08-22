import React from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'

interface PageProps{
  onPageChange:(newPage:number)=>void
  onPageNext:()=>void
  onPagePrev: () => void
  currentPage: number
  totalPages:number | undefined
}
const Page = ({ onPageNext, onPagePrev, currentPage, totalPages,onPageChange }: PageProps) => {
  const pageNumber = currentPage + 1;
  const endOfPages = (currentPage + 1) === totalPages;
  const startOfPages=pageNumber===1
  //api returns pages starting from index 0

  const generatePages = () => {
    if (!totalPages) return [pageNumber];
    const pages = [];
    pages.push(pageNumber);
    // if (pageNumber +1 < totalPages) {
    //   pages.push(pageNumber + 1)
    // }
    // if (pageNumber + 2 < totalPages) {
    //   pages.push(pageNumber+2)
    // }

    return pages;
  }
  const bookPages = generatePages();
  return (
    <>
    <div className='w-full text-center space-x-8 mt-10 flex justify-center items-center poppins'>
        <button
          disabled={startOfPages}
        onClick={ onPagePrev}
        aria-label='previous-button'
        className='p-4 shadow-2xl rounded-full cursor-pointer hover:outline-offset-2 hover:outline-2 hover:outline-[#56c10b] '>
        <GrPrevious />
      </button>
      <div className='flex gap-2'>
        {bookPages.map((pageNum) => (
          <button
            key={pageNum}
            className={`px-5 p-3  border cursor-pointer rounded-lg antialiased transition duration-200 
              ${pageNum === pageNumber ? "bg-[#15278c] text-white" : "outline-gray-600 text-black hover:bg-gray-200/80 bg-gray-100/70"}`}
          onClick={()=>onPageChange(pageNum)}
          >
            {pageNum}
          </button>
      ))}
      </div>
      <button
        disabled={endOfPages}
        onClick={onPageNext}
        aria-label='next-button'
        className={`p-4 shadow-2xl rounded-full  hover:outline-offset-2 hover:outline-2  ${endOfPages?"cursor-not-allowed hover:outline-gray-500" : "cursor-pointer hover:outline-[#56c10b]"}` }>
        <GrNext />
      </button>
      </div>
      <p className='text-center mt-4'>
        <em className='text-gray-700 '>Showing  <span className='font-semibold'>page {pageNumber}</span> out of <span className='font-semibold'>{totalPages}</span> available pages</em>
      </p>
    </>
  )
}

export default Page