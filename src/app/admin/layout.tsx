'use client'

import React, { useState } from 'react'
import Sidebar from '@/components/admin/Sidebar'
import Navbar from '@/components/admin/Navbar'
import { cn } from '@/lib/utils'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // State to control the sidebar visibility on mobile and tablet screens
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className='flex min-h-screen bg-slate-50'>
      {/* 1. SIDEBAR 
        By removing the fixed overlay in the Sidebar component, 
        this aside will now sit side-by-side with the content on desktop.
      */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* 2. MAIN VIEWPORT 
        flex-1: ensures this container takes up all remaining width.
        min-w-0: crucial for preventing layout breaking when tables/charts are inside.
      */}
      <div className='flex-1 flex flex-col min-w-0 min-h-screen'>
        {/* 3. NAVBAR 
          Pass the toggle function to the hamburger menu.
        */}
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        {/* 4. DYNAMIC CONTENT 
          The onClick here ensures that if a user clicks the dashboard 
          while the sidebar is open (on mobile), the sidebar closes.
        */}
        <main
          className={cn(
            'flex-1 p-4 md:p-8 overflow-x-hidden transition-all duration-300',
            sidebarOpen ? 'opacity-50 lg:opacity-100' : 'opacity-100'
          )}
          onClick={() => {
            if (sidebarOpen) setSidebarOpen(false)
          }}
        >
          <div className='max-w-7xl mx-auto'>{children}</div>
        </main>
      </div>
    </div>
  )
}
