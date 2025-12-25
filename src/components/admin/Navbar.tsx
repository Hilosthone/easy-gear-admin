// import { Search, Bell, User } from 'lucide-react'

// export default function Navbar() {
//   return (
//     <header className='h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 sticky top-0 z-30'>
//       <div className='relative w-96'>
//         <Search
//           className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400'
//           size={18}
//         />
//         <input
//           type='text'
//           placeholder='Search orders, products...'
//           className='w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-md focus:ring-1 focus:ring-blue-500 outline-none text-sm'
//         />
//       </div>
//       <div className='flex items-center gap-4'>
//         <button className='p-2 text-slate-500 hover:bg-slate-100 cursor-pointer rounded-full'>
//           <Bell size={20} />
//         </button>
//         <div className='flex items-center gap-2 border-l pl-4 border-slate-200'>
//           <div className='text-right hidden md:block'>
//             <p className='text-sm font-bold text-slate-800'>Admin User</p>
//             <p className='text-xs text-slate-500'>Super Admin</p>
//           </div>
//           <div className='w-9 h-9 bg-orange-100 text-orange-600 flex items-center justify-center rounded-full transition-all cursor-pointer group-hover:bg-orange-200'>
//             <User size={20} />
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

'use client'
import { Menu, Search, User } from 'lucide-react'

export default function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className='h-16 border-b border-slate-200 bg-white flex items-center justify-between px-4 md:px-8 sticky top-0 z-30'>
      <div className='flex items-center gap-4'>
        {/* Mobile Menu Toggle - Hidden on Large screens */}
        <button
          onClick={onMenuClick}
          className='lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg'
        >
          <Menu size={24} />
        </button>

        <div className='relative hidden md:block w-64 lg:w-96'>
          <Search
            className='absolute left-3 top-1/2 -translate-y-1/2 text-slate-400'
            size={18}
          />
          <input
            type='text'
            placeholder='Search...'
            className='w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-md text-sm outline-none focus:ring-1 focus:ring-blue-500'
          />
        </div>
      </div>

      <div className='flex items-center gap-3'>
        <div className='w-9 h-9 bg-orange-100 text-orange-600 flex items-center justify-center rounded-full cursor-pointer'>
          <User size={20} />
        </div>
      </div>
    </header>
  )
}