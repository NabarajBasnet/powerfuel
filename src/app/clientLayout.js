'use client'

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import RTKProvider from "@/states/RTK/RTKStateProvider";
import ReactQueryProvider from "@/Providers/Query/ReactQueryProvider";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes"
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function ClientRootLayout({ children }) {

    const pathname = usePathname();

    const dashboardRoute = pathname.startsWith('/dashboard');
    const loginRoute = pathname.startsWith('/account/login');
    const signupRoute = pathname.startsWith('/account/signup');
    const forgetPasswordRoute = pathname.startsWith('/account/forgetpassword');
    const resetPasswordRoute = pathname.startsWith('/account/resetpassword');

    return (
        <RTKProvider>
            <ReactQueryProvider>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <UserProvider>
                        <div className="flex flex-col min-h-screen w-full">
                            {
                                dashboardRoute || loginRoute || signupRoute || forgetPasswordRoute || resetPasswordRoute ? (
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
                                dashboardRoute || loginRoute || signupRoute || forgetPasswordRoute || resetPasswordRoute ? (
                                    <></>
                                ) : (
                                    <footer className="w-full">
                                        <Footer />
                                    </footer>
                                )
                            }
                        </div>
                    </UserProvider>
                </ThemeProvider>
            </ReactQueryProvider>
        </RTKProvider>
    );
}
