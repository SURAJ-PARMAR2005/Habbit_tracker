import React from 'react'
import { Link } from 'react-router-dom'
const AnaNav = () => {
  return (
    <div className='p-3'>
      <div className='w-full flex items-center justify-between text-white'>
        <div className='border flex items-center justify-center  border-blue-500/30 p-2 rounded cursor-pointer'>
        <Link to='/' className='font-semibold'>Dashboard</Link>
      </div>
      <div className='flex flex-col items-center justify-center' >
        <h1 className='font-extrabold text-2xl'>PROGRESS ANALYTICS</h1>
        <p className='text-[#54EAFD]'>Visualize your journey and track long-term growth</p>
      </div>
      <div className='flex items-center justify-center border border-blue-500/30 rounded p-2 cursor-pointer'>
        <Link to='/stats' className='font-semibold'>Stats</Link>
      </div>
      </div>
    </div>
  )
}

export default AnaNav
