import Link from 'next/link';
import React from 'react';
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { MdFavoriteBorder } from 'react-icons/md';

const Header = () => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Catalog', href: '/catalog' },
  ];
  return (
    <nav className="p-4 flex justify-between w-full bg-[#B0D4E3] px-10 poppins antialiased">
      <div className="flex w-[30%] items-center justify-between">
        <div className="bg-gray-400 h-8 w-8 rounded-full"></div>
        <ul className="flex justify-between w-[80%] text-lg">
          {navItems.map(({ label, href }, idx) => (
            <Link key={idx} href={href}>
              <li className="cursor-pointer">{label}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-[15%] flex justify-between">
        <button className="flex items-center gap-1  cursor-pointer text-sm">
          <FaRegUser />
          Login
        </button>
        <button className="cursor-pointer">
          <CiSearch />
        </button>
        <button className="relative cursor-pointer">
          <span className="absolute -top-0 text-[0.7em] -right-2 bg-gray-400/60 w-4 h-4 rounded-full">
            3
          </span>
          <CiShoppingCart />
        </button>
        <button className="relative cursor-pointer">
          <span className="absolute -top-0 text-[0.7em] -right-2 bg-red-600 text-white w-4 h-4 rounded-full">
            12
          </span>
          <MdFavoriteBorder />
        </button>
      </div>
    </nav>
  );
};

export default Header;
