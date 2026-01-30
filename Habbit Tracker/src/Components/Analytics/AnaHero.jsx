import React from "react";
import HeatMap from "./HeatMap";
import Streak from "./Streak";
import Achievements from "./Achievements";

const AnaHero = ({
  heat,
  streak,
  achievement,
  setHeatMap,
  setStreak,
  setAchivement,
}) => {
  return (
    <div className="p-6 w-full ">
      {/* switcher */}
      <div className="flex items-center justify-center-safe gap-3 text-white">
        <div
          className="flex items-center justify-center p-2 rounded bg-gray-500/30 cursor-pointer"
          onClick={() => {
            if (heat) {
              setHeatMap(false);
            } else setHeatMap(true);
          }}
        >
          <h2>Activity Heatmap</h2>
        </div>
        <div className="flex items-center justify-center p-2 rounded  bg-gray-500/30 cursor-pointer "
         onClick={() => {
            if (streak) {
              setStreak(false);
            } else setStreak(true);
          }}
        >
          <h2>Streaks & Goals</h2>
        </div>
        <div className="flex items-center justify-center p-2 rounded bg-gray-500/30 cursor-pointer"
         onClick={() => {
            if (achievement) {
              setAchivement(false);
            } else setAchivement(true);
          }}>
          <h2>Achievements</h2>
        </div>
      </div>
      {/* heatMap component child */}
      {heat && <HeatMap />}
       {streak &&
         <Streak />
    }
    {achievement && <Achievements />}
    </div>
   
  );
};

export default AnaHero;
