import React from 'react'
import {useState} from 'react';
import DashNav from '../Components/Dashboard/DashNav'
import DashHero from '../Components/Dashboard/DashHero'
import DashQuest from '../Components/Dashboard/DashQuest'
import DashFooter from '../Components/Dashboard/DashFooter'

const Dashboard = () => {

     const [completedTask,setCompletTask] = useState(0);
        const [xp,setXp] = useState(0);
    
        const onTaskComplete = (xpgain) => {
            setCompletTask((prev) => prev + 1);
            setXp((prev) => prev + xpgain);
        }

      const [level,setLevel] = useState(1);
    

  return (
    <div className='bg-[#181A1B] min-h-screen min-w-screen overflow-hidden'>
      <DashNav level = {level} />
      <DashHero completedTask={completedTask} xp={xp} setLevel = {setLevel} />
      <DashQuest onTaskComplete={onTaskComplete} />
      <DashFooter />
    </div>
  )
}

export default Dashboard
