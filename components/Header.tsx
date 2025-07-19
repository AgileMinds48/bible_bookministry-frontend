"use client";
import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import Modal from "./Modal";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const pathName = usePathname();
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Catalogue', href: '/catalogue' },
    { label: 'E-books', href: '/e-books' },
    { label: 'About us', href: '/about' },
  ];
  //for modal
  const [showSignUpModal, setShowSignUpModal] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  const handleShowLogin = (showLogin: boolean) => {
    setShowLoginModal(showLogin);
  };

  const handleShowSignUp = () => {
    setShowLoginModal(false);
  };
  const [scrolled, setScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`p-4 px-10 flex justify-center poppins antialiased transition-all duration-1000 ease-in-out z-50 fixed shrink-0 overflow-hidden ${scrolled ? " top-4 rounded-lg  left-10 right-10 shadow-sm backdrop-blur-xl bg-[#B0D4E3]/50 " : "relative top-0 w-full bg-[#B0D4E3]"}`}>
        <div className=' max-w-[100em] min-w-6xl flex justify-between'>
          <div className="flex w-[30%] items-center justify-between 0">
            <div className="h-[2.31em] w-12 object-cover rounded-full">
              <Image priority={true} src={logo} alt="Bible and Book ministries logo" className='h-full w-full' />
            </div>
            <ul className="flex justify-between w-[80%] text-sm overflow-hidden">
              {navItems.map(({ label, href }, idx) => (
                <Link key={idx} href={href}>
                  <li className={`cursor-pointer hover:scale-[1.1] transition duration-300 ${pathName === href ? "text-blue-400" : "text-black"}`}>{label}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className='w-[40%] relative'>
            <div className='absolute top-[50%] left-4 -translate-y-[55%] text-xl'>  <CiSearch /></div>
            <input type="text" name='search-bar' className='w-full h-full border border-black p-4 px-4 pl-10 outline-0 rounded-full shadow-lg focus:shadow-2xl duration-150 transition antialiased' placeholder='Search for books by title, author' />
          </div>
          <div className="w-[20%] flex justify-between">

           
            <button className="relative cursor-pointer text-2xl"> <Link href={"/cart"}>
              <span className="absolute top-1 text-[0.4em] -right-2 bg-[#5a88a7]/60 text-white  min-h-4 min-w-4 flex items-center justify-center rounded-full">
                3
              </span>
              <CiShoppingCart />
            </Link>
              </button>
            
            <button className="relative cursor-pointer text-2xl">
              <span className="absolute top-1 text-[0.4em] flex items-center justify-center -right-1 bg-red-600/80 text-white min-h-4 min-w-4 rounded-full">
                12
              </span>
              <MdFavoriteBorder />
            </button>
            <button onClick={() => setShowSignUpModal(true)}
              className="flex h-full items-center gap-1  cursor-pointer text-sm bg-gradient-to-r from-[#5a88a7] to-[#426074] hover:shadow-lg text-white p-2 px-6 rounded-lg">
              <FaRegUser />
              Login
            </button>

          </div>
        </div>
      </nav>

      <Modal
        isOpen={showSignUpModal}
        onClose={() => setShowSignUpModal(false)}
      >
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.1 }}>
            {showLoginModal ? <Login onSignUpClick={handleShowSignUp} /> : <SignUp onLoginClick={handleShowLogin} />}
          </motion.div>
        </AnimatePresence>
      </Modal>
    </>
  );
};

export default Header;
