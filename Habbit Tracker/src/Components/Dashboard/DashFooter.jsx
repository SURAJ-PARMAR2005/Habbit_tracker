import React from 'react'

const DashFooter = () => {
  return (
    <div className='mt-3 mx-4 flex flex-col gap-6 p-3'>
      <div className='flex flex-col gap-4 w-full'>
        <div className='flex gap-4'>
            <i>✨ </i>
            <h1 className='text-[#BD6FFF] font-extrabold text-xl'>EXTRAS</h1>
        </div>
        <div className='h-12 mx-3.5 rounded-xl w- border border-white flex items-center pl-4 '>
            <h1 className='text-[#AFA89D] '>COMPLETE ALL DAILY TASKS TO UNLOCK EXTRA TASKS</h1>
        </div>
      </div>
        <div className='h-12 mx-3.5 rounded-xl hidden border border-blue-500/30 flex flex-col   '>
            <h1 className='text-[#22E2FF]  '>TODAY'S EXTRA TASKS:</h1>
        </div>
      <div className='flex flex-col gap-4 w-full'>
        <div className='flex gap-4'>
            <i>⚠️ </i>
            <h1 className='text-[#FF6063] font-extrabold text-xl'>PENALITY</h1>
        </div>
        <div className='h-full mx-3.5 rounded-xl border border-red-500/30 flex flex-col gap-1.5 items-center p-4 pr-50% '>
            <h2 className='text-[#F86063] '>YOU HAVE 100 XP PENALTY FROM MISSED DAILY QUESTS.</h2>
            <p className='text-[#F86063]'>Complete all daily tasks to prevent future penalties</p>
        </div>
      </div>
     
    </div>
  )
}

export default DashFooter
