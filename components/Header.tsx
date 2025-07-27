"use client";
import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, {  useState } from "react";
import {  CiShoppingCart } from "react-icons/ci";
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
  //hamburger menu
  const [isOpen, setisOpen] = useState<boolean>(false);
  const handleOpenMenu = () => {
    setisOpen(!isOpen);
}

  //for modal
  const [showSignUpModal, setShowSignUpModal] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);

  const handleShowLogin = (showLogin: boolean) => {
    setShowLoginModal(showLogin);
  };

  const handleShowSignUp = () => {
    setShowLoginModal(false);
  };
  // const [scrolled, setScrolled] = useState<boolean>(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 100);
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <nav className={`p-4 md:p-4 md:px-10 flex justify-center poppins antialiased transition-all duration-1000 ease-in-out z-50 fixed shrink-0 overflow-hidden md:top-2 top-0 left-0 right-0 rounded-lg md:left-10 md:right-10 shadow-sm backdrop-blur-xl bg-[#B0D4E3]/50 `}>
        <div className='w-full md:max-w-[100em] md:min-w-6xl min-w-full flex justify-between items-center'>
          <div className="md:flex md:w-[30%] items-center justify-between ">
            <div className="h-[2.31em] w-12 object-cover rounded-full">
              <Image priority={true} src={logo} alt="Bible and Book ministries logo" className='h-full w-full' />
            </div>
            <ul className="hidden md:flex justify-between md:w-[80%] text-sm overflow-hidden">
              {navItems.map(({ label, href }, idx) => (
                <Link key={idx} href={href}>
                  <li className={`cursor-pointer hover:scale-[1.1] font-medium text-[1.2em] transition duration-300 ${pathName === href ? "text-[#56c10b]" : "text-black"}`}>{label}</li>
                </Link>
              ))}
            </ul>
          </div>
          {/* <div className='w-[40%] relative'>
            <div className='absolute top-[50%] left-4 -translate-y-[55%] text-xl'>  <CiSearch /></div>
            <input type="text" name='search-bar' className='w-full h-full border border-black p-4 px-4 pl-10 outline-0 rounded-full shadow-lg focus:shadow-2xl duration-150 transition antialiased' placeholder='Search for books by title, author' />
          </div> */}
          <div className="min-w-[20%] max-w-[50%] flex justify-between items-center">
            <button className="relative cursor-pointer text-2xl"> <Link href={"/cart"}>
              <span className="absolute -top-2 text-[0.4em] -right-2 bg-[#5a88a7]/60 text-white  min-h-4 min-w-4 flex items-center justify-center rounded-full">
                3
              </span>
              <CiShoppingCart />
            </Link>
            </button>

            <button className="hidden md:block relative cursor-pointer text-2xl">
              <span className="  absolute -top-2 text-[0.4em] md:flex items-center justify-center -right-1 bg-red-600/80 text-white min-h-4 min-w-4 rounded-full">
                12
              </span>
              <MdFavoriteBorder />
            </button>
            <button onClick={() => setShowSignUpModal(true)}
              className="hidden md:flex h-full items-center gap-1 p-3 cursor-pointer text-sm blue-gradient hover:shadow-2xl text-white transition duration-500 rounded-lg">
              <FaRegUser />
              Login
            </button>

            {/* hamburger menu */}
            <button className=" md:hidden p-6 flex flex-col gap-1 " onClick={handleOpenMenu}>
              <div className={`bg-[#15278c] h-[2px] w-6 rounded-lg transition duration-300 ${isOpen && "rotate-45 translate-y-1"}`}></div>
              <div className={`bg-[#15278c] h-[2px] w-6 rounded-lg transition duration-300 ${isOpen && "opacity-0"}`}></div>
              <div className={`bg-[#15278c] h-[2px] w-6 rounded-lg transition duration-300 ${isOpen && "-rotate-45 -translate-y-2"}`}></div>
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
