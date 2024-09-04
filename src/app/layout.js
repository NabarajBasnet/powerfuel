import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Power Fuel | Purchase Supplements",
  description: "This website is created for purchasing supplements",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="w-full">

          <div className="w-full">
            <div className="w-full">
              <Navbar />
            </div>
          </div>

          <div className="w-full">
            <div className="w-10/12">
              {children}
            </div>
          </div>

          <div className="w-full">
            <div className="w-10/12">
              <Footer />
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}
