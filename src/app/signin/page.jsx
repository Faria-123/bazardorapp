
"use client";

import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";

const page = () => {
    const handleGoogle = async () => {
        const data = await signIn.social({
            provider: "google",
        });
    };
    const handleGit = async () => {
        const data = await signIn.social({
            provider: "github"
        })
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const dataa = Object.fromEntries(formData.entries());

        console.log(dataa);
        const { data, error } = await signIn.email({
            ...dataa,
            callbackURL: "/", // An optional URL to redirect to after the user signs in. (optional)
        });
        if (data) {
            toast.success("Login successfully!");
        }
        if (error) {
            toast.error("Failed to login!")
        }
    };

    return (
        <main className="min-h-screen bg-[#f1f6f2] flex flex-col items-center justify-center px-4 py-8">

            {/* Header */}
            <div className="text-center mb-5">
                <h1 className="text-xl font-bold text-[#1d2921]">
                    সাইন ইন
                </h1>

                <p className="text-[10px] text-gray-500 mt-1">
                    ব্যক্তিগত দাম, বাজার তুলনা ও মোবাইল দেখতে অ্যাকাউন্টে ঢুকুন।
                </p>
            </div>

            {/* Login Card */}
            <div className="card w-full max-w-[340px] bg-[#fbfdfb] border border-[#e0e9e1] rounded-xl shadow-sm">
                <div className="card-body p-4">

                    <form onSubmit={handleSubmit} className="space-y-3">

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-[10px] font-semibold text-gray-700 mb-1"
                            >
                                ইমেইল
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                required
                                autoComplete="email"
                                className="input input-bordered input-sm w-full bg-transparent border-[#e0e9e1] text-xs focus:outline-none focus:border-[#078943]"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-[10px] font-semibold text-gray-700 mb-1"
                            >
                                পাসওয়ার্ড
                            </label>

                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="কমপক্ষে ৮ অক্ষর"
                                required
                                autoComplete="current-password"
                                className="input input-bordered input-sm w-full bg-transparent border-[#e0e9e1] text-xs focus:outline-none focus:border-[#078943]"
                            />
                        </div>

                        {/* Forgot Password */}
                        <div className="flex justify-end">
                            <Link
                                href="/forgot-password"
                                className="text-[9px] text-[#078943] hover:underline"
                            >
                                পাসওয়ার্ড ভুলে গেছেন?
                            </Link>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="btn btn-sm w-full min-h-0 h-9 bg-[#078943] hover:bg-[#067638] text-white border-none rounded-md text-[10px] font-semibold shadow-sm"
                        >
                            সাইন ইন
                        </button>

                    </form>

                    {/* Divider */}
                    <div className="divider text-[9px] text-gray-400 my-0">
                        অথবা
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-2">

                        <button
                            type="button"
                            className="btn btn-outline btn-sm h-8 min-h-0 px-2 border-[#e0e9e1] bg-transparent text-[9px] font-medium text-gray-700"
                            onClick={handleGoogle}
                        >
                            <span className="font-bold text-sm text-blue-500">
                                G
                            </span>
                            Google দিয়ে লগইন
                        </button>

                        <button
                            type="button"
                            className="btn btn-outline btn-sm h-8 min-h-0 px-2 border-[#e0e9e1] bg-transparent text-[9px] font-medium text-gray-700"
                            onClick={handleGit}
                        >
                            <span className="text-sm">●</span>
                            GitHub দিয়ে লগইন
                        </button>

                    </div>

                    {/* Signup Link */}
                    <p className="text-center text-[10px] text-gray-500 mt-1">
                        অ্যাকাউন্ট নেই?

                        <Link
                            href="/signup"
                            className="text-[#078943] font-semibold ml-1 hover:underline"
                        >
                            সাইন আপ করুন
                        </Link>
                    </p>

                </div>
            </div>

            {/* Footer */}
            <p className="text-center text-[9px] text-gray-400 mt-5">
                ← হোম পেজে ফিরে যান
            </p>

        </main>
    );
};

export default page;

