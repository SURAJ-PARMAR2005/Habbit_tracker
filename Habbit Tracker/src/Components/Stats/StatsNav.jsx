import { Link } from "react-router-dom"
function AnalyticsNav() {

  return (
    <div className="p-6 shadow-md shadow-blue-500/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        <div className="my-3 border rounded px-3 py-1 cursor-pointer hover:bg-gray-600 border-blue-500/30 items-center justify-center flex ">
            <Link className="text-white" to='/' >Dashboard</Link>
        </div>
        <div className=" md:flex flex-col items-center hidden  justify-center ">
            <h1 className="text-white font-extrabold text-2xl">CHARACTER STATS</h1>
            <h3 className="text-[#54EAFD]">Your journey of continuous growth and improvement</h3>
        </div>
        <div className="my-3 border rounded px-3 py-1 cursor-pointer hover:bg-gray-600 border-blue-500/30 items-center justify-center flex ">
            <Link className="text-white" to='/analytics'>Analytics</Link>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsNav
