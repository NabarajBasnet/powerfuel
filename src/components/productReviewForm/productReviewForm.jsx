import { FaRegStar } from "react-icons/fa6";
import React from 'react'
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ProductReviewForm = () => {
    return (
        <div className='w-full'>
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
                        <Button className='rounded-none'>Write a review</Button>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-center mt-3 text-sm font-semibold">Write a review about this product</h1>
                <p className="text-center text-semibold text-sm mt-2">Rating</p>
                <div className="flex justify-center my-6">
                    {[...Array(6)].map((_, index) => (
                        <FaRegStar className="text-2xl my-2" />
                    ))}
                </div>
                <div className="w-full flex justify-center">
                    <form className="w-6/12">
                        <p className="text-center my-1 font-bold">Review Title</p>
                        <Input
                            type='text'
                            className='rounded-none h-14'
                            placeholder='Give your review a title'
                        />

                        <p className="text-center my-1 font-bold">Review</p>
                        <Textarea
                            type='text'
                            className='rounded-none h-28'
                            placeholder='Write your comments here'
                        ></Textarea>


                        <p className="text-center my-1 font-bold">Picture</p>
                        <Input
                            type='file'
                            className='rounded-none h-14'
                        />

                        <p className="text-center my-1 font-bold">{`Name (Displayed publicly)`}</p>
                        <Input
                            type='text'
                            className='rounded-none h-14'
                            placeholder='Enter your name (public)'
                        />

                        <p className="text-center my-1 font-bold">{`Name (Displayed publicly)`}</p>
                        <Input
                            type='text'
                            className='rounded-none h-14'
                            placeholder='Enter your email (private)'
                        />

                        <p className="my-6">How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me’s terms, privacy and content policies</p>
                        <div className="w-full flex justify-around items-center space-x-4">
                            <Button className='w-6/12 rounded-none my-2'>Submit Review</Button>
                            <Button className='w-6/12 my-2 rounded-none'>Cancel</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductReviewForm;
