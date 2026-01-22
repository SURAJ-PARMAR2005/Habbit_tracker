import React from 'react'

const DashNav = () => {
  return (
    <div className='flex items-center justify-self-start'>
        <div className='flex gap-3 justify-center items-center mt-12 ml-7'>
           <span>👤</span>
            <div className='flex flex-col'>
                <h2 className='uppercase text-[#21D8F8] text-sm font-semibold tracking-wider font-sanserif'>Awakened Hunter</h2>
                <h1 className='text-[#E8E6E3] size-3.5 whitespace-nowrap font-bold '>LEVEL 1</h1>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default DashNav
