import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { FaCircle } from "react-icons/fa";

const Sidebar = () => {
    const departments = ['Protein', 'Creatine', 'Creatine Monohydrate', 'Creatine Dehydtate', 'Testosterone', 'Growth Hormone', 'Vitamin', 'Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D', 'Multi Vitamin', 'Fish Oil', 'Peanut Butters', 'Carbs'];

    const [priceRange, setPriceRange] = useState([0, 100]);

    const handleSliderChange = (value) => {
        setPriceRange(value);
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
            <div className='w-full flex justify-start items-center'>
                <div className='w-full border shadow-md p-4'>
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
                        <Slider
                            defaultValue={priceRange}
                            max={1000}
                            step={10}
                            value={priceRange}
                            onValueChange={handleSliderChange}
                            className='hover:cursor-pointer'
                        />

                        <div className="flex justify-between mt-2">
                            <h1 className='font-semibold' >Min: ${priceRange[0]}</h1>
                            <p>-</p>
                            <h1 className='font-semibold'>Max: ${priceRange[1]}</h1>
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
    );
}

export default Sidebar;
