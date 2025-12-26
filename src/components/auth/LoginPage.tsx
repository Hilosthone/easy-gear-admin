'use client'
import React, { useState } from 'react'
import { Lock, Mail, Eye, EyeOff, Loader2 } from 'lucide-react'

export default function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate a network delay (1.5 seconds)
    setTimeout(() => {
      onLogin()
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className='min-h-screen bg-blue-900 flex items-center justify-center p-4'>
      <div className='bg-white w-full max-w-md rounded-2xl p-8 shadow-2xl'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold italic text-blue-900'>
            easyGear<span className='text-orange-500'>.</span>
          </h1>
          <p className='text-slate-500 mt-2 font-medium'>Admin Portal Login</p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-5'>
          {/* Email Field */}
          <div className='space-y-2'>
            <label className='text-sm font-bold text-slate-900'>
              Email Address
            </label>
            <div className='relative'>
              <Mail
                className='absolute left-3 top-3 text-slate-900'
                size={18}
              />
              <input
                type='email'
                required
                disabled={isLoading}
                className='w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-black placeholder:text-slate-400 disabled:bg-slate-50 disabled:text-slate-500'
                placeholder='admin@easygear.com'
              />
            </div>
          </div>

          {/* Password Field */}
          <div className='space-y-2'>
            <label className='text-sm font-bold text-slate-900'>Password</label>
            <div className='relative'>
              <Lock
                className='absolute left-3 top-3 text-slate-900'
                size={18}
              />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                disabled={isLoading}
                className='w-full pl-10 pr-12 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-black placeholder:text-slate-400 disabled:bg-slate-50 disabled:text-slate-500'
                placeholder='••••••••'
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-3 text-slate-400 hover:text-slate-900 transition-colors'
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type='submit'
            disabled={isLoading}
            className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed'
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className='animate-spin' />
                <span>Authenticating...</span>
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}