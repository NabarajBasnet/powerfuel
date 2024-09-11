import RTKProvider from "@/states/RTK/RTKStateProvider";
import ReactQueryProvider from "@/Providers/Query/ReactQueryProvider";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ClientAdminLayout from "./clientLayout";

export const metadata = {
    title: "Dashboard | Power Fuel | Gym Supplements Shop",
    description: "This website is created for purchasing supplements",
};

export default function AdminLayout({ children }) {
    return (
        <div>
            <ClientAdminLayout>
                {children}
            </ClientAdminLayout>
        </div>
    );
}
