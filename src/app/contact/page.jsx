'use client'

import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";

const Contact = () => {

    const contactDetails = [
        {
            icon: FaPhoneAlt,
            title: 'Phone',
            detail: '+977 9742263831'
        },
        {
            icon: FaLocationDot,
            title: 'Address',
            detail: 'Setopul, Maitidevi, Kathmandu 44600 Kathmandu, Nepal'
        },
        {
            icon: IoIosTime,
            title: 'Available Time',
            detail: '10:00 AM to 23:00 PM'
        },
        {
            icon: IoMail,
            title: 'Mail',
            detail: 'nabarajbasnet@gmail.com'
        }
    ];

    return (
        <div className="w-full my-6">
            <div className="relative w-full bg-fixed bg-cover bg-center bg-[url('/images/kettlebell-protein.png')] text-white flex justify-center">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative my-10 z-10 text-center">
                    <Breadcrumb>
                        <BreadcrumbList className="text-sm">
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className='text-white font-bold'>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex items-center gap-1">
                                        <BreadcrumbEllipsis className="h-4 w-4" />
                                        <span className="sr-only">Toggle menu</span>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start">
                                        <DropdownMenuItem>
                                            <BreadcrumbLink href="/articles">Articles</BreadcrumbLink>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <BreadcrumbLink href="/aboutme">About Me</BreadcrumbLink>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/contactme" className='text-white font-bold'>Contact Me</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>

            <div className="w-full flex my-10 justify-center">
                <div className="w-full max-w-7xl px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {
                                contactDetails.map((contact, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                        <contact.icon className="text-4xl text-green-600" />
                                        <div>
                                            <h1 className="text-xl font-bold text-green-600">{contact.title}</h1>
                                            <p className="text-sm text-gray-600 font-semibold">{contact.detail}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center mb-16">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4995.643196910726!2d85.33495612118787!3d27.703290814618004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194487783651%3A0xcbfa6f39863d05f6!2sThe%20Physique%20Workshop!5e0!3m2!1sen!2snp!4v1725649420544!5m2!1sen!2snp" className="w-full h-96" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="w-full flex justify-center">
                <form className="w-9/12 md:w-full">
                    <h1 className="text-4xl text-center font-bold">Leave Message</h1>
                    <div className="w-full md:flex md:space-x-4 my-6">
                        <Input
                            type='text'
                            className='h-14 rounded-none'
                            placeholder='Your name'
                        />
                        <Input
                            type='email'
                            className='h-14 rounded-none my-2 md:my-0'
                            placeholder='Your email'
                        />
                    </div>
                    <Textarea
                        type='text'
                        className='h-52 rounded-none'
                        placeholder='Your message'
                    />
                    <div className="w-full flex justify-center my-3">
                        <Button className='rounded-none bg-green-600 p-6'>
                            SEND MESSAGE
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
