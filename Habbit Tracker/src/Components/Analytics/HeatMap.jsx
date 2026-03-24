import React, { useEffect, useState } from "react";

import { Calendar } from "lucide-react";
import { MoveRight } from "lucide-react";
// import { usePlayer } from "../../Context/usePlayer";
import axios from "axios";
const HeatMap = () => {
  //I  HAVE TO FETCH THE HEATMAP DATA FROM THE BACKEND
  const [heatMapData, setHeatMapData] = useState([]);

  useEffect(() => {
    const getHeatMapData = async () => {
      try {
        const res = await axios.get(
          "https://habbit-tracker-5n2a.onrender.com/api/analytics/heatmap",
          {
            withCredentials: true,
          },
        );
        console.log(res);
        setHeatMapData(res.data.heatmap);
      } catch (error) {
        console.log(error);
      }
    };
    getHeatMapData();
  }, []);

  const heatMapmap = {};

  heatMapData?.forEach((day) => {
    heatMapmap[day.date] = day.count;
  });

  const days = [];

  for (let i = 364; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const dateStr = `${year}-${month}-${day}`;
    days.push(dateStr);
  }

  const getColor = (count) => {
    if (!count) return "bg-gray-500";
    if (count == 1) return "bg-green-200";
    if (count == 2) return "bg-green-300";
    if (count == 3) return "bg-green-400";
    return "bg-green-500";
  };

  return (
    <div className="bg-[#172131] rounded-xl border border-blue-500/30 flex-1 w-full mt-10 flex flex-col p-6 gap-3">
      {/* Heading */}
      <div className="md:flex gap-2 items-center">
        <Calendar className="text-white" />
        <h2 className="text-white  text-xl">
          Activity Heatmap - Real Daily Progress
        </h2>
      </div>

      {/* subHeading */}
      <p className="text-[#766D61] py-5">
        Shows your actual daily and extra task completions. Darker green = more
        tasks completed.
      </p>
      {/* Progress displayer */}
      <div className="grid md:gap-2 gap-1.5 md:grid-cols-52  grid-cols-15 ">
        {days.map((date, idx) => {
          const count = heatMapmap[date] || 0;
          return (
            <div
              key={idx}
              className={`h-3 w-3 ${getColor(count)} relative border border-blue-500/30 group rounded`}
            >
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black px-3 py-1 text-white text-xs rounded whitespace-nowrap z-50">
                on : {date} , taskdone : {count}
              </div>
            </div>
          );
        })}
      </div>

      {/* footer of this subcomponent */}

      <div className="flex justify-between md:p-2 gap-3">
        <p className="text-[#766D61]">No Activity</p>
        <div className="flex  flex-col md:gap-3 gap-1.5">
          <div className="flex md:gap-2  items-center justify-center">
            <div className="h-3 w-3 bg-gray-500 border border-blue-500/30 rounded "></div>
            <MoveRight className="text-white h-3 w-3" />
            <div className="h-3 w-3 bg-green-200 border border-blue-500/30 rounded "></div>
            <MoveRight className="text-white h-3 w-3" />
            <div className="h-3 w-3 bg-green-300 border border-blue-500/30 rounded "></div>
            <MoveRight className="text-white h-3 w-3" />
            <div className="h-3 w-3 bg-green-400 border border-blue-500/30 rounded "></div>
            <MoveRight className="text-white h-3 w-3" />
            <div className="h-3 w-3 bg-green-500 border border-blue-500/30 rounded "></div>
          </div>
          <p className="text-[#766D61] md:block hidden ">
            Real-time data: Only your actual completed quests and extras are
            shown
          </p>
        </div>
        <p className="text-[#766D61]">High Activity</p>
      </div>
    </div>
  );
};

export default HeatMap;
