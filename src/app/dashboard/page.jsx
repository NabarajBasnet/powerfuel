'use client'

import { FaCartShopping } from "react-icons/fa6";
import { BiSolidMedal } from "react-icons/bi";
import { FaBuilding } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi2";
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const AdminDashboard = () => {

    const [radialChart, setRadialChart] = useState({
        series: [77],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
                offsetY: -10
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    dataLabels: {
                        name: {
                            fontSize: '16px',
                            color: undefined,
                            offsetY: 120
                        },
                        value: {
                            offsetY: 76,
                            fontSize: '22px',
                            color: undefined,
                            formatter: function (val) {
                                return val + "%";
                            }
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                },
            },
            stroke: {
                dashArray: 4
            },
            labels: ['Median Ratio'],
        },
    })

    const [chartState, setChartState] = useState({
        series: [
            {
                name: "Mobile",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 179, 187, 200],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'straight',
            },
            title: {
                text: 'Product Trends by Month',
                align: 'left',
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 0.5,
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', "Dec"],
            },
        },
    });

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

            <div className="my-8 bg-white rounded-md p-2 shadow-lg">
                <div id="chart" >
                    <ReactApexChart
                        options={chartState.options}
                        series={chartState.series}
                        type="line"
                        height={350}
                    />
                </div>
                <div id="html-dist"></div>
            </div>

            <div className="w-full flex justify-between">
                <div className="w-4/12">
                    <div className="w-full">
                        <div id="chart">
                            <ReactApexChart options={radialChart.options} series={radialChart.series} type="radialBar" height={350} />
                        </div>
                        <div id="html-dist"></div>
                    </div>
                </div>
                <div className="w-4/12">
                    <div className="w-full flex justify-center mb-16">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4995.643196910726!2d85.33495612118787!3d27.703290814618004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194487783651%3A0xcbfa6f39863d05f6!2sThe%20Physique%20Workshop!5e0!3m2!1sen!2snp!4v1725649420544!5m2!1sen!2snp" className="w-full h-96" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className="w-4/12"></div>
        </div>
    );
}

export default AdminDashboard;

