import React from 'react'
import { Calendar } from 'lucide-react';
import { MoveRight } from 'lucide-react';
import { usePlayer } from '../../Context/usePlayer';
const HeatMap = () => {
    const {completedTask} = usePlayer();
    const todayIndex = Math.floor(
        (new Date().setHours(0,0,0,0) - new Date(new Date().getFullYear(),0,1).setHours(0,0,0,0))/(1000 * 60 * 60 * 24)
    );
    const block = () => {
        return <div className='h-3 w-3 bg-gray-500 border border-blue-500/30 rounded col-span-1 '></div>
    }
    const arr = [];
   for(let i = 0;i<366;i++){
        arr.push(block());
         if(i == todayIndex){
            let a;
            if(completedTask ==1)  a =  <div className='h-3 w-3 bg-green-200 border border-blue-500/30 rounded col-span-1 '></div>;
            if(completedTask ==2)  a =  <div className='h-3 w-3 bg-green-300 border border-blue-500/30 rounded col-span-1 '></div>;
            if(completedTask ==3)  a =  <div className='h-3 w-3 bg-green-400 border border-blue-500/30 rounded col-span-1 '></div>;
            if(completedTask ==4)  a =  <div className='h-3 w-3 bg-green-500 border border-blue-500/30 rounded col-span-1 '></div>;
            arr[i] = a;
        }
    }
  return (
    <div className='bg-[#172131] rounded-xl border border-blue-500/30 flex-1 w-full mt-10 flex flex-col p-6 gap-3'>
       {/* Heading */}
        <div className='md:flex gap-2 items-center'>
            <Calendar className='text-white' />
            <h2 className='text-white  text-xl'>Activity Heatmap - Real Daily Progress</h2>
        </div>

        {/* subHeading */}
        <p className='text-[#766D61] py-5'>Shows your actual daily and extra task completions. Darker green = more tasks completed.</p>
        {/* Progress displayer */}
        <div className='grid md:gap-2 gap-1.5 md:grid-cols-52  grid-cols-15 '>
            {
                arr.map((ele) => (
                    ele
                ))
            }
        </div>
        
        {/* footer of this subcomponent */}

        <div className='flex justify-between md:p-2 gap-3'>
            <p className='text-[#766D61]'>No Activity</p>
            <div className='flex  flex-col md:gap-3 gap-1.5'>
                <div className='flex md:gap-2  items-center justify-center'>
                    <div className='h-3 w-3 bg-gray-500 border border-blue-500/30 rounded '></div>
                <MoveRight className='text-white h-3 w-3' />
                    <div className='h-3 w-3 bg-green-200 border border-blue-500/30 rounded '></div>
                <MoveRight className='text-white h-3 w-3' />
                    <div className='h-3 w-3 bg-green-300 border border-blue-500/30 rounded '></div>
                <MoveRight className='text-white h-3 w-3' />
                    <div className='h-3 w-3 bg-green-400 border border-blue-500/30 rounded '></div>
                <MoveRight className='text-white h-3 w-3' />
                    <div className='h-3 w-3 bg-green-500 border border-blue-500/30 rounded '></div>
               
                </div>
                <p className='text-[#766D61] md:block hidden '>Real-time data: Only your actual completed quests and extras are shown</p>
            </div>
            <p className='text-[#766D61]'>High Activity</p>
        </div>

    </div>
  )
}

export default HeatMap
