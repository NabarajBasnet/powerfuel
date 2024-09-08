'use client'

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
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link.js";
import { Button } from "../ui/button.jsx";
import { Separator } from "../ui/separator.jsx";

const SideCartAndWishList = () => {

    const cart = useSelector(state => state.rtkreducers.cartItems);
    console.log("Cart Items: ", cart);
    console.log("Cart Length: ", cart.length);

    return (
        <div>
            <Badge badgeContent={4} color="success">
                <FaHeart className="text-xl md:mx-1 mx-0" />
            </Badge>
            <Sheet>
                <SheetTrigger>
                    <Badge badgeContent={10} color="success" className='md:mx-2 mx-0'>
                        <IoBagHandleSharp className="text-xl md:mx-1 mx-0" />
                    </Badge>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Cart</SheetTitle>
                        <SheetTitle>
                            <Separator />
                        </SheetTitle>
                        <SheetDescription>
                            <div>
                                {
                                    cart.length <= 0 ? (
                                        <div>
                                            <h1 className="font-bold">Your cart is currently empty.</h1>
                                            <Link href={'/shop'}>
                                                <Button className='my-3 rounded-none'>
                                                    Shop here
                                                </Button>
                                            </Link>
                                        </div>
                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default SideCartAndWishList;
