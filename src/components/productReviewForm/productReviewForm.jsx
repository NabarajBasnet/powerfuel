'use client';

import { FaStar } from "react-icons/fa6";
import React, { useState } from 'react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useDispatch, useSelector } from "react-redux";
import { ToggleProductReviewForm } from "@/states/RTK/mainSlicer";

const ProductReviewForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);
    const dispatch = useDispatch();
    const toggleProductReviewForm = useSelector(state => state.rtkreducers.toggleProductReviewForm);

    const handleToggleProductReviewForm = () => {
        dispatch(ToggleProductReviewForm());
    };

    return (
        <div className='w-full'>
            <div className="w-full flex justify-center">
                <form className="w-11/12 md:w-7/12 p-4 shadow-md my-4 border dark:border-gray-500 bg-white dark:bg-gray-800">
                    {/* Rating Section */}
                    <p className="text-center my-1 font-bold">Rating</p>
                    <div className="flex justify-center my-6">
                        {[...Array(6)].map((_, index) => {
                            const ratingValue = index + 1;
                            return (
                                <label key={index}>
                                    <input
                                        type="radio"
                                        name="rating"
                                        value={ratingValue}
                                        className="hidden"
                                        onClick={() => setRating(ratingValue)}
                                    />
                                    <FaStar
                                        className="star cursor-pointer"
                                        color={ratingValue <= (hover || rating) ? '#22c55e' : '#a1a1aa'}
                                        size={25}
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(null)}
                                    />
                                </label>
                            );
                        })}
                    </div>

                    {/* Review Title */}
                    <p className="text-center my-1 font-bold">Review Title</p>
                    <Input
                        type='text'
                        className='rounded-none dark:border-gray-400 h-14'
                        placeholder='Give your review a title'
                    />

                    {/* Review Body */}
                    <p className="text-center my-1 font-bold">Review</p>
                    <Textarea
                        type='text'
                        className='rounded-none h-28 dark:border-gray-400'
                        placeholder='Write your comments here'
                    ></Textarea>

                    {/* Picture Upload */}
                    <p className="text-center my-1 font-bold">Picture</p>
                    <Input
                        type='file'
                        className='rounded-none h-14 dark:border-gray-400'
                    />

                    {/* Name (Public) */}
                    <p className="text-center my-1 font-bold">Name (Displayed publicly)</p>
                    <Input
                        type='text'
                        className='rounded-none h-14 dark:border-gray-400'
                        placeholder='Enter your name (public)'
                    />

                    {/* Email (Private) */}
                    <p className="text-center my-1 font-bold">Email (Private)</p>
                    <Input
                        type='email'
                        className='rounded-none h-14 dark:border-gray-400'
                        placeholder='Enter your email (private)'
                    />

                    {/* Terms */}
                    <p className="my-6 text-sm font-semibold">How we use your data: We’ll only contact you about the review you left, and only if necessary. By submitting your review, you agree to Judge.me’s terms, privacy, and content policies.</p>

                    {/* Submit and Cancel/Write Button */}
                    <div className="w-full flex justify-around items-center space-x-4">
                        <Button className='w-6/12 rounded-none my-2'>Submit Review</Button>
                        <Button
                            className='w-6/12 my-2 rounded-none'
                            onClick={handleToggleProductReviewForm}
                        >
                            {toggleProductReviewForm ? "Cancel Review" : "Write a review"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProductReviewForm;
