"use client";
import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import Modal from "./Modal";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import { AnimatePresence, motion, spring } from "framer-motion";
import Menu from "./Menu";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useCartStore } from "@/app/utils/cartStore";
import { LuUserRound } from "react-icons/lu";

const Header = () => {
  const count= useCartStore(s=>s.items.reduce((t,i)=>t+i.quantity,0))
  const pathName = usePathname();
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Catalogue', href: '/catalogue' },
    { label: 'E-books', href: '/e-books' },
    { label: 'About us', href: '/about' },
  ];
  //hamburger menu
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useBodyScrollLock(isExpanded);
  const handleOpenMenu = () => {
    setIsExpanded(!isExpanded);
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


  return (
    <>
      <nav className={`p-4 md:p-4 md:px-10 flex justify-center poppins antialiased transition-all duration-1000 ease-in-out z-[9999] fixed shrink-0 overflow-hidden md:top-2 top-0 left-0 right-0 rounded-lg md:left-8 md:right-8 lg:left-20 lg:right-20 shadow-sm backdrop-blur-xl outline-2 outline-[#B0D4E3] bg-[#B0D4E3]/50 poppins`}>
        <div className='relative w-full md:max-w-[80em] md:min-w-6xl min-w-full flex justify-between items-center'>
          <div className="md:flex md:w-[50%] items-center justify-between space-x-4">
            <div className="h-[2.31em] w-12 object-cover rounded-full">
              <Image priority={true} src={logo} alt="Bible and Book ministries logo" className='h-full w-full' />
            </div>
            <ul className="hidden md:flex justify-between md:w-[100%] text-sm overflow-hidden">
              {navItems.map(({ label, href }, idx) => (
                <Link key={idx} href={href}>
                  <li className={`group cursor-pointer font-medium lg:text-[1.2em] transition duration-300 p-1  ${pathName === href ? "text-[#15278c]" : "text-black"}`}>{label}
                    <div className={`hidden absolute left-0 right-0 bottom-0 ${pathName == href ? "" : "group-hover:animate-underline group-hover:block"} w-[110%] blue-gradient h-[0.1em] rounded-full animate-underline`}></div>


                    {pathName == href && <div className="absolute left-0 right-0 bottom-0 w-[110%] blue-gradient h-[0.1em] rounded-full animate-underline"></div>}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          {/* <div className='w-[40%] relative'>
            <div className='absolute top-[50%] left-4 -translate-y-[55%] text-xl'>  <CiSearch /></div>
            <input type="text" name='search-bar' className='w-full h-full border border-black p-4 px-4 pl-10 outline-0 rounded-full shadow-lg focus:shadow-2xl duration-150 transition antialiased' placeholder='Search for books by title, author' />
          </div> */}
          <div className="min-w-[15%] flex justify-between items-center">
            <button className="relative cursor-pointer text-2xl p-2 rounded-full bg-[#B0D4E3] text-[#15278c]">
              <Link href={"/cart"}>
              <span className="absolute -top-4 text-[0.4em] -right-2 bg-[#15278c] text-white  min-h-4 min-w-4 flex items-center justify-center rounded-full">
                {count}
              </span>
              <CiShoppingCart />
            </Link>
            </button>

            <button className="hidden md:block relative cursor-pointer text-2xl p-2 rounded-full bg-[#B0D4E3] text-[#15278c]">
              <span className="  absolute -top-2 text-[0.4em] md:flex items-center justify-center -right-1 bg-red-600/80 text-white min-h-4 min-w-4 rounded-full">
                12
              </span>
              <MdFavoriteBorder />
            </button>
            <button onClick={() => setShowSignUpModal(true)}
              className="hidden md:flex h-full items-center gap-1 cursor-pointer hover:shadow-2xl text-[#15278c] transition duration-500 relative text-2xl p-2 rounded-full bg-[#B0D4E3]">
              <LuUserRound />
            </button>
           

            {/* hamburger menu */}
            <button className=" md:hidden p-6 flex flex-col gap-1"
              onClick={handleOpenMenu}>
              <div className={`bg-[#15278c] h-[2px] w-6 rounded-lg transition duration-300 ${isExpanded && "rotate-45 translate-y-1"}`}></div>
              <div className={`bg-[#15278c] h-[2px] w-6 rounded-lg transition duration-300 ${isExpanded && "opacity-0"}`}></div>
              <div className={`bg-[#15278c] h-[2px] w-6 rounded-lg transition duration-300 ${isExpanded && "-rotate-45 -translate-y-2"}`}></div>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isExpanded &&
          (<motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{ duration: 0.3 }}

            className={`fixed inset-0 h-screen z-[100000] `}>
          <Menu
          onClose={handleOpenMenu}
          />
          </motion.div>)}
      </AnimatePresence>
      <Modal
        isOpen={showSignUpModal || showLoginModal}
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
