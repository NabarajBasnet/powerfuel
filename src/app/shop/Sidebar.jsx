'use client'

import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useDispatch } from 'react-redux';
import { FilterProductsByPrice } from '@/states/RTK/mainSlicer';

const Sidebar = () => {

    const dispatch = useDispatch();
    const [value, setValue] = useState([15, 100]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleFilterByPrice = () => {
        dispatch(FilterProductsByPrice(value));
    };

    useEffect(() => {
        handleFilterByPrice();
    }, [value]);

    const filterByColors = [
        {
            color: 'bg-white',
            text: 'White'
        },
        {
            color: 'bg-yellow-600',
            text: 'Yellow'
        },
        {
            color: 'bg-red-600',
            text: 'Red'
        },
        {
            color: 'bg-green-600',
            text: 'Green'
        },
        {
            color: 'bg-blue-600',
            text: 'Blue'
        },
        {
            color: 'bg-black',
            text: 'Black'
        },
    ];

    const popularSize = ['Large', 'Medium', 'Small', 'Tiny'];

    return (
        <div className='sticky top-0'>
            <div className='w-full flex justify-center items-center'>
                <div className='w-full flex justify-start items-center'>
                    <div className='w-full rounded-lg bg-white dark:bg-gray-800 border dark:border-none shadow-md p-4'>

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
                                <h1 className='text-sm font-semibold' >Min: ${value[0]}</h1>
                                <p className='text-sm'>-</p>
                                <h1 className='text-sm font-semibold'>Max: ${value[1]}</h1>
                            </div>
                        </div>

                        <div className='my-4 p-2'>
                            <h1 className='text-2xl font-bold mb-2'>Filter by Brand</h1>
                            <RadioGroup defaultValue="option-one">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-one" id="option-one" />
                                    <Label htmlFor="option-one">Muscle Blaze</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-two" id="option-two" />
                                    <Label htmlFor="option-two">Muscle Tech</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-three" id="option-three" />
                                    <Label htmlFor="option-three">Optimum Nutrition</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className='my-4 p-2'>
                            <h1 className='text-2xl font-bold mb-2'>Filter by Flavor</h1>
                            <RadioGroup defaultValue="chocklate">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="chocklate" id="chocklate" />
                                    <Label htmlFor="chocklate">Chocklate</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="mango" id="mango" />
                                    <Label htmlFor="mango">Mango</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="cookies&cream" id="cookies&cream" />
                                    <Label htmlFor="cookies&cream">Cookies & Cream</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div>
                            <h1 className='text-2xl font-bold mb-2'>Colors</h1>
                            <div className='grid grid-cols-2'>
                                {
                                    filterByColors.map((color, index) => (
                                        <div className='flex items-center my-1' key={index}>
                                            <RadioGroup>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="option-none" className={`${color.color} border-none`} id="option-none" />
                                                    <Label htmlFor="option-none">{color.text}</Label>
                                                </div>
                                            </RadioGroup>
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
                                        <div className='flex justify-center cursor-pointer bg-gray-100 dark:bg-gray-900 p-2'>
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
