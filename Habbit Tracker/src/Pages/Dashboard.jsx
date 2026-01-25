import React from 'react'
import DashNav from '../Components/Dashboard/DashNav'
import DashHero from '../Components/Dashboard/DashHero'
import DashQuest from '../Components/Dashboard/DashQuest'

const Dashboard = () => {
  return (
    <div className='bg-[#181A1B] min-h-screen min-w-screen'>
      <DashNav />
      <DashHero />
      <DashQuest />
    </div>
  )
}

export default Dashboard
