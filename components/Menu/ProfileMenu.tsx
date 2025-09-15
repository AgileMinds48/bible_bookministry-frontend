"use client"
import { capitalise, handleLogout } from '@/app/utils/auth'
import { loggedIn, userEmail, username } from '@/app/utils/logininfo'
import React, { useState } from 'react'
import { LuUserRound } from 'react-icons/lu'
import { TbLogout2 } from 'react-icons/tb'
import Loader from '../Loader/Loader'
import { AnimatePresence,motion } from 'framer-motion'
interface ProfileMenuProps{
  openMenu:boolean
}

const ProfileMenu = ({openMenu}:ProfileMenuProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const logout = () => {
    setIsLoading(true);
    handleLogout();
  }
  // const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
    <AnimatePresence>
        {openMenu
          &&
          <motion.div
        initial={{ y: -10,opacity:0 }}
        animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            exit={{y:-10,opacity:0}}
      className=' absolute right-4 top-12 bg-white overflow-hidden min-w-40 p-4 rounded-lg'>
       {loggedIn &&
              <div className=' text-xl flex items-center'>
              {/* <div className='blue-gradient mr-4 text-white flex justify-center items-center rounded-full h-[40px] w-[40px] p-6 shrink-0'>
                <p className='text-left'>  {username?.slice(0, 1).toUpperCase()}</p>
                </div> */}
              <div className='w-full flex flex-col items-start'>
             <p className='text-xls text-black flex items-center gap-2 '> <LuUserRound /> {capitalise(username)} </p>
                <p className='text-lg text-gray-700 whitespace-nowrap'> {userEmail}</p>
            </div>
        </div>}
            <button onClick={logout}
              className='bg-red-100 border border-red-500 rounded-lg mt-2 py-1 text-[#15278c]  w-full flex items-center justify-center gap-2 cursor-pointer '>

        {isLoading ?
        <Loader/>
                : <span className='flex items-center gap-2 '>
                  <TbLogout2
                    className="text-2xl text- " />
                  Logout</span>
              }
      </button>
      </motion.div>}
      </AnimatePresence>
      </div>
  )
}

export default ProfileMenu