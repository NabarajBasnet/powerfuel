'use client'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../../../components/SideCart/SideCartUI.jsx";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { MdLocalShipping } from "react-icons/md";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { FaRegStar } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import { ToggleProductReviewForm, AddToCart } from "@/states/RTK/mainSlicer";
import { IoEyeSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator.jsx";
import { MdOutlineClear } from "react-icons/md";
import Link from "next/link.js";

const SingleProduct = (props) => {

    const router = useRouter();
    const cart = useSelector(state => state.rtkreducers.cart);
    const [productDiscountedPrice, setProductDiscountedPrice] = useState('');
    const [currentProductThumbnail, setCurrentProductThumbnail] = useState('');
    const toggleProductReviewForm = useSelector(state => state.rtkreducers.toggleProductReviewForm);
    const dispatch = useDispatch();
    const productId = props.params.product;
    const { getSingleProduct } = useProducts();
    const [quantity, setQuantity] = useState(1);

    const handleSetProductDiscountedPrice = (percentage, productPrice) => {
        const discountPrice = productPrice * percentage / 100;
        const discountedPrice = productPrice - discountPrice;
        setProductDiscountedPrice(discountedPrice);
    };

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
            setCurrentProductThumbnail(product.thumbnail);
            handleSetProductDiscountedPrice(product.discountPercentage, product.price);
            return product
        } catch (error) {
            console.log('Error: ', error);
        }
    };

    const { data: product, isLoading } = useQuery({
        queryFn: fetchSingleProductDetails,
        queryKey: ['product']
    });

    const handleAddToCart = () => {
        dispatch(AddToCart(product))
    }

    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomPosition({ x, y });
    };

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
            <div className="w-full bg-gray-100 dark:bg-gray-900">
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
                                            <div
                                                className="w-full flex justify-center items-center p-5 bg-white dark:bg-gray-800 group relative overflow-hidden"
                                                onMouseMove={handleMouseMove}
                                            >
                                                <AlertDialog>
                                                    <AlertDialogTrigger>
                                                        <IoEyeSharp className="absolute top-2 right-2 text-2xl dark:text-gray-100 text-gray-700 cursor-pointer" />
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle></AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                <div>
                                                                    <img
                                                                        src={currentProductThumbnail}
                                                                        alt="product-thumbnail"
                                                                        className="object-cover cursor-zoom-in w-full h-auto max-w-xs md:max-w-md transition-transform duration-300 ease-in-out group-hover:scale-150"
                                                                        style={{
                                                                            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                                                                        }}
                                                                    />
                                                                </div>
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>
                                                                <IoEyeSharp className="text-2xl dark:text-gray-100 text-gray-700 cursor-pointer" />
                                                            </AlertDialogCancel>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>

                                                {/* Product Thumbnail */}
                                                <img
                                                    src={currentProductThumbnail}
                                                    alt="product-thumbnail"
                                                    className="object-cover cursor-zoom-in w-full h-auto max-w-xs md:max-w-md transition-transform duration-300 ease-in-out group-hover:scale-150"
                                                    style={{
                                                        transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                                                    }}
                                                />
                                            </div>

                                            {/* Product Thumbnails Carousel */}
                                            <div className="flex items-center my-4 overflow-x-auto">
                                                <div className="w-full flex justify-center">
                                                    {product?.images.map((image, index) => (
                                                        <div
                                                            key={index}
                                                            className="w-20 h-20 flex-shrink-0 bg-white dark:bg-gray-800 mx-2"
                                                        >
                                                            <img
                                                                onClick={() => setCurrentProductThumbnail(image)}
                                                                src={image}
                                                                alt={`product-image-${index}`}
                                                                className="w-full h-full cursor-pointer object-cover"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>


                                        <div className="w-full md:w-6/12 px-4">
                                            <h1 className="text-2xl font-bold">{product.title}</h1>
                                            <div className="my-2 flex items-center">
                                                <div className="flex">
                                                    {[...Array(6)].map((_, index) => (
                                                        <IoMdStar className="text-green-500 text-xl" />
                                                    ))}
                                                </div>
                                                <span className="ml-1">{product.rating}</span>
                                            </div>
                                            <h2 className="text-lg font-semibold dark:text-gray-200 text-gray-600 mb-2 line-through">$ {product.price}</h2>
                                            <h2 className="text-xl font-semibold  mb-2">$ {productDiscountedPrice}</h2>
                                            <h2 className="text-md text-gray-600 font-semibold dark:text-gray-200">Discount {product.discountPercentage}%</h2>
                                            <p><span className="text-md font-semibold text-gray-600 dark:text-gray-200">Brand:</span> <span className="text-sm dark:text-gray-200 text-gray-500">{product.brand}</span></p>
                                            <p><span className="text-md font-semibold text-gray-600 dark:text-gray-200">Category: </span> <span className="dark:text-gray-200 text-sm text-gray-500">{product.category}</span></p>

                                            <div className="flex items-center my-2 cursor-pointer">
                                                <IoMdHeart className="text-2xl" />
                                                <p className="mx-2 text-semibold">Add to wishlist</p>
                                            </div>

                                            <div className="mb-4">
                                                <h2 className="text-gray-700 dark:text-gray-200 my-1 font-semibold">Size</h2>
                                                <div className="flex space-x-2">
                                                    <Button className='w-16 hover:text-white dark:hover:text-black text-black dark:text-gray-200 rounded-none border border-black dark:border-gray-200 bg-transparent'>S</Button>
                                                    <Button className='w-16 hover:text-white dark:hover:text-black text-black dark:text-gray-200 rounded-none border border-black dark:border-gray-200 bg-transparent'>M</Button>
                                                    <Button className='w-16 hover:text-white dark:hover:text-black text-black dark:text-gray-200 rounded-none border border-black dark:border-gray-200 bg-transparent'>L</Button>
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
                                                <Sheet>
                                                    <SheetTrigger>
                                                        <Button className='rounded-full mx-2' onClick={handleAddToCart}>Add To Cart</Button>
                                                    </SheetTrigger>
                                                    <SheetContent className="flex flex-col h-full">
                                                        <SheetHeader className="flex-shrink-0">
                                                            <SheetTitle>Cart</SheetTitle>
                                                            <Separator className="my-2" />
                                                        </SheetHeader>

                                                        <SheetDescription className="flex-grow overflow-auto">
                                                            <div>
                                                                {
                                                                    cart.length <= 0 ? (
                                                                        <div className="text-center py-8">
                                                                            <h1 className="font-bold">Your cart is currently empty.</h1>
                                                                            <Link href={'/shop'}>
                                                                                <Button className='my-3 rounded-none'>
                                                                                    Shop here
                                                                                </Button>
                                                                            </Link>
                                                                        </div>
                                                                    ) : (
                                                                        <div>
                                                                            {
                                                                                cart.map((item) => (
                                                                                    <div key={item.id} className="w-full flex items-center my-3 border p-1 justify-between">
                                                                                        <div className="w-4/12 flex justify-start items-center">
                                                                                            <Link href={`/shop/${item.id}`} className="mr-4">
                                                                                                <img src={item.thumbnail} className="shadow-lg mx-3 h-20 w-20" />
                                                                                            </Link>
                                                                                        </div>
                                                                                        <div className="w-8/12 flex justify-between items-center">
                                                                                            <div className="block">
                                                                                                <h1 className="font-bold">{item.title}</h1>
                                                                                                <p className="text-sm">7 × $59.00</p>
                                                                                            </div>
                                                                                            <div className="border cursor-pointer rounded-full p-2 mx-4">
                                                                                                <MdOutlineClear />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                ))
                                                                            }
                                                                        </div>
                                                                    )
                                                                }
                                                            </div>
                                                        </SheetDescription>

                                                        {
                                                            cart.length <= 0 ? (
                                                                <></>
                                                            ) : (
                                                                <div className="flex-shrink-0 p-4 bg-white">
                                                                    <div className="w-full flex justify-between items-center border p-2 mb-4">
                                                                        <p className="font-semibold text-sm text-gray-600">Subtotal:</p>
                                                                        <p className="text-sm font-semibold text-gray-600">$413.00</p>
                                                                    </div>

                                                                    <div className="w-full flex flex-col space-y-2">
                                                                        <Button onClick={() => router.push('/cart')} className='rounded-none w-full'>VIEW CART</Button>
                                                                        <Button onClick={() => router.push('/checkout')} className='rounded-none w-full'>CHECKOUT</Button>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    </SheetContent>
                                                </Sheet>
                                                <Button className='w-full md:w-6/12 rounded-full'>BUY IT NOW</Button>
                                            </div>

                                            <div className="flex my-6 mx-2 items-center">
                                                <span className="font-semibold">Share:</span>
                                                <div className="flex mx-4">
                                                    {shareProuct.map((share, index) => (
                                                        <div className="flex items-center cursor-pointer" key={index}>
                                                            <div className="flex items-center mx-3">
                                                                <share.icon />
                                                                <p className="mx-1 font-semibold">{share.title}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="mx-4">
                                                <p className="text-sm font-semibold text-black dark:text-white">Warranty: <span className="text-sm text-gray-700 dark:text-gray-400 mx-2 font-semibold">{product.warrantyInformation}</span></p>
                                                <p className="text-sm my-1 font-semibold text-black dark:text-white">Return Policy: <span className="text-sm text-gray-700 dark:text-gray-400 mx-2 font-semibold">{product.returnPolicy}</span></p>
                                                <p className="flex items-center text-sm font-semibold text-black dark:text-white">{<MdLocalShipping className="text-2xl mr-1" />} Estimated Delivery Time:  <span className="text-sm mx-2 text-gray-700 dark:text-gray-400 font-semibold">{product.shippingInformation}</span></p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex justify-center mt-6">
                                <div className="w-10/12">
                                    <Tabs defaultValue="description" className="w-full focus:shadow-none bg-transparent shadow-none border-none">
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
                                                            <div className="flex justify-center items-center my-8" key={review.comment}>
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
                                                    <Pagination>
                                                        <PaginationContent>
                                                            <PaginationItem>
                                                                <PaginationPrevious href="#" />
                                                            </PaginationItem>
                                                            <PaginationItem>
                                                                <PaginationLink href="#">1</PaginationLink>
                                                            </PaginationItem>
                                                            <PaginationItem>
                                                                <PaginationLink href="#" isActive>
                                                                    2
                                                                </PaginationLink>
                                                            </PaginationItem>
                                                            <PaginationItem>
                                                                <PaginationLink href="#">3</PaginationLink>
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
