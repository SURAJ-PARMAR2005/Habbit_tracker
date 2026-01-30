import React from 'react'
import { Calendar } from 'lucide-react';
import { MoveRight } from 'lucide-react';
const HeatMap = () => {
    const block = () => {
        return <div className='h-3 w-3 bg-gray-500 border border-blue-500/30 rounded col-span-1 '></div>
    }
    const arr = [];
   for(let i = 0;i<366;i++){
        arr.push(block());
    }
  return (
    <div className='bg-[#172131] rounded-xl border border-blue-500/30 flex-1 w-full mt-10 flex flex-col p-6 gap-3'>
       {/* Heading */}
        <div className='flex gap-2 items-center'>
            <Calendar className='text-white' />
            <h2 className='text-white  text-xl'>Activity Heatmap - Real Daily Progress</h2>
        </div>

        {/* subHeading */}
        <p className='text-[#766D61] py-5'>Shows your actual daily and extra task completions. Darker green = more tasks completed.</p>
        {/* Progress displayer */}
        <div className='grid gap-2 grid-cols-52 '>
            {
                arr.map((ele) => (
                    ele
                ))
            }
        </div>
        
        {/* footer of this subcomponent */}

        <div className='flex items-center justify-between p-2'>
            <p className='text-[#766D61]'>No Activity</p>
            <div className='flex  flex-col'>
                <div className='flex gap-2 items-center'>
                    {arr[0]}
                <MoveRight className='text-white h-3 w-3' />
                    {arr[0]}
                <MoveRight className='text-white h-3 w-3' />
                    {arr[0]}
                <MoveRight className='text-white h-3 w-3' />
                    {arr[0]}
                <MoveRight className='text-white h-3 w-3' />
                    {arr[0]}
                </div>
            </div>
            <p className='text-[#766D61]'>High Activity</p>
        </div>

    </div>
  )
}

export default HeatMap
