import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/images/logo.png'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const links = <>
        <li className='text-white font-medium text-sm hover:underline '><NavLink>Home</NavLink></li>
        <li className='text-white font-medium text-sm hover:underline '><NavLink>Coach</NavLink></li>
    </>
    return (
        <div className='flex items-center justify-between manrope md:px-15 md:py-6 py-4 px-4 lg:backdrop-blur-[2px] backdrop-blur-2xl'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className='hidden md:block'>
                <div className='flex items-center gap-8'>
                    <ul className='flex items-center gap-8'>
                        {links}
                    </ul>
                    <div>
                        <Link to='/login' className='button'>Start Subscription</Link>
                    </div>
                </div>
            </div>
            <div className='md:hidden'>
                <FaBars className='text-3xl text-white'></FaBars>
            </div>
        </div>
    );
};

export default Navbar;