'use client'

import { MdOutlineShoppingCart } from "react-icons/md";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RiDashboard2Line } from "react-icons/ri";
import Link from 'next/link';
import { FiDatabase } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/AdminSidebarAccordion/AdminAccordion"
import { usePathname } from "next/navigation";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { PiInvoice } from "react-icons/pi";
import { FiHelpCircle } from "react-icons/fi";
import { RiChat3Line } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { FaUserEdit } from "react-icons/fa";
import { LuCreditCard } from "react-icons/lu";
import { AiFillAppstore } from "react-icons/ai";
import { useSelector } from "react-redux";

const Sidebar = () => {

    const pathname = usePathname();

    return (
        <div className="w-64 h-full fixed top-0 z-50 left-0 bg-gray-600">
            <div className='w-full h-full'>
                <div className='w-full h-full flex justify-center items-start bg-gray-800'>
                    <ScrollArea className="h-full w-full overflow-y-auto">

                        <div className={`w-full py-6 ${pathname === '/dashboard' ? 'bg-green-500' : ''}`}>
                            <Link href={'/dashboard'} className='w-full flex justify-start items-center px-4 transition-colors duration-200'>
                                <RiDashboard2Line className='text-2xl text-white' />
                                <h1 className='mx-3 hidden md:flex font-bold text-xl text-white'>Dashboard</h1>
                            </Link>
                        </div>

                        <h1 className="text-start mx-5 font-semibold text-gray-400 hidden md:flex">Generals</h1>
                        <div className='w-full'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        <div className='flex items-center px-4 transition-colors duration-200'>
                                            <FiDatabase className='text-2xl text-white' />
                                            <h1 className='ml-3 hidden md:flex font-bold text-sm text-white'>Catalogs</h1>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='px-8 my-2 text-gray-100'>
                                            <h1 className='py-2 hover:text-blue-600 transition-colors duration-200 hidden md:flex'>Product List</h1>
                                            <h1 className='py-2 hover:text-blue-600 transition-colors duration-200 hidden md:flex'>Product Categories</h1>
                                            <h1 className='py-2 hover:text-blue-600 transition-colors duration-200 hidden md:flex'>Category List</h1>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className='w-full'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        <div className='flex items-center px-4 transition-colors duration-200'>
                                            <MdOutlineShoppingCart className='text-2xl text-white' />
                                            <h1 className='ml-3 font-bold text-sm text-white hidden md:flex'>Orders</h1>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='px-8 my-2 text-gray-100'>
                                            <h1 className='py-2 hover:text-blue-600 transition-colors duration-200 hidden md:flex'>Customer List</h1>
                                            <h1 className='py-2 hover:text-blue-600 transition-colors duration-200 hidden md:flex'>Customer Details</h1>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>


                        <div className='w-full'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        <div className='flex items-center px-4 transition-colors duration-200'>
                                            <LuCreditCard className='text-2xl text-white' />
                                            <h1 className='ml-3 hidden md:flex font-bold text-sm text-white'>Purchases</h1>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='px-8 my-2 text-gray-100'>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer List</h1>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer Details</h1>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className='w-full'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        <div className='flex items-center px-4 transition-colors duration-200'>
                                            <FaRegHeart className='text-2xl text-white' />
                                            <h1 className='ml-3 hidden md:flex font-bold text-sm text-white'>Marketing</h1>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='px-8 my-2 text-gray-100'>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer List</h1>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer Details</h1>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className='w-full'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        <div className='flex items-center px-4 transition-colors duration-200'>
                                            <PiInvoice className='text-2xl text-white' />
                                            <h1 className='ml-3 hidden md:flex font-bold text-sm text-white'>Invoice</h1>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='px-8 my-2 text-gray-100'>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer List</h1>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer Details</h1>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className='w-full'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        <div className='flex items-center px-4 transition-colors duration-200'>
                                            <TbBrandGoogleAnalytics className='text-2xl text-white' />
                                            <h1 className='ml-3 hidden md:flex font-bold text-sm text-white'>Analytics</h1>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='px-8 my-2 text-gray-100'>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer List</h1>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer Details</h1>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className='w-full'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        <div className='flex items-center px-4 transition-colors duration-200'>
                                            <AiFillAppstore className='text-2xl text-white' />
                                            <h1 className='ml-3 hidden md:flex font-bold text-sm text-white'>Content Management</h1>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='px-8 my-2 text-gray-100'>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer List</h1>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer Details</h1>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <h1 className="text-start mx-5 font-semibold text-gray-400 mt-2 hidden md:flex">Users</h1>
                        <div className='w-full'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        <div className='flex items-center px-4 transition-colors duration-200'>
                                            <IoSettingsOutline className='text-2xl text-white' />
                                            <h1 className='ml-3 hidden md:flex font-bold text-sm text-white'>Settings</h1>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='px-8 my-2 text-gray-100'>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer List</h1>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer Details</h1>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className='w-full'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        <div className='flex items-center px-4 transition-colors duration-200'>
                                            <MdLockOutline className='text-2xl text-white' />
                                            <h1 className='ml-3 hidden md:flex font-bold text-sm text-white'>Authentication</h1>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='px-8 my-2 text-gray-100'>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer List</h1>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer Details</h1>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className='w-full'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        <div className='flex items-center px-4 transition-colors duration-200'>
                                            <FaUserEdit className='text-2xl text-white' />
                                            <h1 className='ml-3 hidden md:flex font-bold text-sm text-white'>Roles</h1>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='px-8 my-2 text-gray-100'>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer List</h1>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer Details</h1>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className='w-full'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        <div className='flex items-center px-4 transition-colors duration-200'>
                                            <FaRegUser className='text-2xl text-white' />
                                            <h1 className='ml-3 hidden md:flex font-bold text-sm text-white'>Customers</h1>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='px-8 my-2 text-gray-100'>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer List</h1>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer Details</h1>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <h1 className="text-start mx-5 hidden md:flex font-semibold text-gray-400 mt-2">Other Apps</h1>
                        <div className='w-full'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        <div className='flex items-center px-4 transition-colors duration-200'>
                                            <MdOutlineMailOutline className='text-2xl text-white' />
                                            <h1 className='ml-3 hidden md:flex font-bold text-sm text-white'>Inbox</h1>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='px-8 my-2 text-gray-100'>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer List</h1>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer Details</h1>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className='w-full'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        <div className='flex items-center px-4 transition-colors duration-200'>
                                            <RiChat3Line className='text-2xl font-bold text-white' />
                                            <h1 className='ml-3 hidden md:flex font-bold text-sm text-white'>Chat</h1>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='px-8 my-2 text-gray-100'>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer List</h1>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer Details</h1>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <h1 className="text-start mx-5 hidden md:flex font-semibold text-gray-400 mt-2">Support</h1>
                        <div className='w-full'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        <div className='flex items-center px-4 transition-colors duration-200'>
                                            <FiHelpCircle className='text-2xl text-white' />
                                            <h1 className='ml-3 hidden md:flex font-bold text-sm text-white'>Help Center</h1>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='px-8 my-2 text-gray-100'>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer List</h1>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer Details</h1>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className='w-full'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        <div className='flex items-center px-4 transition-colors duration-200'>
                                            <TiDocumentText className='text-2xl text-white' />
                                            <h1 className='ml-3 hidden md:flex font-bold text-sm text-white'>Privacy Policy</h1>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='px-8 my-2 text-gray-100'>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer List</h1>
                                            <h1 className='py-2 hidden md:flex hover:text-blue-600 transition-colors duration-200'>Customer Details</h1>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                    </ScrollArea>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

