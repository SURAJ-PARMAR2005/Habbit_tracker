import React from 'react'
import AnalyticsNav from '../Components/Analytics/StatsNav'
import AnalyticsHero from '../Components/Analytics/StatsHero'

const Analytics = () => {
  return (
    <div className='bg-[#181A1B] min-h-screen min-w-screen overflow-x-hidden text-white'>
      <AnalyticsNav />
      <AnalyticsHero />
    </div>
  )
}

export default Analytics
