import {useState} from "react";
import { usePlayer } from "../../Context/usePlayer";
import { X } from "lucide-react";
import axios  from "axios"
const Login = () => {
  const {isLogin,setIsLogin,setIsRegistered,setValidUser} = usePlayer();
  const [formData,setFormData] = useState({
    username : "",
    password: "",
  })

  const handleChanges = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value,
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:3000/api/auth/login",{
          username:formData.username,
          password : formData.password,
        },{ withCredentials: true });

        // alert("Welcome Back Player!");
        setIsLogin(false);
        setValidUser(true);   
    } catch (error) {
      console.log(error);
      alert("error occured while logginin in!");
    }
  }

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
          <form onSubmit={submitHandler} className="flex flex-col gap-3">
            <div className="flex flex-col gap-2.5 ">
              <h2 className="text-[#00F2FF]">Player Id</h2>

              <input
                type="text"
                name="username" 
                value={formData.username}
                onChange={handleChanges}
                placeholder="S-RANK HUNTER"
                className="border p-3 rounded border-[#00d1ff] text-gray-400"
                required
              />
            </div>

            <div className="flex flex-col gap-2.5">
              <h2 className="text-[#00F2FF]">Access Key</h2>

              <input
                type="password"
                name="password" 
                value={formData.password}
                onChange={handleChanges}
                placeholder="********"
                className="border p-3 rounded border-[#00d1ff] text-gray-400"
                required
              />
            </div>

            <p className="underline text-[#00f2ff77] text-sm cursor-pointer" onClick={() => {setIsRegistered(true);
            setIsLogin(false);

            }}>NEVER BEEN HERE BEFORE ?</p>

          <button
            type='submit'
            className="p-3 bg-[#00F2FF] rounded  cursor-pointer "
          >
            <p className="text-black font-bold">Enter the Dungen</p>
          </button>
          </form>


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
