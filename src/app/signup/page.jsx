"use client";

import { signUp } from "@/lib/auth-client";
import Link from "next/link";

const SignupPage = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const dataa = Object.fromEntries(formData);

        console.log(data);
        const { data, error } = await signUp.email({
            ...dataa
        });
        if (data) {

        }

    };

    return (
        <main className="min-h-screen bg-[#f1f6f2] flex items-center justify-center px-4 py-8">

            <div className="w-full max-w-sm">

                {/* Header */}
                <div className="text-center mb-5">
                    <h1 className="text-xl font-bold">
                        অ্যাকাউন্ট তৈরি করুন
                    </h1>

                    <p className="text-[10px] text-base-content/50 mt-1">
                        পণ্য এবং বাজারের দাম জানতে আপনার অ্যাকাউন্ট তৈরি করুন
                    </p>
                </div>


                {/* Form Card */}
                <div className="card bg-base-100 border border-base-200 shadow-sm rounded-xl">

                    <div className="card-body p-4">

                        <form onSubmit={handleSubmit} className="space-y-3">

                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="label py-0 mb-1"
                                >
                                    <span className="label-text text-[10px]">
                                        নাম
                                    </span>
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="আপনার পুরো নাম"
                                    required
                                    className="input input-bordered input-sm w-full text-xs"
                                />
                            </div>


                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="label py-0 mb-1"
                                >
                                    <span className="label-text text-[10px]">
                                        ইমেইল
                                    </span>
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    required
                                    className="input input-bordered input-sm w-full text-xs"
                                />
                            </div>


                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="label py-0 mb-1"
                                >
                                    <span className="label-text text-[10px]">
                                        পাসওয়ার্ড
                                    </span>
                                </label>

                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="আপনার পাসওয়ার্ড"
                                    required
                                    className="input input-bordered input-sm w-full text-xs"
                                />
                            </div>


                            {/* Confirm Password */}
                            <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="label py-0 mb-1"
                                >
                                    <span className="label-text text-[10px]">
                                        পাসওয়ার্ড নিশ্চিত করুন
                                    </span>
                                </label>

                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="আবার লিখুন"
                                    required
                                    className="input input-bordered input-sm w-full text-xs"
                                />
                            </div>


                            {/* Submit */}
                            <button
                                type="submit"
                                className="btn btn-sm w-full bg-[#008f45] hover:bg-[#007a3b] text-white border-none text-[10px]"
                            >
                                অ্যাকাউন্ট তৈরি করুন
                            </button>

                        </form>


                        {/* Divider */}
                        <div className="divider text-[9px] text-base-content/40 my-1">
                            অথবা
                        </div>


                        {/* Social */}
                        <div className="grid grid-cols-2 gap-2">

                            <button
                                type="button"
                                className="btn btn-outline btn-sm text-[9px] font-normal"
                            >
                                <span className="font-bold">
                                    G
                                </span>

                                Google দিয়ে সাইন আপ
                            </button>


                            <button
                                type="button"
                                className="btn btn-outline btn-sm text-[9px] font-normal"
                            >
                                <span className="font-bold">
                                    ●
                                </span>

                                GitHub দিয়ে সাইন আপ
                            </button>

                        </div>


                        {/* Login */}
                        <p className="text-center text-[9px] text-base-content/50 mt-2">

                            অ্যাকাউন্ট আছে?

                            <Link
                                href="/login"
                                className="text-[#008f45] font-medium hover:underline ml-1"
                            >
                                লগইন করুন
                            </Link>

                        </p>

                    </div>
                </div>


                {/* Footer */}
                <p className="text-center text-[8px] text-base-content/40 mt-4">
                    © ২০২৫ কৃষি বাজার দর
                </p>

            </div>

        </main>
    );
};

export default SignupPage;