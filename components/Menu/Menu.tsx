"use client"
import { userEmail, username, userRole } from '@/app/utils/logininfo';
import { capitalise, handleLogout, isLoggedIn } from '@/app/utils/auth';
import { AnimatePresence,motion } from 'framer-motion';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { FaPeopleRoof, FaRegCircleUser } from 'react-icons/fa6';
import { GrCatalog } from 'react-icons/gr';
import { IoMdClose, IoMdHome } from 'react-icons/io';
import { TbLogout2 } from 'react-icons/tb';
import ModalWrapper from '../Modal/ModalWrapper';
import { useModal } from '../Modal/ModalContext';
import { BsGraphUpArrow } from 'react-icons/bs';

interface MenuProps{
  onClose: () => void
}
const Menu = ({ onClose, }: MenuProps) => {
  const { showSignUp } = useModal();
// const [showLogin,setShowLogin]=useState<boolean>(false)
  const loggedIn = isLoggedIn();
  // const username = getUserEmail();
  const navItems = [
    { icon:<IoMdHome />, label: 'Home', href: '/' },
    { icon:<GrCatalog /> ,label: 'Catalogue', href: '/catalogue' },
    {icon: <FaPeopleRoof />,label: 'About us', href: '/about-us' },
    // {icon: <MdFavorite/>,label: 'My wishlist', href: '' },
    ...(loggedIn && userRole === "ADMIN"
      ? [{ icon: <BsGraphUpArrow />,label:"Dashboard",href: '/admin/dashboard' }]
      :[]
    ), 
    {icon: <FaShoppingCart />,label: 'My cart', href: '/cart' },
  ];

  const profileColors = ["blue-gradient", "green-gradient", "grey-gradient"]
  const colorNumber= Math.random()*2
  return (
    <div className="  white-gradient p-4 poppins flex flex-col overflow-hidden h-screen">
      <div
        onClick={onClose}
        className='p-2 border-2 border-green-500 w-fit flex ml-auto rounded-full'>
        <IoMdClose />
      </div>
      {loggedIn &&
        <div className='border-b border-gray-500 py-8 text-3xl flex items-center'>
        <div className='blue-gradient mr-4 text-white flex justify-center items-center rounded-full h-[40px] w-[40px] p-6 shrink-0'>
            {username?.slice(0, 1).toUpperCase()}
          </div>
        <div className='w-full flex flex-col'>
       <p className='text-xl text-black'> {capitalise(username)} </p>
          <p className='text-lg text-gray-700 whitespace-nowrap'>{userEmail}</p>
      </div>
        </div>}
      <AnimatePresence>
      <ul className='mt-4'>
        {navItems.map(({ label, href,icon },id) => (
          <Link key={label} href={href} className='flex items-center space-x-2  border-b border-gray-300 hover:bg-gray-200'>
            <motion.div
                initial={{opacity:0 ,x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1*id}}
             
              className='text-xl text-black'>{icon}</motion.div>
            <motion.li
              initial={{opacity:0 ,x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1*id }}
             
              className=' w-full  text-xl p-2 py-4'>
              {label}
            </motion.li>
            </Link>
        ))}
        </ul>
        </AnimatePresence>

      {loggedIn ?
        (
        // <div className='mt-10 text-2xl flex gap-2 justify-center items-center text-white bg-[#15278c] rounded-lg py-2 '>
       <button className="p-4 mt-auto mb-10 text-2xl flex gap-2 justify-center items-center text-white blue-gradient rounded-lg py-2 ">
         <TbLogout2
          onClick={handleLogout}
              className="text-2xl text-white" />
            Logout
        </button>
      // </div>
  )
        :
        
        (<button
         onClick={()=>showSignUp()} 
          className='mt-auto text-2xl flex gap-2 justify-center items-center text-white bg-[#15278c] rounded-lg py-2 '>
          <FaRegCircleUser
            
            className='text-white ' />
        Login
        </button>)}
      {
        <ModalWrapper />
      }
      </div>
  )
}

export default Menu;