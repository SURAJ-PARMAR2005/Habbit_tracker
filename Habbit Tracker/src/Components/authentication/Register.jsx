import {useState} from 'react'
import {usePlayer} from "../../Context/usePlayer.jsx"
import { X } from 'lucide-react';
import axios from "axios";
const Register = () => {
const {isRegistered,setIsRegistered,setIsLogin,setValidUser} = usePlayer();

const [formData,setFormData] = useState({
    username : "",
    email : "",
    password: "",
    confirmPassword:"",
})
const handleChanges = (e) => {
    setFormData({
        ...formData,
       [ e.target.name] : e.target.value,
})
}
const submitHandler = async (e) => {
    e.preventDefault();
    try {
    await axios.post("http://localhost:3000/api/auth/register",{
    username: formData.username,
    email: formData.email,
    password: formData.password
   },{ withCredentials: true });
   alert("Player Awakened successfully!");  
   setIsRegistered(false);
   setValidUser(true);
    } catch (error) {
        console.log(error);
        alert("error occured while registering please try again");
    }
}

  return (
    <div className={`fixed inset-0  backdrop-blur-md flex overflow-y-auto justify-center  p-8 w-full z-50 ${isRegistered?"flex":"hidden"} `}>
      <div className='h-210 w-97.5  bg-black  rounded px-3 py-9 gap-8 flex flex-col items-center  '>

            <div className='flex w-full items-center justify-end-safe pr-3'>
                <X  className='text-[#00F2FF] hover:bg-gray-100 hover:text-black cursor-pointer' onClick={() => setIsRegistered(false)} />
            </div>

            <div className='w-full min-h-screen flex flex-col items-center justify-items-start gap-2 '>
                <div className='border-[#00F2FF] rounded h-15 w-60  border flex flex-col py-1 px-4 items-center gap-1'>
                    <h2 className='text-[#00F2FF] text-nowrap text-md'>E-RANK PLAYER</h2>
                    <p className='text-[#00F2FF] text-md'>[NEWBIE]</p>
                </div>

                <div className='w-full p-8 gap-8 flex flex-col rounded items-center h-full border-[#00F2FF] border'>
                    <div className=' w-full flex flex-col gap-1.5 items-center border-b border-[#00f2ff48]'>
                        <div className='flex gap-1 '>
                            <h1 className='text-white font-extrabold text-xl'>NEW</h1>
                            <h1 className='text-[#00F2FF] font-extrabold text-xl'>AWAKENING</h1>
                        </div>
                        <p className='text-gray-500 text-nowrap text-sm'>SYSTEM REGISTERATION PROTOCOL :</p>
                        <p className='text-gray-500 text-nowrap text-sm'> V4.0.2</p>
                    </div>
                    <form onSubmit={submitHandler} className='flex flex-col gap-3'>
                        <div className='flex flex-col items-start gap-1 justify-items-start'>
                            <h4 className='text-[#00F2FF] text-sm'>USERNAME</h4>
                            <input type="text" name='username' placeholder='ENTER_NAME' value={formData.username} onChange={handleChanges} className='text-[#00f2ff86] px-3 py-2 border  rounded border[#00F2FF]'  />
                        </div>

                         <div className='flex flex-col items-start gap-1 justify-items-start'>
                            <h4 className='text-[#00F2FF] text-sm'>EMAIL ADDRESS</h4>
                            <input type="email" name='email' placeholder='ENTER_NAME'  value={formData.email} onChange={handleChanges} className='text-[#00f2ff86] px-3 py-2 border  rounded border[#00F2FF]'  />
                        </div>

                         <div className='flex flex-col items-start gap-1 justify-items-start'>
                            <h4 className='text-[#00F2FF] text-sm'>SECURITY_KEY</h4>
                            <input type="password" name='password' placeholder='SECURITY_KEY' value={formData.password} onChange={handleChanges} className='text-[#00f2ff86] px-3 py-2 rounded bg-transparent border border-[#00F2FF]'  />
                        </div>

                         <div className='flex flex-col items-start gap-1 justify-items-start'>
                            <h4 className='text-[#00F2FF] text-sm'>VERIFY KEY</h4>
                            <input type="password" name='confirmPassword' placeholder='VERIFY_KEY' value={formData.confirmPassword} onChange={handleChanges} className='text-[#00f2ff86] px-3 py-2 border rounded  border-[#00F2FF] bg-transparent'  />
                        </div>
                         <button type='submit' className=' mt-8 py-4 w-full shadow-xl cursor-pointer shadow-cyan-400 rounded bg-[#00f2ffc0] border'>
                        <h2 className='text-black font-bold '> AWAKEN</h2>
                    </button>
                    </form>

                 
                </div>
            </div>

            <div className='w-full flex gap-2 items-center mt-3 justify-center' onClick={() => {
                setIsRegistered(false);
                setIsLogin(true);
            }}>
                <p className='text-gray-400 text-sm'>Already a player ?</p>
                <p className='text-[#00F2FF] text-sm font-medium cursor-pointer'>LOG IN</p>
            </div>
      </div>
    </div>
  )
}

export default Register
