"use client";
import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
// import { MdFavoriteBorder } from "react-icons/md";

import { AnimatePresence, motion} from "framer-motion";
import Menu from "./Menu";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useCartStore } from "@/app/utils/cartStore";
import { LuUserRound } from "react-icons/lu";
import { getUserRole, handleLogout, isLoggedIn} from "@/hooks/auth";
// import { FaUserCircle } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import ModalWrapper from "./Modal/ModalWrapper";
import { useModal } from "./Modal/ModalContext";
import { userEmail, username } from "@/app/utils/logininfo";

const Header = () => {
  const count = useCartStore(s => s.items.reduce((t, i) => t + i.quantity, 0))
  const userRole = getUserRole();
  // const userEmail = getUserEmail();
  const LoggedIn: boolean = isLoggedIn();
  const pathName = usePathname();
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Catalogue', href: '/catalogue' },
    // { label: 'E-books', href: '/e-books' },
    { label: 'About us', href: '/about' },
  ...(userRole !== "CUSTOMER" && LoggedIn
    ? [{ label: 'Dashboard', href: '/admin/dashboard' }]
    : []),];
  //hamburger menu
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useBodyScrollLock(isExpanded);
  const handleOpenMenu = () => {
    setIsExpanded(!isExpanded);
  }

  //for modal
 const {showSignUp } = useModal();
  return (
    <>
      <nav className={`p-4 md:p-4 md:px-10 flex justify-center poppins antialiased transition-all duration-1000 ease-in-out z-[9999] fixed shrink-0 overflow-hidden lg:top-2 top-0 left-0 right-0 rounded-lg lg:left-10 lg:right-10 shadow-sm backdrop-blur-xl outline-2 outline-[#B0D4E3] bg-[#B0D4E3]/50 poppins`}>
        <div className='relative w-full lg:max-w-[80em] md:min-w-6xl min-w-full flex lg:justify-center lg:gap-[20em] md:justify-center justify-between gap-4 items-center'>
          <div className="md:flex md:w-[50%] items-center justify-between space-x-4">
            <div className="h-[2.31em] w-12 object-cover rounded-full">
              <Image priority={true} src={logo} alt="Bible and Book ministries logo" className='h-full w-full' />
            </div>
            <ul className="hidden md:flex justify-between md:w-[100%] text-sm overflow-hidden">
              {navItems.map(({ label, href }, idx) => (

                <li key={idx+href} className={`group cursor-pointer font-medium lg:text-[1.2em] transition duration-300 p-1  ${pathName === href ? "text-[#15278c]" : "text-black"}`}>
                  <Link  href={href}>
                    {label}
                    <div className={`hidden absolute left-0 right-0 bottom-0 ${pathName == href ? "" : "group-hover:animate-underline group-hover:block"} w-[110%] blue-gradient h-[0.1em] rounded-full animate-underline`}></div>
                    {pathName == href && <div className="absolute left-0 right-0 bottom-0 w-[110%] blue-gradient h-[0.1em] rounded-full animate-underline"></div>}
                     </Link>
                  </li>
               
              ))}
            </ul>
          </div>
       
          <div className="md:min-w-[10%] max-w-[9em]  md:gap-4  flex justify-between items-center">
            <button
              aria-label="cart"
              className="hidden md:block relative cursor-pointer text-2xl p-2 rounded-full bg-[#B0D4E3] text-[#15278c]">
              <Link href={"/cart"}>
              <span className="absolute -top-4 text-[0.4em] -right-2 bg-[#15278c] text-white  min-h-4 min-w-4 flex items-center justify-center rounded-full">
                {count}
              </span>
              <CiShoppingCart />
            </Link>
            </button>
{/* 
            <button
              aria-label="wishlist"
              className="hidden md:block relative cursor-pointer text-2xl p-2 rounded-full bg-[#B0D4E3] text-[#15278c]">
              <span className="  absolute -top-2 text-[0.4em] md:flex items-center justify-center -right-1 bg-red-600/80 text-white min-h-4 min-w-4 rounded-full">
                12
              </span>
              <MdFavoriteBorder />
            </button> */}
            <button
              aria-label="login or register"
              onClick={() => {
                if (!LoggedIn) showSignUp();
              }}
              className={` flex order-3 justify-center items-center gap-1 cursor-pointer hover:shadow-2xl  transition duration-500 relative text-2xl shrink-0 rounded-full 
                ${LoggedIn?"h-[40px] w-[40px]  blue-gradient text-white":"h-full bg-[#B0D4E3] text-[#15278c] p-2 "}
                `}
              title={LoggedIn ? `Signed in as ${userEmail}` || "User" : "Login or Register"}>
              {LoggedIn ?
             username?.slice(0,1).toUpperCase()
             : <LuUserRound />}
            </button>
            {LoggedIn &&
              <button className=" hidden md:block md:order-3">
                <TbLogout2
                  title="logout"
              onClick={handleLogout}
                  className="text-2xl text-red-600 cursor-pointer" />
           </button>
           }

            {/* hamburger menu */}
            <button className=" md:hidden p-2 flex flex-col gap-1"
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
            exit={{ x: 1000 }}
            transition={{ duration: 0.3 }}

            className={`fixed inset-0 h-screen z-[100000] `}>
          <Menu
          onClose={handleOpenMenu}
          />
          </motion.div>)}
      </AnimatePresence>
      <ModalWrapper/>
      {/* <Modal
        isOpen={!!modalType}
        onClose={handleCloseModal}
      >
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: 0.1 }}>
            {modalType === "login" ?
              (<Login handleCloseModal={handleCloseModal} onSignUpClick={handleShowSignUp} />)
              : modalType === "signup" ?
              (<SignUp onLoginClick={handleShowLogin} />)
              : null
              }
          </motion.div>
        </AnimatePresence>
      </Modal> */}
    </>
  );
};

export default Header;
