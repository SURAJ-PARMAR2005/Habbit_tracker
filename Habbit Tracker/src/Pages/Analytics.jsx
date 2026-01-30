import React, { useState } from 'react'
import AnaNav from '../Components/Analytics/AnaNav'
import AnaHero from '../Components/Analytics/AnaHero'

const Stats = () => {
  const [heat,setHeatMap] = useState(false);
  const [streak,setStreak] = useState(false);
  const [achievement,setAchivement] = useState(false);
  // const []
  return (
    <div className='bg-[#181A1B] min-h-screen min-w-screen overflow-x-hidden p-6'>
     <AnaNav  />
     <AnaHero heat={heat} streak={streak} achievement={achievement} setHeatMap = {setHeatMap} setStreak={setStreak} setAchivement={setAchivement} />
    </div>
  )
}

export default Stats
