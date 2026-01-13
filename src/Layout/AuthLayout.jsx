import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='h-screen feature'>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;