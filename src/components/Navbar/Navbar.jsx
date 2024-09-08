'use client'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import React, { useState } from 'react'
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
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { ToggleAllDepartmentsState } from "@/states/RTK/mainSlicer";
import useProducts from "@/hooks/products/useProducts";
import { useQuery } from "@tanstack/react-query";
import SideCartAndWishList from '../SideCart/SideCart';

const Navbar = () => {

    const cart = useSelector(state => state.rtkreducers.cartItems);
    const [MdKeyboardArrowDownRotate, setMdKeyboardArrowDownRotate] = useState(true);
    const pathname = usePathname();
    const dispatch = useDispatch();
    const AllDepartmentsState = useSelector(state => state.rtkreducers.allDepartmentToggle);
    const departments = ['Protein', 'Creatine', 'Creatine Monohydrate', 'Creatine Dehydtate', 'Testosterone', 'Growth Hormone', 'Vitamin', 'Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D', 'Multi Vitamin', 'Fish Oil', 'Peanut Butters', 'Carbs'];
    const { getAllProducts } = useProducts();

    const fetchProducts = async () => {
        const Product = await getAllProducts();
        return Product.products;
    };

    const { data: products, isLoading, isError } = useQuery({
        queryFn: fetchProducts,
        queryKey: ['products']
    });

    const handleClickAllDepartments = () => {
        dispatch(ToggleAllDepartmentsState());
        setMdKeyboardArrowDownRotate(!MdKeyboardArrowDownRotate);
    };

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
            link: '/contact'
        },
        {
            page: 'DASHBOARD',
            link: '/dashboard'
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
            <div className="w-full hidden md:flex bg-gray-100 justify-center">
                <div className="w-10/12 py-2 flex justify-between">

                    <div className="w-6/12 flex justify-start items-center">
                        <div className="flex mx-1 justify-center items-center">
                            <MdEmail className='text-md mr-1 text-green-500' />
                            <p className="text-sm">powerfuel@gmail.com</p>
                        </div>
                        <div className="mx-1 text-sm font-extralight">|</div>
                        <div className="mx-1">
                            <p className="text-sm">Free Shipping for all Order of $99</p>
                        </div>
                    </div>

                    <div className="w-6/12 flex mx-1 justify-end items-center">
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
                                <SelectTrigger className="w-[120px] focus:ring-0 border-none shadow-none outline-none focus:border-none focus:outline-none">
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
                <div className="w-full md:w-10/12 px-4 md:px-0 flex justify-between items-center my-4">
                    <Link href={'/'} className="text-2xl md:text-3xl font-bold">POWERFUEL</Link>
                    <div className="hidden md:flex items-center">
                        {navPages.map((page, index) => (
                            <Link href={page.link} key={index} className="font-bold text-sm mx-3">
                                <div className={`cursor-pointer ${pathname === page.link ? 'text-green-500' : ''}`}>
                                    <h1>{page.page}</h1>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className='flex items-center'>
                        <SideCartAndWishList />
                        <p className="mx-2 text-sm">item:<span className="font-bold"> $150.00</span></p>
                    </div>

                    <Sheet>
                        <SheetTrigger asChild>
                            <IoMenuSharp className="md:hidden flex text-4xl cursor-pointer" />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>
                                    <Link href={'/'}>
                                        POWERFUEL
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>
                            <div>
                                <div>
                                    {navPages.map((page, index) => (
                                        <Link href={page.link} key={index} className="font-bold text-sm mx-3">
                                            <div className={`cursor-pointer ${pathname === page.link ? 'text-green-500' : ''}`}>
                                                <h1>{page.page}</h1>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <div className="my-3">
                                    <div className="md:flex hidden items-center">
                                        <div>
                                            <SideCartAndWishList />
                                        </div>
                                        <p className="mx-2 text-sm">item:<span className="font-bold"> $150.00</span></p>
                                    </div>
                                </div>
                                <div className="my-4">
                                    <Link href={'/account'}>
                                        <FaUser className="border border-black m-1 rounded-full p-1 text-3xl" />
                                    </Link>
                                </div>
                                <div className="w-full h-0.5 bg-gray-200"></div>

                                <div className="flex my-4">
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

                                <div>
                                    <div className="flex mx-1 items-center">
                                        <MdEmail className='text-md mr-1 text-green-500' />
                                        <p className="text-sm">powerfuel@gmail.com</p>
                                    </div>
                                    <div className="mx-1">
                                        <p className="text-sm">Free Shipping for all Order of $99</p>
                                    </div>
                                </div>
                            </div>
                            <SheetFooter>
                                <SheetClose asChild>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            <div className="w-full flex justify-center">

                <div className="w-full md:w-10/12 px-4 md:px-0 md:hidden">
                    <div className="w-full flex justify-start">
                        <div onClick={handleClickAllDepartments} className="w-full my-2 flex bg-green-500 p-2 cursor-pointer items-center text-white font-bold">
                            <IoMenuSharp className="text-3xl font-bold" />
                            <div className="flex mx-4 items-center">
                                <h1>All Departments</h1>
                                <MdKeyboardArrowDown className={`mx-2 ${MdKeyboardArrowDownRotate ? 'rotate-0 transition-all duration-500' : 'rotate-180 transition-all duration-500'}`} />
                            </div>
                        </div>
                    </div>

                    <div className={`w-full px-2 ${AllDepartmentsState ? 'border shadow-md' : ''} mb-2`}>
                        {AllDepartmentsState ? (
                            <div className="w-full">
                                {departments.map((department, index) => (
                                    <div key={index}>
                                        <h1 className="p-1 cursor-pointer">{department}</h1>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="w-full">
                            </div>
                        )}
                    </div>

                    <div className="w-full flex justify-center items-center border">
                        <div className="w-full flex justify-between items-center">
                            <div className="hidden">
                                <Select>
                                    <SelectTrigger className="w-[180px] shadow-none border-none bg-transparent outline-none focus:border-none focus:outline-none">
                                        <SelectValue placeholder="All Categories" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Select</SelectLabel>
                                            {products?.map((product) => (
                                                <SelectItem value="Nepali">{product.category}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <input
                                type='text'
                                className='px-2 border-none bg-transparent focus:border-none focus:outline-none outline-none'
                                placeholder='What do you need?'
                            />
                            <Button className='rounded-none bg-green-500 p-6'>SERACH</Button>
                        </div>
                    </div>
                </div>

                <div className="w-10/12 hidden md:flex justify-between items-center">
                    <div className="w-3/12 flex justify-start">
                        <div onClick={handleClickAllDepartments} className="flex bg-green-500 p-2 cursor-pointer items-center text-white font-bold">
                            <IoMenuSharp className="text-3xl font-bold" />
                            <div className="flex mx-4 items-center">
                                <h1>All Departments</h1>
                                <MdKeyboardArrowDown className={`mx-2 ${MdKeyboardArrowDownRotate ? 'rotate-0 transition-all duration-500' : 'rotate-180 transition-all duration-500'}`} />
                            </div>
                        </div>
                    </div>

                    <div className="w-6/12 flex justify-center items-center border">
                        <div className="w-full flex justify-between items-center">
                            <Select>
                                <SelectTrigger className="w-[180px] shadow-none border-none bg-transparent outline-none focus:border-none focus:outline-none">
                                    <SelectValue placeholder="All Categories" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select</SelectLabel>
                                        {products?.map((product) => (
                                            <SelectItem value="Nepali">{product.category}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <input
                                type='text'
                                className='border-none bg-transparent focus:border-none focus:outline-none outline-none'
                                placeholder='What do you need?'
                            />
                            <Button className='rounded-none bg-green-500 p-6'>SERACH</Button>
                        </div>
                    </div>

                    <div className="w-3/12 flex justify-end items-center">
                        <div className="rounded-full p-4 mr-2 text-green-500 bg-gray-100">
                            <MdPhone className="3xl" />
                        </div>
                        <div>
                            <h1 className="font-extrabold text-xl">+65 11.188.888</h1>
                            <p className="text-sm">support 24/7 time</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
