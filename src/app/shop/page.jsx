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
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { useQuery, useQueryClient } from '@tanstack/react-query';
import useProducts from '@/hooks/products/useProducts';
import Loading from '@/components/Loading/Loading';
import { useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";

const Shop = () => {

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

    return (
        <div className="w-full my-6">
            <div className="w-full relative bg-fixed bg-cover bg-center bg-[url('/images/supplements.jpg')] text-black font-semibold flex justify-center">
                <div className="absolute inset-0 opacity-100"></div>
                <div className="relative my-16 z-10">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className='text-black'>Home</BreadcrumbLink>
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
                                            <BreadcrumbLink href="/blogs" className='text-black'>Blogs</BreadcrumbLink>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <BreadcrumbLink href="/aboutus" className='text-black'>About Us</BreadcrumbLink>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className='text-black'>GitHub</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/shop" className='text-black'>Shop</BreadcrumbLink>
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
                <div className="w-full md:flex justify-start">
                    <div className="w-full md:w-3/12 m-2">
                        <Sidebar />
                    </div>
                    <div className="w-full md:w-9/12 m-2">
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                            {products?.map((product) => (
                                <div
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    key={product.id}
                                    className='bg-gray-50 shadow-md rounded-sm cursor-pointer p-6'>
                                    <Link href={`/shop/${product.id}`} className='w-full cursor-pointer flex justify-center'>
                                        <img src={product.thumbnail} alt={product.title} className='w-40 h-40 my-2' />
                                    </Link>
                                    <div
                                        className="w-full flex justify-center">
                                        <div className={`flex h-8 my-2 transition-all duration-500 ease-in-out ${renderCartButtons ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                                            <MdOutlineFavorite className="cursor-pointer text-4xl mx-2 border shadow-sm bg-white hover:bg-green-600 hover:text-white transition-all duration-300 rounded-full p-1" />
                                            <FaShoppingCart className="cursor-pointer text-4xl mx-2 border shadow-sm bg-white hover:bg-green-600 hover:text-white transition-all duration-300 rounded-full p-1" />
                                            <MdOutlineFavorite className="cursor-pointer text-4xl mx-2 border shadow-sm bg-white hover:bg-green-600 hover:text-white transition-all duration-300 rounded-full p-1" />
                                        </div>
                                    </div>
                                    <Link href={`/shop/${product.id}`} className='w-full text-center'>
                                        <p className='text-sm text-gray-500 font-semibold'>{product.category}</p>
                                        <h1 className='my-1'>{product.title}</h1>
                                        <p className='text-sm font-bold'>$ {product.price}</p>
                                    </Link>
                                </div>
                            ))}
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
    )
}

export default Shop;
