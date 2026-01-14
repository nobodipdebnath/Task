import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';

const HomeLayout = () => {
    return (
        <div className='relative max-w-[1440px] mx-auto'>
            <div className='fixed z-50 top-0 left-[10%] right-[10%]'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;