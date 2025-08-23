import Link from 'next/link';
 import React from 'react'
import { GrNext } from 'react-icons/gr';
import Stats from './Stats';
import { FaArrowDownLong } from 'react-icons/fa6';

const Landing = () => {

  return (
    <main className={`h-screen pt-20 hero-background overflow-hidden  flex flex-col justify-center items-center`} >
      <div className='max-w-7xl flex flex-col items-center'>
        <div className='b w-full p-4 md:p-10 flex flex-col items-center md:items-start justify-center'>
          <h1 className='md:text-5xl lg:text-6xl text-3xl max-w-4xl inter font-medium text-white text-center drop-shadow-xl'>
            Grow in Grace with
            {" "}
            {/* <span className='bg-red-900 text-transparent bg-clip-text font-medium'> */}
              Trusted
            {/* </span> */}
            <br className='lg:block hidden' />
            {" "}
            <span className='bg-red-900 text-transparent bg-clip-text  font-semibold'>

              Christian Literature
              </span>

          </h1>
          <p className='   mt-4 text-sm md:text-lg font-medium text-center text-white'>
            Browse our handpicked selection of Bibles and books rooted in sound doctrine and spiritual growth.
          </p>
          <div className='md:mt-10 mt-10 flex flex-col md:flex-row gap-4 justify-center  mx-auto'>
            <Link href={`/catalogue`}> 
              <button className='md:px-10 md:py-4 w-full p-2 px-4  blue-gradient whitespace-nowrap  text-white hover:shadow-lg rounded-lg cursor-pointer  transition duration-300 hover: flex items-center gap-2 group font-semibold antialiased'>
                Explore Our Shelf
                <div aria-label='next-button' className='group-hover:translate-x-4 transition duration-300 delay-100'>
                  <GrNext />
                </div>
              </button>
              </Link>
            {/* <button className=' font-medium md:px-10 md:py-4 p-2 px-4 text-[#15278c] border-2 border-[#15278c] hover:shadow-lg rounded-lg cursor-pointer  transition duration-200  hover-blue-gradient hover:text-white whitespace-nowrap'>Learn About Us</button> */}
          </div>
        </div>
        {/* <div className='h-[40em] w-full place-items-center relative hidden md:block -translate-y-[45%]'>
          <Image priority={true} src={lcp} alt='book' className='h-full object-contain absolute top-[50%]   drop-shadow-2xl' />
        </div> */}
        <Stats />
      </div>
     <FaArrowDownLong className='mt-20 text-gray-800 animate-bounce ' />

    </main>
  )
}

export default Landing;