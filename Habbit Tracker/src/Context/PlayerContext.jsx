import {  createContext, useState } from "react";


export const PlayerContext = createContext(null);

export const PlayerProvider = ({children}) => {
  const [completedTask, setCompletTask] = useState(0);
  const [xp, setXp] = useState(0);
  const [strength, setStrength] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [intelligence, setIntelligence] = useState(10);
  const [level, setLevel] = useState(1);
  const [flag, setFlag] = useState(false);
          const [goal,setGoal] = useState(2);
          const [mala,setMala] = useState(2);
          const [physical,setPhysical] = useState(false);
          const [Knowledge,setknowledge] = useState(false);
          const [Spiritual,SetSpritual] = useState(false);
            const [count,setCount] = useState(0);
            const [study,setStudy] = useState(false);
            const [junk,setJunk] = useState(false);
            const [gym,setGym] = useState(false);
            const[mali,setMali] = useState(false);
            const [toalTask,SetTotalTask]  = useState(3);
            const [totalXP,SetTotalXp] = useState(1000);
            const [currStreak,setCurrStreak] = useState(0);
            const [longestStreak,setLongestStreak] = useState(0);

  const updateProgress = ({
    xpDelta = 0,
    taskDelta = 0,
    strengthDelta = 0,
    wisdomDelta = 0,
    intelligenceDelta = 0,
  }) => {
    // tasks
    if (taskDelta !== 0) {
      setCompletTask((prev) => Math.max(prev + taskDelta, 0));
    }
    if (completedTask >= 2) {
      setFlag(true);
      SetTotalTask(prev => prev + 3);
    }
    // console.log(completedTask)
        if(completedTask <2) setFlag(false);
        if(completedTask == 2) {
          setCurrStreak(1);
        }
        if(currStreak>0){
          setLongestStreak(prev => prev + 1)
        }
    // console.log(!flag);

    // stats
    setStrength((prev) => Math.max(prev + strengthDelta, 0));
    setWisdom((prev) => Math.max(prev + wisdomDelta, 0));
    setIntelligence((prev) => Math.max(prev + intelligenceDelta, 0));

    // xp + level logic
    // xp + level logic
    let newXp = xp + xpDelta;

    if (newXp >= 1000) {
      const levelUps = Math.floor(newXp / 1000);
      setLevel((prev) => prev + levelUps);
      SetTotalXp((prev) => prev + 500);
      setXp(newXp % 1000);
    } else {
      setXp(Math.max(newXp, 0));
    }
  };
    return(
    <PlayerContext.Provider
      value={{
        xp,
        completedTask,
        strength,
        wisdom,intelligence,
        level,
        flag,
        updateProgress,
                goal,setGoal,
                mala,setMala,
                physical,setPhysical,
                Knowledge,setknowledge,
                Spiritual,SetSpritual,
                count,setCount,
                study,setStudy,
                junk,setJunk,
                gym,setGym,
                mali,setMali,
                toalTask,SetTotalTask,
                totalXP,SetTotalXp,
                currStreak,longestStreak
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}
