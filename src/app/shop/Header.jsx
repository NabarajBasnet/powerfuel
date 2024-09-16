'use client'

import * as React from "react";
import { IoSearchOutline } from "react-icons/io5";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { SearchProducts } from "@/states/RTK/mainSlicer";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const ShopHeader = () => {

    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('')

    const dispatchSearchQuery = () => {
        dispatch(SearchProducts(searchQuery))
    };

    useEffect(() => {
        dispatchSearchQuery()
    }, [searchQuery]);

    return (
        <div className='w-full bg-white dark:bg-gray-800 p-5 mb-3 sticky top-0 shadow-md rounded-lg'>
            <div className="w-full md:flex justify-between items-center">
                <div className="flex items-center justify-between">
                    <Select>
                        <div className="flex items-center">
                            <h1 className="text-sm font-bold mr-4">Sort By</h1>
                            <SelectTrigger className="w-[160px] border-none shadow-none">
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                        </div>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <div className="flex justify-end">
                        <Select>
                            <div className="flex items-center">
                                <h1 className="text-sm font-bold mr-4">Sort By</h1>
                                <SelectTrigger className="w-[160px] border-none shadow-none">
                                    <SelectValue placeholder="Select a flavor" />
                                </SelectTrigger>
                            </div>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div>
                    <div className="flex items-center border dark:border-gray-200 px-4">
                        <Input
                            type='text'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='border-none shadow-none focus:border-none focus:outline-none'
                            placeholder='Search products'
                        />
                        <IoSearchOutline className="cursor-pointer" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShopHeader


