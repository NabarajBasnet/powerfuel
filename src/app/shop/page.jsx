'use client'

import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useQuery } from '@tanstack/react-query';
import useProducts from '@/hooks/products/useProducts';
import Loading from '@/components/Loading/Loading';
import { useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { AddToCart } from "@/states/RTK/mainSlicer";
import ShopHeader from "./Header";
import { useSelector } from "react-redux";

const Shop = () => {

    const serachedQueryState = useSelector(state => state.rtkreducers.searchProductsQuery);
    const filterByPrice = useSelector(state => state.rtkreducers.filterByPrice);
    const dispatch = useDispatch();
    const [renderCartButtons, setRenderCartButtons] = useState(false);
    const { getAllProducts } = useProducts();

    const handleMouseEnter = () => {
        setRenderCartButtons(true);
    };

    const handleMouseLeave = () => {
        setRenderCartButtons(false);
    };

    const fetchProducts = async () => {
        const Product = await getAllProducts();
        return Product.products;
    };

    const { data: products, isLoading, isError } = useQuery({
        queryFn: fetchProducts,
        queryKey: ['products']
    });

    const latestProducts = products?.slice(-3);

    const handleAddToCart = (product) => {
        dispatch(AddToCart(product))
    };

    return (
        <div className="w-full flex bg-gray-200 dark:bg-gray-900 justify-center">
            <div className="w-full md:w-10/12">
                <div className="w-full my-6">
                    <div className="w-full relative bg-fixed bg-cover bg-center bg-[url('/images/kettlebell-protein.png')] text-black font-semibold flex justify-center">
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                        <div className="relative my-10 z-10">
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger className="flex items-center gap-1">
                                                <BreadcrumbEllipsis className="h-4text-black w-4" />
                                                <span className="sr-only">Toggle menu</span>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="start">
                                                <DropdownMenuItem>
                                                    <BreadcrumbLink href="/blogs">Blogs</BreadcrumbLink>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <BreadcrumbLink href="/aboutus">About Us</BreadcrumbLink>
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>GitHub</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>

                    {isLoading ? (
                        <div className='my-4'>
                            <Loading />
                        </div>
                    ) : (
                        <div className="w-full flex justify-center">
                            <div className="w-full md:flex justify-start px-4 md:px-0">
                                <div className="w-full md:w-3/12 md:m-3 my-3">
                                    <Sidebar />
                                </div>
                                <div className="w-full md:w-9/12 my-3">
                                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-3'>
                                        {latestProducts?.map((latestProduct) => (
                                            <div
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                                key={latestProduct.id}
                                                className='bg-white dark:bg-gray-800 shadow-md rounded-md cursor-pointer p-6'>
                                                <Link href={`/shop/${latestProduct.id}`} className='w-full cursor-pointer flex justify-center'>
                                                    <img src={latestProduct.thumbnail} alt={latestProduct.title} className='w-40 h-40 my-2' />
                                                </Link>
                                                <div
                                                    className="w-full flex my-2 justify-center">
                                                    <div className={`w-full flex justify-between items-center space-x-2}`}>
                                                        <Button className='w-6/12 rounded-none mx-1' onClick={() => handleAddToCart(latestProduct)}>Add To Cart</Button>
                                                        <Button className='w-6/12 rounded-none mx-1 hover:bg-green-500 transition-all duration-500'>Buy Now</Button>
                                                    </div>
                                                </div>
                                                <Link href={`/shop/${latestProduct.id}`} className='w-full text-center'>
                                                    <p className='text-sm text-gray-500 dark:text-gray-300 font-semibold'>{latestProduct.category}</p>
                                                    <h1 className='my-1'>{latestProduct.title}</h1>
                                                    <p className='text-sm font-bold'>$ {latestProduct.price}</p>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                    <ShopHeader />
                                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                                        {
                                            products?.filter((product) => {
                                                const matchTitle = product.title.toLowerCase().includes(serachedQueryState.toLowerCase());
                                                const matchPrice = product.price >= filterByPrice[0] && product.price <= filterByPrice[1];
                                                return matchTitle && matchPrice
                                            })
                                                .map((product) => (
                                                    <div
                                                        onMouseEnter={handleMouseEnter}
                                                        onMouseLeave={handleMouseLeave}
                                                        key={product.id}
                                                        className='bg-white dark:bg-gray-800 shadow-md rounded-md cursor-pointer p-6'>
                                                        <Link href={`/shop/${product.id}`} className='w-full cursor-pointer flex justify-center'>
                                                            <img src={product.thumbnail} alt={product.title} className='w-40 h-40 my-2' />
                                                        </Link>
                                                        <div
                                                            className="w-full flex my-2 justify-center">
                                                            <div className={`w-full flex justify-between items-center space-x-2}`}>
                                                                <Button className='w-6/12 rounded-none mx-1' onClick={() => handleAddToCart(product)}>Add To Cart</Button>
                                                                <Button className='w-6/12 rounded-none mx-1 hover:bg-green-500 transition-all duration-500'>Buy Now</Button>
                                                            </div>
                                                        </div>
                                                        <Link href={`/shop/${product.id}`} className='w-full text-center'>
                                                            <p className='text-sm text-gray-500 dark:text-gray-300 font-semibold'>{product.category}</p>
                                                            <h1 className='my-1'>{product.title}</h1>
                                                            <p className='text-sm font-bold'>$ {product.price}</p>
                                                        </Link>
                                                    </div>
                                                ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="my-4">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">2</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;
