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


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

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
                        <Sheet>
                            <SheetTrigger asChild>
                                <IoMenuSharp onClick={handleToggleSidebar} className='cursor-pointer text-4xl flex md:hidden text-green-500' />
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Edit profile</SheetTitle>
                                    <SheetDescription>
                                        Make changes to your profile here. Click save when you're done.
                                    </SheetDescription>
                                </SheetHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-right">
                                            Name
                                        </Label>
                                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="username" className="text-right">
                                            Username
                                        </Label>
                                        <Input id="username" value="@peduarte" className="col-span-3" />
                                    </div>
                                </div>
                                <SheetFooter>
                                    <SheetClose asChild>
                                        <Button type="submit">Save changes</Button>
                                    </SheetClose>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
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
