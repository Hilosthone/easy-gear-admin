'use client'
import React from 'react'
import { Lock, Mail } from 'lucide-react'

export default function LoginPage({ onLogin }: { onLogin: () => void }) {
  return (
    <div className='min-h-screen bg-blue-900 flex items-center justify-center p-4'>
      <div className='bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold italic text-blue-900'>
            easyGear<span className='text-orange-500'>.</span>
          </h1>
          <p className='text-slate-500 mt-2 font-medium'>Admin Portal Login</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            onLogin()
          }}
          className='space-y-5'
        >
          <div className='space-y-2'>
            <label className='text-sm font-bold text-slate-800'>
              Email Address
            </label>
            <div className='relative'>
              <Mail
                className='absolute left-3 top-3 text-slate-700'
                size={18}
              />
              <input
                type='email'
                required
                className='w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all'
                placeholder='admin@easygear.com'
              />
            </div>
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-bold text-slate-900'>Password</label>
            <div className='relative'>
              <Lock
                className='absolute left-3 top-3 text-slate-800'
                size={18}
              />
              <input
                type='password'
                required
                className='w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all'
                placeholder='••••••••'
              />
            </div>
          </div>

          <button
            type='submit'
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all transform active:scale-[0.98]'
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}
