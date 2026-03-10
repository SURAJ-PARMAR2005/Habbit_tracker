import { UserRoundSearch } from "lucide-react";
import {  createContext, useEffect, useState } from "react";
import axios from "axios";

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
  const [exStudyCount,setExStudyCount] = useState(0);
  const [exMalaCount,setExMalaCount] = useState(0);
  const [exGymCount,setExGymCount] = useState(0);
  const [exJunkCount,setExJunkCount] = useState(0);
  const [isLogin,setIsLogin] = useState(true);
  const [isRegistered,setIsRegistered] = useState(false);
  const [validUser,setValidUser] = useState(false);
  const [authLoading,setAuthLoading] = useState(true);

  const checkAuth = async() => {
    try {
      const res = await axios.get("http://localhost:3000/api/auth/me");

      setValidUser(true);
      setIsLogin(false);
      setIsRegistered(false);

    setXp(res.data.xp);
    setXp(res.data.xp);
    setLevel(res.data.level);
    setStrength(res.data.stats.strength);
    setWisdom(res.data.stats.wisdom);
    setIntelligence(res.data.stats.intelligence);


    } catch (error) {
      console.log(error);
      setValidUser(false);
    }
    finally{
      setAuthLoading(false);
    }
  }

  useEffect(() => {
    checkAuth();
  },[])


  const getUpdatedData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/daily/today",
    {withCredential:true});
      
    setPhysical(res.data.data.quest.gym);
    setknowledge(res.data.data.quest.study);
    SetSpritual(res.data.data.quest.meditation);
    const x = res.data.data.taskCompleted;
    const Xp = res.data.data.totalXpEarnedToday;
    setXp(Xp);
    setCompletTask(x);
    if(x>2) setFlag(true)
    const countExtraStudy = res.data.data.extra.extraStudy;
    const countExtraMala = res.data.data.extra.extraMala;
    const countExtraExercise = res.data.data.extra.extraExercise;
    const countNoJunk = res.data.data.extra.NoJunk;
    setExStudyCount(countExtraStudy);
    setExMalaCount(countExtraMala);
    setExGymCount(countExtraExercise);
    setExJunkCount(countNoJunk);

    if(countExtraStudy > 0 ||  countExtraMala>0 || countExtraExercise>0 || countNoJunk>0){
      setCount(true);
    }
  
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUpdatedData();
  },[]);


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
    if (completedTask >= toalTask-1) {
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

  if (authLoading) {
  return <div className="flex items-center justify-center bg-black text-blue-300 h-screen w-screen">Loading...</div>;
}
    return(
    <PlayerContext.Provider
      value={{
        xp,setXp,
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
                currStreak,longestStreak,
                exStudyCount,setExStudyCount,
                exMalaCount,setExMalaCount,
                exGymCount,setExGymCount,
                exJunkCount,setExJunkCount,
                isLogin,setIsLogin,
                isRegistered,setIsRegistered,
                validUser,setValidUser,
                getUpdatedData
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}
