import React from 'react'
import { useState,useEffect } from 'react';
import {usePlayer} from "../../Context/usePlayer";
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import { asset } from '../../assets/assets';
const DashNav = () => {
  const {level,setIsLogin,isLogin,isRegistered,validUser}  = usePlayer();
  const [now, setNow] = useState(new Date());
  const [nav,setNav] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

    const formattedDate = now.toLocaleString("en-US",{
        month: "short",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    })


  return (
    <div className='flex flex-col items-start'>
    <div className='flex items-center justify-between gap-[15vh]'>
      {/* level wali div */}
        <div className='flex gap-3 justify-center items-center mt-3 ml-7'>
          {(validUser)? <img className='h-10 w-10 rounded-full mt-3' src={asset.profilePic} alt="DP" /> :
           <div className='flex flex-1 items-center justify-center rounded-full p-2 bg-[#00F2FF] cursor-pointer border border-blue-400 text-black' onClick={() => setIsLogin(true)} >Login</div> 
          }
            <div className='flex flex-col'>
                <h2 className='uppercase text-[#21D8F8] text-sm font-semibold tracking-wider' style={{fontFamily:'Orbitron'}} >Awakened Hunter</h2>
                <h1 className='text-[#E8E6E3] size-3.5 whitespace-nowrap font-bold' style={{fontFamily:'Orbitron'}} >LEVEL {level}</h1>
            </div>
        </div>
        {/* middle div that contains the current time as well */}
        <div className='md:flex flex-col gap-2.5 mt-[10vh] hidden'>
           <h1 className='size-7 font-extrabold text-white whitespace-nowrap text-2xl'>SOLO LEVELING SYSTEM</h1>
          <h2 className='text-[#21D8F8] font-bold whitespace-nowrap pl-10'>PERSONAL AWAKENING</h2>
          <div className='flex gap-1 items-center w-full'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='h-4 w-4 text-[#21D8F8]' ><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path></svg>
          <span className='text-[#21D8F8] w-70'>{formattedDate}</span>
          </div>
        </div>
        {/* last 4 divs */}
        <div className='md:flex gap-4 hidden  '>
          <div className='h-full w-full rounded-lg hover:bg-gray-800 py-2'>
            <Link to="/" className='text-white font-bold flex items-center justify-center px-4'>Dashboard</Link>
          </div>
          <div className='h-full w-full outline-1 outline-[#BD6FFF] hover:bg-[##BD6FFF] rounded-lg  py-2'>
            <Link to="/stats" className='text-[#BD6FFF] font-bold px-4 flex items-center justify-center hover:text-white'>Stats</Link>
          </div>
          <div className='h-full w-full outline-1 outline-[#31FA96] rounded-lg  py-2'>
            <Link  className='text-[#31FA96] font-bold px-4 flex items-center justify-center hover:text-white' to="/analytics">Analytics</Link>
          </div>
          <h2 className='text-[#31FA96] font-bold flex items-center justify-center'>ACTIVE</h2>
        </div>
        <Menu className='block md:hidden text-[#21D8F8] mr-3 cursor-pointer text-2xl ' onClick={() => setNav(!nav)} />
        {/* For mobile */}
        <div className={`fixed flex-col top-0 left-0 h-screen w-screen z-30  ${nav? "md:block":"hidden" } bg-black`}>
          <div className='flex  items-center justify-end pr-14  py-3 text-2xl' onClick={() => setNav(!nav)}>
            <X className='text-[#21D8F8] cursor-pointer' />
          </div>
          <div className='h-full flex flex-col mx-3 gap-8 justify-items-start  items-center ' >
            <div className=' w-full rounded-lg hover:bg-gray-800 py-2'>
            <Link to="/" className='text-white font-bold flex items-center justify-center px-4'>Dashboard</Link>
          </div>
          <div className=' w-full outline-1 outline-[#BD6FFF] hover:bg-[##BD6FFF] rounded-lg mx-3  py-2'>
            <Link to="/stats" className='text-[#BD6FFF] font-bold px-4 flex items-center justify-center hover:text-white'>Stats</Link>
          </div>
          <div className=' w-full outline-1 outline-[#31FA96] rounded-lg mx-3  py-2'>
            <Link  className='text-[#31FA96] font-bold px-4 flex items-center justify-center hover:text-white' to="/analytics">Analytics</Link>
          </div>
          </div>

        </div>
    </div>
    </div>
  )
}

export default DashNav
