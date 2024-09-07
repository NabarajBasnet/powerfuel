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

const SideCartAndWishList = () => {
    return (
        <div>
            <Badge badgeContent={4} color="success">
                <FaHeart className="text-xl mx-1" />
            </Badge>
            <Sheet>
                <SheetTrigger>
                    <Badge badgeContent={4} color="success" className='mx-2'>
                        <IoBagHandleSharp className="text-xl mx-1" />
                    </Badge>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Cart</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default SideCartAndWishList;
