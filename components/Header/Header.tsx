"use client";
import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
// import { MdFavoriteBorder } from "react-icons/md";

import { AnimatePresence, motion} from "framer-motion";
import Menu from "../Menu/Menu";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { useCartStore } from "@/app/utils/cartStore";
import { LuUserRound } from "react-icons/lu";
import { getUserRole, isLoggedIn} from "@/app/utils/auth";
// import { FaUserCircle } from "react-icons/fa";
import ModalWrapper from "../Modal/ModalWrapper";
import { useModal } from "../Modal/ModalContext";
import {username } from "@/app/utils/logininfo";
import ProfileMenu from "../Menu/ProfileMenu";

const Header = () => {
  const count = useCartStore(s => s.items.reduce((t, i) => t + i.quantity, 0))
  const userRole = getUserRole();
  // const userEmail = getUserEmail();
  const LoggedIn: boolean = isLoggedIn();
  const pathName = usePathname();
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Catalogue', href: '/catalogue' },
    { label: 'About us', href: '/about-us' },
  ...(userRole !== "CUSTOMER" && LoggedIn
    ? [{ label: 'Dashboard', href: '/admin/dashboard' }]
    : []),];
  //hamburger menu
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [profileOpened,setProfileOpened]= useState(false)
  useBodyScrollLock(isExpanded);
  const handleOpenMenu = () => {
    setIsExpanded(!isExpanded);
  }


  //for modal
  const { showSignUp } = useModal();
  return (
    <>
      <nav className={`p-4 md:max-w-[90em] md:min-w-3xl mx-auto md:p-4 md:px-10 flex justify-center poppins antialiased transition-all duration-1000 ease-in-out z-[9999] fixed shrink-0  lg:top-2 top-0 left-0 right-0 md:rounded-lg lg:left-10 lg:right-10 shadow-sm backdrop-blur-2xl outline-2 outline-[#B0D4E3] bg-[#B0D4E3]/60 poppins`}>
        <div className='relative w-full  flex justify-between gap-4 items-center'>
          {/* <div className="md:flex md:w-[50%] items-center justify-between space-x-4"> */}
            <div className="h-[2.31em] object-cover rounded-full">
              <Image priority={true} src={logo} alt="Bible and Book ministries logo" className='h-full w-full' />
            </div>
            <ul className="hidden md:flex justify-between min-w-[20%] gap-16 text-sm overflow-hidden">
              {navItems.map(({ label, href }, idx) => (

                <li key={idx+href} className={`group cursor-pointer font-medium lg:text-xl  transition duration-300 p-1  ${pathName === href ? "text-red-800" : "text-black"}`}>
                  <Link  href={href}>
                    {label}
                    <div className={`hidden absolute left-0 right-0 -bottom-1 ${pathName == href ? "" : " group-hover:block"} w-[110%] blue-gradient h-[2px] rounded-full animate-underline`}></div>
                    {pathName == href && <div className="absolute left-0 right-0 -bottom-1 w-[110%] bg-red-900 h-[2px] rounded-full animate-underline"></div>}
                     </Link>
                  </li>
               
              ))}
            </ul>
          {/* </div> */}
       
          <div className="  md:gap-  flex justify-between items-center">
            <button
              aria-label="cart"
              className="block mr-4 relative cursor-pointer text-2xl p-2 rounded-full bg-[#B0D4E3] text-[#15278c]">
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
            
              <motion.div
                onMouseEnter={()=>setProfileOpened(true)}
                onMouseLeave={()=>setProfileOpened(false)}
              aria-label="login or register"
              onClick={() => {
                if (!LoggedIn) showSignUp();
              }}
              className={`hidden group md:flex order-3 justify-center items-center cursor-pointer hover:shadow-2xl transition duration-500 relative md:text-2xl shrink-0 rounded-full 
                ${LoggedIn?"md:h-[40px] md:w-[40px] h-[30px] w-[30px] blue-gradient border antiliased border-white text-white":"h-full bg-[#B0D4E3] text-[#15278c] p-2 "}
                `}
              // title={LoggedIn ? `Signed in as ${capitalise(username)}` || "User" : "Login or Register"}
            >
              {LoggedIn ?
             username?.slice(0,1).toUpperCase()
                :
                <button className="flex items-center gap-2 px-2"> <LuUserRound /> Sign Up</button>
              }
              <AnimatePresence>
                {isLoggedIn()
                  &&
                  <ProfileMenu openMenu={profileOpened} />
                }
                </AnimatePresence>
              </motion.div>
              
            {LoggedIn &&
              <button className=" hidden md:block md:order-3">

                
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

    </>
  );
};

export default Header;
