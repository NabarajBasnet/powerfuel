'use client'

import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
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
                        <div className="w-full py-10 flex justify-center items-center">
                            <div className="w-11/12">
                                <div className="w-full md:flex justify-around items-start">
                                    <div className="w-full md:w-6/12">
                                        <div className="w-full flex justify-center items-center p-10 bg-gray-200">
                                            <img src={product.thumbnail} />
                                        </div>
                                        <div className="flex items-center my-4">
                                            <HiOutlineArrowSmLeft className="text-4xl" />
                                            {
                                                product?.images.map((image) => (
                                                    <div className="w-full flex justify-center items-center bg-gray-100 mx-2">
                                                        <img
                                                            src={image}
                                                            className="w-20 h-20"
                                                        />
                                                    </div>
                                                ))
                                            }
                                            <HiOutlineArrowSmRight className="text-4xl" />
                                        </div>
                                    </div>
                                    <div className="w-full mx-4 md:w-6/12">
                                        <h1 className="text-2xl font-bold">{product.title}</h1>
                                        <div className="my-2">
                                            <IoMdStar />
                                        </div>
                                        <h2 className="text-xl font-semibold mb-2">$ {product.price}</h2>
                                        <h2 className="text-md text-gray-600 font-semibold">Discount {product.discountPercentage} %</h2>
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

                                        <div className="w-full my-6 md:flex justify-center md:space-x-4 items-center">
                                            <Button className='w-full md:w-6/12 rounded-full'>ADD TO CART</Button>
                                            <Button className='w-full my-2 md:w-6/12 rounded-full'>BUY IT NOW</Button>
                                        </div>

                                        <div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
