import React from 'react'
import { TrendingUp } from 'lucide-react';
import { Award } from 'lucide-react';
import { AlarmClock } from 'lucide-react';
import { ChartColumnIncreasing } from 'lucide-react';
import { usePlayer } from '../../Context/usePlayer'
const AnalyticsHero = () => {

 const {strength,wisdom,intelligence,level,xp,totalXP,currStreak,longestStreak} = usePlayer();
  return (
    <div className='grid sm:grid-cols-12 gap-6 p-6 overflow-x-hidden'>
        {/* Strength div */}
      <div className='h-full flex-1 justify-between w-full flex flex-col  bg-[#172131] p-3 gap-5 border-2 border-red-600/40 rounded-xl col-span-4 '>
        <div className='flex flex-col items-center justify-center gap-1.5'>
            <i className='flex items-center justify-center text-7xl'>💪</i>
            <h1 className='text-4xl text-[#FF6063]'>{strength}</h1>
            <p className='text-slate-500'>Total Strength points</p>
        </div>
        <div>
            <h1 className='text-[#F85A5F]  text-2xl'>STRENGTH</h1>
            <h2 className='text-slate-500'>Physical Training Mastery</h2>
        </div>
      </div>
      {/* wisdom div */}
    <div className='h-full flex-1 justify-between w-full flex flex-col bg-[#172131] p-3 gap-5 border-2 border-[#58009E] rounded-xl col-span-4 '>
        <div className='flex flex-col items-center justify-center gap-1.5'>
            <i className='flex items-center justify-center text-7xl'>🧘</i>
            <h1 className='text-4xl text-[#BD6FFF]'>{wisdom}</h1>
            <p className='text-slate-500'>Total wisdom points</p>
        </div>
        <div>
            <h1 className='text-[#BD6FFF] text-2xl'>WISDOM</h1>
            <h2 className='text-slate-500'>Spiritual Practice Mastery</h2>
        </div>
      </div>
      {/* Intelligence */}
      <div className='h-full flex-1 justify-between w-full flex flex-col bg-[#172131] p-3 gap-5 border-2 border-[#31FA96] rounded-xl col-span-4 '>
        <div className='flex flex-col items-center justify-center gap-1.5'>
            <i className='flex items-center justify-center text-7xl'>📚</i>
            <h1 className='text-4xl text-[#31FA96]'>{intelligence}</h1>
            <p className='text-slate-500'>Total intelligence points</p>
        </div>
        <div>
            <h1 className='text-[#31FA96] text-2xl'>INTELLIGENCE</h1>
            <h2 className='text-slate-500'>Knowledge Acquisition Mastery</h2>
        </div>
      </div>

      {/* current Level */}
      <div className='min-h-full w-full border gap-4 p-3 bg-[#172131] border-blue-500/30 flex flex-col items-center justify-evenly rounded-xl col-span-3 '>
        <TrendingUp className='text-[#52AFFF]' />
        <h1 className='text-white text-2xl'>{level}</h1>
        <p className='text-slate-500'>Current Level</p>
      </div>
      {/* streak */}
        <div className='max-h-full w-full border bg-[#172131] border-blue-500/30 flex flex-col items-center justify-evenly rounded-xl col-span-3 '>
        <Award className='text-[#31FA96]' />
        <h1 className='text-white text-2xl'>{longestStreak}</h1>
        <p className='text-slate-500'>Longest Streak</p>
      </div>
      {/* max streak */}
        <div className='max-h-full w-full border bg-[#172131] border-blue-500/30 flex flex-col items-center justify-evenly rounded-xl col-span-3 '>
        <AlarmClock className='text-[#FFCE1B]' />
        <h1 className='text-white text-2xl'>0</h1>
        <p className='text-slate-500'>Days Completed</p>
      </div>
        {/* success rate */}
        <div className='max-h-full w-full border bg-[#172131] border-blue-500/30 flex flex-col items-center justify-evenly rounded-xl col-span-3 '>
        <ChartColumnIncreasing className='text-[#FF941C]' />
        <h1 className='text-white text-2xl'>100%</h1>
        <p className='text-slate-500'>Success Rate</p>
      </div>
      <div className='max-h-full w-full bg-[#172131] flex flex-col justify-between gap-7 rounded-xl border border-blue-500/30 col-span-12 p-6'>
        <div className='h-6  '>
            <h1 className='text-white text-xl'>Current Status</h1>
        </div>
        <div className='h-13 flex items-center gap-70 '>
            <div className='flex flex-col '>
                <p className='text-slate-600'>Experience Points</p>
                <h1 className='text-xl font-bold text-[#52AFFF]'>{totalXP}</h1>
            </div>
             <div className='flex flex-col '>
                <p className='text-slate-600'>Current Streak</p>
                <h1 className='text-xl font-bold text-[#31FA96]'>{currStreak}</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsHero
