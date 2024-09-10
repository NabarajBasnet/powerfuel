'use client'

import { FaRegStar } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import { IoMdStar } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import useProducts from "@/hooks/products/useProducts";
import Loading from "@/components/Loading/Loading";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoStar } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import ProductReviewForm from "@/components/productReviewForm/productReviewForm";
import { ToggleProductReviewForm } from "@/states/RTK/mainSlicer";

const SingleProduct = (props) => {

    const toggleProductReviewForm = useSelector(state => state.rtkreducers.toggleProductReviewForm);
    const dispatch = useDispatch();
    const productId = props.params.product;
    const { getSingleProduct } = useProducts();
    const [quantity, setQuantity] = useState(1);

    const handleToggleProductReviewForm = () => {
        dispatch(ToggleProductReviewForm());
    };


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

    const shareProuct = [
        {
            icon: FaFacebook,
            title: 'Facebook',
        },
        {
            icon: FaXTwitter,
            title: 'Twitter',
        },
        {
            icon: AiFillInstagram,
            title: 'Instagram',
        },
        {
            icon: FaPinterest,
            title: 'Pinterest',
        }
    ];

    return (
        <div className="w-full overflow-x-hidden">
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
                                    <div className="w-full flex flex-col md:flex-row justify-around items-start">
                                        <div className="w-full md:w-6/12">
                                            <div className="w-full flex justify-center items-center p-5 bg-gray-200">
                                                <img
                                                    src={product.thumbnail}
                                                    alt="product-thumbnail"
                                                    className="object-cover w-full h-auto max-w-xs md:max-w-md"
                                                />
                                            </div>
                                            <div className="flex items-center my-4 overflow-x-auto">
                                                <HiOutlineArrowSmLeft className="text-4xl cursor-pointer" />
                                                <div className="w-full flex justify-center">
                                                    {product?.images.map((image, index) => (
                                                        <div key={index} className="w-20 h-20 flex-shrink-0 bg-gray-100 mx-2">
                                                            <img
                                                                src={image}
                                                                alt={`product-image-${index}`}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                                <HiOutlineArrowSmRight className="text-4xl cursor-pointer" />
                                            </div>
                                        </div>

                                        <div className="w-full md:w-6/12 px-4">
                                            <h1 className="text-2xl font-bold">{product.title}</h1>
                                            <div className="my-2 flex items-center">
                                                <IoMdStar className="text-yellow-400" />
                                                <span className="ml-1">{product.rating}</span>
                                            </div>
                                            <h2 className="text-xl font-semibold mb-2">$ {product.price}</h2>
                                            <h2 className="text-md text-gray-600 font-semibold">Discount {product.discountPercentage}%</h2>
                                            <p><span className="text-md font-semibold text-gray-600">Brand:</span> <span className="text-sm text-gray-500">{product.brand}</span></p>
                                            <p><span className="text-md font-semibold text-gray-600">Category: </span> <span className="text-sm text-gray-500">{product.category}</span></p>

                                            <div className="flex items-center my-2 cursor-pointer">
                                                <IoMdHeart className="text-2xl" />
                                                <p className="mx-2 text-semibold">Add to wishlist</p>
                                            </div>

                                            <div className="mb-4">
                                                <h2 className="text-gray-700 my-1 font-semibold">Size</h2>
                                                <div className="flex space-x-2">
                                                    <Button className='w-16 hover:text-white text-black rounded-none border border-black bg-transparent'>S</Button>
                                                    <Button className='w-16 hover:text-white text-black rounded-none border border-black bg-transparent'>M</Button>
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

                                            <p className="text-sm font-semibold my-6">{product.stock > 10 ? `${product.stock} in stock` : 'Out of stock'}</p>

                                            <div className="w-full flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 items-center">
                                                <Button className='w-full md:w-6/12 rounded-full'>ADD TO CART</Button>
                                                <Button className='w-full md:w-6/12 rounded-full'>BUY IT NOW</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex justify-center my-6">
                                <div className="w-10/12">
                                    <Tabs defaultValue="description" className="w-full focus:shadow-none bg-none shadow-none border-none">
                                        <TabsList className="bg-transparent focus:shadow-none border-none grid grid-cols-2 md:grid-cols-4 space-y-1">
                                            <TabsTrigger value="description" className='focus:shadow-none border-none'>DESCRIPTION</TabsTrigger>
                                            <TabsTrigger value="reviews" className='focus:shadow-none border-none'>REVIEWS</TabsTrigger>
                                        </TabsList>
                                        <div className="w-full h-0.5 my-4 bg-gray-500"></div>
                                        <div className="my-14 px-4">
                                            <TabsContent value="description">
                                                <div>
                                                    <p className="text-sm font-semibold">
                                                        {product?.description}
                                                    </p>
                                                </div>
                                            </TabsContent>
                                            <TabsContent value="reviews">
                                                <div>
                                                    <h1 className='text-center text-2xl font-semibold'>Customer Reviews</h1>
                                                    <div className='w-full flex justify-center'>
                                                        <div className="w-full my-10 flex justify-center items-center">
                                                            <div className="mx-6">
                                                                <div className="flex">
                                                                    {[...Array(6)].map((_, index) => (
                                                                        <FaRegStar className="text-2xl my-2" />
                                                                    ))}
                                                                </div>
                                                                <p className="text-sm font-semibold">Write a review about this product</p>
                                                            </div>
                                                            <div className="mx-6">|</div>
                                                            <div className="mx-6">
                                                                <Button className='rounded-none' onClick={handleToggleProductReviewForm}>{toggleProductReviewForm ? "Cancel Review" : "Write a review"}</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        {
                                                            toggleProductReviewForm ? (
                                                                <div>
                                                                    <ProductReviewForm />
                                                                </div>
                                                            ) : (
                                                                <>
                                                                </>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                                <div>
                                                    {
                                                        product?.reviews.map((review) => (
                                                            <div className="flex items-center my-8">
                                                                <div>
                                                                    <h1 className="text-gray-500 font-semibold">{review.reviewerName}</h1>
                                                                    <div className="flex">
                                                                        {[...Array(6)].map((_, index) => (
                                                                            <IoStar />
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                                <div className="mx-4">
                                                                    <p className="text-sm">{review.comment}</p>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </TabsContent>
                                        </div>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;
