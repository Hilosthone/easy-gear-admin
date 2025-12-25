'use client'
import React from 'react'
import { X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ADMIN_NAV_LINKS } from '@/constants/navigation'
import { cn } from '@/lib/utils'

export default function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (val: boolean) => void
}) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/60 z-[60] lg:hidden'
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-[70] w-64 bg-blue-800 text-white flex flex-col transition-transform duration-300 transform lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className='p-8 flex items-center justify-between shrink-0'>
          <Link href='/admin' className='text-2xl font-bold italic'>
            easyGear<span className='text-orange-500'>.</span>
          </Link>
          {/* Close button for mobile */}
          <button
            onClick={() => setIsOpen(false)}
            className='lg:hidden p-1 text-slate-400 hover:text-white'
          >
            <X size={24} />
          </button>
        </div>

        <nav className='flex-1 px-4 space-y-1 overflow-y-auto overflow-x-hidden pb-10'>
          {ADMIN_NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all group',
                pathname === link.href
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                  : 'text-slate-400 hover:bg-blue-800 hover:text-white'
              )}
            >
              <link.icon
                size={20}
                className={cn(
                  pathname === link.href
                    ? 'text-white'
                    : 'text-slate-400 group-hover:text-white'
                )}
              />
              <span className='font-medium'>{link.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}
