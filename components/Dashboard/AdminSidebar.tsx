"use client"
import { handleLogout } from '@/hooks/auth'
import { logo } from '@/public'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { BsGraphUpArrow } from 'react-icons/bs'
import { FaLock } from 'react-icons/fa6'
import { ImBooks } from 'react-icons/im'
import { IoMdSettings } from 'react-icons/io'
import { LuUserRoundPen } from 'react-icons/lu'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { TbLogout2 } from 'react-icons/tb'

const AdminSidebar = () => {
  const pathname = usePathname();
  // const [currentpath, setCurrentPath] = useState<string>("");
  const navItems = [
    {
      label: "Dashboard",
      icon: <BsGraphUpArrow />,
      href: "/admin/dashboard"
    },
    {
      label: "Books",
      icon: <ImBooks />,
      href: "/admin/books"
    },
    {
      label: "Manage orders",
      icon: <RiShoppingCart2Line />,
      href: "/admin/orders"
    },
    {
      label: "Manage users",
      icon: <LuUserRoundPen />,
      href: "/admin/users"
    },
    {
      label: "Settings",
      icon: <IoMdSettings />,
      href: "/admin/settings"
    },
  ]

  return (
    <nav className='h-full pt-20 left-0 max-w-[20em] border-r border-b-gray-700 bg-[#B0D4E3] text-black p-4 flex flex-col'>
      <div className=''>
        <div className='flex gap-2 mb-2'>
          <Image src={logo} alt="Bible and books ministry logo" width={30} className='shrink-0' />
          <h1 className='font-semibold text-xl'>Bible and Book Ministry</h1>
        </div>
        <p className=' rounded-3xl flex gap-1 items-center text-sm w-fit '><FaLock /> <span className='bg-white px-2 rounded-3xl text-green-400'> Admin</span></p>
        <ul className='mt-8'>
          {navItems.map(({ label, icon, href },id) => (
            <Link
              key={id}
              href={href}
              className=''>
              <li className={` flex gap-2 items-center rounded-2xl p-4 mb-2
                ${pathname===href?"bg-white/80 text-[#15278c] font-semibold":"hover:bg-white/20"}`}>
                <span className='text-xl'>{icon}
                </span>
                {label}</li>
            </Link>
          ))}
        </ul>

        
      </div>
      <button
        aria-label='Logout'
        onClick={handleLogout}
        className='mt-auto w-full p-2 flex items-center justify-center gap-2 bg-red-500/20 border
       border-red-500 rounded-xl cursor-pointer'>
        <TbLogout2 /> Logout
      </button>
    </nav>
  )
}

export default AdminSidebar