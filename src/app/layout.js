import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import RTKProvider from "@/states/RTK/RTKStateProvider";
import ReactQueryProvider from "@/Providers/Query/ReactQueryProvider";
import ClientRootLayout from "./clientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Power Fuel | Purchase Supplements",
  description: "This website is created for purchasing supplements",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientRootLayout>
          <div className="w-full flex justify-center">
            <div className="w-full md:w-10/12">
              {children}
            </div>
          </div>
        </ClientRootLayout>
      </body>
    </html>
  );
}
