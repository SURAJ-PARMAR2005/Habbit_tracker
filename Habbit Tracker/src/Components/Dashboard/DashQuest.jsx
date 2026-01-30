import React from "react";
import { Dumbbell } from "lucide-react";
import { Book } from "lucide-react";
import { Heart } from "lucide-react";
// import { useState } from "react";
import { usePlayer } from "../../Context/usePlayer";
const DashQuest = () => {
  const {
    updateProgress,
    goal,
    setGoal,
    mala,
    setMala,
    physical,
    setPhysical,
    Knowledge,
    setknowledge,
    Spiritual,
    SetSpritual,
  } = usePlayer();

  return (
    <div className="flex flex-col gap-6 text-white pl-6">
      {/* heading */}
      <div className="flex gap-2">
        <i className="size-7">📋</i>
        <h1 className="font-extrabold text-[#22E2FF] text-xl">DAILY QUESTS</h1>
      </div>

      {/* cards */}
      <div className="flex gap-6 flex-1">
        {/* container */}

        {/* cards three */}
        <div className="physical-training flex flex-col border border-red-500/20  mb-3 p-6 gap-9 rounded-xl justify-items-start">
          {/* card1 */}
          <div className="flex gap-[14vh] items-center justify-between p-3">
            <div className="flex gap-2">
              <Dumbbell className="w-5 h-5 text-red-400" />
              <div>
                <h1>Physical Training</h1>
                <h2 className="text-[#B4C1D3]">(Strength)</h2>
              </div>
            </div>
            <input
              className="size-6 accent-gray-600"
              type="checkbox"
              checked={physical}
              onChange={(e) => {
                setPhysical(e.target.checked);
                if (physical) {
                  updateProgress({
                    xpDelta: -200,
                    taskDelta: -1,
                    strengthDelta: -2,
                  });
                } else
                  updateProgress({
                    xpDelta: 200,
                    taskDelta: 1,
                    strengthDelta: 2,
                  });
              }}
            />
          </div>
          <h1
            className={`p-3 font-extrabold text-xl  transition-all duration-300 ${physical ? "text-[#38FFB7]" : "text-[#AFA89D]"}`}
          >
            {physical ? "COMPLETED" : "INCOMPLETE"}
          </h1>
          {physical && (
            <div className="h-4 w-full items-center p-2 ">
              <p className="text-[#38FFB7] bg-[#162622]">
                +2 Strength, +100 XP
              </p>
            </div>
          )}
        </div>
        <div className="physical-training flex flex-col border border-green-500/20  mb-3 p-6 gap-9 rounded-xl justify-items-start">
          {/* card1 */}
          <div className="flex gap-[14vh] items-center justify-between p-3">
            <div className="flex gap-2">
              <Book className="h-5 w-5 text-green-500" />
              <div>
                <h1>Knowledge Acquisition</h1>
                <h2 className="text-[#B4C1D3]">(Intelligence)</h2>
              </div>
            </div>
            <input
              className="size-6 accent-gray-600"
              type="checkbox"
              checked={Knowledge}
              onChange={(e) => {
                setknowledge(e.target.checked);
                if (Knowledge) {
                  updateProgress({
                    xpDelta: -(goal * 100),
                    taskDelta: -1,
                    intelligenceDelta: -goal,
                  });
                } else
                  updateProgress({
                    xpDelta: goal * 100,
                    taskDelta: 1,
                    intelligenceDelta: goal,
                  });
              }}
            />
          </div>
          <div className="flex gap-2 items-center ">
            <h2 className="text-[#22E2FF]">TARGET HOURS:</h2>
            <select
              defaultValue="2"
              className="h-9 w-25 border border-b-gray-600/30 bg-[#0F172A] px-3 pr-8 cursor-pointer border-blue-500/30 rounded-[10px]"
              onChange={(e) => {
                setGoal(e.target.value);
                // completedTask({mala});
              }}
            >
              <option value="2">2h</option>
              <option value="3">3h</option>
              <option value="4">4h</option>
              <option value="5">5h</option>
              <option value="6">6h</option>
              <option value="7">7h</option>
              <option value="8">8h</option>
              <option value="9">9h</option>
              <option value="10">10h</option>
            </select>
          </div>
          <h1
            className={`p-3 font-extrabold text-xl  transition-all duration-300 ${Knowledge ? "text-[#38FFB7]" : "text-[#AFA89D]"}`}
          >
            {Knowledge ? "COMPLETED" : "INCOMPLETE"}
          </h1>
          {Knowledge && (
            <div className="h-4 w-full items-center p-2 ">
              <p className="text-[#38FFB7] bg-[#162622]">
                {goal} Knowledge, +{goal}00 XP
              </p>
            </div>
          )}
          <p className="text-[#22E2FF] ">Goal {goal} hours</p>
        </div>
        <div className="physical-training flex flex-col border border-purple-500/20  mb-3 p-6 gap-9 rounded-xl justify-items-start">
          {/* card1 */}
          <div className="flex gap-[14vh] items-center justify-between p-3">
            <div className="flex gap-2">
              {/* <Dumbbell className="w-5 h-5 text-red-400" />
               */}
              <Heart className="h-5 w-5 text-purple-600" />
              <div>
                <h1>Spiritual Practice</h1>
                <h2 className="text-[#B4C1D3]">(Wisdom)</h2>
              </div>
            </div>
            <input
              className="size-6 accent-gray-600"
              type="checkbox"
              checked={Spiritual}
              onChange={(e) => {
                SetSpritual(e.target.checked);
                if (Spiritual) {
                  updateProgress({
                    xpDelta: -(mala * 100),
                    taskDelta: -1,
                   wisdomDelta: -mala,
                  });
                } else
                  updateProgress({
                    xpDelta: mala * 100,
                    taskDelta: 1,
                    wisdomDelta: mala,
                  });
              }}
            />
          </div>
          <div className="flex gap-2 items-center ">
            <h2 className="text-[#22E2FF] whitespace-nowrap">TARGET MALA:</h2>
            <select
              defaultValue="2"
              className="h-9 w-full border border-b-gray-600/30 bg-[#0F172A] px-3 pr-8 cursor-pointer border-blue-500/30 rounded-[10px] "
              onChange={(e) => setMala(e.target.value)}
            >
              <option value="2">2 mala</option>
              <option value="3">3 mala</option>
              <option value="4">4 mala</option>
              <option value="5">5 mala</option>
              <option value="6">6 mala</option>
              <option value="7">7 mala</option>
              <option value="8">8 mala</option>
              <option value="9">9 mala</option>
              <option value="10">10 mala</option>
              <option value="11">11 mala</option>
              <option value="12">12 mala</option>
              <option value="13">13 mala</option>
              <option value="14">14 mala</option>
              <option value="15">15 mala</option>
              <option value="16">16 mala</option>
            </select>
          </div>
          <h1
            className={`p-3 font-extrabold text-xl  transition-all duration-300 ${Spiritual ? "text-[#38FFB7]" : "text-[#AFA89D]"}`}
          >
            {Spiritual ? "COMPLETED" : "INCOMPLETE"}
          </h1>
          {Spiritual && (
            <div className="h-4 w-full items-center p-2 ">
              <p className="text-[#38FFB7] bg-[#162622]">
                {mala} Spiritual, +{mala}00 XP
              </p>
            </div>
          )}
          <p className="text-[#22E2FF] ">Goal {mala} hours</p>
        </div>
      </div>
    </div>
  );
};

export default DashQuest;
