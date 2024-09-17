'use client'

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import useProducts from "@/hooks/products/useProducts";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Link from "next/link";
import Loading from "@/components/Loading/Loading";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart } from "@/states/RTK/mainSlicer";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/SideCart/SideCartUI.jsx";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator.jsx";
import { MdOutlineClear } from "react-icons/md";

export default function Home() {

  const router = useRouter();
  const cart = useSelector(state => state.rtkreducers.cart);
  const dispatch = useDispatch();
  const [latestProductIndex, setLatestProductIndex] = useState(-3);
  const { getAllProducts } = useProducts()

  const fetchLatestProducts = async () => {
    const products = await getAllProducts();
    return products;
  }

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchLatestProducts,
  });

  const handleAddToCart = (product) => {
    dispatch(AddToCart(product));
  };

  const handleLatestProductIndex = () => {
    setLatestProductIndex(latestProductIndex * 2);
  }

  const latestProducts = Array.isArray(products) ? products.slice(latestProductIndex) : [];

  return (
    <div className="w-full bg-gray-200 dark:bg-gray-900">
      <div className="w-full flex justify-center items-center">

        <div className="w-full md:w-10/12 flex justify-between items-start">
          <div className="w-full flex justify-between items-start">
            <div className="w-full flex items-start">

              <div className="w-full md:px-4 bg-gray-50 dark:bg-gray-800 md:p-8 my-10 flex justify-between items-center">
                <div className="w-6/12 px-4">
                  <p className="my-8 font-bold text-green-500">BUILD YOUR PHYSIQUE</p>
                  <h1 className="my-8 text-4xl md:text-5xl font-bold">Supplements 100% Authentic</h1>
                  <p className="myy-8 text-sm">Free Pickup and Delivery Available</p>
                  <Button className='rounded-none font-bold bg-green-600 my-8'>SHOP NOW</Button>
                </div>

                <div className="w-6/12 flex justify-center">
                  <img src={`/images/kettlebell-protein.png`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <h1 className="text-center text-3xl font-bold">Latest Products</h1>
        <div className="w-full flex justify-center">
          <div className="w-full md:w-10/12 my-4">
            {
              isLoading ? (
                <Loading />
              ) : (
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-0'>
                  {latestProducts?.map((latestProduct) => (
                    <div
                      key={latestProduct.id}
                      className='bg-white dark:bg-gray-800 shadow-md rounded-md cursor-pointer p-6'>
                      <Link href={`/shop/${latestProduct.id}`} className='w-full cursor-pointer flex justify-center'>
                        <img src={latestProduct.thumbnail} alt={latestProduct.title} className='w-40 h-40 my-2' />
                      </Link>
                      <div
                        className="w-full flex my-2 justify-center">
                        <div className={`w-full flex justify-between items-center space-x-2}`}>
                          <div className="mx-2">
                            <Sheet>
                              <SheetTrigger>
                                <div className="w-full">
                                  <Button className='w-full rounded-none mx-2' onClick={() => handleAddToCart(latestProduct)}>Add To Cart</Button>
                                </div>
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
                          </div>
                          <Button className='w-6/12 rounded-none mx-1 hover:bg-green-500 transition-all duration-500'>Buy Now</Button>
                        </div>
                      </div>
                      <Link href={`/shop/${latestProduct.id}`} className='w-full text-center'>
                        <p className='text-sm text-gray-500 dark:text-gray-300 font-semibold'>{latestProduct.category}</p>
                        <h1 className='my-1 font-bold text-xl'>{latestProduct.title}</h1>
                        <p className='text-sm font-bold'>$ {latestProduct.price}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

