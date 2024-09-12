'use client'

import { Input } from '@/components/ui/input';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const SignUp = () => {

    return (
        <div className='w-full flex justify-center items-center min-h-screen'>

            <div className='w-10/12 md:w-6/12 border rounded-xl py-6 shadow-xl'>
                <div className='w-full flex justify-center'>
                    <Link href={'/'} className='w-full font-semibold hover:text-green-600 text-green-600 text-center text-sm my-2 underline underline-offset-4'>Home</Link>
                </div>
                <div className='w-full text-center'>
                </div>
                <div className='flex justify-center'>
                    <form className='w-10/12 md:w-9/12 flex flex-col justify-center'>

                        <div className='w-full my-2'>
                            <div class="relative z-0">
                                <Input
                                    type="text"
                                    id="floating_standard"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" />
                                <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Full Name</label>
                            </div>
                        </div>

                        <div className='w-full my-2'>
                            <div class="relative z-0">
                                <Input
                                    type="text"
                                    id="floating_standard"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" />
                                <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email Address</label>
                            </div>
                        </div>

                        <div className='w-full my-2'>
                            <div class="relative z-0">
                                <Input
                                    type="text"
                                    id="floating_standard"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" />
                                <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone Number</label>
                            </div>
                        </div>

                        <div className='w-full my-2'>
                            <div class="relative z-0">
                                <Input
                                    type="password"
                                    id="floating_standard"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" />
                                <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Confirm Password</label>
                            </div>
                        </div>

                        <div className='w-full my-2'>
                            <div class="relative z-0">
                                <Input
                                    type="password"
                                    id="floating_standard"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" />
                                <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Confirm Password</label>
                            </div>
                        </div>

                        <div className='w-full flex justify-between my-2'>
                            <h1>Already a member?</h1>
                            <Link href='/account/login' className='hover:underline text-green-600 font-semibold'>
                                Log in
                            </Link>
                        </div>

                        <div className='w-full flex justify-center my-2'>
                            <Button
                                className='w-full py-8 bg-green-600 text-white'
                                type='submit'>{'Register'}
                            </Button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
