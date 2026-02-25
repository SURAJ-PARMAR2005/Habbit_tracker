import React from "react";
import { usePlayer } from "../../Context/usePlayer";
import { X } from "lucide-react";

const Login = () => {
  const {isLogin,setIsLogin,setIsRegistered} = usePlayer();
  return (
    //overlay
    <div className={`fixed inset-0 backdrop-blur-md flex overflow-y-auto justify-center h-screen w-full z-50 ${isLogin?"flex":"hidden"} `}>

      {/*modal box */}

      <div className="h-170 w-97.5 bg-black rounded py-8  flex flex-col gap-3 px-6 ">
        <div className="h-1 w-full flex items-end-safe justify-end ">
          <X className="text-[#00F2FF] hover:bg-gray-100 hover:text-black cursor-pointer  " onClick={() => setIsLogin(false)} />
        </div>
        {/* heading */}
        <div className="flex flex-col gap-3 items-center justify-center px-3 pt-7 ">
          <h1 className="text-[#00F2FF] font-bold text-3xl drop-shadow-lg drop-shadow-blue-400">
            SYSTEM LOGIN
          </h1>
          <div className="bg-[#00F2FF] h-1 w-25"></div>
          <p className="text-[#6B7280]">Awaiting Player Identification...</p>
        </div>

        {/* form */}

        <div className="flex flex-col gap-6 px-8 pt-8 pb-[23.25px] border-[#00d1ff] border rounded shadow shadow-blue-300">
          <form action="submit" className="flex flex-col gap-3">
            <div className="flex flex-col gap-2.5 ">
              <h2 className="text-[#00F2FF]">Player Id</h2>

              <input
                type="text"
                placeholder="S-RANK HUNTER"
                className="border p-3 rounded border-[#00d1ff]"
                required
              />
            </div>

            <div className="flex flex-col gap-2.5">
              <h2 className="text-[#00F2FF]">Access Key</h2>

              <input
                type="password"
                placeholder="********"
                className="border p-3 rounded border-[#00d1ff]"
                required
              />
            </div>

            <p className="underline text-[#00f2ff77] text-sm cursor-pointer" onClick={() => {setIsRegistered(true);
            setIsLogin(false);

            }}>NEVER BEEN HERE BEFORE ?</p>
          </form>

          <button
            type='submit'
            className="p-3 bg-[#00F2FF] rounded  cursor-pointer "
          >
            <p className="text-black font-bold">Enter the Dungen</p>
          </button>

          <div className="h-px mt-2.5 w-full bg-[#00f2ff25]"></div>
           <div className="flex items-center justify-between">
          <div className="flex gap-1">
            <p className="text-[#00f2ff77] text-sm font-extralight">STATUS:</p>
            <p className="text-[#ffffff72] text-sm font-extralight">STANDBY</p>
          </div>
          <div className="flex gap-1">
            <p className="text-[#00f2ff77] text-sm font-extralight">LVL:</p>
            <p className="text-[#ffffff72] text-sm font-extralight">??</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
