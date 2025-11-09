import React from 'react'
import { assets } from '../assets/assets'
import { Star } from 'lucide-react'
import {SignIn} from '@clerk/clerk-react'

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row relative galaxy-bg'>
      <div className="stars"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-indigo-900/30"></div>

      {/* left side : Branding  */}
      <div className='flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-40'>
        <img 
          src={assets.logo} 
          alt="" 
          className='h-32 md:h-40 object-contain brightness-150 contrast-125 
          drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] 
          bg-gradient-to-r from-purple-500 via-pink-400 to-indigo-500 
          bg-clip-text'
        />
        <div>
            <div className='flex items-center gap-3 mb-4 max-md:mt-10'> 
                <img src={assets.group_users} alt="" className='h-8 md:h-10 brightness-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]'/>
                <div>
                    <div className='flex'>
                        {Array(5).fill(0).map((_, i)=>(<Star key={i} className='size-4 md:size-4.5 text-transparent fill-yellow-400 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]'/>))}
                    </div>
                    <p className='text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]'>Used by 12k+ developers</p>
                </div>
            </div>
            <h1 className='text-3xl md:text-6xl md:pb-2 font-bold bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]'>More than just friends truly connect</h1>
            <p className='text-xl md:text-3xl font-medium bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] max-w-72 md:max-w-md'>connect with global community on sneak.</p>
        </div>
        <span className='md:h-10'></span>
      </div>
      {/* Right side: Login Form */}
      <div className='flex-1 flex items-center justify-center p-6 sm:p-10'>
        <div className='p-[2px] rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-400 transition-all duration-300'>
          <div className='bg-white rounded-xl p-1'>
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login