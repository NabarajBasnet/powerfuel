'use client'

import { IoHomeSharp } from "react-icons/io5";
import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { ToggleAdminSidebar } from '@/states/RTK/mainSlicer';
import Link from "next/link";
import { IoMdSettings } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { RiTimer2Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";

const Header = () => {

    const toggleAdminSidebar = useSelector(state => state.rtkreducers.toggleAdminSidebar)
    const dispatch = useDispatch();
    const handleToggleSidebar = () => {
        dispatch(ToggleAdminSidebar());
    };

    return (
        <div className="w-full">
            <div className='w-full bg-white shadow-md'>
                <div className='flex justify-between px-4 text-center items-center py-7'>
                    <div className="flex justify-start items-center space-x-4">
                        <IoMenuSharp onClick={handleToggleSidebar} className='cursor-pointer text-4xl flex md:hidden text-green-500' />
                        <FaChevronCircleLeft onClick={handleToggleSidebar} className={`cursor-pointer transition-all duration-500 text-2xl ${toggleAdminSidebar ? 'rotate-180' : ''} hidden md:flex text-green-500`} />
                        <Link href={'/'}>
                            <IoHomeSharp className="text-2xl text-green-500" />
                        </Link>
                    </div>
                    <div></div>
                    <div className="flex justify-start items-center space-x-4">
                        <IoMdSettings className="text-2xl text-green-500" />
                        <IoMdNotifications className="text-2xl text-green-500" />
                        <RiTimer2Fill className="text-2xl text-green-500" />
                        <FaUserCircle className="text-2xl text-green-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
