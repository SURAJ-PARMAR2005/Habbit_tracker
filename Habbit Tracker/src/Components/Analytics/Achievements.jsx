import React from 'react'
import { Award } from 'lucide-react';

const Achievements = () => {

  const DataArrObj = [
      {
        "heading": "First Steps",
        "subHeading": "Complete your first daily quest",
      },
        {
        "heading": "Level Up",
        "subHeading": "Reach Level 2",
      },  {
        "heading": "Week Warrior",
        "subHeading": "Maintain a 7-day streak",
      },  {
        "heading": "Getting Stronger",
        "subHeading": "Reach 10 Strength points",
      },  {
        "heading": "Growing Wiser",
        "subHeading": "Reach 10 Wisdom points",
      },  {
        "heading": "Scholar",
        "subHeading": "Reach 20 Intelligence points",
      },  {
        "heading": "Monthly Master",
        "subHeading": "Complete 30-day streak",
      },  {
        "heading": "Rising Star",
        "subHeading": "Reach Level 5",
      },  {
        "heading": "Perfectionist",
        "subHeading": "100% success rate for 30 days",
      },  {
        "heading": "Muscle Builder",
        "subHeading": "Reach 25 Strength points",
      },  {
        "heading": "Spiritual Guide",
        "subHeading": "Reach 25 Wisdom points",
      },  {
        "heading": "Genius",
        "subHeading": "Reach 35 Intelligence points",
      },  {
        "heading": "Double Digits",
        "subHeading": "Reach Level 10",
      },  {
        "heading": "Centurion",
        "subHeading": "Complete 100 days",
      },  {
        "heading": "Powerhouse",
        "subHeading": "Reach 50 Strength points",
      },  {
        "heading": "Sage",
        "subHeading": "Reach 50 Wisdom points",
      },  {
        "heading": "Mastermind",
        "subHeading": "Reach 50 Intelligence points",
      },  {
        "heading": "Year Champion",
        "subHeading": "Complete 365-day streak",
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
  const block = [];
  // console.log(block[0]);
  DataArrObj.map(e => {
    let head = e.heading;
    let sub  =  e.subHeading;
    
    block.push(<div className='flex flex-col items-center justify-center flex-1 gap-1 bg-[#1F2A3B] border rounded border-[#766D61]'>
      <div className='flex gap-3 items-center'>
          <i>🔒</i>
        <h1 className='text-[#766D61] text-xl'>{head}</h1>
      </div>
      <div className='flex items-center justify-center px-3'><p className='text-[#766D61] '>{sub}</p></div>
    </div>);
});


  return (
    <div className='bg-[#172131] rounded-xl flex flex-col p-6 mt-7 flex-1 gap-8'>
      <div className='flex gap-2 '>
        <Award className='text-white' text-xl />
        <h1 className='text-white text-xl '>Achievements (0/50 Unlocked)</h1>
      </div>
      <div className='grid grid-cols-4 gap-4'>
         {block.map(ele => (
        ele
      ))}
      </div>
    </div>
  )
}

export default Achievements
