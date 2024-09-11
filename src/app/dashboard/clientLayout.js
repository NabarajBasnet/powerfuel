'use client'

import RTKProvider from "@/states/RTK/RTKStateProvider";
import ReactQueryProvider from "@/Providers/Query/ReactQueryProvider";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

export const metadata = {
    title: "Dashboard | Power Fuel | Gym Supplements Shop",
    description: "This website is created for purchasing supplements",
};

export default function ClientAdminLayout({ children }) {

    const toggleAdminSidebar = useSelector(state => state.rtkreducers.toggleAdminSidebar);

    return (
        <RTKProvider>
            <ReactQueryProvider>
                <div className='w-full flex'>
                    <div
                        className={`transition-all duration-500 ease-in-out 
                        ${toggleAdminSidebar ? 'w-2/12' : 'w-0 overflow-hidden'} hidden md:flex`}
                    >
                        <Sidebar className='w-full' />
                    </div>

                    <div className={`transition-all duration-500 ease-in-out ${toggleAdminSidebar ? 'md:w-10/12' : 'w-full'}`}>
                        <Header />
                        <main className="w-full">{children}</main>
                    </div>
                </div>
            </ReactQueryProvider>
        </RTKProvider>
    );
}
