import React from 'react'
import { Award } from 'lucide-react';
import {usePlayer} from '../../Context/usePlayer'
const Achievements = () => {
  const {completedTask,level,currStreak,strength,wisdom,intelligence} = usePlayer();
  const DataArrObj = [
      {
        "heading": "First Steps",
        "subHeading": "Complete your first daily quest",
        flag : completedTask > 0 ? true : false ,
      },
        {
        "heading": "Level Up",
        "subHeading": "Reach Level 2",
        flag : level >= 2 ? true : false,
      },  {
        "heading": "Week Warrior",
        "subHeading": "Maintain a 7-day streak",
        flag : currStreak >= 7 ? true : false,
      },  {
        "heading": "Getting Stronger",
        "subHeading": "Reach 10 Strength points",
        flag: strength >= 10 ? true : false,
      },  {
        "heading": "Growing Wiser",
        "subHeading": "Reach 10 Wisdom points",
        flag : wisdom > 10 ? true : false,
      },  {
        "heading": "Scholar",
        "subHeading": "Reach 20 Intelligence points",
        flag : intelligence >= 20 ? true : false,
      },  {
        "heading": "Monthly Master",
        "subHeading": "Complete 30-day streak",
        flag : currStreak >= 30 ? true : false,
      },  {
        "heading": "Rising Star",
        "subHeading": "Reach Level 5",
        flag : level >= 5 ? true : false,
      },  {
        "heading": "Perfectionist",
        "subHeading": "100% success rate for 30 days",
        flag : currStreak>=30 ? true : false,
      },  {
        "heading": "Muscle Builder",
        "subHeading": "Reach 25 Strength points",
        flag: strength>=25 ? true : false,
      },  {
        "heading": "Spiritual Guide",
        "subHeading": "Reach 25 Wisdom points",
        flag : wisdom>=25 ? true : false,
      },  {
        "heading": "Genius",
        "subHeading": "Reach 35 Intelligence points",
        false : intelligence > 35 ? true : false
      },  {
        "heading": "Double Digits",
        "subHeading": "Reach Level 10",
        flag : level > 10 ? true : false,
      },  {
        "heading": "Centurion",
        "subHeading": "Complete 100 days",
        flag : currStreak >= 100 ? true : false,

      },  {
        "heading": "Powerhouse",
        "subHeading": "Reach 50 Strength points",
        flag : strength >= 50 ? true : false,
      },  {
        "heading": "Sage",
        "subHeading": "Reach 50 Wisdom points",
        flag : wisdom >= 50 ? true : false,
      },  {
        "heading": "Mastermind",
        "subHeading": "Reach 50 Intelligence points",
        flag : intelligence >= 50 ? true : false,
      },  {
        "heading": "Year Champion",
        "subHeading": "Complete 365-day streak",
        flag : currStreak >= 365 ? true : false,
      },  {
        "heading": "Veteran",
        "subHeading": "Reach Level 20",
      },  {
        "heading": "Extra Mile",
        "subHeading": "Complete 50 extra tasks",
      },  {
        "heading": "Titan",
        "subHeading": "Reach 75 Strength points",
      },  {
        "heading": "Enlightened",
        "subHeading": "Reach 75 Wisdom points",
      },  {
        "heading": "Professor",
        "subHeading": "Reach 75 Intelligence points",
      },  {
        "heading": "Elite",
        "subHeading": "Reach Level 30",
      },  {
        "heading": "Dedication Master",
        "subHeading": "Complete 730-day streak",
      },  {
        "heading": "Legendary Strength",
        "subHeading": "Reach 100 Strength points",
      },  {
        "heading": "Supreme Wisdom",
        "subHeading": "Reach 100 Wisdom points",
      },  {
        "heading": "Supreme Intelligence",
        "subHeading": "Reach 100 Intelligence points",
      },  {
        "heading": "Grandmaster",
        "subHeading": "Reach Level 50",
      },  {
        "heading": "Consistency King",
        "subHeading": "95% success rate with 100+ days",
      },  {
        "heading": "Early Bird",
        "subHeading": "Complete tasks before 8 AM (simulated)",
      },  {
        "heading": "Comeback Kid",
        "subHeading": "Rebuild a 10-day streak after breaking one",
      },  {
        "heading": "Marathon Runner",
        "subHeading": "Complete 1000 days total",
      },  {
        "heading": "Well Balanced",
        "subHeading": "Have all three stats above 30",
      },  {
        "heading": "Speed Demon",
        "subHeading": "Complete all tasks in under 1 hour (simulated)",
      },  {
        "heading": "Night Owl",
        "subHeading": "Complete tasks after 10 PM (simulated)",
      },  {
        "heading": "Weekend Warrior",
        "subHeading": "Complete 20 weekend streaks",
      },  {
        "heading": "Legendary",
        "subHeading": "Reach Level 75",
      },  {
        "heading": "Triple Century",
        "subHeading": "Reach 300 days completed",
      },  {
        "heading": "Lifetime Commitment",
        "subHeading": "Complete 1825-day streak (5 years)",
      },  {
        "heading": "Superhuman Strength",
        "subHeading": "Reach 200 Strength points",
      },  {
        "heading": "Divine Wisdom",
        "subHeading": "Reach 200 Wisdom points",
      },  {
        "heading": "Cosmic Intelligence",
        "subHeading": "Reach 200 Intelligence points",
      },  {
        "heading": "Ascended",
        "subHeading": "Reach Level 100",
      },  {
        "heading": "Perfect Year",
        "subHeading": "100% success rate for 365 days",
      },  {
        "heading": "Extra Legend",
        "subHeading": "Complete 500 extra tasks",
      },  {
        "heading": "Penalty Free",
        "subHeading": "Go 100 days without any penalties",
      },  {
        "heading": "Stat Master",
        "subHeading": "Have all three stats above 100",
      },  {
        "heading": "Ultimate Hunter",
        "subHeading": "Reach Level 200 with 1000+ in all stats",
      },  {
        "heading": "Immortal",
        "subHeading": "10 year streak (3650 days)",
      },
  ]

  console.log(DataArrObj[1].flag);

  const block = [];
  // console.log(block[0]);
  DataArrObj.map(e => {
    let head = e.heading;
    let sub  =  e.subHeading;
    let done = e.flag
    
    block.push(<div className={`flex flex-col items-center justify-center flex-1 gap-1 ${ done ? "bg-[#223532] border-[#00D85A] ":"bg-[#1F2A3B] border-[#766D61]"}  bg-[#1F2A3B] border rounded `}>
      <div className='flex gap-3 items-center'>
          <i>🔒</i>
        <h1 className={` ${done ? "text-[#00D85A]" : "text-[#766D61]" } text-xl`}>{head}</h1>
      </div>
      <div className='md:flex hidden items-center justify-center px-3'><p className='text-[#766D61] '>{sub}</p></div>
    </div>);
  });


  return (
    <div className='bg-[#172131] border-2 border-blue-500/30 rounded-xl flex flex-col p-6 mt-7 flex-1 gap-8'>
      <div className='flex gap-2 '>
        <Award className='text-white' text-xl />
        <h1 className='text-white text-xl '>Achievements (0/50 Unlocked)</h1>
      </div>
      <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
         {block.map(ele => (
        ele
      ))}
      </div>
    </div>
  )
}

export default Achievements
