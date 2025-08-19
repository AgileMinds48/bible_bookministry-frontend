import React from 'react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 ">
      {/* Admin Header */}
      <header className=" border-white border-b bg-[#15278c] text-white px-8 py-4 flex items-center justify-between ">
        <h1 className="text-2xl font-bold ">Admin Dashboard</h1>
        {/* Add navigation or user info here if needed */}
      </header>
      {/* Main Content */}
      <main className="">
        {children}
      </main>
    </div>
  )
}