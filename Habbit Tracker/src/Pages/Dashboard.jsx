import React from "react";
import { useState } from "react";
import DashNav from "../Components/Dashboard/DashNav";
import DashHero from "../Components/Dashboard/DashHero";
import DashQuest from "../Components/Dashboard/DashQuest";
import DashFooter from "../Components/Dashboard/DashFooter";

const Dashboard = () => {
  const [completedTask, setCompletTask] = useState(0);
  const [xp, setXp] = useState(0);
  const [strength, setStrength] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [level, setLevel] = useState(1);
  const [flag, setFlag] = useState(false);

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
    if(completedTask>=2) setFlag(true);
    console.log(!flag);

    // stats
    setStrength((prev) => Math.max(prev + strengthDelta, 0));
    setWisdom((prev) => Math.max(prev + wisdomDelta, 0));
    setIntelligence((prev) => Math.max(prev + intelligenceDelta, 0));

    // xp + level logic
    setXp((prevXp) => {
      const totalXp = prevXp + xpDelta;

      if (totalXp >= 1000) {
        const levelUps = Math.floor(totalXp / 1000);
        setLevel((prev) => prev + levelUps);
        return totalXp % 1000;
      }

      return Math.max(totalXp, 0);
    });
  };

  return (
    <div className="bg-[#181A1B] min-h-screen min-w-screen overflow-hidden">
      <DashNav level={level} />
      <DashHero
        completedTask={completedTask}
        xp={xp}
        strength={strength}
        wisdom={wisdom}
        intelligence={intelligence}
      />
      <DashQuest updateProgress={updateProgress} />
      <DashFooter flag={flag} />
    </div>
  );
};

export default Dashboard;
