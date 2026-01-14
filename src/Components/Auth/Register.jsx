import React from 'react';
import { FaEye, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineMail } from 'react-icons/md';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='h-screen inter relative'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-10 py-14 border border-primary1 rounded-[10px] flex flex-col items-center justify-center'>
                        <h1 className='inter text-4xl font-semibold text-[#FAFAFD]'>Sign Up</h1>
                        <p className='text-base text-[#FAFAFD] mt-3'>You have an already  account? <Link to='/login' className='text-sm text-[#999999] underline cursor-pointer'>Sign up</Link></p>
                        <button class="px-[160px] py-3 rounded-[10px] font-semibold cursor-pointer mt-10 bg-[#C5BB95] text-[#2D2D2D] flex items-center gap-2 w-full border-[#e5e5e5]">
                            <FcGoogle></FcGoogle>
                            <span>Login with Google</span>
                        </button>
                        <div className='flex items-center gap-3 mt-8'>
                            <div className='h-[1px] w-[210px] bg-[#C5BB95]'></div>
                            <span className='text-[#FAFAFD]'>or</span>
                            <div className='h-[1px] w-[210px] bg-[#C5BB95]'></div>
                        </div>
                        <div className='mt-10 relative w-full'>
                            <input type="text" className='py-5 text-white px-10 outline-none border rounded-[10px] w-full border-[#C5BB95] placeholder:text-[#FAFAFD]' placeholder='Email' />
                            <div className='absolute left-2 top-5 '>
                                <MdOutlineMail className='text-white text-2xl '></MdOutlineMail>
                            </div>
                        </div>
                        <div className='mt-10 relative w-full'>
                            <input type="password" className='py-5 text-white px-10 outline-none border rounded-[10px] w-full border-[#C5BB95] placeholder:text-[#FAFAFD]' placeholder='Password' />
                            <div className='absolute left-2 top-5.5 '>
                                <FaLock className='text-white text-xl '></FaLock>
                            </div>
                            <div className='absolute right-5 top-6 cursor-pointer '>
                                <FaEye className='text-white text-xl '></FaEye>
                            </div>
                        </div>
                        <div className='mt-4.5 relative w-full'>
                            <input type="password" className='py-5 text-white px-10 outline-none border rounded-[10px] w-full border-[#C5BB95] placeholder:text-[#FAFAFD]' placeholder='Confirm Password' />
                            <div className='absolute left-2 top-5.5 '>
                                <FaLock className='text-white text-xl '></FaLock>
                            </div>
                            <div className='absolute right-5 top-6 cursor-pointer '>
                                <FaEye className='text-white text-xl '></FaEye>
                            </div>
                        </div>
                        <button class="w-full py-3 rounded-[10px] font-semibold cursor-pointer mt-10 bg-[#C5BB95] text-[#2D2D2D]  border-[#e5e5e5]">
                            Sign Up
                        </button>
                        <p className='text-sm text-[#999999] mt-10'>Privacy Policy and Terms of Service</p>
                    </div>
                </div>
    );
};

export default Register;