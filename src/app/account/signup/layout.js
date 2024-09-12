import RTKProvider from "@/states/RTK/RTKStateProvider";
import ReactQueryProvider from "@/Providers/Query/ReactQueryProvider";
import { ThemeProvider } from "next-themes"

export const metadata = {
    title: "Sign Up | Power Fuel",
    description: "This website is created for purchasing supplements",
};

export default function RootLayout({ children }) {
    return (
        <RTKProvider>
            <ReactQueryProvider>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="w-full flex justify-center">
                        <div className="w-full">
                            {children}
                        </div>
                    </div>
                </ThemeProvider>
            </ReactQueryProvider>
        </RTKProvider>
    );
}
