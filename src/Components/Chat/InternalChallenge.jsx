import React from 'react';
import { Link } from 'react-router';

const InternalChallenge = () => {
    return (
        <div className='flex items-center h-[90vh] justify-center '>
            <div className='w-2xl'>
                <h1 className='text-[#FAFAFD] text-[64px] text-center league-gothic'>Internal Challenge</h1>
                <Link to='/chat/internalChat'>
                    <button className='w-full py-6 mt-6 bg-[#2D2D2D] cursor-pointer border border-primary1 rounded-full text-xl text-primary1'>Click To Begin Processing Your Internal Challenge</button>
                </Link>
            </div>
        </div>
    );
};

export default InternalChallenge;