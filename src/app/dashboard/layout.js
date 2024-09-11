import RTKProvider from "@/states/RTK/RTKStateProvider";
import ReactQueryProvider from "@/Providers/Query/ReactQueryProvider";
import Header from "./Header";
import Sidebar from "./Sidebar";

export const metadata = {
    title: "Dashboard | Power Fuel | Gym Supplements Shop",
    description: "This website is created for purchasing supplements",
};

export default function AdminLayout({ children }) {
    return (
        <div>
            <RTKProvider>
                <ReactQueryProvider>
                    <div className='w-full flex'>
                        <div className="w-0/12 hidden md:flex md:w-2/12"><Sidebar /></div>
                        <div className="w-full md:w-10/12">
                            <div><Header /></div>
                            <div className="mt-16">{children}</div>
                        </div>
                    </div>
                </ReactQueryProvider>
            </RTKProvider>
        </div>
    );
}
