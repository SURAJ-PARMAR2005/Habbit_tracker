import React from 'react'
import {usePlayer} from "../../Context/usePlayer.jsx"
const Register = () => {
    const {isRegistered} = usePlayer();
  return (
    <div className={`fixed inset-0 backdrop-blur-md flex items-center justify-center p-3 min-h-screen w-full z-50 ${isRegistered?"block":"hidden"} `}>
      <div className='h-screen w-97.5 bg-black rounded px-3 py-9 flex flex-col items-center  '>
            <div className='w-full h-full flex flex-col items-center justify-items-start gap-2 '>
                <div className='border-[#00d0ffd8] h-15 w-60  border flex flex-col py-1 px-4 items-center gap-1'>
                    <h2 className='text-[#00F2FF] text-nowrap text-md'>E-RANK PLAYER</h2>
                    <p className='text-[#00F2FF] text-md'>[NEWBIE]</p>
                </div>

                <div className='w-full rounded p-6 h-full border-[#00d1ff] border'>
                    <div className=' p-3 flex flex-col gap-1.5 items-center border-b border-[#00f2ff48]'>
                        <div className='flex gap-1 '>
                            <h1 className='text-white font-extrabold text-xl'>NEW</h1>
                            <h1 className='text-[#00F2FF] font-extrabold text-xl'>AWAKENING</h1>
                        </div>
                        <p className='text-gray-500 text-nowrap text-sm'>SYSTEM REGISTERATION PROTOCOL :</p>
                        <p className='text-gray-500 text-nowrap text-sm'> V4.0.2</p>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Register
