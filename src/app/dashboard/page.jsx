'use client'

import { FaCartShopping } from "react-icons/fa6";
import { BiSolidMedal } from "react-icons/bi";
import { FaBuilding } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi2";

const AdminDashboard = () => {

    const dashboardOverview = [
        {
            icon: FaCartShopping,
            text: 'Total Orders',
            value: '13,647'
        },
        {
            icon: BiSolidMedal,
            text: 'New Leads',
            value: '9,526'
        },
        {
            icon: FaBuilding,
            text: 'Deals',
            value: '976'
        },
        {
            icon: HiCurrencyDollar,
            text: 'Booked Revenue',
            value: '$123.6k'
        }
    ];

    return (
        <div className="w-full bg-gray-100 min-h-screen p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardOverview.map((overview, index) => (
                    <div key={index} className="flex items-center p-6 bg-white shadow-lg rounded-lg transform transition-all hover:scale-105 hover:shadow-xl">
                        <div className="text-green-600 bg-green-100 p-4 rounded-full mr-4">
                            <overview.icon className="text-3xl" />
                        </div>
                        <div className="flex flex-col text-right">
                            <p className="text-gray-600 text-sm font-medium">{overview.text}</p>
                            <h1 className="text-2xl font-bold text-gray-900">{overview.value}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminDashboard;
