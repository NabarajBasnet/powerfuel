'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {

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
                        <Label htmlFor="email" className="text-sm font-medium">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            className="mt-1"
                            placeholder="name@example.com"
                            defaultValue='nabarajbasnet@gmail.com'
                        />
                    </div>

                    <Link href={'/api/auth/login'} className="w-full text-white font-bold py-2 rounded-md mb-4">
                        <Button className='w-full bg-blue-600'>
                            Sign In with Email
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
    );
}
