'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {

    const router = useRouter();

    return (
        <div className="flex min-h-screen">
            <div className="hidden lg:flex w-1/2 bg-gradient-to-r from-blue-600 to-purple-600 items-center justify-center">
                <div className="text-white text-4xl font-bold">
                    Welcome Back!
                </div>
            </div>

            <div className="flex w-full lg:w-1/2 flex-col justify-center items-center p-8">
                <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold text-center mb-6">Create an account</h1>
                    <p className="text-center text-gray-600 mb-6">
                        Enter your email below to create your account
                    </p>

                    <div className="mb-4">
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

                            </form>
                        </div>

                        <Link href={'/api/auth/login'} className="w-full text-white font-bold py-2 rounded-md mb-4">
                            <Button className='w-full bg-blue-600'>
                                Sign Up with Email
                            </Button>
                        </Link>

                        <div className="text-center text-gray-600 mb-4">Or continue with</div>

                        <Button className="w-full bg-gray-800 text-white flex items-center justify-center py-2 rounded-md">
                            <FaGithub className="mr-2" /> GitHub
                        </Button>

                        <p className="text-center text-xs text-gray-500 mt-4">
                            By clicking continue, you agree to our{' '}
                            <a href="#" className="underline">
                                Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="#" className="underline">
                                Privacy Policy
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
