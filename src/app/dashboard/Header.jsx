'use client'

import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { ToggleAdminSidebar } from '@/states/RTK/mainSlicer';

const Header = () => {

    const dispatch = useDispatch();
    const handleToggleSidebar = () => {
        dispatch(ToggleAdminSidebar());
    };

    return (
        <div className="w-full z-20 fixed top-0 bg-white dark:bg-black shadow-md">
            <div className='w-full'>
                <div className='flex justify-start text-center items-center py-6 bg-blue-600'>
                    <IoMenuSharp onClick={handleToggleSidebar} className='text-white cursor-pointer text-4xl' />
                    <h1 className='text-white'>Header</h1>
                </div>
            </div>
        </div>
    )
}

export default Header