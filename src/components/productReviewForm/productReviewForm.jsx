'use client'

import { FaRegStar } from "react-icons/fa6";
import React from 'react'
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useDispatch, useSelector } from "react-redux";
import { ToggleProductReviewForm } from "@/states/RTK/mainSlicer";

const ProductReviewForm = () => {
    const dispatch = useDispatch();
    const toggleProductReviewForm = useSelector(state => state.rtkreducers.toggleProductReviewForm);

    const handleToggleProductReviewForm = () => {
        dispatch(ToggleProductReviewForm());
    };

    console.log('Props: ', toggleProductReviewForm);
    return (
        <div className='w-full'>
            <div>
                <h1 className="text-center mt-3 text-sm font-semibold">Write a review about this product</h1>
                <p className="text-center text-semibold text-sm mt-2">Rating</p>
                <div className="flex justify-center my-6">
                    {[...Array(6)].map((_, index) => (
                        <FaRegStar className="text-2xl my-2" />
                    ))}
                </div>
                <div className="w-full flex justify-center">
                    <form className="w-11/12 md:w-7/12 p-4 bg-white dark:bg-gray-800">
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

                        <p className="my-6 text-sm font-semibold">How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me’s terms, privacy and content policies</p>
                        <div className="w-full flex justify-around items-center space-x-4">
                            <Button className='w-6/12 rounded-none my-2'>Submit Review</Button>
                            <Button className='w-6/12 my-2 rounded-none' onClick={handleToggleProductReviewForm}>{toggleProductReviewForm ? "Cancel Review" : "Write a review"}</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProductReviewForm;
