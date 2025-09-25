"use client"
import { capitalise, handleLogout } from '@/app/utils/auth'
import { userEmail, username } from '@/app/utils/logininfo'
import { logo } from '@/public'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsGraphUpArrow } from 'react-icons/bs'
import { FaLock } from 'react-icons/fa6'
import { ImBooks } from 'react-icons/im'
import { IoMdSettings } from 'react-icons/io'
import { LuUserRound, LuUserRoundPen } from 'react-icons/lu'
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
    <nav className='h-full overflow-y-scroll pt-20 left-0 transition duration-1000 lg:max-w-[20em] border-r max-w-xl border-b-gray-700 bg-[#B0D4E3] text-black p-4 flex flex-col z-[990]'>
      <div className='flex flex-col items-center lg:items-start '>
        <div className='flex gap-2 mb-2'>
          <Image src="/logo.png" width={80} height={80} alt="logo" className='shrink-0' />
          <h1 className='font-semibold text-xl hidden lg:block'>Bible and Book Ministry</h1>
        </div>
        <p className=' rounded-3xl flex gap-1 items-center text-sm w-fit '><FaLock /> <span className='bg-white px-2 rounded-3xl text-green-400 hidden lg:block'> Admin</span></p>
        <ul className='mt-8'>
          {navItems.map(({ label, icon, href },id) => (
            <Link
              key={id}
              href={href}
              className=''>
              <li className={` flex gap-2 items-center rounded-2xl p-4 mb-2
                ${pathname===href?"bg-white/80 text-[#15278c] font-semibold":"hover:bg-white/20"}`}>
                <span className='lg:text-xl text-2xl '>
                  {icon}
                </span>
               <span className='hidden lg:block'> {label}</span></li>
            </Link>
          ))}
        </ul>

        
      </div>
      <div className='mt-auto flex flex-col items-center lg:items-start '>
      <button className='mt-auto flex items-center gap-2 mb-4'>
          <LuUserRound className='text-4xl border border-black p-1 rounded-full' />
          <div className='text-left hidden lg:block'>
            <p>{capitalise(username)}</p>
            <span>{ userEmail}</span>
          </div>
      </button>
      <button
        aria-label='Logout'
        onClick={handleLogout}
        className='mt-auto w-full p-2 flex items-center justify-center gap-2 bg-red-500/20 border
       border-red-500 rounded-xl cursor-pointer'>
        <TbLogout2 /> <span className='hidden lg:block'>Logout</span>
        </button>
        </div>
    </nav>
  )
}

export default AdminSidebar