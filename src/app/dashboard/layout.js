import RTKProvider from "@/states/RTK/RTKStateProvider";
import ReactQueryProvider from "@/Providers/Query/ReactQueryProvider";
import Wrapper from "./Wrapper";
import Header from "./Header";

export const metadata = {
    title: "Dashboard | Power Fuel | Gym Supplements Shop",
    description: "This website is created for purchasing supplements",
};

export default function AdminLayout({ children }) {
    return (
        <div>
            <RTKProvider>
                <ReactQueryProvider>
                    <div className="w-full flex">
                        <div className="w-full">
                            <Wrapper />
                        </div>
                        <div className="w-full">
                            <Header />
                            <div className="w-full flex justify-center">
                                <div className="w-full">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactQueryProvider>
            </RTKProvider>
        </div>
    );
}
