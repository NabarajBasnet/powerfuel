'use client'

import { IoMenuSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Navbar = () => {

    const pathname = usePathname();
    console.log('Pathname: ', pathname)
    const navPages = [
        {
            page: 'HOME',
            link: '/'
        },
        {
            page: 'SHOP',
            link: '/shop'
        },
        {
            page: 'BLOGS',
            link: '/blogs'
        },
        {
            page: 'CONTACT',
            link: '/contacts'
        }
    ];

    const topNavSocialIcons = [
        {
            icon: FaFacebookF,
            link: ''
        },
        {
            icon: FaXTwitter,
            link: ''
        },
        {
            icon: FaLinkedinIn,
            link: ''
        },
        {
            icon: FaInstagram,
            link: ''
        }
    ];

    return (
        <div className='w-full'>
            <div className="w-full flex bg-gray-100 justify-center">
                <div className="w-10/12 py-2 flex justify-between">

                    <div className="w-6/12 flex justify-start items-center">
                        <div className="flex mx-1 justify-center items-center">
                            <MdEmail className='text-3xl' />
                            <p className="text-sm">powerfuel@gmail.com</p>
                        </div>
                        <div className="mx-1 text-sm font-extralight">|</div>
                        <div className="mx-1">
                            <p className="text-sm">Free Shipping for all Order of $99</p>
                        </div>
                    </div>

                    <div className="w-6/12 mx-1 flex justify-end items-center">
                        <div className="flex">
                            {
                                topNavSocialIcons.map((icon, link) => (
                                    <div key={link} className="mx-1">
                                        <Link href={icon.link}>
                                            <icon.icon className="text-sm" />
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="mx-1 text-sm font-extralight">|</div>
                        <div className="mx-1">
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select</SelectLabel>
                                        <SelectItem value="English">English</SelectItem>
                                        <SelectItem value="Nepali">Nepali</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="mx-1 text-sm font-extralight">|</div>
                        <Link href={''} className="mx-1 flex items-center">
                            <FaUser />
                            <p className="mx-2 text-sm">Login</p>
                        </Link>
                    </div>

                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className="w-10/12 flex justify-between my-4">
                    <div>
                        <Link href={'/'} className="text-3xl font-bold">POWERFUEL</Link>
                    </div>
                    <div className="flex items-center">
                        {
                            navPages.map((page, link) => (
                                <div key={link} className="font-bold text-sm mx-3">
                                    <Link href={page.link} className={pathname === page.link ? 'text-green-500' : ''}>
                                        <h1>{page.page}</h1>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex items-center">
                        <FaHeart className="mx-1" />
                        <IoBagHandleSharp className="mx-1" />
                        <p className="mx-1">item:$150.00</p>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className="w-10/12 flex justify-between items-center">
                    <div>
                        <div className="flex bg-green-500 p-2 items-center text-white font-bold">
                            <IoMenuSharp className="text-3xl font-bold" />
                            <Select>
                                <SelectTrigger className="w-[220px] shadow-none border-none">
                                    <SelectValue className="text-2xl" placeholder="Select Departments" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select</SelectLabel>
                                        <SelectItem value="English">English</SelectItem>
                                        <SelectItem value="Nepali">Nepali</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="flex justify-center items-center border">
                        <Select>
                            <SelectTrigger className="w-[180px] shadow-none border-none bg-transparent">
                                <SelectValue placeholder="All Categories" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select</SelectLabel>
                                    <SelectItem value="English">English</SelectItem>
                                    <SelectItem value="Nepali">Nepali</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <input
                            type='text'
                            className='border-none bg-transparent focus:border-none focus:outline-none outline-none'
                            placeholder='What do you need?'
                        />

                        <Button className='rounded-none p-6'>SERACH</Button>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="rounded-full p-4 mr-2 bg-gray-100">
                            <MdPhone className="3xl" />
                        </div>
                        <div>
                            <h1>+65 11.188.888</h1>
                            <p>support 24/7 time</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar