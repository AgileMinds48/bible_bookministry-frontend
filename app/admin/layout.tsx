import AdminSidebar from '@/components/Dashboard/AdminSidebar'
import { ModalProvider } from '@/components/Modal/ModalContext';
import ModalWrapper from '@/components/Modal/ModalWrapper';
import { getUserRole, isLoggedIn } from '@/hooks/auth'
import Link from 'next/link'
import React from 'react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const LoggedIn = isLoggedIn();
  const userRole = getUserRole();
  if (LoggedIn
    && userRole === "ADMIN"

   
  ) { console.log("USER ROLE: ", userRole)
    return (
        
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Admin Header */}
      <header className=" border-white border-b bg-[#15278c] text-white px-8 py-4 flex items-center justify-between fixed left-0 right-0 z-[999]">
        <h1 className="text-2xl font-bold ">Admin Dashboard</h1>
        <Link href={"/"} className='underline underline-blue-400'>Go to Home</Link>
        {/* Add navigation or user info here if needed */}
      </header>
      <div className='flex flex-1 min-h-0'>
        <div className='fixed top-0 bottom-0 '>
          <AdminSidebar />
         </div>
      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {children}
        </main>
        </div>
    </div>
    )
  }else {
    return (<ModalProvider>
      <ModalWrapper pageType='login'/>
      </ModalProvider>)
  }

}