'use client'

import { useRouter } from "next/navigation.js";
import { MdOutlineClear } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./SideCartUI.jsx"
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import Link from "next/link.js";
import { Button } from "../ui/button.jsx";
import { Separator } from "../ui/separator.jsx";

const SideCartAndWishList = () => {

    const cartItems = window.localStorage.getItem('cart');
    const cart = cartItems ? JSON.parse(cartItems) : [];
    console.log('Cart items: ', cart);
    const router = useRouter();

    return (
        <div>
            <Badge badgeContent={4} color="success">
                <FaHeart className="text-xl md:mx-1 mx-0" />
            </Badge>
            <Sheet>
                <SheetTrigger>
                    <Badge badgeContent={cart.length} color="success" className='mx-3'>
                        <IoBagHandleSharp className="text-xl" />
                    </Badge>
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
    )
}

export default SideCartAndWishList;
