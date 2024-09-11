'use client'

import RTKProvider from "@/states/RTK/RTKStateProvider";
import ReactQueryProvider from "@/Providers/Query/ReactQueryProvider";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

export default function ClientAdminLayout({ children }) {

    const toggleAdminSidebar = useSelector(state => state.rtkreducers.toggleAdminSidebar);

    return (
        <RTKProvider>
            <ReactQueryProvider>
                <div className='w-full flex'>
                    {toggleAdminSidebar && (
                        <div className="hidden ease-in-out transition-all duration-500 md:flex w-2/12">
                            <Sidebar className='transition-all ease-in-out duration-500' />
                        </div>
                    )}

                    <div className={`w-full ${toggleAdminSidebar ? 'md:w-10/12' : 'w-full'}`}>
                        <div className="w-full">
                            <Header />
                        </div>
                        <main className="w-full">{children}</main>
                    </div>
                </div>
            </ReactQueryProvider>
        </RTKProvider>
    );
}
