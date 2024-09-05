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
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { useQuery, useQueryClient } from '@tanstack/react-query';
import useProducts from '@/hooks/products/useProducts';
import Loading from '@/components/Loading/Loading';
import { useState } from "react";

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
        const products = await getAllProducts();
        return products;
    };

    const { data: products, isLoading, isError } = useQuery({
        queryFn: fetchProducts,
        queryKey: ['products']
    });

    console.log('Products: ', products);

    return (
        <div>
            <div className="w-full relative bg-fixed bg-cover bg-center bg-[url('/images/supplements.jpg')] text-white font-semibold flex justify-center">
                <div className="absolute inset-0 bg-green-500 opacity-60"></div>
                <div className="relative my-16 z-10">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex items-center gap-1">
                                        <BreadcrumbEllipsis className="h-4 w-4" />
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
                                <BreadcrumbLink href="/contactme">Contact Us</BreadcrumbLink>
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
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    {products?.map((product) => (
                        <div
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            key={product.id}
                            className='bg-gray-100 p-6'>
                            <div className='w-full cursor-pointer flex justify-center'>
                                <img src={product.image} alt={product.title} className='w-40 h-40 my-2' />
                            </div>
                            <div
                                className="w-full flex justify-center">
                                <div className={`flex h-8 my-2 transition-all duration-500 ease-in-out ${renderCartButtons ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                                    <MdOutlineFavorite className="cursor-pointer text-4xl mx-2 border shadow-sm bg-white hover:bg-green-600 hover:text-white transition-all duration-300 rounded-full p-1" />
                                    <FaShoppingCart className="cursor-pointer text-4xl mx-2 border shadow-sm bg-white hover:bg-green-600 hover:text-white transition-all duration-300 rounded-full p-1" />
                                    <MdOutlineFavorite className="cursor-pointer text-4xl mx-2 border shadow-sm bg-white hover:bg-green-600 hover:text-white transition-all duration-300 rounded-full p-1" />
                                </div>
                            </div>
                            <div className='w-full text-center'>
                                <p className='text-sm text-gray-500 font-semibold'>{product.category}</p>
                                <h1 className='my-1'>{product.title}</h1>
                                <p className='text-sm font-bold'>$ {product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Shop;
