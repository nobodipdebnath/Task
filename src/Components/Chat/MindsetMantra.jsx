import React from 'react';
import { Link } from 'react-router';

const MindsetMantra = () => {
    return (
        <div className='flex items-center h-[80vh] justify-center '>
            <div className='w-2xl'>
                <h1 className='text-[#FAFAFD] text-[64px] text-center league-gothic'>Mindset Mantra</h1>
                <Link>
                    <button className='w-full py-6 mt-6 bg-[#2D2D2D] cursor-pointer border border-primary1 rounded-full text-xl text-primary1'>Start Mindset Mantra</button>
                </Link>
            </div>
        </div>
    );
};

export default MindsetMantra;