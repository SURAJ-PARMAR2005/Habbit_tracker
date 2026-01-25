import React from 'react'

const DashHero = () => {
  return (
    <div className=' min-w-screen flex gap-6  flex-col  p-6  mt-6'>
        <div className='flex gap-6'>
            
        {/* Experience Points */}
      <div className='flex flex-col gap-6 border p-6 border-blue-500/30 h-full flex-1 rounded-xl'>
        <h1 className='text-[#22E2FF] size-7 font-extrabold whitespace-nowrap'>EXPERIENCE POINTS</h1>

        <p className='font-extrabold text-white text-2xl' >0/1,000</p>
        <p className='text-[#22E2FF] size-1  whitespace-nowrap'>Points Until Level Up</p>

      </div>


{/* Daily Progress */}
       <div className='flex flex-col gap-6 border p-6 border-blue-500/30 h-full flex-1 rounded-xl'>
         <h1 className='text-[#38FFC1] size-7 font-extrabold whitespace-nowrap'>DAILY PROGRESS</h1>

        <p className='font-extrabold text-white text-2xl' >0/3</p>
        <p className='text-[#38FFC1] size-1 whitespace-nowrap'>Daily Complete Quests</p>
      </div>

      {/* Character Stats */}
       <div className='flex flex-col gap-6 border p-6 border-blue-500/30 h-full flex-1 justify-evenly rounded-xl'>
         <h1 className='text-[#BD6FFF] size-7 font-extrabold whitespace-nowrap'>CHARACTER STATS</h1>
        <div className='flex flex-col gap-3'>
            <div className='flex items-center justify-between mb-1' >
            <h2 className='text-[#B9CAD9] size-1'>Strength</h2>
            <p className='text-[#FF6063] size-1'>0</p>
         </div>
         <div className='flex items-center justify-between mb-1'>
            <h2 className='text-[#B9CAD9] size-1'>Wisdom</h2>
            <p className='text-[#BD6FFF] size-1'>0</p>
         </div>
         <div className='flex items-center justify-between mb-4'>
            <h2 className='text-[#B9CAD9] size-1'>Intelligence</h2>
            <p className='text-[#31FA96] size-1'>10</p>
         </div>
        </div>

        
      </div>

      {/* Current Streak*/}
       <div className='flex flex-col gap-6 border p-6 border-blue-500/30 h-full flex-1 rounded-xl'>
         <h1 className='text-[#FF941C] size-7 font-extrabold whitespace-nowrap'>CURRENT STREAK</h1>

        <p className='font-extrabold text-white text-2xl' >0</p>
        <p className='text-[#FF941C] size-1 whitespace-nowrap'>Days Completed</p>
      </div>
        </div>


    {/* Progress */}

    <div className='flex flex-col h-[20vh] w-full items-center gap-3 rounded-xl border border-blue-500/30 justify-evenly p-3'>
        <div className='flex w-full  justify-between'>
            <h1 className='text-[#22E2FF] font-extrabold'>LEVEL 1 PROGRESS</h1>
            <h2 className='text-[#22E2FF] font-extrabold'>0/1000 XP</h2>
        </div>

        {/* progress bar */}

        <div className='h-3 mx-5 w-full bg-gray-700 rounded-full'>

        </div>

    </div>
        

    </div>
  )
}

export default DashHero
