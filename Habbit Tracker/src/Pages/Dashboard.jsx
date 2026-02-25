import React from "react";
import DashNav from "../Components/Dashboard/DashNav";
import DashHero from "../Components/Dashboard/DashHero";
import DashQuest from "../Components/Dashboard/DashQuest";
import DashFooter from "../Components/Dashboard/DashFooter";
import Login from "../Components/authentication/Login";
import Register from "../Components/authentication/Register";




const Dashboard = () => {
  return (
    <div className="bg-[#181A1B] min-h-screen min-w-screen overflow-x-hidden relative ">
      <Register />
      <Login className="block z-1000" />
      <DashNav  />
      <DashHero />
      <DashQuest />
      <DashFooter />
    </div>
  );
};

export default Dashboard;
