import { logo } from '@/public'
import { li } from 'framer-motion/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiMail } from 'react-icons/ci'
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { MdCall } from 'react-icons/md'

const Footer = () => {

   const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Catalogue', href: '/catalogue' },
    { label: 'E-books', href: '/e-books' },
    { label: 'About us', href: '/about' },
  ];
  return (
    <footer className='border-t border-[#01325E] poppins bg-[#B0D4E3]'>
    <div className=" h-full w-full pt-8 lg:px-16 px-8 flex gap-4 flex-col justify-between  md:flex-row">
        <div className="max-w-xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-30 h-[5.76em] ">
                <Image src={logo} alt="" className="w-full h-full mb-4" />
              </div>
              <p className="text-[#01325E] text-4xl font-medium text-left">
                Bible and Book Ministry
              </p>
            </div>
            <p className="font-light  text-gray-700 text-center  pl-16 w-full">
            A Non-Governmental Organization (NGO) concerned with the selling and buying of Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellat distinctio officia et adipisci deserunt atque consectetur illum excepturi autem animi ex, explicabo quibusdam debitis mollitia fugit non quasi? Amet, delectus
            </p>
            <div className="flex  justify-center gap-4 mt-8 ">
              <div className="h-12 w-12 border flex items-center justify-center border-[#01325E] rounded-full cursor-pointer text-[#01325E] hover:text-white hover:bg-[#01325E] duration-200"><FaFacebookF className='text-xl' /></div>
              <div className="h-12 w-12 border flex items-center justify-center border-[#01325E] rounded-full cursor-pointer text-[#01325E] hover:text-white hover:bg-[#01325E] duration-200"><FaLinkedinIn className='text-xl' /></div>
              <div className="h-12 w-12 border flex items-center justify-center border-[#01325E] rounded-full cursor-pointer text-[#01325E] hover:text-white hover:bg-[#01325E] duration-200"><FaWhatsapp className='text-xl'/></div>


            </div>
        </div>
        
          <div className="md:w-[50%] grid lg:grid-cols-[1fr_1fr_2fr] grid-cols-1 gap-16">
            <div className=" flex flex-col ">
              <h4 className="text-[#01325E] font-semibold text-xl mb-6 border-b border-dashed">Quick Links</h4>
              <ul className="font-light text-gray-700  flex flex-col gap-3 text-xl">
                {navItems.map(({label,href},index) => (
                  <Link key={index} href={href} >
                    <li className='text-xl hover:text-[#01325E]'>{label} </li>
                    </Link>
             ))}
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[#01325E] font-semibold mb-6 text-xl border-b border-dashed">My Account</h4>
              <div className="flex-1 flex flex-col  gap-3 text-gray-700 font-light text-xl">
                <span>Login</span>
                <span>Create Account</span>
                <span>View My Cart</span>
                <span>Order History</span>
              </div>
            </div>
            <div className=''>
          <h4 className='text-xl font-semibold mb-6 text-[#01325E] border-b border-dashed'>Working Hours</h4>
          <div className='text-gray-700 text-lg'>
          <p>Mondays - Fridays: 9:00am - 8:00pm GMT</p>
            <p>Saturdays - Sundays: 11:00am - 5:00pm GMT</p>
          </div>
          <h4 className='text-xl font-semibold mb-6 mt-6 text-[#01325E] border-b border-dashed'>Contact Us</h4>
          <div className='text-gray-700 text-lg'>
              <p className='flex items-center gap-2'><MdCall />
                +233 558 317 782</p>
              <p className='flex items-center gap-2'><IoMdMail />
                bibleandbookministry07@gmail.com</p>
          </div>
          </div>
        </div>
       
          
      </div>
      <div className='md:px-16 py-2 text-gray-700'>
        <hr className='w-full h-1  text-gray-700' />
        <div className='w-full p-4 flex md:justify-between justify-center flex-wrap'>
          <p className='whitespace-nowrap'>&copy; 2025 Agile Inc. All rights reserved</p>
          <p className='flex  gap-8'>
            <span className='underline cursor-pointer whitespace-nowrap'>Privacy Policy</span>
            <span className='underline cursor-pointer whitespace-nowrap'>Terms of service</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer