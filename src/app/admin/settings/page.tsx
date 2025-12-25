'use client'
import React from 'react'
import { Save, User, Globe, Bell, ShieldCheck } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className='max-w-4xl space-y-8'>
      <div>
        <h1 className='text-2xl font-bold text-slate-800'>System Settings</h1>
        <p className='text-slate-500'>
          Configure your store and landing page preferences.
        </p>
      </div>

      {/* Landing Page Content Section */}
      <section className='bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden'>
        <div className='p-6 border-b border-slate-100 flex items-center gap-2'>
          <Globe className='text-blue-600' size={20} />
          <h2 className='font-bold text-slate-800'>Landing Page Content</h2>
        </div>
        <div className='p-6 space-y-4'>
          <div className='grid grid-cols-1 gap-4'>
            <div className='space-y-1.5'>
              <label className='text-sm font-semibold text-slate-700'>
                Hero Headline
              </label>
              <input
                type='text'
                defaultValue='Unleash Your Potential with Our Latest GEARS'
                className='w-full p-2.5 border border-slate-200 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none'
              />
            </div>
            <div className='space-y-1.5'>
              <label className='text-sm font-semibold text-slate-700'>
                Hero Sub-headline
              </label>
              <textarea
                rows={3}
                defaultValue='Discover our newest collection designed for athletes who strive for excellence. Elevate your performance.'
                className='w-full p-2.5 border border-slate-200 rounded-lg focus:ring-1 focus:ring-blue-500 outline-none resize-none'
              />
            </div>
          </div>
          <button className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all'>
            Update Landing Page
          </button>
        </div>
      </section>

      {/* Admin Profile Section */}
      <section className='bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden'>
        <div className='p-6 border-b border-slate-100 flex items-center gap-2'>
          <User className='text-blue-600' size={20} />
          <h2 className='font-bold text-slate-800'>Admin Profile</h2>
        </div>
        <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='space-y-1.5'>
            <label className='text-sm font-semibold text-slate-700'>
              Full Name
            </label>
            <input
              type='text'
              defaultValue='John Doe'
              className='w-full p-2.5 border border-slate-200 rounded-lg outline-none'
            />
          </div>
          <div className='space-y-1.5'>
            <label className='text-sm font-semibold text-slate-700'>
              Email Address
            </label>
            <input
              type='email'
              defaultValue='admin@easygear.ng'
              className='w-full p-2.5 border border-slate-200 rounded-lg outline-none'
            />
          </div>
        </div>
      </section>

      {/* Preferences Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-white p-6 rounded-xl border border-slate-200 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <Bell className='text-slate-400' />
            <span className='font-medium text-slate-700'>
              Email Notifications
            </span>
          </div>
          <div className='w-10 h-5 bg-green-500 rounded-full relative shadow-inner cursor-pointer'>
            <div className='absolute right-1 top-1 w-3 h-3 bg-white rounded-full'></div>
          </div>
        </div>
        <div className='bg-white p-6 rounded-xl border border-slate-200 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <ShieldCheck className='text-slate-400' />
            <span className='font-medium text-slate-700'>Two-Factor Auth</span>
          </div>
          <div className='w-10 h-5 bg-slate-200 rounded-full relative shadow-inner cursor-pointer'>
            <div className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
