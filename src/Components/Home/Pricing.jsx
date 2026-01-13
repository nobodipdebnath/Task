import React from 'react';
import pricing1 from '../../assets/images/pricing1.png'
import pricing2 from '../../assets/images/pricing2.png'
import { MdOutlineCheckCircle } from "react-icons/md";
const Pricing = () => {
    return (
        <div className='feature pt-[160px] montserrat pb-[140px]'>
            <div className='flex flex-col max-w-2xl mx-auto  justify-center items-center '>
                <p className='text-white/65 px-3 py-1.5 border rounded-full border-white/40 backdrop-blur-[25px] bg-white/10'> Bring your business to the best scale</p>
                <h1 className="text-[86px] text-center leading-[95%] text-white/80 league-gothic font-bold mt-6">Discover Products With the Best Pricing</h1>
                <p className="text-center text-xl montserrat mt-3 text-white/88">Select from best plan, ensuring a perfect match. Need more or less? Customize your subscription for a seamless fit!</p>
            </div>
            <div className='my-12 p-1 flex w-[12%] mx-auto items-center border border-white/12 rounded-xl backdrop-blur-md justify-center'>
                <button className='py-2 px-3 cursor-pointer text-black text-sm font-semibold rounded-[10px] bg-gradient-to-b from-[#DBD0A6] to-[#8E7D3F]'>Monthly</button>
                <button className='py-2 cursor-pointer px-3 text-white/80 text-sm font-semibold rounded-[10px] bg-transparent'>Anually</button>
            </div>
            <div className='flex justify-center gap-6 items-center'>
                <div className='p-10 border border-white/20 rounded-[32px] w-[360px] bg-gradient-to-b from-white/12 via-white/4 to-white/7 backdrop-blur-xl'>
                    <img src={pricing1} alt="" />
                    <p className='text-white text-2xl font-medium mt-6'>Corporate</p>
                    <p className='text-sm text-white/80'>For large teams & corporations.</p>
                    <h1 className='text-5xl text-white font-bold mt-8'>Free</h1>
                    <button className='pricing-button bg-gradient-to-b from-[#DBD0A6] to-[#8E7D3F]'>Get Started</button>
                    <hr className='text-white/16 my-10' />
                    <h4 className='text-lg text-white'>What you will get</h4>
                    <ul className='text-white/80 flex flex-col gap-4 mt-4'>
                        <li className='flex items-center gap-2 text-sm'><MdOutlineCheckCircle></MdOutlineCheckCircle><span>Advanced employee directory</span></li>
                        <li className='flex items-center gap-2 text-sm'><MdOutlineCheckCircle></MdOutlineCheckCircle><span>Project management</span></li>
                        <li className='flex items-center gap-2 text-sm'><MdOutlineCheckCircle></MdOutlineCheckCircle><span>Resource scheduling</span></li>
                        <li className='flex items-center gap-2 text-sm'><MdOutlineCheckCircle></MdOutlineCheckCircle><span>Version control</span></li>
                        <li className='flex items-center gap-2 text-sm'><MdOutlineCheckCircle></MdOutlineCheckCircle><span>Team collaboration</span></li>
                        <li className='flex items-center gap-2 text-sm'><MdOutlineCheckCircle></MdOutlineCheckCircle><span>Advanced analytics</span></li>
                    </ul>
                </div>
                <div className='p-10 border border-white/20 rounded-[32px] w-[360px] bg-gradient-to-b from-white/10 via-white/2 to-white/6 backdrop-blur-xl'>
                    <img src={pricing2} alt="" />
                    <p className='text-white text-2xl font-medium mt-6'>Optimal Performer</p>
                    <p className='text-sm text-white/80'>Best for business owners.</p>
                    <h1 className='text-5xl text-white font-bold mt-8'>$15 <span className='text-white/40 text-sm font-normal'>/ month</span></h1>
                    <button className='pricing-button bg-gradient-to-b from-white/8 to-white/0 text-white!'>Get Started</button>
                    <hr className='text-white/16 my-10' />
                    <h4 className='text-lg text-white'>What you will get</h4>
                    <ul className='text-white/80 flex flex-col gap-4 mt-4'>
                        <li className='flex items-center gap-2 text-sm'><MdOutlineCheckCircle></MdOutlineCheckCircle><span>Customizable employee directory</span></li>
                        <li className='flex items-center gap-2 text-sm'><MdOutlineCheckCircle></MdOutlineCheckCircle><span>Client project management</span></li>
                        <li className='flex items-center gap-2 text-sm'><MdOutlineCheckCircle></MdOutlineCheckCircle><span>Client meeting schedule</span></li>
                        <li className='flex items-center gap-2 text-sm'><MdOutlineCheckCircle></MdOutlineCheckCircle><span>Compliance tracking</span></li>
                        <li className='flex items-center gap-2 text-sm'><MdOutlineCheckCircle></MdOutlineCheckCircle><span>Client communication</span></li>
                        <li className='flex items-center gap-2 text-sm'><MdOutlineCheckCircle></MdOutlineCheckCircle><span>Create custom reports tailored</span></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Pricing;