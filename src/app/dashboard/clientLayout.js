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
                        <div className={`hidden md:flex`}>
                            <Sidebar />
                        </div>
                    )}
                    <div className={`w-full ${toggleAdminSidebar ? 'md:ml-64' : ''}`}>
                        <div>
                            <Header />
                        </div>
                        <main className="w-full">
                            {children}
                        </main>
                    </div>
                </div>
            </ReactQueryProvider>
        </RTKProvider>
    );
}
