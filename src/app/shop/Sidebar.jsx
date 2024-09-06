import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";

const Sidebar = () => {
    const departments = ['Protein', 'Creatine', 'Creatine Monohydrate', 'Creatine Dehydtate', 'Testosterone', 'Growth Hormone', 'Vitamin', 'Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D', 'Multi Vitamin', 'Fish Oil', 'Peanut Butters', 'Carbs'];

    // State to manage price range (min and max price)
    const [priceRange, setPriceRange] = useState([0, 100]);

    // Handle slider change
    const handleSliderChange = (value) => {
        setPriceRange(value); // value is an array [minPrice, maxPrice]
    };

    return (
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
            </div>
        </div>
    );
}

export default Sidebar;
