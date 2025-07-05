"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
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

  const [scrolled, setScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])
  return (
    <nav className={`p-4 flex justify-between px-10 poppins antialiased transition-all duration-1000 ease-in-out z-50 ${scrolled ? "fixed top-4 rounded-lg  left-10 right-10 shadow-sm backdrop-blur-xl bg-[#B0D4E3]/50 " : "relative w-full bg-[#B0D4E3]"}`}>
      <div className="flex w-[30%] items-center justify-between">
        <div className="bg-gray-400 h-8 w-8 rounded-full"></div>
        <ul className="flex justify-between w-[80%] text-sm">
          {navItems.map(({ label, href }, idx) => (
            <Link key={idx} href={href}>
              <li className="cursor-pointer hover:scale-[1.1] transition duration-300">{label}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="w-[15%] flex justify-between">
        
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
        <button className="flex items-center gap-1  cursor-pointer text-sm bg-gradient-to-r from-[#5a88a7] to-[#426074] hover:shadow-lg text-white p-2 px-6 rounded-lg">
          <FaRegUser />
          Login
        </button>
      </div>
    </nav>
  );
};

export default Header;
