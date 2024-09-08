'use client'

import { IoHomeSharp } from "react-icons/io5";
import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { ToggleAdminSidebar } from '@/states/RTK/mainSlicer';
import Link from "next/link";

const Header = () => {

    const dispatch = useDispatch();
    const handleToggleSidebar = () => {
        dispatch(ToggleAdminSidebar());
    };

    return (
        <div className="w-full z-20 fixed top-0 bg-white dark:bg-black shadow-md">
            <div className='w-full'>
                <div className='flex justify-start px-4 text-center items-center py-6 space-x-4 bg-blue-600'>
                    <IoMenuSharp onClick={handleToggleSidebar} className='text-white cursor-pointer text-4xl' />
                    <Link href={'/'}>
                        <IoHomeSharp className="text-2xl text-white" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
