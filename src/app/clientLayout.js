'use client'

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import RTKProvider from "@/states/RTK/RTKStateProvider";
import ReactQueryProvider from "@/Providers/Query/ReactQueryProvider";
import { usePathname } from "next/navigation";

export default function ClientRootLayout({ children }) {

    const pathname = usePathname();

    const dashboardRoute = pathname.startsWith('/dashboard');

    return (
        <RTKProvider>
            <ReactQueryProvider>
                <div className="w-full">
                    {
                        dashboardRoute ? (
                            <>
                            </>
                        ) : (
                            <div className="w-full">
                                <div className="w-full">
                                    <Navbar />
                                </div>
                            </div>
                        )
                    }
                    <div className="w-full flex justify-center">
                        <div className="w-full">
                            {children}
                        </div>
                    </div>

                    {
                        dashboardRoute ? (
                            <>
                            </>
                        ) : (
                            <div className="w-full">
                                <div className="w-full">
                                    <Footer />
                                </div>
                            </div>
                        )
                    }
                </div>
            </ReactQueryProvider>
        </RTKProvider>
    );
}
