import React from 'react';
import { FaArrowUp } from "react-icons/fa6";
import { IoAttach } from "react-icons/io5";

const StartChat = () => {
    return (
        <div className='chat px-[100px] pb-[120px]'>
            <h1 className='text-white text-center text-[96px] league-gothic'>Start a New Chat</h1>
            <h3 className='text-white text-center text-5xl mt-[400px] league-gothic'>What can I help with?</h3>
            <div className='mt-6 relative'>
                <input className='w-full py-6 px-7 bg-[#2D2A2B] border border-[#2D2A2B] rounded-[10px] placeholder:text-[#FAFAFD] placeholder:text-xl placeholder:font-medium outline-none text-white placeholder:montserrat' placeholder='Message ...' type="text" />
                <div className='flex items-center gap-2 absolute top-4 right-4'>
                    <button className='text-primary1  cursor-pointer text-2xl'><IoAttach></IoAttach></button>
                    <button className='py-3 px-3.5 cursor-pointer  bg-primary1 rounded-lg text-black'><FaArrowUp></FaArrowUp></button>
                </div>
            </div>
        </div>
    );
};

export default StartChat;