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

const Sidebar = () => {
    return (
        <div className="fixed top-0 z-50 left-0 h-full bg-gray-100">
            <div className='w-64 h-full'>
                <div className='w-full h-full flex justify-center items-start bg-gray-100'>
                    <ScrollArea className="h-full w-full overflow-y-auto p-1">

                        <div className='w-full py-6'>
                            <Link href={'/dashboard'} className='w-full flex justify-start items-center px-4 hover:bg-gray-200 transition-colors duration-200'>
                                <RiDashboard2Line className='text-2xl text-blue-600' />
                                <h1 className='mx-3 font-bold text-lg text-gray-800'>Dashboard</h1>
                            </Link>
                        </div>

                        <div className='w-full'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        <div className='flex items-center px-4 hover:bg-gray-200 transition-colors duration-200'>
                                            <FiDatabase className='text-2xl text-blue-600' />
                                            <h1 className='ml-3 font-bold text-sm text-gray-800'>Catalogs</h1>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='px-8 my-2 text-gray-600'>
                                            <h1 className='py-2 hover:text-blue-600 transition-colors duration-200'>Product List</h1>
                                            <h1 className='py-2 hover:text-blue-600 transition-colors duration-200'>Product Categories</h1>
                                            <h1 className='py-2 hover:text-blue-600 transition-colors duration-200'>Category List</h1>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className='w-full'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>
                                        <div className='flex items-center px-4 hover:bg-gray-200 transition-colors duration-200'>
                                            <FaRegUser className='text-2xl text-blue-600' />
                                            <h1 className='ml-3 font-bold text-sm text-gray-800'>Customers</h1>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='px-8 my-2 text-gray-600'>
                                            <h1 className='py-2 hover:text-blue-600 transition-colors duration-200'>Customer List</h1>
                                            <h1 className='py-2 hover:text-blue-600 transition-colors duration-200'>Customer Details</h1>
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
