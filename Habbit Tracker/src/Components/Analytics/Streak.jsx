import React from 'react'
import { Flame } from 'lucide-react'
import { Target } from 'lucide-react';
import { Trophy } from 'lucide-react';
const Streak = () => {
  return (
    <div className='grid grid-cols-2 gap-3 mt-10 '>
      {/* streak analysis */}
      <div className='col-span-1 rounded-xl border border-blue-500/30 flex-1 w-full bg-[#172131] p-6'>
        <div className='flex gap-2 items-center'>
          <Flame className='text-orange-400' />
          <h2 className='text-white text-xl' >Streak Analytics</h2>
        </div>
 
        <div className='flex flex-col gap-2 mt-8'>
          <div className='flex items-center justify-between'>
            <p className='text-[#766D61]'>Current Streak</p>
            <h2 className='text-[#52AFFF] text-2xl'>0 days</h2>
          </div>
           <div className='flex items-center justify-between'>
            <p className='text-[#766D61]'>Longest Streak</p>
            <h2 className='text-[#31FA96] text-2xl'>0 days</h2>
          </div>
           <div className='flex items-center justify-between'>
            <p className='text-[#766D61]'>Success Rate</p>
            <h2 className='text-purple-500 text-2xl'>100%</h2>
          </div>
           <div className='flex items-center justify-between'>
            <p className='text-[#766D61]'>Days Completed</p>
            <h2 className='text-yellow-500 text-2xl'>0</h2>
          </div>
        </div>
        <div className='flex items-center justify-center gap-1  mt-8 bg-[#1F2A3B] rounded px-3 pb-2'>
          <h2 className='text-slate-400 font-semibold text-nowrap '>Streak Rules:</h2>
          <div className='flex items-center justify-center mt-6'>
          <p className='text-slate-400 '>Only counts when ALL 3 daily tasks (Gym + Study + Mala) are completed</p>
          </div>
        </div>
      </div>


      {/* Milstone Progress */}

       <div className='col-span-1 rounded-xl border border-blue-500/30 flex-1 w-full bg-[#172131] p-6'>
        <div className='flex gap-2 items-center'>
          <Target className='text-[#31FA96]' />
          <h2 className='text-white text-xl' >Milstone Progress</h2>
        </div>
 
        <div className='flex flex-col gap-2 mt-9 mb-14'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-between' >
               <h1 className='text-[#766D61]'>30 Days Streak Goal</h1>
            <h2 className='text-[#52AFFF] '>0/30</h2>
            </div>
            <div className='h-2 w-full bg-[#121A2A] rounded  '></div>
            <p className='text-[#766D61] text-sm'>30 days remaining</p>
          </div>

            <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-between' >
               <h1 className='text-[#766D61]'>100 Days Streak Goal</h1>
            <h2 className='text-[#31FA96] '>0/100</h2>
            </div>
            <div className='h-2 w-full bg-[#121A2A] rounded  '></div>
            <p className='text-[#766D61] text-sm'>100 days remaining</p>
          </div>
            <div className='flex flex-col gap-2'>
            <div className='flex items-center justify-between' >
               <h1 className='text-[#766D61]'>365 Days Streak Goal</h1>
            <h2 className='text-purple-500 '>0/365</h2>
            </div>
            <div className='h-2 w-full bg-[#121A2A] rounded  '></div>
            <p className='text-[#766D61] text-sm'>365 days remaining</p>
          </div>
        </div>

      </div>

      {/*  lower div Status  */}
      <div className='col-span-2 flex-1 p-6 flex flex-col gap-6  rounded-xl border border-blue-500/30  w-full bg-[#172131]'>
        <div className='flex gap-2 items-center'>
          <Trophy className='text-amber-300' />
          <h1 className='text-white text-2xl'>Streak Goals Status</h1>
        </div>
        <div className='flex gap-3 mt-3 items-center justify-self-auto'>
          <div className='flex flex-col  border-2 w-full rounded-xl gap-1 items-center justify-center  border-[#766D61] py-3 px-7  bg-[#1F2A3B] '>
            <i>🔒</i>
            <h1 className='text-[#766D61] text-xl'>30-Day Warrior</h1>
            <p className='text-[#766D61]'>0/30 days</p>
          </div>
           <div className='flex flex-col border-2  w-full rounded-xl gap-1 items-center justify-center border-[#766D61] py-3 px-7  bg-[#1F2A3B] '>
            <i>🔒</i>
            <h1 className='text-[#766D61] text-xl'>100-Day Legend</h1>
            <p className='text-[#766D61]'>0/100 days</p>
          </div>
           <div className='flex flex-col border-2  w-full rounded-xl gap-1 items-center justify-center  border-[#766D61] py-3 px-7  bg-[#1F2A3B] '>
            <i>🔒</i>
            <h1 className='text-[#766D61] text-xl'>365-Day Master</h1>
            <p className='text-[#766D61]'>0/365 days</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Streak
