'use client';

import Link from 'next/link'
import React from 'react'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";

const Footer = () => {

    const userFulLinks = [
        {
            text: 'About Us',
            link: 'aboutus'
        },
        {
            text: 'About Our Shop',
            link: 'aboutus'
        },
        {
            text: 'Secure Shopping',
            link: 'shop'
        },
        {
            text: 'Delivery Information',
            link: 'aboutus'
        },
        {
            text: 'Privacy Policy',
            link: 'privacypolicy'
        },
        {
            text: 'Our Sitemap',
            link: 'aboutus'
        },
    ];

    const pages = [
        {
            page: 'Home',
            link: '/'
        },
        {
            page: 'Shop',
            link: '/shop'
        },
        {
            page: 'Blogs',
            link: '/blogs'
        },
        {
            page: 'Contact',
            link: '/contact'
        },
        {
            page: 'About Us',
            link: '/aboutus'
        },
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
        <div className='w-full flex bg-gray-100 dark:bg-gray-800 border dark:border-gray-500 justify-center'>
            <div className='w-10/12'>
                <div className="py-10">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <Link href={'/'} className='text-4xl font-bold'>POWER FUEL</Link>
                            <p className='text-sm'>Address: 60-49 Road 11378 New York</p>
                            <p className='text-sm'>Phone: +65 11.188.888</p>
                            <p className='text-sm'>Email: hello@colorlib.com</p>
                        </div>
                        <div>
                            <h1 className='font-bold text-xl mb-4'>Userful Links</h1>
                            <div className="space-y-2">
                                {
                                    userFulLinks.map((usefullink, index) => (
                                        <Link key={index} href={usefullink.link}>
                                            <h1 className="text-sm cursor-pointer">{usefullink.text}</h1>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold text-xl mb-4'>Pages</h1>
                            <div className="space-y-2">
                                {
                                    pages.map((page, index) => (
                                        <Link key={index} href={page.link}>
                                            <h1 className="text-sm cursor-pointer">{page.page}</h1>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold text-xl mb-2'>Join Our Newsletter Now</h1>
                            <p className="text-sm mb-4">Get E-mail updates about our latest shop and special offers.</p>
                            <div className="w-full flex mb-4">
                                <Input
                                    placeholder='Enter your mail'
                                    className="w-8/12 bg-white dark:bg-black rounded-none"
                                />
                                <Button className='w-4/12 rounded-none bg-green-600 hover:bg-green-700 px-2 dark:text-white'>SUBSCRIBE</Button>
                            </div>
                            <div className="flex space-x-2">
                                {
                                    topNavSocialIcons.map((icon, index) => (
                                        <Link key={index} href={icon.link}>
                                            <icon.icon className="text-2xl hover:scale-105 transition-all duration-500" />
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-green-700 mt-8 pt-4">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className='text-sm'>Copyright ©2024 All rights reserved | Made with ❤ by Nabaraj</p>
                            <div className="flex space-x-4 mt-4 md:mt-0">
                                <FaCcVisa className="text-2xl" />
                                <FaCcPaypal className="text-2xl" />
                                <FaCcMastercard className="text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
