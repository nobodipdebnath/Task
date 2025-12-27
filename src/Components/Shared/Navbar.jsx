import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <li className='text-base font-semibold'><NavLink to='/'>Home</NavLink></li>
        <li className='text-base font-semibold'><NavLink to='/about'>About</NavLink></li>
        <li className='text-base font-semibold'><NavLink to='/services'>Services</NavLink></li>
        <li className='text-base font-semibold'><NavLink to='/blogs'>Blog</NavLink></li>
        <li className='text-base font-semibold'><NavLink to='/contact'>Contact</NavLink></li>
    </>
    return (
        <div className='flex justify-between items-center py-6 container mx-auto'>
            <div>
                <h2 className='text-5xl font-bold text-black'>Logo</h2>
            </div>
            <ul className='flex items-center gap-8'>
                {links}
            </ul>
            <div>
                <button className='py-3 px-10 border border-green-400 rounded-lg font-semibold text-black hover:text-white hover:bg-green-400 duration-500'>Join Us</button>
            </div>
        </div>
    );
};

export default Navbar;