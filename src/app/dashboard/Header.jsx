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
        <div className="w-full z-20 fixed top-0 shadow-md">
            <div className='w-full'>
                <div className='flex justify-start px-4 text-center items-center py-6 space-x-4 bg-gray-100'>
                    <IoMenuSharp onClick={handleToggleSidebar} className='cursor-pointer text-4xl text-green-500' />
                    <Link href={'/'}>
                        <IoHomeSharp className="text-2xl text-green-500" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
