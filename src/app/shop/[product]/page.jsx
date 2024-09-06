'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { IoMdStar } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import useProducts from "@/hooks/products/useProducts";
import Loading from "@/components/Loading/Loading";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SingleProduct = (props) => {

    const productId = props.params.product;
    const { getSingleProduct } = useProducts();
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };


    const fetchSingleProductDetails = async () => {
        try {
            const product = await getSingleProduct(productId);
            return product
        } catch (error) {
            console.log('Error: ', error);
        }
    };

    const { data: product, isLoading } = useQuery({
        queryFn: fetchSingleProductDetails,
        queryKey: ['product']
    });

    console.log('Product: ', product);


    return (
        <div className="w-full">
            <div className="w-full">
                <div>
                    {isLoading ? (
                        <div className="my-6">
                            <Loading />
                        </div>
                    ) : (
                        <div className="w-full">
                            <div className="w-full py-10 flex justify-center items-center">
                                <div className="w-full max-w-7xl">
                                    <div className="w-full md:flex justify-around items-start">
                                        <div className="w-full md:w-6/12">
                                            <div className="w-full flex justify-center items-center p-5 bg-gray-200">
                                                <img
                                                    src={product.thumbnail}
                                                    alt="product-thumbnail"
                                                    className="object-cover max-w-full h-auto"
                                                />
                                            </div>
                                            <div className="flex items-center my-4">
                                                <HiOutlineArrowSmLeft className="text-4xl cursor-pointer" />
                                                {
                                                    product?.images.map((image, index) => (
                                                        <div key={index} className="w-full flex justify-center items-center bg-gray-100 mx-2">
                                                            <img
                                                                src={image}
                                                                alt={`product-image-${index}`}
                                                                className="w-20 h-20 object-cover"
                                                            />
                                                        </div>
                                                    ))
                                                }
                                                <HiOutlineArrowSmRight className="text-4xl cursor-pointer" />
                                            </div>
                                        </div>
                                        <div className="w-full mx-4 md:w-6/12">
                                            <h1 className="text-2xl font-bold">{product.title}</h1>
                                            <div className="my-2">
                                                <IoMdStar className="text-yellow-400" />
                                            </div>
                                            <h2 className="text-xl font-semibold mb-2">$ {product.price}</h2>
                                            <h2 className="text-md text-gray-600 font-semibold">Discount {product.discountPercentage}%</h2>
                                            <p><span className="text-md font-semibold text-gray-600">Brand:</span> <span className="text-sm text-gray-500">{product.brand}</span></p>
                                            <p><span className="text-md font-semibold text-gray-600">Category: </span> <span className="text-sm text-gray-500">{product.category}</span></p>

                                            <div className="my-4">
                                                <h2 className="text-gray-700 my-1 font-semibold">Size</h2>
                                                <div>
                                                    <Button className='w-16 hover:text-white text-black rounded-none border border-black bg-transparent'>S</Button>
                                                    <Button className='w-16 hover:text-white text-black rounded-none mx-2 border border-black bg-transparent'>M</Button>
                                                    <Button className='w-16 hover:text-white text-black rounded-none border border-black bg-transparent'>L</Button>
                                                </div>
                                            </div>

                                            <div className="flex items-center space-x-4">
                                                <button
                                                    onClick={handleDecrease}
                                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
                                                    disabled={quantity <= 1}
                                                >
                                                    -
                                                </button>

                                                <span className="text-lg font-semibold">{quantity}</span>

                                                <button
                                                    disabled={quantity >= product.stock}
                                                    onClick={handleIncrease}
                                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <div className="w-full my-6 flex justify-center md:space-x-4 items-center">
                                                <Button className='w-6/12 rounded-full'>ADD TO CART</Button>
                                                <Button className='my-2 w-6/12 rounded-full'>BUY IT NOW</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex justify-center my-6">
                                <Tabs defaultValue="description" className="w-full max-w-7xl">
                                    <TabsList>
                                        <TabsTrigger value="description">DESCRIPTION</TabsTrigger>
                                        <TabsTrigger value="reviews">REVIEWS</TabsTrigger>
                                        <TabsTrigger value="shipping">SHIPPING & RETURNS</TabsTrigger>
                                        <TabsTrigger value="warranty">WARRANTY INFORMATION</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="description">Product description goes here.</TabsContent>
                                    <TabsContent value="reviews">Customer reviews go here.</TabsContent>
                                    <TabsContent value="shipping">Shipping & return policy here.</TabsContent>
                                    <TabsContent value="warranty">Warranty details here.</TabsContent>
                                </Tabs>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;
