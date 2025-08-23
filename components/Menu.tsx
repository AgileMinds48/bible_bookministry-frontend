import { userEmail, username } from '@/app/utils/logininfo';
import { capitalise, handleLogout, isLoggedIn } from '@/hooks/auth';
import Link from 'next/link';
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { FaPeopleRoof, FaRegCircleUser } from 'react-icons/fa6';
import { GrCatalog } from 'react-icons/gr';
import { IoMdClose, IoMdHome } from 'react-icons/io';
import { MdBookOnline } from 'react-icons/md';
import { TbLogout2 } from 'react-icons/tb';

interface MenuProps{
  onClose:()=>void
}
const Menu = ({ onClose }: MenuProps) => {
  const loggedIn = isLoggedIn();
  // const username = getUserEmail();
  const navItems = [
    { icon:<IoMdHome />, label: 'Home', href: '/' },
    { icon:<GrCatalog /> ,label: 'Catalogue', href: '/catalogue' },
    { icon:<MdBookOnline />,label: 'E-books', href: '/e-books' },
    {icon: <FaPeopleRoof />,label: 'About us', href: '/about' },
    // {icon: <MdFavorite/>,label: 'My wishlist', href: '' },
    {icon: <FaShoppingCart />,label: 'My cart', href: '/cart' },
  ];
  return (
    <div className="  pt-10 bg-white p-4 poppins flex flex-col overflow-hidden">
      <div
        onClick={onClose}
        className='p-2 border-2 border-green-500 w-fit flex ml-auto'>
        <IoMdClose />
      </div>
     {loggedIn && <div className='border-b border-gray-500 py-8 text-3xl p-4 flex items-center'>
        <div className='bg-red-900/80 mr-4 text-white flex justify-center items-center rounded-full h-[40px] w-[40px] p-10'>
          {username?.slice(0, 1).toUpperCase()}</div>
        <div>
       <p className='text-2xl '> {capitalise(username)} </p>
          <p className='text-2xl text-gray-600 whitespace-nowrap'>{userEmail}</p>
          </div>
      </div>}
      <ul className=''>
        {navItems.map(({ label, href,icon }) => (
          <Link key={label} href={href} className='flex items-center space-x-2 px-8 border-b border-gray-300'>
            <div className='text-2xl text-[#15278c]'>{icon}</div>
            <li className=' w-full  text-xl p-2 py-4'>
              {label}
            </li>
            </Link>
        ))}
      </ul>

      {loggedIn ?
        (
        // <div className='mt-10 text-2xl flex gap-2 justify-center items-center text-white bg-[#15278c] rounded-lg py-2 '>
       <button className="p-4 mt-10 text-2xl flex gap-2 justify-center items-center text-white bg-red-900/80 rounded-lg py-2 ">
         <TbLogout2
          onClick={handleLogout}
              className="text-2xl text-white" />
            Logout
        </button>
      // </div>
  )
        :
        
        (<div className='mt-10 text-2xl flex gap-2 justify-center items-center text-white bg-[#15278c] rounded-lg py-2 '>
        <FaRegCircleUser className='text-white '/>
        Login
      </div>)}
  </div>  )
}

export default Menu;