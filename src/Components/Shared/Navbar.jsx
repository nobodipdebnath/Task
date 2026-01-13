import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    const links = <>
        <li className='text-white font-medium text-sm hover:underline '><NavLink>Home</NavLink></li>
        <li className='text-white font-medium text-sm hover:underline '><NavLink>Coach</NavLink></li>
    </>
    return (
        <div className='flex items-center justify-between manrope px-15 py-12.5'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className='flex items-center gap-8'>
                <ul className='flex items-center gap-8'>
                    {links}
                </ul>
                <div>
                    <Link to='/login' className='button'>Start Subscription</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;