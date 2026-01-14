import React from 'react';
import { FaArrowUp } from 'react-icons/fa6';
import { IoAttach } from 'react-icons/io5';
import { Link } from 'react-router';

const Journal = () => {
    return (
        <div>
            <div className='chat px-[100px] pb-[120px]'>
                <h1 className='text-white text-center text-[96px] league-gothic'>Journal</h1>
                <h3 className='text-white text-center text-2xl mt-[100px] '>Choose Journal Category</h3>
                <div className='mt-5 w-full flex flex-col gap-2.5'>
                    <Link to='/chat/challenge'>
                        <button className='p-6 w-full backdrop-blur-1px bg-[#413f3fb7] border-primary1 rounded-md border text-[#FAFAFD] text-xl cursor-pointer hover:bg-[#756F59] duration-500'>Personal Challenge</button>
                    </Link>
                    <Link to='/chat/win'>
                        <button className='p-6 w-full backdrop-blur-1px bg-[#413f3fb7] border-primary1 rounded-md border text-[#FAFAFD] text-xl cursor-pointer hover:bg-[#756F59] duration-500'>Personal Win</button>
                    </Link>
                    <Link to='/chat/professionalChallenge'>
                        <button className='p-6 w-full backdrop-blur-1px bg-[#413f3fb7] border-primary1 rounded-md border text-[#FAFAFD] text-xl cursor-pointer hover:bg-[#756F59] duration-500'>Professional Challenge</button>
                    </Link>
                    <Link to='/chat/professionalWin'>
                        <button className='p-6 w-full backdrop-blur-1px bg-[#413f3fb7] border-primary1 rounded-md border text-[#FAFAFD] text-xl cursor-pointer hover:bg-[#756F59] duration-500'>Professional Win</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Journal;