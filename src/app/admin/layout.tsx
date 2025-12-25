'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/admin/Sidebar'
import Navbar from '@/components/admin/Navbar'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // State to control the sidebar on mobile and tablet screens
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className='flex min-h-screen bg-slate-50'>
      {/* 1. SIDEBAR 
          isOpen: controls visibility on mobile
          setIsOpen: allows the sidebar to close itself (e.g., clicking the 'X' or a link)
      */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* 2. MAIN VIEWPORT 
          flex-1: fills remaining width
          min-w-0: prevents flex children from pushing container width
      */}
      <div className='flex-1 flex flex-col min-w-0 min-h-screen'>
        {/* 3. NAVBAR 
            Contains the hamburger menu button to open the sidebar
        */}
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        {/* 4. DYNAMIC CONTENT 
            p-4: small padding for mobile
            md:p-8: larger padding for desktop
            overflow-x-hidden: prevents horizontal "jitter"
        */}
        <main className='flex-1 p-4 md:p-8 overflow-x-hidden'>
          <div className='max-w-7xl mx-auto'>{children}</div>
        </main>
      </div>
    </div>
  )
}
