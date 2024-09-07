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
        <div className='w-full'>
            <div className='flex justify-center text-center items-center py-6 bg-blue-600'>
                <IoMenuSharp onClick={handleToggleSidebar} className='text-white text-4xl' />
                <h1 className='text-white'>Header</h1>
            </div>
        </div>
    )
}

export default Header