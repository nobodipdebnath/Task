import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';

const HomeLayout = () => {
    return (
        <div className='relative xl:max-w-full lg:max-w-[1440px] mx-auto'>
            <div className='fixed z-50 top-0 left-[5%] right-[5%]'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;