'use client'

import React from 'react';
import { FaCircle } from "react-icons/fa";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

const Sidebar = () => {

    const [value, setValue] = useState([15, 100]);
    const departments = ['Protein', 'Creatine', 'Preworkout', 'Testosterone', 'Growth Hormone', 'Multi Vitamin', 'Fish Oil', 'Peanut Butters'];
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const filterByColors = [
        {
            color: 'white',
            text: 'White'
        },
        {
            color: 'yellow-600',
            text: 'Yellow'
        },
        {
            color: 'red-600',
            text: 'Red'
        },
        {
            color: 'green-600',
            text: 'Green'
        },
        {
            color: 'blue-600',
            text: 'Blue'
        },
        {
            color: 'black',
            text: 'Black'
        },
    ];

    const popularSize = ['Large', 'Medium', 'Small', 'Tiny'];

    return (
        <div className='sticky top-0'>
            <div className='w-full flex justify-center items-center'>
                <div className='w-full flex justify-start items-center'>
                    <div className='w-full rounded-lg bg-white border shadow-md p-4'>
                        <div>
                            <h1 className='my-2 font-bold'>Departments</h1>
                            {departments.map((department, index) => (
                                <div key={index}>
                                    <h1 className="text-sm p-1 cursor-pointer">{department}</h1>
                                </div>
                            ))}
                        </div>

                        <div className='my-4 p-2'>
                            <h1 className='text-2xl font-bold mb-2'>Filter by Price</h1>
                            <Box>
                                <Slider
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    min={0}
                                    max={1000}
                                    className='text-green-500'
                                />
                            </Box>

                            <div className="flex justify-between mt-2">
                                <h1 className='font-semibold' >Min: ${value[0]}</h1>
                                <p>-</p>
                                <h1 className='font-semibold'>Max: ${value[1]}</h1>
                            </div>
                        </div>

                        <div>
                            <h1 className='text-2xl font-bold mb-2'>Colors</h1>
                            <div className='grid grid-cols-2'>
                                {
                                    filterByColors.map((color) => (
                                        <div className='flex items-center'>
                                            <div>
                                                <FaCircle className={`cursor-pointer ${color.color === 'white' ? 'text-white' : ''} ${color.color === 'yellow-600' ? 'text-yellow-600' : ''} ${color.color === 'red-600' ? 'text-red-600' : ''} ${color.color === 'green-600' ? 'text-green-600' : ''} ${color.color === 'blue-600' ? 'text-blue-600' : ''} ${color.color === 'black' ? 'text-black' : ''}`} />
                                            </div>
                                            <p className='mx-1'>{color.text}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className='my-4'>
                            <h1 className='text-2xl font-bold mb-2'>Popular Size</h1>
                            <div className='grid grid-cols-2 gap-2'>
                                {
                                    popularSize.map((size) => (
                                        <div className='flex justify-center cursor-pointer bg-gray-100 p-2'>
                                            <p className='text-sm font-semibold'>{size}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
