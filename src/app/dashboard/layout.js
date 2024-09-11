import ClientAdminLayout from "./clientLayout";

export const metadata = {
    title: "Dashboard | Power Fuel | Gym Supplements Shop",
    description: "This website is created for purchasing supplements",
};

export default function AdminLayout({ children }) {
    return (
        <ClientAdminLayout>
            {children}
        </ClientAdminLayout>
    );
}
