import React from 'react'
import HeatMap from './HeatMap'

const AnaHero = () => {
  return (
    <div className='p-6 w-full '>
        {/* switcher */}
        <div className='flex items-center justify-center-safe gap-3 text-white'>
            <div className='flex items-center justify-center p-2 rounded bg-gray-500/30 cursor-pointer'>
                <h2>Activity Heatmap</h2>
            </div>
            <div className='flex items-center justify-center p-2 rounded  bg-gray-500/30 cursor-pointer '>
                <h2>Streaks & Goals</h2>
            </div>
            <div className='flex items-center justify-center p-2 rounded bg-gray-500/30 cursor-pointer'>
                <h2>Achievements</h2>
            </div>
        </div>
        {/* heatMap component child */}
        <HeatMap />
    </div>
  )
}

export default AnaHero
