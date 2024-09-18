'use client'

import { IoIosSettings } from "react-icons/io";
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
import React, { useEffect, useState } from 'react'
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
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { ToggleAllDepartmentsState } from "@/states/RTK/mainSlicer";
import useProducts from "@/hooks/products/useProducts";
import { useQuery } from "@tanstack/react-query";
import SideCartAndWishList from '../SideCart/SideCart';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaCircleUser } from "react-icons/fa6";
import { SearchProducts } from "@/states/RTK/mainSlicer";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const { setTheme } = useTheme()
    const cart = useSelector(state => state.rtkreducers.cart);
    const [MdKeyboardArrowDownRotate, setMdKeyboardArrowDownRotate] = useState(true);
    const pathname = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();
    const AllDepartmentsState = useSelector(state => state.rtkreducers.allDepartmentToggle);
    const departments = ['Protein', 'Creatine', 'Testosterone', 'Growth Hormone', 'Multi Vitamin', 'Fish Oil', 'Peanut Butters'];
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

    const handleDispatchSearchQuery = () => {
        dispatch(SearchProducts(searchQuery));
    };

    useEffect(() => {
        handleDispatchSearchQuery();
    }, [searchQuery]);

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
            <div className="w-full hidden md:flex bg-gray-100 dark:bg-gray-900 border justify-center">
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
                        <div className="hidden md:flex items-center">
                            <AlertDialog>
                                <AlertDialogTrigger>
                                    <IoIosSettings className="text-xl" />
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <div>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="outline" size="icon">
                                                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                                        <span className="sr-only">Toggle theme</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem onClick={() => setTheme("light")}>
                                                        Light
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                                                        Dark
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => setTheme("system")}>
                                                        System
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                            <div className="mx-1 text-sm font-extralight">|</div>
                        </div>

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
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <div href={'/account/login'} className="mx-1 flex items-center">
                                    <FaCircleUser />
                                    <p className="mx-1 text-sm">Account</p>
                                    <RiArrowDropDownLine className="text-xl" />
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>
                                    <div className="flex justify-between items-center">
                                        <h1>New customer?</h1>
                                        <Link href={'/account/signup'} className="ml-6 text-green-600">Sign Up</Link>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link href={'/account'} className='font-bold'>
                                        My Profile
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>Subscription</DropdownMenuItem>
                                <DropdownMenuItem>
                                    <div className="flex items-center justify-between font-bold">
                                        <h1>Already a member?</h1>
                                        <Link href={'/account/login'} className="ml-4 text-green-600">
                                            Log In
                                        </Link>
                                        {/* <Button>Log Out</Button> */}
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center bg-gray-100 dark:bg-gray-900">
                <div className="w-full md:w-10/12 px-4 md:px-0 flex justify-between items-center my-4">
                    <Link href={'/'} className="text-2xl md:text-3xl font-bold">POWERFUEL</Link>
                    <div className="md:flex items-center hidden">
                        <Link href={'/'} className="font-bold text-sm mx-3">
                            <div className={`cursor-pointer ${pathname === '/' ? 'text-green-500' : ''}`}>
                                <h1>{'HOME'}</h1>
                            </div>
                        </Link>
                        <Link href={'/shop'} className="font-bold text-sm mx-3">
                            <div className={`cursor-pointer ${pathname === '/shop' ? 'text-green-500' : ''}`}>
                                <h1>{'SHOP'}</h1>
                            </div>
                        </Link>

                        <Link href={'/blogs'} className="font-bold text-sm mx-3">
                            <div className={`cursor-pointer ${pathname === '/blogs' ? 'text-green-500' : ''}`}>
                                <h1>{'BLOGS'}</h1>
                            </div>
                        </Link>

                        <Link href={'/contact'} className="font-bold text-sm mx-3">
                            <div className={`cursor-pointer ${pathname === '/contact' ? 'text-green-500' : ''}`}>
                                <h1>{'CONTACT'}</h1>
                            </div>
                        </Link>
                    </div>


                    <div className='flex md:hidden items-center'>
                        <SideCartAndWishList />
                        <p className="flex items-center mx-2 text-sm">
                            <span>item:</span>
                            <span className="font-bold">$150.00</span>
                        </p>
                    </div>

                    <div className='hidden md:flex items-center'>
                        <SideCartAndWishList />
                        <p className="flex items-center mx-2 text-sm">
                            <span>item:</span>
                            <span className="font-bold">$150.00</span>
                        </p>
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
                                    <div className="flex items-center">
                                        <div>
                                            <SideCartAndWishList />
                                        </div>
                                        <p className="mx-2 text-sm">item:<span className="font-bold"> $150.00</span></p>
                                    </div>
                                </div>
                                <div className="my-4 flex items-center">
                                    <Link href={'/account/login'}>
                                        <FaCircleUser className="m-1 text-2xl" />
                                    </Link>
                                    <div className="mx-1 text-sm font-extralight">|</div>
                                    <div className="flex items-center">
                                        <AlertDialog>
                                            <AlertDialogTrigger>
                                                <IoIosSettings className="text-3xl" />
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <div>
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button variant="outline" size="icon">
                                                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                                                    <span className="sr-only">Toggle theme</span>
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                                                    Light
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                                                    Dark
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                                                    System
                                                                </DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </div>
                                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        This action cannot be undone. This will permanently delete your account
                                                        and remove your data from our servers.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction>Continue</AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </div>
                                    <div className="mx-2">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="outline" size="icon">
                                                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                                    <span className="sr-only">Toggle theme</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                                    Light
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                                    Dark
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                                    System
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
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

            <div className="w-full flex justify-center bg-gray-100 dark:bg-gray-900 pb-2">

                <div className="w-full md:w-10/12 px-4 md:px-0 md:hidden">
                    <div className="w-full flex justify-center items-center border dark:border-gray-400">
                        <div className="w-full flex justify-between items-center">
                            <input
                                type='text'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className='w-full px-4 border-none bg-transparent focus:border-none focus:outline-none outline-none'
                                placeholder='What do you need?'
                            />
                            <Button className='rounded-none bg-green-500 p-6 dark:text-gray-200 dark:hover:text-black'>SERACH</Button>
                        </div>
                    </div>
                </div>

                <div className="w-10/12 hidden md:flex justify-between items-center">

                    <div className="w-9/12 flex justify-center items-center border dark:border-gray-400">
                        <div className="w-full flex justify-between items-center">
                            <input
                                type='text'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className='w-full px-4 border-none bg-transparent focus:border-none focus:outline-none outline-none'
                                placeholder='What do you need?'
                            />
                            <Button className='rounded-none bg-green-500 p-6'>SERACH</Button>
                        </div>
                    </div>

                    <div className="w-3/12 flex justify-end items-center">
                        <div className="rounded-full p-4 mr-2 text-green-500 bg-white">
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
