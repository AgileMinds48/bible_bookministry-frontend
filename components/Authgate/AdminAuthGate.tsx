"use client";
import { useEffect, useState } from "react";
import { isLoggedIn, getUserRole } from "@/hooks/auth";
import { ModalProvider } from "@/components/Modal/ModalContext";
import ModalWrapper from "@/components/Modal/ModalWrapper";
import AdminSidebar from "@/components/Dashboard/AdminSidebar";
import Link from "next/link";
import Loader from "../Loader/Loader";

export default function AdminAuthGate({ children }: { children: React.ReactNode }) {
  const [authChecked, setAuthChecked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    setLoggedIn(isLoggedIn());
    setUserRole(getUserRole());
    setAuthChecked(true);
  }, []);

  if (!authChecked) {
    // Optionally show a loading spinner
    <Loader/>
    return null;
  }

  if (loggedIn && userRole === "ADMIN") {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className=" border-white border-b bg-[#15278c] text-white px-8 py-4 flex items-center justify-between fixed left-0 right-0 z-[999]">
          <h1 className="text-2xl font-bold ">Admin Dashboard</h1>
          <Link href={"/"} className='underline underline-blue-400'>Go to Home</Link>
        </header>
        <div className='flex flex-1 min-h-0'>
          <div className='fixed top-0 bottom-0 '>
            <AdminSidebar />
          </div>
          <main className="flex-1 p-8 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    );
  } else {
    return (
      <ModalProvider>
        <ModalWrapper pageType='login'/>
      </ModalProvider>
    );
  }
}