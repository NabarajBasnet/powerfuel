'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

const Login = () => {


    return (
        <div className='w-full flex justify-center items-center min-h-screen'>
            <div className='w-10/12 md:w-7/12 lg:w-4/12 border rounded-xl py-20 shadow-xl'>
                <div className='w-full flex justify-center'>
                    <Link href={'/'} className='w-full font-semibold hover:text-green-600 text-green-600 text-center text-sm my-2 underline underline-offset-4'>Home</Link>
                </div>
                <h1 className='w-full text-center text-4xl font-semibold my-6'>Log In</h1>
                <div className='flex justify-center'>
                    <form className='w-10/12 flex flex-col justify-around items-around'>
                        <div className='w-full my-2'>
                            <div class="relative z-0">
                                <Input
                                    type="email"
                                    id="floating_standard"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" />
                                <label htmlFor="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email Address</label>
                            </div>

                        </div>

                        <div className='w-full my-2'>
                            <div class="relative z-0">
                                <Input
                                    type="password"
                                    id="floating_standard"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" />
                                <label htmlFor="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
                            </div>
                        </div>

                        <div className='w-full flex justify-between mt-6 text-sm'>
                            <h1>Not Registered yet?</h1>
                            <Link href='/account/signup' className='hover:underline text-green-600 font-semibold'>
                                Register
                            </Link>
                        </div>

                        <div className='w-full flex justify-between my-2 text-sm'>
                            <h1>Forget Password?</h1>
                            <Link href='/account/forgetpassword' className='hover:underline text-green-600 font-semibold'>
                                Reset
                            </Link>
                        </div>

                        <div className='w-full flex justify-center mt-8'>
                            <Button
                                className='w-full rounded-none py-8 bg-green-600 text-white dark:hover:bg-green-700'
                                type='submit'>{'Log In'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;
