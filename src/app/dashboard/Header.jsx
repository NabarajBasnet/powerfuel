'use client'

import { IoLogOutSharp } from "react-icons/io5";
import { RiDashboard3Fill } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";
import { FaCartArrowDown } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";
import { BiSolidBookContent } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { IoPulseOutline } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

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
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/AdminSidebarAccordion/AdminAccordion"


const Header = () => {

    const toggleAdminSidebar = useSelector(state => state.rtkreducers.toggleAdminSidebar)
    const dispatch = useDispatch();
    const handleToggleSidebar = () => {
        dispatch(ToggleAdminSidebar());
    };

    return (
        <div className="w-full">
            <div className='w-full z-50 bg-white shadow-lg'>
                <div className='flex justify-between px-4 text-center items-center py-7'>
                    <div className="flex justify-start items-center space-x-4">
                        <Sheet>
                            <SheetTrigger asChild>
                                <IoMenuSharp onClick={handleToggleSidebar} className='cursor-pointer text-4xl flex md:hidden text-green-500' />
                            </SheetTrigger>
                            <SheetContent className="min-h-screen overflow-y-auto">
                                <SheetHeader>
                                    <SheetTitle>Dashboard Overview</SheetTitle>
                                    <SheetDescription>
                                        <div className="flex-grow overflow-auto">

                                            <Link href={'/dashboard'} className="flex items-center">
                                                <RiDashboard3Fill className="text-3xl text-green-500" />
                                                <h1 className="mx-3 font-semibold text-sm">Dashboard</h1>
                                            </Link>

                                            <div>
                                                <Accordion type="single" collapsible className="w-full">
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <AiOutlineProduct className="text-3xl text-green-500" />
                                                                <h1 className="mx-3 font-semibold text-md">Product Management</h1>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="flex flex-col">
                                                                <Link href={'/dashboard'}>Dashboard</Link>
                                                                <Link href={'/dashboard'}>Dashboard Management</Link>
                                                                <Link href={'/dashboard'}>Dashboard Overview</Link>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>

                                            <div>
                                                <Accordion type="single" collapsible className="w-full">
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <FaCartArrowDown className="text-3xl text-green-500" />
                                                                <h1 className="mx-3 font-semibold text-md">Order Management</h1>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="flex flex-col">
                                                                <Link href={'/dashboard'}>Dashboard</Link>
                                                                <Link href={'/dashboard'}>Dashboard Management</Link>
                                                                <Link href={'/dashboard'}>Dashboard Overview</Link>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>

                                            <div>
                                                <Accordion type="single" collapsible className="w-full">
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <RiCustomerServiceFill className="text-3xl text-green-500" />
                                                                <h1 className="mx-3 font-semibold text-md">Customer Management</h1>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="flex flex-col">
                                                                <Link href={'/dashboard'}>Dashboard</Link>
                                                                <Link href={'/dashboard'}>Dashboard Management</Link>
                                                                <Link href={'/dashboard'}>Dashboard Overview</Link>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>

                                            <div>
                                                <Accordion type="single" collapsible className="w-full">
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <BsFillFileBarGraphFill className="text-3xl text-green-500" />
                                                                <h1 className="mx-3 font-semibold text-md">Sales & Promotions</h1>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="flex flex-col">
                                                                <Link href={'/dashboard'}>Dashboard</Link>
                                                                <Link href={'/dashboard'}>Dashboard Management</Link>
                                                                <Link href={'/dashboard'}>Dashboard Overview</Link>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>

                                            <div>
                                                <Accordion type="single" collapsible className="w-full">
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <FaShippingFast className="text-3xl text-green-500" />
                                                                <h1 className="mx-3 font-semibold text-md">Shipping & Delivery</h1>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="flex flex-col">
                                                                <Link href={'/dashboard'}>Dashboard</Link>
                                                                <Link href={'/dashboard'}>Dashboard Management</Link>
                                                                <Link href={'/dashboard'}>Dashboard Overview</Link>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>

                                            <div>
                                                <Accordion type="single" collapsible className="w-full">
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <MdPayments className="text-3xl text-green-500" />
                                                                <h1 className="mx-3 font-semibold text-md">Payments & Transactions</h1>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="flex flex-col">
                                                                <Link href={'/dashboard'}>Dashboard</Link>
                                                                <Link href={'/dashboard'}>Dashboard Management</Link>
                                                                <Link href={'/dashboard'}>Dashboard Overview</Link>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>

                                            <div>
                                                <Accordion type="single" collapsible className="w-full">
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <HiDocumentReport className="text-3xl text-green-500" />
                                                                <h1 className="mx-3 font-semibold text-md">Reports & Analytics</h1>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="flex flex-col">
                                                                <Link href={'/dashboard'}>Dashboard</Link>
                                                                <Link href={'/dashboard'}>Dashboard Management</Link>
                                                                <Link href={'/dashboard'}>Dashboard Overview</Link>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>

                                            <div>
                                                <Accordion type="single" collapsible className="w-full">
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <BiSolidBookContent className="text-3xl text-green-500" />
                                                                <h1 className="mx-3 font-semibold text-md">Content Management</h1>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="flex flex-col">
                                                                <Link href={'/dashboard'}>Dashboard</Link>
                                                                <Link href={'/dashboard'}>Dashboard Management</Link>
                                                                <Link href={'/dashboard'}>Dashboard Overview</Link>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>

                                            <div>
                                                <Accordion type="single" collapsible className="w-full">
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <FaUsers className="text-3xl text-green-500" />
                                                                <h1 className="mx-3 font-semibold text-md">User & Role Management</h1>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="flex flex-col">
                                                                <Link href={'/dashboard'}>Dashboard</Link>
                                                                <Link href={'/dashboard'}>Dashboard Management</Link>
                                                                <Link href={'/dashboard'}>Dashboard Overview</Link>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>

                                            <div>
                                                <Accordion type="single" collapsible className="w-full">
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <IoPulseOutline className="text-3xl text-green-500" />
                                                                <h1 className="mx-3 font-semibold text-md">Marketing & SEO</h1>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="flex flex-col">
                                                                <Link href={'/dashboard'}>Dashboard</Link>
                                                                <Link href={'/dashboard'}>Dashboard Management</Link>
                                                                <Link href={'/dashboard'}>Dashboard Overview</Link>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>

                                            <div>
                                                <Accordion type="single" collapsible className="w-full">
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <IoIosSettings className="text-3xl text-green-500" />
                                                                <h1 className="mx-3 font-semibold text-md">Settings & Configuration</h1>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="flex flex-col">
                                                                <Link href={'/dashboard'}>Dashboard</Link>
                                                                <Link href={'/dashboard'}>Dashboard Management</Link>
                                                                <Link href={'/dashboard'}>Dashboard Overview</Link>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>

                                            <div>
                                                <Accordion type="single" collapsible className="w-full">
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <IoIosSettings className="text-3xl text-green-500" />
                                                                <h1 className="mx-3 font-semibold text-md">Settings & Configuration</h1>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="flex flex-col">
                                                                <Link href={'/dashboard'}>Dashboard</Link>
                                                                <Link href={'/dashboard'}>Dashboard Management</Link>
                                                                <Link href={'/dashboard'}>Dashboard Overview</Link>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>

                                            <div>
                                                <Accordion type="single" collapsible className="w-full">
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <IoIosSettings className="text-3xl text-green-500" />
                                                                <h1 className="mx-3 font-semibold text-md">Settings & Configuration</h1>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="flex flex-col">
                                                                <Link href={'/dashboard'}>Dashboard</Link>
                                                                <Link href={'/dashboard'}>Dashboard Management</Link>
                                                                <Link href={'/dashboard'}>Dashboard Overview</Link>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>

                                            <div>
                                                <Accordion type="single" collapsible className="w-full">
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <IoIosSettings className="text-3xl text-green-500" />
                                                                <h1 className="mx-3 font-semibold text-md">Settings & Configuration</h1>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="flex flex-col">
                                                                <Link href={'/dashboard'}>Dashboard</Link>
                                                                <Link href={'/dashboard'}>Dashboard Management</Link>
                                                                <Link href={'/dashboard'}>Dashboard Overview</Link>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>

                                            <div>
                                                <Accordion type="single" collapsible className="w-full">
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <IoIosSettings className="text-3xl text-green-500" />
                                                                <h1 className="mx-3 font-semibold text-md">Settings & Configuration</h1>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="flex flex-col">
                                                                <Link href={'/dashboard'}>Dashboard</Link>
                                                                <Link href={'/dashboard'}>Dashboard Management</Link>
                                                                <Link href={'/dashboard'}>Dashboard Overview</Link>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>

                                            <div>
                                                <Accordion type="single" collapsible className="w-full">
                                                    <AccordionItem value="item-1">
                                                        <AccordionTrigger>
                                                            <div className="flex items-center">
                                                                <IoIosSettings className="text-3xl text-green-500" />
                                                                <h1 className="mx-3 font-semibold text-md">Settings & Configuration</h1>
                                                            </div>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="flex flex-col">
                                                                <Link href={'/dashboard'}>Dashboard</Link>
                                                                <Link href={'/dashboard'}>Dashboard Management</Link>
                                                                <Link href={'/dashboard'}>Dashboard Overview</Link>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Accordion>
                                            </div>

                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                                <SheetFooter>
                                    <SheetClose asChild>
                                    </SheetClose>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                        <FaChevronCircleLeft onClick={handleToggleSidebar} className={`cursor-pointer transition-all duration-500 text-2xl ${toggleAdminSidebar ? '' : 'rotate-180'} hidden md:flex text-green-500`} />
                        <Link href={'/'} className="flex items-center space-x-4">
                            <IoHomeSharp className="text-2xl text-green-500" />
                            <FaUserCircle className="text-2xl text-green-500" />
                        </Link>
                    </div>
                    <div>
                        Hi
                    </div>
                    <div className="flex justify-start items-center space-x-4">
                        <IoLogOutSharp className="text-green-500 text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
