// import React, { useState } from 'react'
import { X } from 'lucide-react';
import {usePlayer} from '../../Context/usePlayer';
import axios from 'axios';
const DashFooter = () => {
  const {flag,
      count,setCount,
                study,setStudy,
                junk,setJunk,
                gym,setGym,
                mali,setMali,
                // updateProgress,
                 exStudyCount,setExStudyCount,
                exMalaCount,setExMalaCount,
                exGymCount,setExGymCount,
                exJunkCount,setExJunkCount,
    getUpdatedData,

  } = usePlayer(); 

  const handleChangeExtra = async(name) => {
      try{
          await axios.post("http://localhost:3000/api/daily/complete-quest",{
            type: "extra",
            name:name,
          },
          {withCredentials:true}
        )
    await getUpdatedData();
      }
      catch(error){
        console.log(error);
      }
  }


  return (
    <div className='mt-3 mx-4 flex flex-col gap-6 p-3 '>
      <div className='flex flex-col gap-4 w-full'>
        <div className='flex gap-4'>
            <i>✨ </i>
            <h1 className='text-[#BD6FFF] font-extrabold text-xl'>EXTRAS</h1>
        </div>
       {!flag &&  (<div className='h-12 mx-3.5 rounded-xl w- border border-white flex items-center pl-4 '>
            <h1 className='text-[#AFA89D] '>COMPLETE ALL DAILY TASKS TO UNLOCK EXTRA TASKS</h1>
        </div>)}
       {flag && ( <div className='h-28  border flex-1 border-green-500/30 rounded-xl flex flex-col justify-between gap-4 p-6 shadow-sm shadow-green-400/30'>
          <h1 className='text-[#38FFC1] md:font-bold'>DAILY QUESTS COMPLETED! UNLOCK EXTRA TASKS FOR BONUS XP AND STATS.</h1>
          <div className='m-2 flex md:flex-row flex-col gap-2 justify-items-start '>
            <div className='flex gap-2 items-center  bg-gray-600/30 cursor-pointer flex-1 rounded-xl   '   onClick={() => {setCount(prev => prev+1);
            setStudy(true);
            // setExStudyCount(prev => prev+1);
            handleChangeExtra("extraStudy");
            // updateProgress({
            //         xpDelta: 200,
            //         taskDelta: 1,
            //         intelligenceDelta: 2,
            //       });
            }
          }  >
              <i className='text-2xl text-white'>+</i>
              <h2 className='text-white font-bold'>+1 Hour Study</h2>
            </div>
              <div className='flex gap-2 items-center  bg-gray-600/30 cursor-pointer flex-1 rounded-xl  '   onClick={() => {setCount(prev => prev+1);
              setMali(true);
              // setExMalaCount(prev => prev+1);
            handleChangeExtra("extraMala");
                
              }
              } >
              <i className='text-2xl text-white'>+</i>
              <h2 className='text-white font-bold'>+1 Mala</h2>
            </div> 
             <div className='flex gap-2  items-center bg-gray-600/30 cursor-pointer flex-1 rounded-xl  '   onClick={() => {setCount(prev => prev+1);
              setGym(true);
              // setExGymCount(prev => prev+1);
            handleChangeExtra("extraExercise");


             }} >
              <i className='text-2xl text-white'>+</i>
              <h2 className='text-white font-bold'>+1 Gym/Exercise</h2>
            </div>  <div className='flex gap-2 items-center bg-gray-600/30 cursor-pointer flex-1 rounded-xl  '   onClick={() => {setCount(prev => prev+1);
              setJunk(true);
              // setExJunkCount(prev => prev+1);
            handleChangeExtra("NoJunk");
            }} >
              <i className='text-2xl text-white'>+</i>
              <h2 className='text-white font-bold'>+1 No Junk Food</h2>
            </div>
          </div>
        </div>)}
      </div>
     <div className={` h-20 ${count?"block":"hidden"}  flex-1 p-3 rounded-xl border border-blue-500/30 flex flex-col  justify-between shadow-xl shadow-blue-400/30 `}>
            <h1 className='text-[#22E2FF]  '>TODAY'S EXTRA TASKS:</h1>
          <div className='flex md:flex-row flex-col  gap-2 m-3'>
            {study &&  <div className='flex items-center text-white'>
              <p>+{exStudyCount} Hour Study</p>
              <button class="ml-1 hover:bg-emerald-700 rounded p-0.5 flex items-center justify-center cursor-pointer" onClick={() => {
                 setExStudyCount(prev => prev-1);
                if(exStudyCount == 1){
                  setStudy(false);
                   }
                setCount(prev => prev-1);
              }}>
                   {/* <X /> */}
              </button>
            </div>}
            {mali &&  <div className='flex items-center text-white'>
              <p>+{exMalaCount} Mala</p>
              <button class="ml-1 hover:bg-emerald-700 rounded p-0.5 flex items-center justify-center cursor-pointer" onClick={() => {
                setExMalaCount(prev => prev-1);
                if(exMalaCount == 1){
                  setMali(false);
                   }
                setCount(prev => prev-1);

              }
              }>
                   {/* <X /> */}
              </button>
            </div>}
            {gym &&  <div className='flex items-center text-white'>
              <p>+{exGymCount} Gym/Exercise</p>
              <button class="ml-1 hover:bg-emerald-700 rounded p-0.5 flex items-center justify-center cursor-pointer" onClick={() => {
                setExGymCount(prev => prev-1);
                if(exGymCount == 1){
                  setGym(false);
                   }
                setCount(prev => prev-1);
            
              }}>
                   {/* <X /> */}
              </button>
            </div>}
            {
              junk &&  <div className='flex items-center text-white'>
              <p>+{exJunkCount } No JunkFood</p>
              <button class="ml-1 hover:bg-emerald-700 rounded p-0.5 flex items-center justify-center cursor-pointer" onClick={() => {
                setExJunkCount(prev => prev-1);
                if(exJunkCount == 1){
                  setJunk(false);
                   }
                setCount(prev => prev-1);
                 
              }}>
                   {/* <X /> */}
              </button>
            </div>
            }
          </div>
        </div>
      <div className='flex flex-col gap-4 w-full '>
        <div className='flex gap-4'>
            <i>⚠️ </i>
            <h1 className='text-[#FF6063] font-extrabold text-xl'>PENALITY</h1>
        </div>
        <div className='h-full mx-3.5 rounded-xl border border-red-500/30 flex flex-col gap-1.5 items-center p-4 pr-50% shadow-xl shadow-red-400/30 '>
            <h2 className='text-[#F86063] '>YOU HAVE 100 XP PENALTY FROM MISSED DAILY QUESTS.</h2>
            <p className='text-[#F86063]'>Complete all daily tasks to prevent future penalties</p>
        </div>
      </div>
     
    </div>
  )
}

export default DashFooter
