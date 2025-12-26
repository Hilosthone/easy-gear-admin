'use client'
import React from 'react'
import { X, LogOut } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ADMIN_NAV_LINKS } from '@/constants/navigation'
import { cn } from '@/lib/utils'

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (val: boolean) => void
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname()

  // Mock data for notifications - In a real app, these would come from an API or State
  const notifications: Record<string, number> = {
    Orders: 5,
    Payments: 2,
    Customers: 12,
  }

  const handleLogout = () => {
    localStorage.removeItem('easyGear_auth')
    window.location.reload()
  }

  return (
    <>
      {isOpen && (
        <div
          className='fixed inset-0 bg-blue-600 z-[60] lg:hidden animate-in fade-in duration-300'
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-[70] w-64 bg-blue-700 text-white flex flex-col transition-transform duration-300 transform lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen border-r border-blue-950 shadow-lg shadow-blue-900/20',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className='p-8 flex items-center justify-between shrink-0'>
          <Link
            href='/admin'
            className='text-2xl font-bold italic tracking-tight'
          >
            easyGear<span className='text-orange-500'>.</span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className='lg:hidden p-1 text-blue-200 hover:text-white'
          >
            <X size={24} />
          </button>
        </div>

        <nav className='flex-1 px-4 space-y-1 overflow-y-auto overflow-x-hidden custom-scrollbar'>
          {ADMIN_NAV_LINKS.map((link) => {
            const hasNotification = notifications[link.name]

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all group',
                  pathname === link.href
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'
                    : 'text-blue-200/70 hover:bg-blue-700 hover:text-white'
                )}
              >
                <div className='flex items-center gap-3'>
                  <link.icon
                    size={19}
                    className={cn(
                      'transition-colors',
                      pathname === link.href
                        ? 'text-white'
                        : 'text-blue-400 group-hover:text-white'
                    )}
                  />
                  <span className='font-medium'>{link.name}</span>
                </div>

                {/* NOTIFICATION BADGE */}
                {hasNotification && (
                  <span
                    className={cn(
                      'flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-lg text-[10px] font-bold shadow-sm',
                      pathname === link.href
                        ? 'bg-white text-blue-600' // Inverse colors when active
                        : 'bg-orange-500 text-white' // Brand colors when inactive
                    )}
                  >
                    {hasNotification}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        <div className='p-4 border-t border-blue-950 shrink-0'>
          <button
            onClick={handleLogout}
            className='flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium text-white hover:bg-red-500/10 hover:text-red-400 transition-all group'
          >
            <LogOut size={19} />
            <span>Logout</span>
          </button>
          <div className='mt-4 px-4 pb-2'>
            <p className='text-[9px] uppercase tracking-[0.2em] text-blue-500 font-bold'>
              Admin Portal v1.0
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}