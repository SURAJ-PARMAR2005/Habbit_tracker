import React from 'react'
import DashNav from '../Components/Dashboard/DashNav'
import DashHero from '../Components/DashHero'

const Dashboard = () => {
  return (
    <div className='bg-[#181A1B] h-screen min-w-screen'>
      <DashNav />
      <DashHero />
    </div>
  )
}

export default Dashboard
