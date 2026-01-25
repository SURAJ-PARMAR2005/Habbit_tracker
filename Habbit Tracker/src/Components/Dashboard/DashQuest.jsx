import React from 'react'
import { Dumbbell } from "lucide-react";
import { Book } from 'lucide-react';
import { Heart } from 'lucide-react';
const DashQuest = () => {
  return (
    <div className='flex flex-col gap-6 text-white pl-6'>
        {/* heading */}
        <div className='flex gap-2'>
            <i className='size-7'>📋</i>
            <h1 className='font-extrabold text-[#22E2FF] text-xl'>DAILY QUESTS</h1>
        </div>

        {/* cards */}
        <div className='flex gap-6 flex-1'>
            {/* container */}

            {/* cards three */}
            <div className='physical-training flex flex-col border border-red-500/20  mb-3 p-6 gap-9 rounded-xl justify-items-start'>
                {/* card1 */}
                <div className='flex gap-[14vh] items-center justify-between p-3'>
                    <div className='flex gap-2'>
                       <Dumbbell className="w-5 h-5 text-red-400" />
                        <div><h1>Physical Training</h1>
                        <h2 className='text-[#B4C1D3]'>(Strength)</h2></div>
                    </div>
                    <input className='size-6 accent-gray-600' type="checkbox" />
                </div>
                <h1 className='p-3 font-extrabold text-xl text-[#AFA89D]'>INCOMPLETE</h1>
            </div>
           <div className='physical-training flex flex-col border border-green-500/20  mb-3 p-6 gap-9 rounded-xl justify-items-start'>
                {/* card1 */}
                <div className='flex gap-[14vh] items-center justify-between p-3'>
                    <div className='flex gap-2'>
                       <Book className='h-5 w-5 text-green-500' /> 
                        <div><h1>Knowledge Acquisition</h1>
                        <h2 className='text-[#B4C1D3]'>(Intelligence)</h2></div>
                    </div>
                    <input className='size-6 accent-gray-600' type="checkbox" />
                </div>
                 <div className='flex gap-1.5'>
                        <h2 className='text-[#22E2FF]' >TARGET HOURS:</h2>
                        <input type="range" name="" id="" />
                </div>
                <h1 className='p-3 font-extrabold text-xl text-[#AFA89D]'>INCOMPLETE</h1>
            </div>
            <div className='physical-training flex flex-col border border-purple-500/20  mb-3 p-6 gap-9 rounded-xl justify-items-start'>
                {/* card1 */}
                <div className='flex gap-[14vh] items-center justify-between p-3'>
                    <div className='flex gap-2'>
                       {/* <Dumbbell className="w-5 h-5 text-red-400" />
                        */}
                        <Heart className='h-5 w-5 text-purple-600' />
                        <div><h1>Spiritual Practice</h1>
                        <h2 className='text-[#B4C1D3]'>(Wisdom)</h2></div>
                    </div>
                    <input className='size-6 accent-gray-600' type="checkbox" />
                </div>
                <h1 className='p-3 font-extrabold text-xl text-[#AFA89D]'>INCOMPLETE</h1>
            </div>

        </div>
      
    </div>
  )
}

export default DashQuest
