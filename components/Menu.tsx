import Link from 'next/link';
import React from 'react'
import { CiLogout } from 'react-icons/ci';
import { FaPeopleRoof } from 'react-icons/fa6';
import { GrCatalog } from 'react-icons/gr';
import { IoMdClose, IoMdHome } from 'react-icons/io';
import { MdBookOnline, MdFavorite } from 'react-icons/md';

interface MenuProps{
  onClose:()=>void
}
const Menu = ({onClose}:MenuProps) => {
  const navItems = [
    { icon:<IoMdHome />, label: 'Home', href: '/' },
    { icon:<GrCatalog /> ,label: 'Catalogue', href: '/catalogue' },
    { icon:<MdBookOnline />,label: 'E-books', href: '/e-books' },
    {icon: <FaPeopleRoof />,label: 'About us', href: '/about' },
  ];
  return (
    <div className=" h-screen  bg-white p-4 poppins flex flex-col">
      <div className='p-2 border-2 border-green-500 w-fit flex ml-auto'><IoMdClose /></div>
      <ul className=''>
        {navItems.map(({ label, href,icon }) => (
          <Link key={label} href={href} className='flex items-center space-x-2 px-8 border-b border-gray-300'>
            <div className='text-2xl text-[#15278c]'>{icon}</div>
            <li className=' w-full  text-xl p-2 '>
              {label}
            </li>
            </Link>
        ))}
      </ul>
      <p className='px-8 flex gap-4 text-2xl mt-12 items-center'><MdFavorite className='text-[#15278c]' />
        My wishlist
      </p>
      <div className='mt-auto text-2xl flex gap-2 justify-center items-center text-white bg-[#15278c] rounded-lg py-2 '>
        <CiLogout />
        Logout
      </div>
  </div>  )
}

export default Menu;