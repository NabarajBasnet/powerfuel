'use client'

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import RTKProvider from "@/states/RTK/RTKStateProvider";
import ReactQueryProvider from "@/Providers/Query/ReactQueryProvider";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes"

export default function ClientRootLayout({ children }) {

    const pathname = usePathname();

    const dashboardRoute = pathname.startsWith('/dashboard');

    return (
        <RTKProvider>
            <ReactQueryProvider>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex flex-col min-h-screen w-full">
                        {
                            dashboardRoute ? (
                                <></>
                            ) : (
                                <div className="w-full">
                                    <Navbar />
                                </div>
                            )
                        }
                        <main className="flex-grow w-full flex justify-center">
                            <div className="w-full">
                                {children}
                            </div>
                        </main>
                        {
                            dashboardRoute ? (
                                <></>
                            ) : (
                                <footer className="w-full">
                                    <Footer />
                                </footer>
                            )
                        }
                    </div>
                </ThemeProvider>
            </ReactQueryProvider>
        </RTKProvider>
    );
}
